import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { GlobalSettings } from './globalSettings';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable()
export class CredentialsAuthentication {

  private baseUrl: string;
  // private accessTokenSubject:ReplaySubject<any> = new ReplaySubject(1);

  constructor(private http: HttpClient, private globalSettings: GlobalSettings) {
    // Set the baseUrl variable to the Api Url from the GlobalSettings
    this.baseUrl = this.globalSettings.getSettings().apiUrl;
  }

  login(credentials: { username: string; password: string; }) {
    // Construct data
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
//        'Authorization': 'my-auth-token'
      })
    };
    const loginData = 'grant_type=password&username=' + credentials.username + '&password=' + credentials.password;
    // Construct POST Headers

    return this.http.post(this.baseUrl + '/Token', loginData, httpOptions)
    .pipe(map( response => {
      return response;
    }) , catchError (this.handleError) );

}

handleError(error: Response) {
  console.error(error);
  return throwError(error);
}
}

