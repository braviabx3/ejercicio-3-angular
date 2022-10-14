import { Router, RouterModule } from '@angular/router';
import { LoginForm, RegisterForm } from 'src/app/models/Authenticator';
import { Injectable } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthenticatorService {
  isAuthenticated: boolean = false;
  isLoading: boolean = false;
  passwordMatched: boolean = false;

  constructor(private router: Router) { }

  login(form: LoginForm) {
    if (this.isLoading) return;
    this.isLoading = true;

    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        const user = userCredential.user;
        this.isAuthenticated = true;
        this.router.navigate([""]);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.isAuthenticated = false;
      }).finally(() => (this.isLoading = false));
  }

  register(form: RegisterForm) {
    if (this.isLoading) return;
    this.isLoading = true;

    if (form.password !== form.confirm_password) {
      this.passwordMatched = false;
      return;
    }
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        const user = userCredential.user;
        /*     this.isAuthenticated = true; */
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.isAuthenticated = false;
      }).finally(() => (this.isLoading = false));
  }
  logout() {
    const auth = getAuth();
    signOut(auth).then(() => {
      this.router.navigate(["login"])
      this.isAuthenticated = false;
    }).catch((error) => {
    });
  }
}

