import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { GlobalSettings } from './globalSettings';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable()
export class User {

  private baseUrl: string;

  // private accessTokenSubject:ReplaySubject<any> = new ReplaySubject(1);

  constructor(private http: HttpClient, private globalSettings: GlobalSettings) {
    // Set the baseUrl variable to the Api Url from the GlobalSettings
    this.baseUrl = this.globalSettings.getSettings().apiUrl;
  }


  getUserInfo(accessToken: string) {
    // Construct header that supplies the access token

    const headers = new HttpHeaders();
    headers.append('Authorization', 'Bearer ' + accessToken);

    return this.http.get(this.baseUrl + '/api/Account/UserInfo', {headers})
    .pipe(
      map( (response: any) => {
        const body = JSON.parse(response._body);
        return body;
      }),
      catchError(this.handleError)
    );
  }
  handleError(error: HttpErrorResponse) {
    console.error(error);
    // tslint:disable-next-line: deprecation
    return Observable.throw(error);
  }
  // Registers a user in the Web Api using federated login provider (Facebook)
  // A user must be registered before it can retrieve protected resources.
  registerExternalUser(accessToken: string, username: string) {
    // const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    // headers.append('Authorization', 'Bearer ' + accessToken);
    // const options = new RequestOptions({ headers: headers });

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded',
        Authorization: 'Bearer ' + accessToken
      })
    };

    /*var registerUserData = {
			Email: username
		};*/
    const registerUserData = 'Email=' + encodeURIComponent(username);
    // Perform request
    return this.http.post(this.baseUrl + '/api/Account/RegisterExternal', registerUserData, httpOptions);
  }

  // Registers a user in the Web Api using username/password.
  // A user must be registered before it can retrieve protected resources.
  registerLocalUser(accessToken: string, userCredentials: { name?: string; email?: string;
    password: any; confirmation_password?: string; username?: any; }) {
    // const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    // headers.append('Authorization', 'Bearer ' + accessToken);
    // const options = new RequestOptions({ headers: headers });

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded',
        Authorization: 'Bearer ' + accessToken
      })
    };

    const registerUserData = {
      Email: userCredentials.username,
      Password: userCredentials.password,
      ConfirmPassword: userCredentials.password
      };

    // Perform request
    return this.http.post(this.baseUrl + '/api/Account/Register', registerUserData, httpOptions);
  }
}
