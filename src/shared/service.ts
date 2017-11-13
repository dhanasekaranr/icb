import { Headers } from '@angular/http';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Storage} from "@ionic/storage";
import { GlobalSettings } from "./shared";
export class icbService {
  data:any;
  private baseUrl;
    static get parameters() {
        return [[Http], [Storage]];
    }

    constructor(private http: Http, private storage: Storage,private globalSettings: GlobalSettings) {

     // this.baseUrl = 'http://localhost:52146';//globalSettings.getSettings().apiUrl;
      this.baseUrl =   'http://www.api.icarebooks.com';
    }


  searchTrans(action, name) {
    var url =this.baseUrl + '/api/' + action +'/' + name ;
    return new Promise<any>( resolve => {
        this.storage.get('accessToken').then((token) => {
          //
          if(token == null) return;
//
          let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
          headers.append('Authorization', 'Bearer ' + token);
          this.http.get(url, {headers : headers})
          .map(res => res.json())
          .subscribe( data =>{
              this.data = data;
              resolve(this.data);
          });
        });
      });
  }
  getBookProfile(isbn) {
    var url = this.baseUrl + '/api/Values/get/2/' + isbn ;
    return new Promise<any>( resolve => {
        this.storage.get('accessToken').then((token) => {
          let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
          headers.append('Authorization', 'Bearer ' + token);
          this.http.get(url, {headers : headers})
          .map(res => res.json())
          .subscribe( data =>{
              this.data = data;
              resolve(this.data);
          });
        });
      });
  }
  getUserByISBN(id,isbn) {
    var url = this.baseUrl + '/api/User/get/' + id + '/' + isbn ;
    return new Promise<any>( resolve => {
        this.storage.get('accessToken').then((token) => {
          let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
          headers.append('Authorization', 'Bearer ' + token);
          this.http.get(url, {headers : headers})
          .map(res => res.json())
          .subscribe( data =>{
              this.data = data;
              resolve(this.data);
          });
        });
      });
  }
  getTransaction(isbn) {
    var url = this.baseUrl + '/api/Values/get/' + isbn ;
    return new Promise<any>( resolve => {
        this.storage.get('accessToken').then((token) => {
          let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
          headers.append('Authorization', 'Bearer ' + token);
          this.http.get(url, {headers : headers})
          .map(res => res.json())
          .subscribe( data =>{
              this.data = data;
              resolve(this.data);
          });
        });
      });
  }
  markReturn(xid) {
    var url = this.baseUrl + '/api/Values';
    return new Promise<any>( resolve => {
        this.storage.get('accessToken').then((token) => {
          let body = JSON.stringify({id:xid});
          let headers = new Headers({ 'Content-Type': 'application/json' });
          headers.append('Authorization', 'Bearer ' + token);
          this.http.put(url, xid, {headers : headers}).map(res => res.json())
          .subscribe( data =>{
              this.data = data;
              resolve(this.data);
          });

        });
      });
  }
  markRent(search, userid, isbn) {
    var url = this.baseUrl + '/api/User';
    return new Promise<any>( resolve => {
        this.storage.get('accessToken').then((token) => {
          let body = JSON.stringify({id:userid,search:search, isbn:isbn});
          let headers = new Headers({ 'Content-Type': 'application/json' });
          headers.append('Authorization', 'Bearer ' + token);
          this.http.put(url, body, {headers : headers}).map(res => res.json())
          .subscribe( data =>{
              this.data = data;
              resolve(this.data);
          });

        });
      });
  }
}
