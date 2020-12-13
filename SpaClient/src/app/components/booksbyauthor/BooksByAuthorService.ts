import {HttpService} from './../../http.service';
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

  /*http call to retrieve the list of books with the given authorId*/
  getBooksByAuthor(ID: number) {
    return this.service.sendGetRequest(this.books+ "/" + ID);
  }
}
