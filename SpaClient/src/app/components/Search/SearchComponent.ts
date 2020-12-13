import {Component, Input, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {FormControl} from '@angular/forms';
import {SearchService} from './SearchService';


@Component({
  selector: 'SearchBooks',
  templateUrl: './Search.html',
  providers:  [ SearchService ]
})
export class SearchComponent implements OnInit {
  books: Subscription;
  searchValue = new FormControl('');
  @Input() test: boolean;

  constructor(private service: SearchService) {
  }

  ngOnInit() {
    this.books = this.service.getBooks(this.searchValue).subscribe(books => this.books = books);

  }

  ngOnChanges() {
    this.test = false;
  }

    runSearch(){

    //this.searchValue.setValue('');
    this.test=true;
  }

}
