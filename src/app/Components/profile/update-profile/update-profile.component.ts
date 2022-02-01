import { Component, OnInit } from '@angular/core';
import { Authservice } from 'src/app/Back-END/Services/Storage-Crypting/Auth-Service';
import { DataService } from 'src/app/Back-END/Services/DataService/data.service';
import { SharedService } from 'src/app/Back-END/Services/Shared-Service/shared.service';
import { MatDialog } from '@angular/material/dialog';
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


  constructor(private fb: FormBuilder,
    private service: SharedService,
    private DataService: DataService,
    private Authservice: Authservice,
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
      Phone: [this.user.phone, Validators.required],
      Role: [this.user.role, Validators.required],
    });

    //console.log(this.userId);
  }

  getUserFullInfo() {
    this.user = this.Authservice.getUserToken();
  }

  updateUser(id: number, body: any) {
    this.service.updateUser(id, body).subscribe((res) => {
      this.message = this.user.firstname + "'s profile successfully updated.";
      setTimeout(() => {
        document.getElementById('message').classList.add('hidden');
        //this.DataService.setUpdateSuccess(true);
        this.Authservice.removeItem();
        this.dialogRef.closeAll();

      }, 3000);
      //console.log(this.message);
    });
  }

  cancel() {
    this.Authservice.removeItem();
  }

}
