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
  expDate:Date;
  today:Date;
  daysLeft:any
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
      this.isActive = this.user.subscription[0].isActive;
      this.expDate = this.user.subscription[0].expDate;
      //console.log(this.user);
    });
    this.getExpirationDate();
  }
  //#endregion

  //#region expDate
  getExpirationDate(){
    let date = new Date();
    this.today = date;  
    this.expDate = new Date(this.user.subscription[0].expDate);
    this.daysLeft = this.expDate.getDate() - this.today.getDate();
    
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
