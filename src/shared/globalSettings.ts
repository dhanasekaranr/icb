import { Injectable } from "@angular/core";

@Injectable()
export class GlobalSettings {
 // private apiUrl = 'http://localhost:52146';
    private apiUrl = 'http://localhost:52146';
  //private apiUrl = 'http://localhost:50203';
  //private apiUrl = 'http://www.api.icarebooks.com';

  constructor () {}

  getSettings () {
    return {
      apiUrl: this.apiUrl
    };
  }
}
