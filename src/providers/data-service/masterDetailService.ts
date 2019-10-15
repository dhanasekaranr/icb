import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterDetailService {
  private destn: any;
  private home: any = 'N';
  private action: any = 'out';
  constructor() {}

  public setDestn(destn) {
    this.destn = destn;
  }

  getDestn() {
    return this.destn;
  }

  public setHome(home) {
    this.home = home;
  }

  getHome() {
    return this.home;
  }

  public setAction(action) {
    this.action = action;
  }

  getAction() {
    return this.action;
  }
}
