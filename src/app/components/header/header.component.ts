import { Component, OnInit } from '@angular/core';
import { AuthenticatorService } from 'src/app/authenticator/authenticator.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authenticatorService: AuthenticatorService) { }

  ngOnInit(): void {
  }
  isAuthenticated() {
    return this.authenticatorService.isAuthenticated;
  }
  logout() {
    return this.authenticatorService.logout();
  }
}
