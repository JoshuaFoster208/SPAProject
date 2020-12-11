import {HttpService} from './../../http.service';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class BooksService {
	private books = 'http://52.53.203.248/Borders/api/Books';


	//books
	constructor(
		private service: HttpService)
	{}

	getBooks() {
		return this.service.sendGetRequest(this.books);
	}
}
