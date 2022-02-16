import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/Back-END/Services/Shared-Service/shared.service';
import { Tokenservice } from 'src/app/Back-END/Services/Storage-Crypting/TokenService';
import { DataService } from 'src/app/Back-END/Services/DataService/data.service';
import { Router } from '@angular/router';
import { delay } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error: boolean = false;
  loggingIn: boolean = false;
  success: boolean = false;
  showButton: boolean = true;
  message: string = 'Login success.';
  errormessage: string = "Email or password is not valid, please try again.";
  loginForm: any;
  user: any;
  hide = true;

  constructor(private fb: FormBuilder,
    private service: SharedService,
    private Router: Router,
    private tokenService: Tokenservice,
    private DataService: DataService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      Email: new FormControl(null, [Validators.required,
      Validators.required,
      Validators.email,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]),
      Password: new FormControl(null, [Validators.required, Validators.minLength(1)]),
    })


  }

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
            this.tokenService.enCryptKey('userToken', response)
            this.DataService.changeLoginStatus(true);
            this.user = this.tokenService.getUserToken();
          }, 2000);

          if (this.user.role === 1) {
            this.success = true
            this.showButton = false;
            setTimeout(() => {
              this.tokenService.enCryptKey('userToken', response)
              this.DataService.changeUserStatus(false);
              this.DataService.changeAdminStatus(true);
              //window.open('Admin', "_blank");
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



}




