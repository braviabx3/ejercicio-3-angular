import { BooksComponent } from './components/books/books.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthenticatorGuard } from './authenticator/authenticator.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: BooksComponent },
  { path: 'cart', component: CartComponent, canActivate: [AuthenticatorGuard] },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }