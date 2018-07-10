import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { ReplaySubject } from 'rxjs/Rx';

import { GlobalSettings } from "./shared";

@Injectable()
export class CredentialsAuthentication {

  private baseUrl;
  private accessTokenSubject:ReplaySubject<any> = new ReplaySubject(1);

  constructor (private http: Http, private globalSettings: GlobalSettings) {
    // Set the baseUrl variable to the Api Url from the GlobalSettings
    this.baseUrl = globalSettings.getSettings().apiUrl;
  }

  login (credentials) {
    // Construct data
    let loginData = 'grant_type=password&username=' + credentials.username + '&password=' + credentials.password;

<<<<<<< HEAD

    // Construct POST Headers
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'  });
=======
    // Construct POST Headers
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded', 'Access-Control-Allow-Origin': '*'  });
>>>>>>> c07536c77f2aff6b8c07376a37bf75528954efcc
    let options = new RequestOptions({ headers: headers });

    // Perform request

  //  var externalProviderUrl = this.baseUrl + "api/Account/ExternalLogin?provider=" + provider
    //    + "&response_type=token&client_id=" + ngAuthSettings.clientId


    return this.http.post(this.baseUrl + '/Token', loginData, options)
    .map( response => {
      let body = JSON.parse(response["_body"]);
      return body.access_token;
    });
  }
}

