import { Authservice } from 'src/app/Back-END/Services/Storage-Crypting/Auth-Service';
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/Back-END/Services/Shared-Service/shared.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
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
