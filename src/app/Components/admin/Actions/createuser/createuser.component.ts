import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SharedService } from 'src/app/Back-END/Services/Shared-Service/shared.service';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.scss']
})
export class CreateuserComponent implements OnInit {

  constructor(private fb: FormBuilder, private service: SharedService,  public dialog: MatDialog) {}
  createForm: any;
  message: any;

  roles = [] = [
    {role: null, value: 'Select role'},
    {role: 0, value: 'User'},
    {role: 1, value: 'Admin'}
  ];

  ngOnInit(): void {
    this.createForm = this.fb.group({
      Email: new FormControl(null,
        [Validators.required,
        Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      Password: new FormControl(null,
        [Validators.required, Validators.minLength(4)]),
      Firstname: new FormControl(null,
        [Validators.required, Validators.minLength(1)]),
      Lastname: new FormControl(null,
        [Validators.required, Validators.minLength(1)]),
      Address: new FormControl(null, Validators.required),
      Phone: new FormControl(null,
        [Validators.required,
        Validators.minLength(8),
        Validators.maxLength(8),
        Validators.pattern('[- +()0-9]+')]),
      Image: new FormControl(null),
      Role: new FormControl(null, Validators.required)
    });
  }

  createUser(body: any){
   this.service.createNewUser(body).subscribe(res => {
    console.log(res); 
    /* if res != null should return a message user created */
    
   });

  }
}