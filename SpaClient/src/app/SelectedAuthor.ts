import {HttpService} from './http.service';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SelectedAuthor {
  private selectedAuthor;
  public setSelectedAuthor(authorID: number){
   this.selectedAuthor =  authorID;
  }

  public getSelectedAuthor() {
    return this.selectedAuthor;
  }

}
