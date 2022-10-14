import { AuthenticatorService } from 'src/app/authenticator/authenticator.service';
import { firebaseConfig } from './firebase.config';
import { Component, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private authenticatorService: AuthenticatorService) { }
  ngOnInit(): void {
    initializeApp(firebaseConfig);
  }
}