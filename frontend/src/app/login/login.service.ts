import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Constants} from "../shared/constants";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public setUserInfo(user){
    localStorage.setItem('userInfo', JSON.stringify(user));
  }

  login(loginCredentials: any): Observable<any> {
    return this.http.post(`${Constants.baseUrl}/users/login`, loginCredentials);
  }
}
