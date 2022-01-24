import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


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

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

  }

}
