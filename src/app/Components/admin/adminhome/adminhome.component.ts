import { TableofprofilesComponent } from './../Tables/tableofprofiles/tableofprofiles.component';
import { Component, OnInit } from '@angular/core';
import { Tokenservice } from 'src/app/Back-END/Services/Storage-Crypting/TokenService';
import { DataService } from 'src/app/Back-END/Services/DataService/data.service';
import { SharedService } from 'src/app/Back-END/Services/Shared-Service/shared.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.scss'],
})
export class AdminhomeComponent implements OnInit {
  user: any;
  userId: any;
  profileList:any
  movieList: any;

  constructor(
    private DataService: DataService,
    private tokenService: Tokenservice,
    private service: SharedService
  ) {}

  ngOnInit(): void {
    this.user = this.tokenService.getUserToken(); //getting the profileId from token
    this.userId = this.user.profileId; // setting the id
    this.getAllUsers();
    this.getAllMovies();

  }

  getUserFullInfo() {
    //console.log('Action tab user info: ', this.user);

    //receiving the full user detail with det by id call
    this.service.getUserById(this.userId).subscribe((data) => {
      this.user = data;
      console.log(this.user);

    });
  }

  getAllUsers() {
    this.service.getAllUsers().subscribe((res) => {
      this.profileList = res;
     
    });
  }

  getAllMovies(){
    this.service.getAllMoviesListed().subscribe(res =>{
      this.movieList = res; 
      
    });
  }


}
