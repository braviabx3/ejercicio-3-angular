import { Component, OnInit } from '@angular/core';
import { AuthenticatorService } from 'src/app/authenticator/authenticator.service';
import { RegisterForm } from 'src/app/models/Authenticator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: RegisterForm = {
    name: '',
    email: '',
    password: '',
    confirm_password: '',
    admin: false
  };

  passwordMatched: boolean = true;

  constructor(private authenticatorService: AuthenticatorService) { }
  ngOnInit(): void {
  }
  submit() {
    this.authenticatorService.register(this.form);
  }
  isLoading() {
    return this.authenticatorService.isLoading;
  }
}
