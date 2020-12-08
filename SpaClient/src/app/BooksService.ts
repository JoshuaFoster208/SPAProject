import {HttpService} from './http.service';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class BooksService {
	private books = 'https://localhost:44396/api/Books';

	//books
	constructor(
		private service: HttpService)
	{}

	getBooks() {
		return this.service.sendGetRequest(this.books);
	}
}
