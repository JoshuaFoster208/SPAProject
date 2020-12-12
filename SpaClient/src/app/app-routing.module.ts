import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BooksByAuthorComponents} from './components/booksbyauthor/BooksByAuthorComponents';
import  {AuthenticatedComponent} from './authenticated/authenticated.component';
import  {HomeComponent} from './home/home.component';

const routes: Routes = [
  { path: 'booksByAuthor', component: BooksByAuthorComponents },
  { path: 'auth', component: AuthenticatedComponent},
  { path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: '**', redirectTo:'home'},
];

@NgModule({
  imports:[RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
