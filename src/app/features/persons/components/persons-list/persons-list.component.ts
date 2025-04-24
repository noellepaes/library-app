import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../services/persons.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Person } from '../../models/person.model';



@Component({
  selector: 'app-persons-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './persons-list.component.html',
  styleUrl: './persons-list.component.scss'
})
export class PersonsListComponent  implements OnInit {

  persons: Person[] = [];


  constructor(private readonly personService: PersonService) {}

  ngOnInit() {
    this.personService.getPersons().subscribe(data => this.persons = data);
  }

  deletePerson(cpf: string): void {
    if (confirm('Tem certeza que deseja excluir esta pessoa?')) {
      this.personService.delete(cpf).subscribe({
        next: () => {
          // Atualiza a lista localmente após exclusão
          this.persons = this.persons.filter(p => p.cpf !== cpf);
        },
        error: (err) => {
          console.error('Erro ao excluir pessoa:', err);
          alert('Erro ao excluir pessoa');
        }
      });
    }
  }
}
