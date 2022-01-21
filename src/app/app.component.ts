import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { sanitizeIdentifier } from '@angular/compiler';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MovieSite'; // title of the page
  opened: boolean = false; //variable for opening and closing the sidenav (boolean)

  search = new FormControl();
  genres = new FormControl();
  listOfGenres: string[] = ['Category','Action', 'Adventure', 'Comedy', 'XXX', 'Documentary', 'Sci-fi'];

  constructor() {}


 
}


