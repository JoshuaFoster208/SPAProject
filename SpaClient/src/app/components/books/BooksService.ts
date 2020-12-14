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

	/*retrieves all books from the table*/
	getBooks() {
		return this.service.sendGetRequest(this.books);
	}

	/*converts all values to json and then posts to the authors table*/
  postBook(title: string, authorId: number, pages: number, price: number) {
    let jsonData = JSON.stringify(
      {
        title: title,
        authorId: authorId,
        pages: pages,
        price: price
      }
    );
    return this.service.sendPostRequest(jsonData, this.books);
  }
}
