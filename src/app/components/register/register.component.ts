import { Component, OnInit } from '@angular/core';
import { RegisterForm } from 'src/app/models/Authenticator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: RegisterForm = {
    email: '',
    password: '',
    confirm_password: '',
  };

  constructor() { }

  ngOnInit(): void {
  }

  submit() {
  }

}
