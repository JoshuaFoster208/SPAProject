import {Component, OnChanges, OnInit} from '@angular/core';
import {Book} from './Book';
import {BooksByAuthorService} from './BooksByAuthorService';
import {SelectedAuthor} from './SelectedAuthor';
import {Subscription} from 'rxjs';

@Component({
  selector: 'booksByAuthorList',
  templateUrl: './BooksByAuthor.html',
  providers:  [ BooksByAuthorService , SelectedAuthor]
})
export class BooksByAuthorComponents implements OnInit,OnChanges {
  books: Subscription;

  constructor(private service: BooksByAuthorService, private service2: SelectedAuthor) {
  }

  ngOnInit() {
    this.books = this.service.getBooksByAuthor(this.service2.getSelectedAuthor()).subscribe(books => this.books = books);
  }

  ngOnChanges(){
    this.books = this.service.getBooksByAuthor(this.service2.getSelectedAuthor()).subscribe(books => this.books = books);
  }

}
