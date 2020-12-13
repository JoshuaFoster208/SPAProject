import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  selectedTab = "authors";

  constructor() { }

  ngOnInit(): void {
  }
  setSelectedTab(selected: string){
    this.selectedTab = selected;
  }
}
