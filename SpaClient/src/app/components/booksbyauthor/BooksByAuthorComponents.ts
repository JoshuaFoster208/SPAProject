import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Book} from './../books/Book';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BooksByAuthorService} from './BooksByAuthorService';
import {SelectedAuthor} from './../../SelectedAuthor';
import {Subscription} from 'rxjs';

@Component({
  selector: 'booksByAuthorList',
  templateUrl: './BooksByAuthor.html',
  providers:  [ BooksByAuthorService , SelectedAuthor]
})

export class BooksByAuthorComponents implements OnInit,OnChanges {
  books: Subscription;
  @Input() responseId: number;

  constructor(private service: BooksByAuthorService, private service2: SelectedAuthor) {
  }

  ngOnInit() {
    this.books = this.service.getBooksByAuthor(this.service2.getSelectedAuthor()).subscribe(books => this.books = books);
  }

  ngOnChanges(){
    this.books = this.service.getBooksByAuthor(this.responseId).subscribe(books => this.books = books);
  }

}
