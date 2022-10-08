import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './../components/register/register.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../components/login/login.component';




@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule, FormsModule
  ]
})
export class AuthenticatorModule { }
