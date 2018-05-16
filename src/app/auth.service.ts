import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from './user';

@Injectable()
export class AuthService {
  private API = 'http://localhost:3000';
  private res: {
    message: string
    token: string,
    loginStatus: boolean
  };
  constructor(
    private _http: HttpClient,
    private jwtHelper: JwtHelperService) { }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('id_token');
    // Check whether the token is expired and return
    // true or false
    return !this.jwtHelper.isTokenExpired(token);
  }

  addUser(user: User): Observable<any> {
    return this._http.post<any>(this.API + '/signup', user);
  }
  editUser(id, user: User): Observable<any> {
    return this._http.post<any>(this.API + '/profile/' + id, user);
  }
  getById(id: string): Observable<any>  {
    return this._http.get<any>(this.API + '/users/' + id);
}

  login(email: string, password: string): Observable<any> {
    return this._http.post<any>(this.API + '/signin', { email, password })
      .pipe(tap(res => {
        this.res = res;
        if (res.loginStatus === true) {
          localStorage.setItem('id_token', res.token);
        }
      })
    );
  }

  logout() {
    localStorage.removeItem('id_token');
  }
}
