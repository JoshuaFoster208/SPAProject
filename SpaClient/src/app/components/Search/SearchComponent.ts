import {Component, Input, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {FormControl} from '@angular/forms';
import {SearchService} from './SearchService';


@Component({
  selector: 'SearchBooks',
  templateUrl: './Search.html',
  providers:  [ SearchService ]
})

/*Component that takes an input and searches the database for the value*/
export class SearchComponent implements OnInit {
  books: Subscription;
  searchValue = new FormControl('');
  @Input() test: boolean;

  constructor(private service: SearchService) {
  }

  ngOnInit() {
  }

  /*on input change call the service to search for books*/
  ngOnChanges() {
    this.test = false;
    this.books = this.service.getBooks(this.searchValue).subscribe(books => this.books = books);
  }

  /*function that onclick will search the database*/
    runSearch(){
      this.books = this.service.getBooks(this.searchValue).subscribe(books => this.books = books);
      this.searchValue.setValue('');
    this.test=true;
  }

}
