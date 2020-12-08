import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, ObservableInput} from 'rxjs';
import {Book} from './Book';

@Injectable({
  providedIn: 'root'
})
export class HttpService {


  constructor(private httpClient: HttpClient) { }

  sendGetRequest(url: string): Observable<any> {
    return this.httpClient.get(url);
  }

  sendPostRequest(data: Object, url: string): Observable<Object> {
    return this.httpClient.post(url, data);
  }

}
