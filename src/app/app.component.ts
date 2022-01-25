import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { sanitizeIdentifier } from '@angular/compiler';
import { FormControl } from '@angular/forms';
import { SharedService } from 'src/app/Back-END/Services/Shared-Service/shared.service';
import { Authservice } from 'src/app/Back-END/Services/Storage-Crypting/Auth-Service';
import { DataService } from 'src/app/Back-END/Services/DataService/data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MovieSite'; // title of the page
  opened: boolean = false; //variable for opening and closing the sidenav (boolean)
  loginStatus: boolean = false;
  isAdmin: boolean = false;
  isUser: boolean = false;

  searchForm:any;
  genreForm:any;
  listOfGenres: string[] = ['Category','Action', 'Adventure', 'Comedy', 'XXX', 'Documentary', 'Sci-fi'];

  constructor(private DataService: DataService) {}
  
  ngOnInit(): void {
    this.DataService.currentStatus.subscribe(
      (status) => (this.loginStatus = status)
    );
    
  }

 
}


