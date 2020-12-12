import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AuthService } from '@auth0/auth0-angular';

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

  constructor(http: HttpClient, public auth: AuthService) {
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
