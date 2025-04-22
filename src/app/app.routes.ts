// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { PersonsListComponent } from './features/persons/components/persons-list/persons-list.component';

export const routes: Routes = [
  { path: 'persons', component: PersonsListComponent },
  { path: '', redirectTo: 'persons', pathMatch: 'full' },
  { path: '**', redirectTo: 'persons' }
];

