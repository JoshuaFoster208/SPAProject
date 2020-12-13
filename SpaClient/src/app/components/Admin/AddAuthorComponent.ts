import { Component, OnInit } from '@angular/core';
import {AuthorsService} from './../authors/AuthorsService';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'addAuthor',
  templateUrl: './AddAuthor.html',
  providers:  [ AuthorsService ]
})

/*Component for posting to the author table*/
export class AddAuthorsComponent implements OnInit {
  authorName = new FormControl('');
  constructor(private service: AuthorsService) {
  }

  ngOnInit() {

  }

  /*When clicked the value in the authorName form is passed into a post call and then the authorName is reset*/
  onClick() {
    this.service.postAuthor(this.authorName.value);
    this.authorName.setValue('');
  }


}
