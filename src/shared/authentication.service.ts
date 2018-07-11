import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { AsyncSubject, throwError } from 'rxjs';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
import { CredentialsAuthentication } from './credentialsAuthentication';
import { GlobalSettings } from './globalSettings';
import { map, catchError } from 'rxjs/operators';


@Injectable()
export class Authentication {

  private baseUrl: any;
  private accessTokenSubject: AsyncSubject<any>;
  private accessToken = null;
  private isAdmin: any;
  constructor(
    private http: HttpClient,
    private credentialsAuthentication: CredentialsAuthentication,
    private storage: Storage,
    private globalSettings: GlobalSettings) {
      // Set the baseUrl variable to the Api Url from the GlobalSettings
      this.baseUrl = this.globalSettings.getSettings().apiUrl;
      this.isAdmin = '';
    }

  getAccessToken() {
    return this.accessToken;
  }
  getIsAdmin() {
    return this.isAdmin;
  }


  credentialsLogin(credentials) {
    // IF the access token subject is already set, just return it again

    if (this.accessTokenSubject) {
      if (this.accessTokenSubject.isStopped) {

      return this.accessTokenSubject;
      }
    }
    // Else instantiate a new subject and perform login request
    this.accessTokenSubject = new AsyncSubject();

    return this.credentialsAuthentication.login(credentials)
          .pipe(map( (body: any) => {
            // Cache the access token in the service
            this.accessToken = body.access_token;
            this.isAdmin = 'N';
            this.isAdmin = body.isAdmin;
            // Save the access token in storage
            this.storage.set('accessToken', body.access_token);
            this.storage.set('isAdmin', body.isAdmin);
            this.storage.set('username', credentials.username);
            this.storage.set('password', credentials.password);
            // Set the access token as the result for the observerable
            this.accessTokenSubject.next(body.access_token);
            this.accessTokenSubject.complete();
            return this.accessTokenSubject;
          }), catchError(this.handleError));


        // return this.accessTokenSubject;
  }
  handleError(error: Response) {
    // Clear the saved accessToken

    console.error(error);
    return throwError(error);
  }

  logout() {
    // Construct request header
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization:  'Bearer ' + this.accessToken
      })
    };
    // const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    // headers.append('Authorization', 'Bearer ' + this.accessToken);
    // const options = new RequestOptions({ headers: headers });

    // Clear the saved accessToken
    this.storage.set('accessToken', null);
    this.accessToken = null;
    // Clear subject
    this.accessTokenSubject = null;
    // Remove saved credentials from Facebook login service
    // this.facebookAuthentication.logout();

    // Perform request
    return this.http.post(this.baseUrl + '/api/Account/Logout', null, httpOptions);
    // return null;
  }
}
