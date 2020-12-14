import { Component, OnInit } from '@angular/core';
import {Author} from './Author';
import {AuthorsService} from './AuthorsService';
import {SelectedAuthor} from './../../SelectedAuthor';
import {Subscription} from 'rxjs';

@Component({
  selector: 'authorsList',
  templateUrl: './authors.html',
  providers:  [ AuthorsService , SelectedAuthor]
})

/*Displays the authorsList component, can have a child component in booksbyauthor on click the selected authorid will update in the authId
* in the booksbyauthor*/
export class AuthorsComponent implements OnInit {
  authors: Subscription;
  authId = 0;
  selectedAuthor: Author;

  constructor(private service: AuthorsService, private service2: SelectedAuthor) {
  }

  /*Retrieves list of books on initialization*/
  ngOnInit() {
    this.authors = this.service.getAuthors().subscribe(books => this.authors = books);
  }

  /*If an author is clicked pass the ID for a get call in booksbyauthor and if an author is clicked again remove the booksbyauthorcomponent*/
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
