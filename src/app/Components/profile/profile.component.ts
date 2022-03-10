import { Tokenservice } from 'src/app/Back-END/Services/Storage-Crypting/TokenService';
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/Back-END/Services/Shared-Service/shared.service';
import { DataService } from 'src/app/Back-END/Services/DataService/data.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { MatDialog } from '@angular/material/dialog';
import { dateInputsHaveChanged } from '@angular/material/datepicker/datepicker-input-base';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  //#region Local variables
  user: any;
  userId: any;
  updateForm: any;
  message: string = '';
  showMessage: boolean = false;
  checked: boolean = false;
  isActive: boolean = false;
  expDate: Date;
  today: Date;
  daysLeft: any;
  //#endregion

  constructor(
    private fb: FormBuilder,
    private service: SharedService,
    private Router: Router,
    private DataService: DataService,
    private tokenService: Tokenservice,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.readUserDataFromToken();
    this.initForm();
    this.getUserFullInfo();
  }

  //#region Reading the data from token placed in the session storage
  readUserDataFromToken() {
    this.user = this.tokenService.getUserToken(); //getting the profileId from token
    this.userId = this.user.profileId; // setting the id
  }
  //#endregion

  //#region initalitze new formGroup
  initForm() {
    //make a new form with user values
    this.updateForm = this.fb.group({
      profileId: [this.user.profileId],
      Email: [this.user.email, Validators.required],
      Password: [this.user.password, Validators.required],
      Firstname: [this.user.firstname, Validators.required],
      Lastname: [this.user.lastname, Validators.required],
      Address: [this.user.address, Validators.required],
      Phone: [this.user.phone, Validators.required],
    });
  }
  //#endregion

  //#region Getting the uder full info included orders
  getUserFullInfo() {
    //receiving the full user detail with det by id call
    this.service.getUserById(this.userId).subscribe((data) => {
      this.user = data;
      if (this.user.subscription[0] != null) {
        this.isActive = this.user.subscription[0].isActive;
        this.expDate = this.user.subscription[0].expDate;

        this.getExpirationDate();
      }
      //console.log(this.user);
    });
  }
  //#endregion

  //#region expDate
  getExpirationDate() {
    this.today = new Date();
    this.expDate = new Date(this.user.subscription[0].expDate);

    //calling day difference calculator and set daysLeft equal to difference.
    this.daysLeft = this.diffDays(new Date(this.expDate), new Date(this.today));

    if (this.daysLeft <= 0) {
      this.isActive = false;
    }

  }
  //#endregion

  //#region check days difference
  diffDays(exp, now){
    //Calculate days difference from expiry date and todays date
    return Math.ceil(Math.abs(exp - now) / (1000 * 60 * 60 * 24));
  }
  //#endregion

  //#region update profile function
  update(id: number, body: any) {
    this.showMessage = true;
    this.service.updateUser(id, body).subscribe((res) => {
      this.message = this.user.firstname + "'s profile successfully updated.";
      setTimeout((message) => {
        document.getElementById('message').classList.add('hidden');
      }, 2000);
      //console.log(this.message);
    });
  }
  //#endregion

  //#region delete the profile function
  deleteProfile(id: any) {
    this.showMessage = true;
    this.service.deleteUser(id).subscribe((res) => {
      this.message = 'Your profile removed successfully!';
      setTimeout(() => {
        this.DataService.changeLoginStatus(false);
        this.tokenService.removeToken();
        this.Router.navigate(['/Home']);
      }, 3000);
    });
    //console.log(id);
  }
  //#endregion

  //#region checkbox for delete button
  checkOK(event: any) {
    this.checked = event;
    console.log(this.checked);
  }
  //#endregion

  //#region Open dialog window for update user profile
  openDialog(id: any) {
    this.service.getUserById(id).subscribe((data) => {
      this.user = data;

      this.dialog.open(UpdateProfileComponent, {
        disableClose: true,
      });

      this.tokenService.enCryptKey('userUpdateToken', this.user);
    });
  }
  //#endregion
}
