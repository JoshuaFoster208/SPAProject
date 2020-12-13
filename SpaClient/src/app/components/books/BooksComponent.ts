import { Component, OnInit } from '@angular/core';
import {BooksService} from './BooksService';
import {Subscription} from 'rxjs';

@Component({
  selector: 'booksList',
  templateUrl: './books.html',
  providers:  [ BooksService ]
})

/*component that returns and displays a list of books from the books table*/
export class BooksComponent implements OnInit {
  books: Subscription;

  constructor(private service: BooksService) {
  }

  /*retrieves the list of books on initialization*/
	ngOnInit() {
    this.books = this.service.getBooks().subscribe(books => this.books = books);
	}

}
