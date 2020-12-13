import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {OAuthService, AuthConfig} from 'angular-oauth2-oidc';

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

  constructor(http: HttpClient, private oauthService: OAuthService) {
    this.oauthService.configure(authConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
    this.oauthService.oidc = true;
    this.oauthService.setStorage(sessionStorage);
  }

  login() {
    this.oauthService.initImplicitFlow();
  }

  logout() {
    this.oauthService.logOut();
    this.setSelectedTab('authors');
  }

  getUserName() {
    const claims = this.oauthService.getIdentityClaims();
    if(!claims){
      return null;
    }
    return claims['name'];
  }

  setSelectedTab(selected: string){
    this.selectedTab = selected;
  }
}


