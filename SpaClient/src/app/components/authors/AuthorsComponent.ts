import { Component, OnInit } from '@angular/core';
import {Author} from './Author';
import {AuthorsService} from './AuthorsService';
import {SelectedAuthor} from './../../SelectedAuthor';
import {Subscription} from 'rxjs';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'authorsList',
  templateUrl: './authors.html',
  providers:  [ AuthorsService , SelectedAuthor]
})
export class AuthorsComponent implements OnInit {
  authors: Subscription;
  authId = 0;

  constructor(private service: AuthorsService, private service2: SelectedAuthor) {
  }

  ngOnInit() {
    this.authors = this.service.getAuthors().subscribe(books => this.authors = books);
  }

  selectedAuthor: Author;
  onSelect(selAuthor: Author): void {
    if(this.selectedAuthor != selAuthor) {
      this.selectedAuthor = selAuthor;
      this.authId = selAuthor.authorId;
      this.service2.setSelectedAuthor(selAuthor.authorId);
    }
    else{
      this.selectedAuthor = null;
      this.authId = 0;
      this.service2.setSelectedAuthor(0);
    }
  }

}
