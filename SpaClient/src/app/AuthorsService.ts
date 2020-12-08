import {HttpService} from './http.service';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthorsService {
  private authors = 'https://localhost:44396/api/Authors';

  //authors
  constructor(
    private service: HttpService)
  {}

  getAuthors() {
    return this.service.sendGetRequest(this.authors);
  }
}
