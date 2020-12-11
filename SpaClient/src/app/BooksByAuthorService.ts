import {HttpService} from './http.service';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class BooksByAuthorService {
  private books = 'http://52.53.203.248/Borders/api/BooksByAuthor';

  //books
  constructor(
    private service: HttpService)
  {}

  getBooksByAuthor(ID: number) {
    return this.service.sendGetRequest(this.books+ "/" + ID);
  }
}
