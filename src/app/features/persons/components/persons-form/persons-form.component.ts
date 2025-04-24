import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PersonService } from '../../services/persons.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-persons-form',
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  providers: [PersonService],
  templateUrl: './persons-form.component.html',
  styleUrl: './persons-form.component.scss'
})
export class PersonsFormComponent implements OnInit {
  personForm: FormGroup;
  isEditing = false;
  isLoading = false;
  errorMessage = '';
  originalPerson: any;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private personService: PersonService
  ) {
    this.personForm = this.fb.group({
      cpf: [{ value: '', disabled: true }], // Campo desabilitado
      name: [''],
      fined: [false],
      allowedBorrow: [false]
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const cpf = params.get('cpf');
      if (cpf) {
        this.isEditing = true;
        this.loadPerson(cpf);
      }
    });
  }

  loadPerson(cpf: string): void {
    this.isLoading = true;
    this.personService.getByCpf(cpf).subscribe({
      next: (person) => {
        if (person) {
          this.originalPerson = person;
          this.personForm.patchValue(person);
        } else {
          this.errorMessage = 'Pessoa não encontrada.';
        }
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = 'Erro ao carregar pessoa';
        this.isLoading = false;
      }
    });
  }

  onSubmit(): void {
    if (this.personForm.invalid) return;

    const formData = {
      ...this.originalPerson, // Mantém todos os dados originais
      ...this.personForm.value // Sobrescreve com os campos editados
    };

    this.isLoading = true;
    this.personService.update(this.originalPerson.cpf, formData).subscribe({
      next: () => {
        this.router.navigate(['/persons']);
      },
      error: (err) => {
        this.errorMessage = 'Erro ao atualizar: ' +
          (err.error?.message || 'Erro desconhecido');
        this.isLoading = false;
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/persons']);
  }
}
