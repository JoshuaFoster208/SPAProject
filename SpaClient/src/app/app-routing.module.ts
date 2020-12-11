import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BooksByAuthorComponents} from './components/booksbyauthor/BooksByAuthorComponents';

const routes: Routes = [
  { path: 'booksByAuthor', component: BooksByAuthorComponents }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
