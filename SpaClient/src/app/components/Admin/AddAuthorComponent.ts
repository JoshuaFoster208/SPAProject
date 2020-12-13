import { Component, OnInit } from '@angular/core';
import {AuthorsService} from './../authors/AuthorsService';
import {SelectedAuthor} from './../../SelectedAuthor';
import {Subscription} from 'rxjs';
import {FormControl} from '@angular/forms';
import {Author} from '../authors/Author';

@Component({
  selector: 'addAuthor',
  templateUrl: './AddAuthor.html',
  providers:  [ AuthorsService ]
})
export class AddAuthorsComponent implements OnInit {
  authorName = new FormControl('');
  constructor(private service: AuthorsService) {
  }

  ngOnInit() {

  }

  onClick() {
    this.service.postAuthor(this.authorName.value);
    this.authorName.setValue('');
  }


}
