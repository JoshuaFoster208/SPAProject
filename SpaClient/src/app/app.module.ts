import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BooksComponent} from './components/books/BooksComponent';
import {AuthorsComponent} from './components/authors/AuthorsComponent';
import {BooksByAuthorComponents} from './components/booksbyauthor/BooksByAuthorComponents'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { environment as env } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import {AuthenticatedComponent } from './authenticated/authenticated.component';
import {OAuthModule} from 'angular-oauth2-oidc';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    AuthorsComponent,
    BooksByAuthorComponents,
    AuthenticatedComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OAuthModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
