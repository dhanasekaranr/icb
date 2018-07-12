import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Authentication } from './authentication.service';

@Injectable()
export class GlobalFunctions {
  public data: any;
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
      Authorization: 'Bearer ' + token,
    });
      }
      public getSettings() {
        return {
          apiUrl: this.apiUrl,
        };
      }

}
