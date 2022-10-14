import { Component, OnInit } from '@angular/core';
import { LoginForm } from 'src/app/models/Authenticator';
import { AuthenticatorService } from 'src/app/authenticator/authenticator.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: LoginForm = {
    email: '',
    password: ''
  };
  constructor(private authenticatorService: AuthenticatorService) { }

  ngOnInit(): void { }

  submit() {
    this.authenticatorService.login(this.form);
  }
  isLoading() {
    return this.authenticatorService.isLoading;
  }
}
