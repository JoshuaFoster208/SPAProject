import { Component, OnInit } from '@angular/core';
import {BooksService} from '../books/BooksService';
import {Subscription} from 'rxjs';
import {FormControl} from '@angular/forms';
import {AuthorsService} from '../authors/AuthorsService';


@Component({
  selector: 'addBooks',
  templateUrl: './AddBook.html',
  providers:  [ BooksService , AuthorsService]
})
export class AddBookComponent implements OnInit {
  bookName = new FormControl('');
  numPages = new FormControl('');
  price = new FormControl('');
  authors: Subscription;
  selectedAuthor: any;

  constructor(private service: BooksService, private  service2: AuthorsService) {
  }

  ngOnInit() {
    this.authors = this.service2.getAuthors().subscribe(books => this.authors = books);
  }

  onClick() {
    this.service.postBook(this.bookName.value, this.selectedAuthor.authorId, this.numPages.value, this.price.value);
    this.bookName.setValue('');
    this.numPages.setValue('');
    this.price.setValue('');
  }

}
