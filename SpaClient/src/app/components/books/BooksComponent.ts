import { Component, OnInit } from '@angular/core';
import {Book} from './Book';
import {BooksService} from './BooksService';
import {Subscription} from 'rxjs';

@Component({
  selector: 'booksList',
  templateUrl: './books.html',
  providers:  [ BooksService ]
})
export class BooksComponent implements OnInit {
  book: Book = {
    authorId: 0,
    bookId: 0,
    author: "Test",
    title: "Best Book Ever"
  }

  books: Subscription;

  constructor(private service: BooksService) {
  }

	ngOnInit() {
    this.books = this.service.getBooks().subscribe(books => this.books = books);
	}

}
