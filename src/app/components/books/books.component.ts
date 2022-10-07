import { getLocaleExtraDayPeriods } from '@angular/common';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Book } from 'src/app/models/Book';
import { BooksService } from './books.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  constructor(private booksService: BooksService) { }

  books: Book[] = [];
  card: Book[] = [];

  isShowing: boolean = true;

  ngOnInit(): void {
    this.books = this.booksService.getBooks();
  }

  addToCar(book: Book) {
    console.log(book);
  }

}

