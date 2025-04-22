// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { PersonsListComponent } from './features/persons/components/persons-list/persons-list.component';
import { HomeComponent } from './home/components/home.component';
import { LoansListComponent } from './features/loans/loans-list/loans-list.component';
import { BookListComponent } from './features/books/components/book-list/book-list.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'persons', component: PersonsListComponent },
  { path: 'loans', component: LoansListComponent },
  { path: 'books', component: BookListComponent },
  { path: '**', redirectTo: 'persons' }
];

