import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticatorModule } from './authenticator/authenticator.module';
import { BooksModule } from './components/books/books.module';
import { CartComponent } from './components/cart/cart.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [AppComponent, CartComponent, HeaderComponent],
  imports: [BrowserModule, BooksModule, AppRoutingModule, AuthenticatorModule],
  bootstrap: [AppComponent],
})

export class AppModule { }