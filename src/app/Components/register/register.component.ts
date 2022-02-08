import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { SharedService } from 'src/app/Back-END/Services/Shared-Service/shared.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: any;
  message: any;

  constructor(private fb: FormBuilder, private service: SharedService) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      Email: new FormControl('', Validators.required),
      Password: new FormControl('', Validators.required),
      Firstname: new FormControl('', Validators.required),
      Lastname: new FormControl('', Validators.required),
      Address: new FormControl('', Validators.required),
      Phone: new FormControl('', Validators.required),
      Image: new FormControl('profile.jpg'),
      Role: new FormControl(0),
    });
  }

  registerUser(body: any){
    console.log('log of body on register page: ',body);
    this.service.createNewUser(body).subscribe(res => {
      this.message = 'Registered successfully.';
    });
    this.registerForm.reset();
    
  }

}
