import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  signUp(email: string, password: string): Observable<AuthResponseData> {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCqeYzndy0RQcfIYy0NPeq2Y1ElJWliqWY',
        { email, password, returnSecureToken: true }
      )
      .pipe(
        catchError((error) => {
          let errorMessage = 'An unknown error occured!';

          if (!error.error || !error.error.error) {
            return throwError(() => errorMessage);
          }

          switch (error.error.error.message) {
            case 'EMAIL_EXISTS':
              errorMessage =
                'The email address is already in use by another account.';
              break;
            case 'TOO_MANY_ATTEMPTS_TRY_LATER':
              errorMessage =
                'We have blocked all requests from this device due to unusual activity. Try again later.';
              break;
            case 'OPERATION_NOT_ALLOWED':
              errorMessage = 'Password sign-in is disabled for this project.';
              break;
          }

          return throwError(() => errorMessage);
        })
      );
  }

  login(email: string, password: string): Observable<AuthResponseData> {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCqeYzndy0RQcfIYy0NPeq2Y1ElJWliqWY',
      { email, password, returnSecureToken: true }
    );
  }
}
