import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from 'src/app/models/Book';
import { CartService } from '../../cart/cart.service';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input() book: Book = {} as Book;

  constructor(private cartService: CartService) { }

  ngOnInit(): void { }

  addToCart() {
    this.cartService.add(this.book);
  }
}
