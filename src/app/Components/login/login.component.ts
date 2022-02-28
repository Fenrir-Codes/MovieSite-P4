import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/Back-END/Services/Shared-Service/shared.service';
import { Tokenservice } from 'src/app/Back-END/Services/Storage-Crypting/TokenService';
import { DataService } from 'src/app/Back-END/Services/DataService/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //#region Local Variables
  error: boolean = false;
  loggingIn: boolean = false;
  success: boolean = false;
  showButton: boolean = true;
  message: string = 'Login success.';
  errormessage: string = "Email or password is not valid, please try again.";
  loginForm: any;
  registerForm: any;
  user: any;
  hide = true;
  result: any;
  showAnimation: boolean = false;
  regMessage: string = 'Register success.';
  regErrormessage: string = "Something went wrong, please try again.";
  //#endregion

  constructor(private fb: FormBuilder,
    private service: SharedService,
    private Router: Router,
    private tokenService: Tokenservice,
    private DataService: DataService) { }

  ngOnInit(): void {
    this.initLoginForm();
    this.initRegisterForm();

  }

  //#region switch to register panel function
  switchToRegisterPanel() {
    var login = document.getElementById("login");
    var reg = document.getElementById("register");
    var btn = document.getElementById("btn");

    login.style.left = "-400px";
    reg.style.left = "50px";
    btn.style.left = "110px";

  }
  //#endregion

  //#region switch to login panel function
  switchToLoginPanel() {
    var login = document.getElementById("login");
    var reg = document.getElementById("register");
    var btn = document.getElementById("btn");

    login.style.left = "50px";
    reg.style.left = "500px";
    btn.style.left = "0px";

  }
  //#endregion

  //#region initalize registering form
  initRegisterForm() {
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

  //#endregion

  //#region  initalize the login form
  initLoginForm() {
    this.loginForm = new FormGroup({
      Email: new FormControl(null, [Validators.required,
      Validators.required,
      Validators.email,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]),
      Password: new FormControl(null, [Validators.required, Validators.minLength(1)]),
    })
  }

  //#endregion

  //#region Login function
  login(Email: string, Password: string) {
    this.loggingIn = true;
    this.showButton = false;

    setTimeout(() => {
      this.service.login(Email, Password).subscribe((response) => {
        this.user = response;

        if (this.user != null) {
          this.success = true;
          this.showButton = false;
          setTimeout(() => {
            this.getUserDetailed(this.user.profileId);
            this.DataService.changeLoginStatus(true);
          }, 2000);

          if (this.user.role === 1) {

            setTimeout(() => {
              this.getUserDetailed(this.user.profileId);
              this.DataService.changeUserStatus(false);
              this.DataService.changeAdminStatus(true);
              this.Router.navigate(['/Admin']);
            }, 2000);

          }
          else {
            this.success = true
            this.showButton = false;
            setTimeout(() => {
              this.DataService.changeAdminStatus(false)
              this.DataService.changeUserStatus(true);
              this.Router.navigate(['/Home']);
            }, 2000);

          };

        }

        if (this.user === null) {
          //console.log("log on failed login:  ", this.user);
          this.DataService.changeLoginStatus(false);
          this.error = true;
          this.showButton = false;
          setTimeout(() => {
            this.errormessage;
            this.error = false;
            this.showButton = true;
          }, 2000);

        }

      });
      this.loggingIn = false;

    }, 1500);

  }
  //#endregion

  //#region getting the users all detailed info, included orders etc...
  getUserDetailed(id: number) {
    this.service.getUserById(id).subscribe(res => {
      //console.log(res);
      this.tokenService.enCryptKey('userToken', res)

    })

  }
  //#endregion

  //#region register function
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

          setTimeout(() => {
            this.registerForm.reset();  // reset the form
            this.switchToLoginPanel();
            this.showButton = true;
            this.success = false;
            this.error = false;

          }, 2000);

        }, 1500);

      }

    });

  }

  //#endregion


}




