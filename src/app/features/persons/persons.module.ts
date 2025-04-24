import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CRUD_SERVICE } from '../../shared/models/crud-token';
import { PersonService } from './services/persons.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    { provide:
        CRUD_SERVICE,
        useClass: PersonService
    }
  ]
})
export class PersonsModule {



 }
