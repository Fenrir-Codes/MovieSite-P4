import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SharedService } from 'src/app/Back-END/Services/Shared-Service/shared.service';
import { Tokenservice } from 'src/app/Back-END/Services/Storage-Crypting/TokenService';


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
  updateForm: FormGroup;
  message: any;
  userId: any;
  user: any;
  success: boolean = false;
  error: boolean = false;
  errormessage: string = 'Something went wrong';

  constructor(private fb: FormBuilder,
    private service: SharedService,
    private tokenService: Tokenservice,
    public dialogRef: MatDialog
  ) { }

  ngOnInit(): void {
    /* on init get the userUpdateToken data from the session storage */
    this.getUserFullInfo();

    /* initalize the form and data is set = userUpdateToken data */
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


  }
  /* get the userUpdateToken data back from session storage */
  getUserFullInfo() {
    this.user = this.tokenService.getUserUpdateToken();
    //console.log(this.user);
  }

  /* update the user where id = user.profileId and data = body */
  updateUserData(id: number, body: any) {
    this.service.updateUser(id, body).subscribe(res => {
      //console.log(res);  
      if (res == null) {
        this.success = true;
        this.message = this.user.firstname + "'s profile successfully updated.";
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

  /* cancel function closes the dialog and removes the userUpdateToken from session storage */
  cancel() {
    this.tokenService.removeUserUpdateToken();
  }

}
