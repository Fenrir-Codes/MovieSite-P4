import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  //boolean for check if the content loaded
  isLoaded: Boolean = false;
  // color variable binded to the spinner
  color: ThemePalette = 'warn';

  constructor() { }

  ngOnInit(): void {
  }

}
