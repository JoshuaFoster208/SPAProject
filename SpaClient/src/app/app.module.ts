import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BooksComponent} from './components/books/BooksComponent';
import {AuthorsComponent} from './components/authors/AuthorsComponent';
import {BooksByAuthorComponents} from './components/booksbyauthor/BooksByAuthorComponents'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { environment as env } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import {AuthenticatedComponent } from './authenticated/authenticated.component';
import {OAuthModule} from 'angular-oauth2-oidc';
import {AddAuthorsComponent} from './components/Admin/AddAuthorComponent';
import {AddBookComponent} from './components/Admin/AddBookComponent';
import {SearchComponent} from './components/Search/SearchComponent';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    AuthorsComponent,
    BooksByAuthorComponents,
    AuthenticatedComponent,
    HomeComponent,
    AddAuthorsComponent,
    AddBookComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OAuthModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,

  ],
  providers: [],//{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
