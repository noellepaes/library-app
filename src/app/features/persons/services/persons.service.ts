
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../persons.module';


@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private apiUrl = 'http://localhost:8080/persons';

  constructor(private http: HttpClient) { }

  getPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(this.apiUrl);
  }

  addPerson(person: Person): Observable<Person> {
    return this.http.post<Person>(this.apiUrl, person);
  }

  updatePerson(person: Person): Observable<Person> {
    return this.http.put<Person>(
      `${this.apiUrl}/${person.cpf}`, person
    );
  }

  deletePerson(cpf: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${cpf}`);
  }
}



