import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  getBooks() {
    return [
      {
        name: "Clean Code",
        author: 'Robert C. Martin',
        image: 'https://m.media-amazon.com/images/I/41ERN6kjeAL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        price: 50,
      },
      {
        name: "Learn Javascript quickly",
        author: 'Code Quickly',
        image: 'https://m.media-amazon.com/images/P/1951791479.01._SCLZZZZZZZ_SX500_.jpg',
        price: 40,
      },
      {
        name: "Clean Code",
        author: 'Robert C. Martin',
        image: 'https://m.media-amazon.com/images/I/41ERN6kjeAL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        price: 50,
      },
      {
        name: "Learn Javascript quickly",
        author: 'Code Quickly',
        image: 'https://m.media-amazon.com/images/P/1951791479.01._SCLZZZZZZZ_SX500_.jpg',
        price: 40,
      }
    ];

  }
}
