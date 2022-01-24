import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/Back-END/Services/Shared-Service/shared.service';
import { Authservice } from 'src/app/Back-END/Services/Storage-Crypting/Auth-Service';
import { DataService } from 'src/app/Back-END/Services/DataService/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error: boolean = false;
  errormessage: string = "Email or password is not valid, please try again.";
  emailError: string = 'Wrong Email pattern!';
  passwordError: string = 'Password may not be empty!';
  userError: string = 'User not found!';
  loginForm: any;
  user: any;

  constructor(private fb: FormBuilder,
    private service: SharedService,
    private Router: Router,
    private Authservice: Authservice,
    private DataService: DataService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      Email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      Password: ['', Validators.required],
    });

  }

  login(Email: string, Password: string) {
    //console.log(Email, Password);
    this.service.login(Email, Password).subscribe((response) => {
    console.log(response);
    
    });
  }



}




