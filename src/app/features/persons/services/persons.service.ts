
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../models/person.model';



@Injectable({
  providedIn: 'root'
})
export class PersonService {
  create(arg0: any) {
    throw new Error('Method not implemented.');
  }
  private readonly apiUrl = 'http://localhost:8080/persons';

  constructor(private readonly http: HttpClient) { }

  getPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(this.apiUrl);
  }

  getByCpf(cpf: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${cpf}`);
  }

  update(cpf: string, person: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${cpf}`, person);
  }

  addPerson(person: Person): Observable<Person> {
    return this.http.post<Person>(this.apiUrl, person);
  }


  delete(cpf: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${cpf}`);
  }
}



