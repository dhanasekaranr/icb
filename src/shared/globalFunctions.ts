import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Authentication } from './authentication.service';
import { LoginPage } from '../app/login/login';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';

@Injectable()
export class GlobalFunctions {
  data: any;
  // private apiUrl = 'http://localhost:52146';
   private apiUrl = 'http://api.icarebooks.com';
  constructor(public navCtrl: NavController,
              private authentication: Authentication, private http: HttpClient, private storage: Storage) {}

 /* getHttpHeaders(token: any) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    if (token != null) {
      headers.append('Authorization', 'Bearer ' + token); }
    return headers;
  }*/
  public getHeaders(token: any) {
    return new HttpHeaders({
      'Content-Type':  'application/x-www-form-urlencoded',
      Authorization: 'Bearer ' + token
    });
      }
      getSettings() {
        return {
          apiUrl: this.apiUrl
        };
      }

}
