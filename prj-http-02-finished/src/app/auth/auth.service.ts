import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { BehaviorSubject, throwError } from 'rxjs';
import { User } from './user.model';
import { Router } from '@angular/router';

import { environment } from 'src/environments/environment';

interface signupResponse {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user = new BehaviorSubject<User>(null);

  timer = null;

  constructor(
    private http: HttpClient,
    private router: Router
    ) { }

  signup(email: string, password: string) {
    return this.http.post<signupResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + environment.apiKey, {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(catchError(this.handleError), tap(resData => {
      this.handleAuthentication(
        resData.email,
        resData.localId,
        resData.idToken,
        +resData.expiresIn
      );
    }))
  }


  signin(email: string, password: string) {
    return this.http.post<signupResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + environment.apiKey, {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(catchError(this.handleError),  tap(resData => {
      this.handleAuthentication(
        resData.email,
        resData.localId,
        resData.idToken,
        +resData.expiresIn
      );
    }))
  }

  autoLogin() {
    const userData = localStorage.getItem('userData');
    const user: {
      email: string;
      id: string;
      _token: string;
      _tokenExpirationDate: string;
    } = JSON.parse(userData);
    if (!user) {
      return;
    }
    const loadedUser = new User(user.email, user.id, user._token, new Date(user._tokenExpirationDate));
    if (loadedUser.token) {
      this.user.next(loadedUser);
      const remainingTimeInMilisecound = new Date(user._tokenExpirationDate).getTime() - new Date().getTime();
      this.autoLogout(remainingTimeInMilisecound);
    }
  }

  logout() {
    this.user.next(null);
    this.router.navigate(['/auth']);
    localStorage.removeItem('userData');
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.timer = null;
  }

  autoLogout(expirationTime) {
    this.timer = setTimeout(() => {
      this.logout();
    }, expirationTime)
  }

  handleError(errResponse) {
    let errorMessage = 'unknown error occured';
    if (errResponse?.error?.error?.message) {
      errorMessage = errResponse.error.error.message;
    }
    return throwError(errorMessage);
  }

  handleAuthentication(email, localId, idToken, expiresIn) {
    const expireDate = new Date(new Date().getTime() + (expiresIn * 1000))
    const user = new User(email, localId, idToken, expireDate);
    this.user.next(user);
    localStorage.setItem('userData', JSON.stringify(user));
    this.autoLogout(expiresIn * 1000);
  }
}
