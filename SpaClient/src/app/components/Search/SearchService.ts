import {HttpService} from './../../http.service';
import {Injectable} from '@angular/core';
import {FormControl} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class SearchService {
  private books = 'http://52.53.203.248/Borders/api/SearchBooks';


  //books
  constructor(
    private service: HttpService)
  {}

  getBooks(title: FormControl) {
    return this.service.sendGetRequest(this.books + '/' + title);
  }
}
