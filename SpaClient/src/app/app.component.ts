import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {OAuthService, AuthConfig} from 'angular-oauth2-oidc';

export const authConfig: AuthConfig ={
  issuer : 'https://dev-8515262.okta.com/oauth2/default',
  redirectUri : window.location.origin,
  clientId : '0oa2adalnaHyDP4yG5d6'
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SpaClient';
  selectedTab = "authors";
  baseUrl = 'https://localhost:44396/';
  public forecasts: WeatherForecast[];

  constructor(http: HttpClient, private oauthService: OAuthService) {
    this.oauthService.configure(authConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
    http.get<WeatherForecast[]>(this.baseUrl + 'weatherforecast').subscribe(result => {
      this.forecasts = result;
    }, error => console.error(error));
  }

  setSelectedTab(selected: string){
    this.selectedTab = selected;
  }
}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
