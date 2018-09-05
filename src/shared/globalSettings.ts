import { Injectable } from "@angular/core";

@Injectable()
export class GlobalSettings {
    //private apiUrl = 'http://localhost:52146';
  private apiUrl = 'http://api.icarebooks.com';

  constructor () {}

  getSettings () {
    return {
      apiUrl: this.apiUrl
    };
  }
}
