import { Authservice } from 'src/app/Back-END/Services/Storage-Crypting/Auth-Service';
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/Back-END/Services/Shared-Service/shared.service';
import { DataService } from 'src/app/Back-END/Services/DataService/data.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user: any;
  userId: any;
  updateForm: any;
  message: string = '';
  showMessage: boolean = false;
  checked: boolean = false;

  constructor(
    private fb: FormBuilder,
    private service: SharedService,
    private Router: Router,
    private DataService: DataService,
    private Authservice: Authservice,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.user = this.Authservice.deCryptKey(); //getting the profileId from token
    this.userId = this.user.profileId; // setting the id

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

    this.getUserFullInfo();

  }

  getUserFullInfo() {
    //console.log('Action tab user info: ', this.user);

    //receiving the full user detail with det by id call
    this.service.getUserById(this.userId).subscribe((data) => {
      this.user = data;
      console.log(this.user);

    });
  }

  //update profile
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

  //delete the profile
  deleteProfile(id: any) {
    this.showMessage = true;
    this.service.deleteUser(id).subscribe((res) => {
      this.message = 'Your profile removed successfully!';
      setTimeout(() => {
        this.DataService.changeLoginStatus(false);
        this.Authservice.removeToken();
        this.Router.navigate(['/Home']);
      }, 3000);
    });
    //console.log(id);

  }

  //checkbox for delete button
  checkOK(event: any) {
    this.checked = event;
    //console.log(this.checked);
  }

  //dialog for update user profile
  openDialog(id: any) {
    this.service.getUserById(id).subscribe((data) => {
      this.user = data;

      this.dialog.open(UpdateProfileComponent, {
        disableClose: true,
        panelClass: 'custom-dialog-container',
      });

      this.Authservice.setUserToken('userToken', this.user);
    });
  }

}
