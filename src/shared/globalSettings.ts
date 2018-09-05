import { Injectable } from '@angular/core';

@Injectable()
export class GlobalSettings {
<<<<<<< HEAD
  //   private apiUrl = 'http://localhost:52146';
    private apiUrl = 'http://api.icarebooks.com';
=======
    private apiUrl = 'http://localhost:52146';
  //private apiUrl = 'http://api.icarebooks.com';
>>>>>>> Version 3.10

  constructor() {}

  public getSettings() {
    return {
      apiUrl: this.apiUrl,
    };
  }
}
