import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from 'src/app/models/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book: Book = {} as Book;
  @Output() bookEmitter = new EventEmitter<Book>();

  addToCard() {
    this.bookEmitter.emit(this.book);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
