import { Injectable } from "@angular/core";

@Injectable()
export class GlobalSettings {
<<<<<<< HEAD
    //private apiUrl = 'http://localhost:52146';
  private apiUrl = 'http://api.icarebooks.com';
=======

  //private apiUrl = 'http://localhost:52146';
    private apiUrl = 'http://localhost:52146/';
  //private apiUrl = 'http://localhost:50203';

>>>>>>> c07536c77f2aff6b8c07376a37bf75528954efcc

  constructor () {}

  getSettings () {
    return {
      apiUrl: this.apiUrl
    };
  }
}
