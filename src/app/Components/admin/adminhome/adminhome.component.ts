import { Component, OnInit } from '@angular/core';
import { Tokenservice } from 'src/app/Back-END/Services/Storage-Crypting/TokenService';
import { SharedService } from 'src/app/Back-END/Services/Shared-Service/shared.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.scss'],
})
export class AdminhomeComponent implements OnInit {
  //#region Local variables
  user: any;
  userId: any;
  profileList: any
  movieList: any;
  //#endregion

  constructor(
    private tokenService: Tokenservice,
    private service: SharedService
  ) { }

  ngOnInit(): void {
    this.initUserData();
    this.getAllUsers();
    this.getAllMovies();

  }

  //#region reading the profile data out from token
  initUserData() {
    this.user = this.tokenService.getUserToken();
  }
  //#endregion

  //#region get all users function
  getAllUsers() {
    this.service.getAllUsers().subscribe((res) => {
      this.profileList = res;

    });
  }
  //#endregion

  //#region get all Movies function
  getAllMovies() {
    this.service.getAllMoviesListed().subscribe(res => {
      this.movieList = res;

    });
  }
  //#endregion


}
