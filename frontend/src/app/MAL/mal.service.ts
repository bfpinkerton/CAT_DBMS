import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Constants} from "../shared/constants";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MalService {

  constructor(private http: HttpClient) { }

  createMalEntry(malData: any): Observable<any> {
    return this.http.post(`${Constants.baseUrl}/mal/create`, malData);
  }
}
