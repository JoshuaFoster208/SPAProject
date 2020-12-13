import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BooksByAuthorComponents} from './components/booksbyauthor/BooksByAuthorComponents';
import  {AuthenticatedComponent} from './authenticated/authenticated.component';
import  {HomeComponent} from './home/home.component';

/*Sets the routes of the SPA application*/
const routes: Routes = [
  { path: 'booksByAuthor', component: BooksByAuthorComponents },
  { path: 'auth', component: AuthenticatedComponent},
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/', pathMatch: 'full'},
];
/*,{useHash:true}*/
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
