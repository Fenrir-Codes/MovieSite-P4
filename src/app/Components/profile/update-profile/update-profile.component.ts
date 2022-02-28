import { Component, OnInit } from '@angular/core';
import { Tokenservice } from 'src/app/Back-END/Services/Storage-Crypting/TokenService';
import { DataService } from 'src/app/Back-END/Services/DataService/data.service';
import { SharedService } from 'src/app/Back-END/Services/Shared-Service/shared.service';
import { MatDialog } from '@angular/material/dialog';
import {ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  Validators,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent implements OnInit {
  updateForm: FormGroup;
  message: any;
  user: any;
  success: boolean = false;
  error: boolean = false;
  errormessage: string = 'Something went wrong';

  constructor(private fb: FormBuilder,
    private service: SharedService,
    private DataService: DataService,
    private tokenService: Tokenservice,
    public dialogRef: MatDialog,
    private Router: Router
  ) { }

  ngOnInit(): void {
    this.getUserFullInfo();

    this.updateForm = this.fb.group({
      profileId: [this.user.profileId],
      Email: [this.user.email, Validators.required],
      Password: [this.user.password, Validators.required],
      Firstname: [this.user.firstname, Validators.required],
      Lastname: [this.user.lastname, Validators.required],
      Address: [this.user.address, Validators.required],
      Image: [this.user.image],
      selfIntro: [this.user.selfIntro],
      Phone: [this.user.phone, Validators.required],
      Role: [this.user.role, Validators.required],
    });

    //console.log(this.userId);
  }

  getUserFullInfo() {
    this.user = this.tokenService.getUserUpdateToken();// this one is getting the token from login token

  }

  updateUser(id: number, body: any) {
    this.service.updateUser(id, body).subscribe((res) => {

      if (res === null) {
        this.success = true;
        this.message = "Your profile successfully updated.";
        setTimeout(() => {
          this.tokenService.removeUserUpdateToken();
          this.dialogRef.closeAll();

        }, 2500);

      }
      else {
        this.error = true;
        this.errormessage += res;
      }

    });
  }

  cancel() {
    this.tokenService.removeUserUpdateToken();
  }

}
