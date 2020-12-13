import {Component, Input, OnChanges, OnInit} from '@angular/core';
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

  /*retrieves all books that have the matching authorId on init*/
  ngOnInit() {
    this.books = this.service.getBooksByAuthor(this.service2.getSelectedAuthor()).subscribe(books => this.books = books);
  }

  /*retrieves all books that have the matching authorId on value change in the component*/
  ngOnChanges(){
    this.books = this.service.getBooksByAuthor(this.responseId).subscribe(books => this.books = books);
  }

}
