import { Authservice } from 'src/app/Back-end/Services/Storage-Crypting/Auth-Service';
import { LocalService } from './../../../Back-end/Services/Storage-Crypting/local.service';
import { DataService } from './../../../Back-end/Services/DataService/data.service';
import { Router } from '@angular/router';
import { SharedService } from './../../../Back-end/Services/API-Service/shared.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss'],
})
export class ActionsComponent implements OnInit {
  /*   profileId?: number,
  email?: string,
  password?: string,
  firstname?: string,
  lastname?: string,
  address?: string,
  phone?: number,
  role?: number */
  message: any;
  user: any;
  userId: any;
  updateForm: any;
  checked: boolean = false;

  constructor(
    private fb: FormBuilder,
    private service: SharedService,
    private Router: Router,
    private DataService: DataService,
    private LocalService: LocalService,
    private Authservice: Authservice
  ) {}

  ngOnInit(): void {
    this.user = this.Authservice.deCryptKey(); // getting the profileId
    this.userId = this.user.profileId; // setting the id

    //make a new form with user values (don't know why password is not shovn on the form)
    this.updateForm = this.fb.group({
      profileId: [this.user.profileId],
      Email: [this.user.email, Validators.required],
      Password: [this.user.password, Validators.required],
      Firstname: [this.user.firstname, Validators.required],
      Lastname: [this.user.lastname, Validators.required],
      Address: [this.user.address, Validators.required],
      Phone: [this.user.phone, Validators.required],
    });

    this.getUserFullInfo(); // getting the full info with id call
  }

  getUserFullInfo() {
    //console.log('Action tab user info: ', this.user);

    //receiving the full user detail with det by id call
    this.service.getUserById(this.userId).subscribe((data) => {
      this.user = data;
    });
  }

  //update profile
  update(id: number, body: any) {
    this.service.updateUser(id, body).subscribe((res) => {
      this.message = this.user.firstname + "'s profile successfully updated.";
      setTimeout((message) => {
        document.getElementById('message').classList.add('hidden');
      }, 2000);
      //console.log(this.message);
    });
  }

  //checkbox for delete button
  checkOK(event: any) {
    this.checked = event;
    //console.log(this.checked);
  }

  //delete the profile
  delete(id: any) {
    this.service.deleteUser(id).subscribe((res) => {
      this.message ='Your profile deleted successfully! You wil be not able to log in!';
      setTimeout(() => {
        this.DataService.changeLoginStatus(false);
        this.LocalService.clearToken();
        this.Router.navigate(['/Home']);
      }, 3000);
    });
    //console.log(id);
  }
}
