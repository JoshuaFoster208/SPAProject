import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, ObservableInput} from 'rxjs';
import {Book} from './components/books/Book';
import {Author} from './components/authors/Author';
import { HttpHeaders } from '@angular/common/http';
import {Subscription} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class HttpService {A




  constructor(private httpClient: HttpClient) { }

  sendGetRequest(url: string): Observable<any> {
    return this.httpClient.get(url);
  }

  sendPostRequest(data: string, url: string): Subscription {
    return this.httpClient.post(url,
      data,
      httpOptions).subscribe((result) => result);
  }

}
