import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
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

  searchForm: any;
  genreForm: any;
  listOfGenres: string[] = ['Category', 'Action', 'Adventure', 'Comedy', 'XXX', 'Documentary', 'Sci-fi'];

  constructor(private DataService: DataService, private service: SharedService,
    private Router: Router,
    private Authservice: Authservice,) { }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.

    /* this observable checking the loginstatus between components */
    this.DataService.currentStatus.subscribe(
      (status) => (this.loginStatus = status)

    );

    //user status check
    this.DataService.currentUserStatus.subscribe(
      (status) => (this.isUser = status)
    );

    //admin status check
    this.DataService.currentadminStatus.subscribe(
      (status) => (this.isAdmin = status)
    );

    

  }


  /* log out function */
  logOut() {
    this.Authservice.removeToken(); //remove token from session storage totally
    this.loginStatus = false;  // login status set to false
    this.DataService.changeUserStatus(false);  // user status set to false
    this.DataService.changeAdminStatus(false); // admin status set to false
    this.Router.navigate(['/Home']);  // navigate back to Home

  }


}




