import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  public setUserInfo(user){
    localStorage.setItem('userInfo', JSON.stringify(user));
  }

  login(loginCredentials: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/users/login`, loginCredentials);
  }
}
