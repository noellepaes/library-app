import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Person {
  cpf: string;
  name: string;
  fined: boolean;
  allowedBorrow: boolean;
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class PersonsModule {



 }
