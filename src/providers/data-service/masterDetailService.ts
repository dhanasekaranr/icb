import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MasterDetailService {
  private destn: any;
  private home: any = 'N';
  private action: any = 'out';
  constructor() {}

  public setDestn(destn) {
    this.destn = destn;
  }

  public getDestn() {
    return this.destn;
  }

  public setHome(home) {
    this.home = home;
  }

  public getHome() {
    return this.home;
  }

  public setAction(action) {
    this.action = action;
  }

  public getAction() {
    return this.action;
  }
}
