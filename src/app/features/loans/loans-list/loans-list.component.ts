import { Component, OnInit } from '@angular/core';
import { LoanService } from '../service/loan.service';
import { Loan } from '../model/loan.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-loans-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './loans-list.component.html',
  styleUrl: './loans-list.component.scss'
})
export class LoansListComponent implements OnInit {
  loans: Loan[] = [];
  isLoading = false;
  errorMessage = '';

  constructor(private readonly loanService: LoanService) {}

  ngOnInit(): void {
    this.fetchLoans();
  }

  fetchLoans(): void {
    this.isLoading = true;
    this.loanService.getLoans().subscribe({
      next: (data) => {
        this.loans = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = 'Erro ao carregar empréstimos';
        this.isLoading = false;
      }
    });
  }
}
