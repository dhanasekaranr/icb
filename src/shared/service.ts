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

   //   this.baseUrl = 'http://localhost:52146';//globalSettings.getSettings().apiUrl;
//      this.baseUrl = 'http://localhost:52146';//globalSettings.getSettings().apiUrl;

   this.baseUrl =   'http://api.icarebooks.com';
    }


  searchTrans(action, name) {
    var url =this.baseUrl + '/api/' + action +'/' + name ;
    return new Promise<any>( resolve => {
        this.storage.get('accessToken').then((token) => {
          if(token == null) return;
          let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
          headers.append('Authorization', 'Bearer ' + token);
          this.http.get(url, {headers : headers})
          .map(res => res.json())
          .subscribe( data =>{
              this.data = data;
              resolve(this.data);
          },err => {
            //this.showAlert(err);
            //reject(err);
            console.log(err);
        });
        });
      });
  }
  getBookProfile(isbn) {
    var url = this.baseUrl + '/api/book/get/2/' + isbn ;
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
    var url = this.baseUrl + '/api/User/get/' + id + '/' + isbn + '/';
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
    var url = this.baseUrl + '/api/book/get/' + isbn ;
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
  markReturn(transId) {
    var url = this.baseUrl + '/api/book';
    return new Promise<any>( resolve => {
        this.storage.get('accessToken').then((token) => {
          let body = JSON.stringify({id:transId});
          let headers = new Headers({ 'Content-Type': 'application/json' });
          headers.append('Authorization', 'Bearer ' + token);
          this.http.put(url, transId, {headers : headers}).map(res => res.json())
          .subscribe( data =>{
              this.data = data;
              resolve(this.data);
          });

        });
      });
  }
  markRent(search, userid, code) {
    var url = this.baseUrl + '/api/user';
    //console.log("search: " + search);
    return new Promise<any>( resolve => {
        this.storage.get('accessToken').then((token) => {
          let body = JSON.stringify({id:userid,search:search, code:code});
          let headers = new Headers({ 'Content-Type': 'application/json' });
          headers.append('Authorization', 'Bearer ' + token);
          this.http.put (url, body, {headers : headers}).map(res => res.json())
          .subscribe( data =>{
              this.data = data;
              resolve(this.data);
          });
        });
      });
  }
  notify(userId, BookId, transactions,search) {
    var url = this.baseUrl + '/api/User';
    return new Promise<any>( resolve => {
        this.storage.get('accessToken').then((token) => {
          let body = JSON.stringify({id:userId, bookId:BookId,transaction:transactions,search:search});
          let headers = new Headers({ 'Content-Type': 'application/json' });
          headers.append('Authorization', 'Bearer ' + token);
          this.http.post(url, body,{headers : headers}).map(res => res.json())
          .subscribe( data =>{
              this.data = data;
              resolve(this.data);
          });

        });
      });
  }
  GetBookInfo(isbn) {
    var url = 'https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbn;
    return new Promise<any>( resolve => {
      this.http.get(url)
      .map(res => res.json())
      .subscribe( data =>{
          this.data = data;
          resolve(this.data);
      });
      });
  }

}
