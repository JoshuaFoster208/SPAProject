import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-authenticated',
  templateUrl: './authenticated.component.html',
  styleUrls: ['./authenticated.component.css']
})
export class AuthenticatedComponent implements OnInit {
  selectedTab = "authors";

  constructor() { }

  ngOnInit(): void {
  }
  setSelectedTab(selected: string){
    this.selectedTab = selected;
  }

}
