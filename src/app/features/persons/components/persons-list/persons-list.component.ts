import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../services/persons.service';
import { CommonModule } from '@angular/common';
import { Person } from '../../persons.module';


@Component({
  selector: 'app-persons-list',
  imports: [CommonModule],
  templateUrl: './persons-list.component.html',
  styleUrl: './persons-list.component.scss'
})
export class PersonsListComponent  implements OnInit {

  persons: Person[] = [];

  constructor(private personService: PersonService) {}

  ngOnInit() {
    this.personService.getPersons().subscribe(data => this.persons = data);
  }
}
