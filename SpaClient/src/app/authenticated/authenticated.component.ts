import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-authenticated',
  templateUrl: './authenticated.component.html',
  styleUrls: ['./authenticated.component.css']
})

/*Component that will display while authenticated*/

export class AuthenticatedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
