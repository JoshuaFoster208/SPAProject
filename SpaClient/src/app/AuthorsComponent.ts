import { Component, OnInit } from '@angular/core';
import {Author} from './Author';
import {AuthorsService} from './AuthorsService';
import {SelectedAuthor} from './SelectedAuthor';
import {Subscription} from 'rxjs';
import {Book} from './Book';

@Component({
  selector: 'authorsList',
  templateUrl: './authors.html',
  providers:  [ AuthorsService , SelectedAuthor]
})
export class AuthorsComponent implements OnInit {
  authors: Subscription;

  constructor(private service: AuthorsService, private service2: SelectedAuthor) {
  }

  ngOnInit() {
    this.authors = this.service.getAuthors().subscribe(books => this.authors = books);
  }

  selectedAuthor: Author;
  onSelect(selAuthor: Author): void {
    this.selectedAuthor = selAuthor;
    this.service2.setSelectedAuthor(selAuthor.authorId);
  }

}