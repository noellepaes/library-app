import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book.model';
import { BookService } from '../../service/book.service';

@Component({
  selector: 'app-book-list',
  imports: [CommonModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})

export class BookListComponent implements OnInit {
  books: Book[] = [];

  constructor(private readonly bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe({
      next: (books) => (this.books = books),
      error: (err) => console.error('Erro ao carregar livros:', err)
    });
  }
}
