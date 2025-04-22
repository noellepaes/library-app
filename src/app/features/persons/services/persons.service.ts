
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Person } from '../persons.module';


@Injectable({
  providedIn: 'root'
})
export class PersonService {
  // private apiUrl = 'http://localhost:8080/persons';

  // constructor(private http: HttpClient) {}

  private personsMock: Person[] = [
    { cpf: '123', name: 'Alice', fined: false, allowedBorrow: true },
    { cpf: '456', name: 'Bob',   fined: true,  allowedBorrow: false },
    { cpf: '789', name: 'Carol', fined: false, allowedBorrow: true }
  ];

  // getPersons(): Observable<any[]> {
  //   return this.http.get<any[]>(this.apiUrl);
  // }
   // Retorna o mock como Observable
   getPersons(): Observable<Person[]> {
    return of(this.personsMock);
  }
}



