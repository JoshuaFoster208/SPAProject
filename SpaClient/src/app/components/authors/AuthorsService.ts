import {HttpService} from './../../http.service';
import {Injectable} from '@angular/core';
import {Author} from './Author';


@Injectable({
  providedIn: 'root'
})

export class AuthorsService {
  private authors = 'http://52.53.203.248/Borders/api/Authors';

  //authors
  constructor(
    private service: HttpService)
  {}

  /*retrieve all authors*/
  getAuthors() {
    return this.service.sendGetRequest(this.authors);
  }

  /*post json of author value*/
  postAuthor(data: string) {
    let jsonData = JSON.stringify(
      {
        name: data
      }
    );
    return this.service.sendPostRequest(jsonData, this.authors);
  }
}
