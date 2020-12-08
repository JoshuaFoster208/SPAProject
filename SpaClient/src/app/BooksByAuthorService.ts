import {HttpService} from './http.service';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class BooksByAuthorService {
  private books = 'https://localhost:44396/api/BooksByAuthor';

  //books
  constructor(
    private service: HttpService)
  {}

  getBooksByAuthor(ID: number) {
    return this.service.sendGetRequest(this.books+"/" + ID);
  }
}
