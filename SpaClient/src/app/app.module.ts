import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BooksComponent} from './BooksComponent';
import {AuthorsComponent} from './AuthorsComponent';
import {BooksByAuthorComponents} from './BooksByAuthorComponents'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    AuthorsComponent,
    BooksByAuthorComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
