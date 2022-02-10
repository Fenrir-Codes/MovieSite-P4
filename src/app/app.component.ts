import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/Back-END/Services/Shared-Service/shared.service';
import { Tokenservice } from 'src/app/Back-END/Services/Storage-Crypting/TokenService';
import { DataService } from 'src/app/Back-END/Services/DataService/data.service';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'MovieSite'; // title of the page
  opened: boolean = false; //variable for opening and closing the sidenav (boolean)
  loginStatus: boolean = false;
  isAdmin: boolean = false;
  isUser: boolean = false;
  searchtext: string = '';
  user: any;

  searchForm: any;
  genreForm: any;
  listOfGenres: string[] = ['Action', 'Adventure','Drama','Crime', 'Horror', 'Komedy', 'Sci-Fi', 'Family', 'Documentary','Cartoon','Anime','Animation'];

  constructor(
    private DataService: DataService,
    private service: SharedService,
    private Router: Router,
    private tokenService: Tokenservice
  ) { }
  private removeKeyToken: Subscription;

  ngOnInit(): void {
    this.user = this.tokenService.getUserToken(); // looking for token in the session storage

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

    /* this function is preventing the routing if there is no valid admin role */
    if (
      (this.tokenService.getUserToken() === null && this.user === undefined) || this.user === null) {
      this.loginStatus = false;
      this.isUser = false;
      this.isAdmin = false;
      this.Router.navigate(['/Home']);
    }
    /* if the decryptor doesnt find value in sessionstorage and the user is null */
    if (this.tokenService.getUserToken() != null && this.user != null) {
      this.loginStatus = true;

      /* if the person's role is not equal to 1, which means USER */
      if (this.user.role != 1) {
        this.loginStatus = true;
        this.isUser = true;
        this.isAdmin = false;
        this.Router.navigate(['Home']);
      }
      /* if the person's role is 1 ,which means ADMIN */
      if (this.user.role == 1) {
        this.loginStatus = true;
        this.isAdmin = true;
        this.isUser = false;
      }

    }

  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

    /* set intervall to 30 minutes = 1800000 milliseconds,  3600000 = 1 hour
    this function removes the user token from session storage after 60 minutes, so the user have to log in again
    if the user just closing the browser the session storage will remove the key automatically.*/
    this.removeKeyToken = interval(1800000).subscribe(() => {
      this.tokenService.removeUserToken(), (this.loginStatus = false);
      this.isAdmin = false;
      this.isUser = false;
      this.Router.navigate(['/Home']);
    });


  }

  /* log out function */
  logOut() {
    this.tokenService.removeToken(); //remove token from session storage totally
    this.loginStatus = false; // login status set to false
    this.DataService.changeUserStatus(false); // user status set to false
    this.DataService.changeAdminStatus(false); // admin status set to false
    this.Router.navigate(['/Home']); // navigate back to Home
  }

  //passing text string to home component
  searchMovie(event: any) {
    //console.log(event);
    this.DataService.setSearchString(event);

  }


}
