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
    {role: 0, value: 'User'},
    {role: 1, value: 'Admin'}
  ];

  ngOnInit(): void {
    this.createForm = this.fb.group({
      Email: new FormControl('', Validators.required),
      Password: new FormControl('', Validators.required),
      Firstname: new FormControl('', Validators.required),
      Lastname: new FormControl('', Validators.required),
      Address: new FormControl('', Validators.required),
      Phone: new FormControl('', Validators.required),
      Image: new FormControl(''),
      Role: new FormControl('', Validators.required)
    });
  }

  createUser(body: any){
   this.service.createNewUser(body).subscribe(res => {
    console.log(res); 
    /* if res != null should return a message user created */
    
   });

  }
}