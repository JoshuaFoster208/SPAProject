import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {OAuthService, AuthConfig} from 'angular-oauth2-oidc';
import { Router } from '@angular/router';

/*main component for the spa application*/

export const authConfig: AuthConfig ={
  issuer : 'https://dev-8515262.okta.com/oauth2/default',
  redirectUri : window.location.origin + '/BordersFront/',
  responseType: 'id_token token',
  clientId : '0oa2adalnaHyDP4yG5d6'
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'SpaClient';
  selectedTab = "authors";
  baseUrl = 'https://localhost:44396/';


  constructor(http: HttpClient, private oauthService: OAuthService, ) {
    this.oauthService.configure(authConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
    this.oauthService.oidc = true;
    this.oauthService.setStorage(sessionStorage);
  }

/*function for logging in as a developer*/
  login() {
    this.oauthService.initImplicitFlow();
  }

/*function for logging out as a developer and resets the chosen tab*/
  logout() {
    this.oauthService.logOut();
    this.setSelectedTab('authors');
  }

  /*retrieves the name saved in okta of the user and returns null if not signed in*/
  getUserName() {
    const claims = this.oauthService.getIdentityClaims();
    if(!claims){
      return null;
    }
    return claims['name'];
  }

  /*Updates the selectedTab with the string value passed in*/
  setSelectedTab(selected: string){
    this.selectedTab = selected;
  }

  statusClass1 = 'active';
  statusClass2 = 'not-active';
  /*flips the activated tab*/
  setActiveClass1(){
    this.statusClass1 = 'active';
    this.statusClass2 = 'not-active';
  }

  /*flips the activated tab*/
  setActiveClass2(){
    this.statusClass1 = 'not-active';
    this.statusClass2 = 'active';
  }



}


