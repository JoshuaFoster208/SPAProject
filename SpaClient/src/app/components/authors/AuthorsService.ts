import {HttpService} from './../../http.service';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthorsService {
  private authors = 'http://52.53.203.248/Borders/api/Authors';

  //authors
  constructor(
    private service: HttpService)
  {}

  getAuthors() {
    return this.service.sendGetRequest(this.authors);
  }
}
