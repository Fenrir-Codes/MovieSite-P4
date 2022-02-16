import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { delay } from 'rxjs';
import { SharedService } from 'src/app/Back-END/Services/Shared-Service/shared.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: any;
  result: any;
  error: boolean = false;
  success: boolean = false;
  showButton: boolean = true;
  showAnimation: boolean = false;
  message: string = 'Register success.';
  errormessage: string = "Something went wrong, please try again.";

  constructor(private fb: FormBuilder,
    private service: SharedService,
    private Router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
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
      Image: new FormControl('profile.jpg'),
      Role: new FormControl(0),
    });


  }

  registerUser(body: any) {
    this.showButton = false; //hide button
    this.showAnimation = true;
    //run api call (Create method)
    this.service.createNewUser(body).subscribe(res => {
      this.result = res;

      //Error message
      if (this.result === null) {
        setTimeout(() => {
          this.showAnimation = false;
          this.showButton = false; //hide button
          this.error = true //show message true
          this.registerForm.reset(); //reset the form
        }, 2000);
      }
      else {
        /* if the response is not null */
        setTimeout(() => {
          this.showAnimation = false;
          this.showButton = false; //hide button
          this.success = true;  //show message true
          this.registerForm.reset();  // reset the form

          setTimeout(() => {
            this.Router.navigate(['/Login']);  // route to login page

          }, 2000);

        }, 1500);

      }

    });

  }

}
