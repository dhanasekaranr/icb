import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage} from '@ionic/storage';
import { GlobalFunctions } from './globalFunctions';
import { GlobalSettings } from './globalSettings';

@Injectable()
export class ICBService {
  public data: any;
  private baseUrl;
  private destn: any;
    static get parameters() {
        return [[HttpClient], [Storage]];
    }

    constructor(private http: HttpClient, private storage: Storage, private globalSettings: GlobalSettings, private func: GlobalFunctions) {

       this.baseUrl = 'http://localhost:52146'; // globalSettings.getSettings().apiUrl;

    //  this.baseUrl =   this.func.getSettings().apiUrl; // 'http://api.icarebooks.com';
    // this.baseUrl =   'http://api.icarebooks.com';
    }
    public setDestn(destn) {
      this.destn = destn;
    }

    public getDestn() {
      return this.destn;
    }
    public getHeaders(token: any) {
      return new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded',
        Authorization: 'Bearer ' + token,
      });
    }
    public getJSONHeaders(token: any) {
      return new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Bearer ' + token,
      });
    }
  public searchTrans(action, name) {
    const url = this.baseUrl + '/api/' + action + '/' + name ;
    return new Promise<any>( (resolve) => {
        this.storage.get('accessToken').then((token) => {
          if (token == null) { return; }
          this.http.get(url, {headers : this.getHeaders(token)})
          .subscribe( (data) => {
              this.data = data;
              resolve(this.data);
          }, (err) => {
            console.log(err);
        });
        });
      });
  }
  public getBookProfile(isbn) {
    const url = this.baseUrl + '/api/book/get/2/' + isbn ;
    return new Promise<any>( (resolve) => {
        this.storage.get('accessToken').then((token) => {
          this.http.get(url, {headers : this.getHeaders(token)})
          .subscribe( (data) => {
              this.data = data;
              resolve(this.data);
          });
        });
      });
  }
  public getBookRead() {
    const url = this.baseUrl + '/api/history' ;
    return new Promise<any>( (resolve) => {
        this.storage.get('accessToken').then((token) => {
          this.http.get(url, {headers : this.getHeaders(token)})
          .subscribe( (data) => {
              this.data = data;
              resolve(this.data);
          });
        });
      });
  }
  public getUserByISBN(id, isbn) {
    const url = this.baseUrl + '/api/User/get/' + id + '/' + isbn + '/';
    return new Promise<any>( (resolve) => {
        this.storage.get('accessToken').then((token) => {
          this.http.get(url, {headers : this.getHeaders(token)})
          .subscribe( (data) => {
              this.data = data;
              resolve(this.data);
          });
        });
      });
  }
  public getTransaction(isbn) {
    const url = this.baseUrl + '/api/book/get/' + isbn ;
    return new Promise<any>( (resolve) => {
        this.storage.get('accessToken').then((token) => {
          this.http.get(url, {headers : this.getHeaders(token)})
          .subscribe( (data) => {
              this.data = data;
              resolve(this.data);
          });
        });
      });
  }
  public getTransactionByISBN(isbn) {
    const url = this.baseUrl + '/api/trans/get/3/' + isbn ;
    return new Promise<any>( (resolve) => {
        this.storage.get('accessToken').then((token) => {
          this.http.get(url, {headers : this.getHeaders(token)})
          .subscribe( (data) => {
              this.data = data;
              resolve(this.data);
          });
        });
      });
  }
  public markReturn(transId: any) {
    const url = this.baseUrl + '/api/book';
    return new Promise<any>( (resolve) => {
        this.storage.get('accessToken').then((token) => {
         // let body = JSON.stringify({id:transId});
          this.http.put(url, transId, {headers : this.getJSONHeaders(token)})
          .subscribe( (data) => {
              this.data = data;
              resolve(this.data);
          });

        });
      });
  }
  public markRent(search, userid, code) {
    const url = this.baseUrl + '/api/user';
    return new Promise<any>( (resolve) => {
        this.storage.get('accessToken').then((token) => {
          const body = JSON.stringify({id: userid, search, code}) ;
          this.http.put (url, body, {headers : this.getJSONHeaders(token)})
          .subscribe( (data) => {
              this.data = data;
              resolve(this.data);
          });
        });
      });
  }
  public notify(userId, BookId, transactions, search) {
    const url = this.baseUrl + '/api/User';
    return new Promise<any>( (resolve) => {
        this.storage.get('accessToken').then((token) => {
          const body = JSON.stringify({id: userId, bookId: BookId, transaction: transactions, search});
          this.http.post(url, body, {headers : this.getJSONHeaders(token)})
          .subscribe( (data) => {
              this.data = data;
              resolve(this.data);
          });

        });
      });
  }
  public GetBookInfo(isbn) {
    const url = 'https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbn;
    return new Promise<any>( (resolve) => {
      this.http.get(url)
      .subscribe( (data) => {
          this.data = data;
          resolve(this.data);
      });
      });
  }

  public getRentalStatus(id, stat) {
    const url = this.baseUrl + '/api/dash/GetRentalStatus/' + id + '/' + stat + '/';
    return new Promise<any>( (resolve) => {
        this.storage.get('accessToken').then((token) => {
          this.http.get(url, {headers : this.getHeaders(token)})
          .subscribe( (data) => {
              this.data = data;
              resolve(this.data);
          });
        });
      });
  }
  public getRentalStatusDetails(choice, labelvalue) {
    const url = this.baseUrl + '/api/dash/GetRentalStatusDetail/' + choice + '/' + labelvalue + '/';
    return new Promise<any>( (resolve) => {
        this.storage.get('accessToken').then((token) => {
          this.http.get(url, {headers : this.getHeaders(token)})
          .subscribe( (data) => {
              this.data = data;
              resolve(this.data);
          });
        });
      });
  }

  public getActiveWishList() {
    const url = this.baseUrl + '/api/wish';
    return new Promise<any>( (resolve) => {
        this.storage.get('accessToken').then((token) => {
          this.http.get(url, {headers : this.getHeaders(token)})
          .subscribe( (data) => {
              this.data = data;
              resolve(this.data);
          });
        });
      });
  }
  public getRentalTransactions() {
    const url = this.baseUrl + '/api/trans';
    return new Promise<any>( (resolve) => {
        this.storage.get('accessToken').then((token) => {
          this.http.get(url, {headers : this.getHeaders(token)})
          .subscribe( (data) => {
              this.data = data;
              resolve(this.data);
          });
        });
      });
  }

  public getReceiving() {
    const url = this.baseUrl + '/api/hold';
    return new Promise<any>( (resolve) => {
        this.storage.get('accessToken').then((token) => {
          this.http.get(url, {headers : this.getHeaders(token)})
          .subscribe( (data) => {
              this.data = data;
              resolve(this.data);
          });
        });
      });
  }

  public getNotificationList() {
    const url = this.baseUrl + '/api/dash';
    return new Promise<any>( (resolve) => {
        this.storage.get('accessToken').then((token) => {
          this.http.get(url, {headers : this.getHeaders(token)})
          .subscribe( (data) => {
              this.data = data;
              resolve(this.data);
          });
        });
      });
  }
  public AddToWishList(isbn) {
    const url = this.baseUrl + '/api/wish/' + isbn;
    return new Promise<any>( (resolve) => {
        this.storage.get('accessToken').then((token) => {
          const body = JSON.stringify({isbn});
          this.http.put (url, body, {headers : this.getJSONHeaders(token)})
          .subscribe( (data) => {
              this.data = data;
              resolve(this.data);
          });
        });
      });
  }
  public AddToHold(isbn, code, id, createdBy) {
    const url = this.baseUrl + '/api/hold';
    return new Promise<any>( (resolve) => {
        this.storage.get('accessToken').then((token) => {
          const body = JSON.stringify({isbn, code, id, createdBy}) ;
          this.http.post (url, body, {headers : this.getJSONHeaders(token)})
          .subscribe( (data) => {
              this.data = data;
              resolve(this.data);
          });
        });
      });
  }

  public updateHold(id, holdId, code, ISBN, Status) {
    const url = this.baseUrl + '/api/hold';
    return new Promise<any>( (resolve) => {
        this.storage.get('accessToken').then((token) => {
          const body = JSON.stringify({id, holdId, code, ISBN, Status}) ;
          this.http.put (url, body, {headers : this.getJSONHeaders(token)})
          .subscribe( (data) => {
              this.data = data;
              resolve(this.data);
          });
        });
      });
  }
  public getSchoolStats(stat) {
    const url = this.baseUrl + '/api/history/get/' + stat;

    return new Promise<any>( (resolve) => {
        this.storage.get('accessToken').then((token) => {
          this.http.get (url,  {headers : this.getHeaders(token)})
          .subscribe( (data) => {
              this.data = data;
              resolve(this.data);
          });
        });
      });
  }

  public getTweets() {
    const url = this.baseUrl + '/api/tweet';
    return new Promise<any>( (resolve) => {
        this.storage.get('accessToken').then((token) => {
          this.http.get(url, {headers : this.getHeaders(token)})
          .subscribe( (data) => {
              this.data = data;
              resolve(this.data);
          });
        });
      });
  }

  public getGroups() {
    const url = this.baseUrl + '/api/user/getgroups';
    return new Promise<any>( (resolve) => {
        this.storage.get('accessToken').then((token) => {
          this.http.get(url, {headers : this.getHeaders(token)})
          .subscribe( (data) => {
              this.data = data;
              resolve(this.data);
          });
        });
      });
  }

  public getRelationShips() {
    const url = this.baseUrl + '/api/user/getRelationships';
    return new Promise<any>( (resolve) => {
        this.storage.get('accessToken').then((token) => {
          this.http.get(url, {headers : this.getHeaders(token)})
          .subscribe( (data) => {
              this.data = data;
              resolve(this.data);
          });
        });
      });
  }

  public getUser() {
    const url = this.baseUrl + '/api/Account/GetUser';
    return new Promise<any>( (resolve) => {
        this.storage.get('accessToken').then((token) => {
          this.http.get(url, {headers : this.getHeaders(token)})
          .subscribe( (data) => {
              this.data = data;
              resolve(this.data);
          });
        });
      });
  }
  public UpdateProfile(credential) {
    const url = this.baseUrl + '/api/Account/UpdateProfile';

    return new Promise<any>( (resolve) => {
        this.storage.get('accessToken').then((token) => {

        const body = JSON.stringify({credential}) ;

        this.http.post (url, body, {headers : this.getJSONHeaders(token)})
          .subscribe( (data) => {
              this.data = data;
              resolve(this.data);
          });
        });
      });
  }
}
