import { LocalService } from 'src/app/Back-end/Services/Storage-Crypting/local.service';
import { Authservice } from '../../../Back-end/Services/Storage-Crypting/Auth-Service';
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/Back-end/Services/API-Service/shared.service';
import { DataService } from 'src/app/Back-end/Services/DataService/data.service';

@Component({
  selector: 'app-profileview',
  templateUrl: './profileview.component.html',
  styleUrls: ['./profileview.component.scss'],
})
export class ProfileviewComponent implements OnInit {
  userId: any;
  user: any;

  constructor(
    private Authservice: Authservice,
    private service: SharedService
  ) {}

  ngOnInit(): void {
    this.user = this.Authservice.deCryptKey(); //getting the profileId from token
    this.userId = this.user.profileId; // setting the id

    //receiving the full user detail with call by id
    this.service.getUserById(this.userId).subscribe((data) => {
      this.user = data;
      //console.log('view tab userinfo: ', this.user);
    });
  }
}
