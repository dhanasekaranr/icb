var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html": 
        /*!***************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
          \***************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"header\">\n      <ion-title class=\"ion-text-center\">Home</ion-title>\n      <ion-buttons slot=\"end\">\n          <ion-button id=\"notification-button\" fill=\"clear\" (click)=\"notificationPopover($event)\">\n            <ion-icon name=\"notifications\" ></ion-icon>\n            <ion-badge id=\"notifications-badge\" >{{this.NotificationCount}}</ion-badge>\n\n      </ion-button>\n\n        <ion-button id=\"notification-button\" fill=\"clear\" (click)=\"presentPopover($event)\">\n          <ion-icon name=\"heart\"></ion-icon>\n          <ion-badge id=\"notifications-badge\">{{this.WishesCount}}</ion-badge>\n\n\n      </ion-button>\n\n        <ion-button (click)=this.logOut();>\n          <ion-icon slot=\"icon-only\" name=\"md-log-out\" ></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n  <ion-card>\n      <ion-card-header>\n        Books\n      </ion-card-header>\n      <ion-card-content>\n        <canvas #lineCanvas></canvas>\n      </ion-card-content>\n    </ion-card>\n     <div>\n    <ion-grid>\n      <ion-row nowrap>\n        <ion-col>\n          <ion-card text-center padding-right padding-top padding-bottom style=\"background-color:#f18973\" (click)=\"showRentals(this.Transactions)\">\n            <ion-icon name=\"book\">\n                <ion-badge id=\"notifications-badge\" >{{this.AvailableCount}}</ion-badge>\n            </ion-icon>\n            <span>Books({{this.RentedOut}})</span>\n          </ion-card>\n        </ion-col>\n        <ion-col>\n          <ion-card text-center padding style=\"background-color:#82b74b;\" (click)=\"showHistory(this.booksStat)\">\n              <ion-icon name=\"pulse\">\n                  <ion-badge id=\"notifications-badge\" color=\"danger\"></ion-badge>\n                </ion-icon>\n            <span>Statistics</span>\n          </ion-card>\n        </ion-col>\n        <ion-col>\n          <ion-card text-center padding style=\"background-color:#feb236 \" (click)=\"showStats()\">\n              <ion-icon name=\"logo-twitter\">\n                  <ion-badge id=\"notifications-badge\" color=\"danger\"></ion-badge>\n                </ion-icon>\n              <span>News</span>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n \n    <ion-list>\n        <ion-list-header>\n            Current Rental List\n          </ion-list-header>\n      \n  \n          <ion-item *ngFor=\"let tran of Transactions\">\n            <ion-avatar slot=\"start\" (click)=\"bookInfo(tran)\">\n              <img src=\"{{tran.PictureLink}}\">\n            </ion-avatar>\n            <ion-label>\n              <h3>{{tran.BorrowerName}} {{tran.RentedDate | date: 'MM/dd/yyyy'}} <button style=\"background-color: transparent\">..... </button></h3>\n              <p>{{tran.Description}}</p>              \n            </ion-label>\n          </ion-item>\n\n\n\n    </ion-list>\n\n</ion-content>\n\n");
            /***/ 
        }),
        /***/ "./src/app/home/home.module.ts": 
        /*!*************************************!*\
          !*** ./src/app/home/home.module.ts ***!
          \*************************************/
        /*! exports provided: HomePageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function () { return HomePageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
            var HomePageModule = /** @class */ (function () {
                function HomePageModule() {
                }
                return HomePageModule;
            }());
            HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
                    imports: [
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                        _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"] }])
                    ],
                    declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]],
                    entryComponents: [],
                })
            ], HomePageModule);
            /***/ 
        }),
        /***/ "./src/app/home/home.page.scss": 
        /*!*************************************!*\
          !*** ./src/app/home/home.page.scss ***!
          \*************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n#notification-button {\n  position: relative;\n  top: 0px;\n  right: -5px;\n  left: -3px;\n  font-size: 1.25em;\n}\n\n#notifications-badge {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  border-radius: 100%;\n  font-weight: 100;\n  color: white;\n  font-size: 0.5em;\n  background-color: red;\n}\n\nP {\n  font-weight: lighter;\n  font-size: 1.25ex;\n}\n\nion-card ion-icon {\n  font-size: 3em;\n}\n\npage-home .center {\n  text-align: center;\n}\n\npage-home .ionic-logo {\n  display: inline-flex;\n  position: relative;\n  width: 87px;\n  height: 87px;\n  border: 3.5px solid #5E86C4;\n  border-radius: 100%;\n  -moz-border-radius: 100%;\n  -webkit-border-radius: 100%;\n  -moz-animation: spin 2s infinite linear;\n  -webkit-animation: spin 2s infinite linear;\n}\n\npage-home .ionic-logo:after {\n  content: \"\";\n  position: absolute;\n  width: 38px;\n  height: 38px;\n  background: #5E86C4;\n  top: 50%;\n  left: 50%;\n  margin-left: -19px;\n  margin-top: -19px;\n  border-radius: 100%;\n  -moz-border-radius: 100%;\n  -webkit-border-radius: 100%;\n}\n\npage-home .ionic-logo:before {\n  content: \"\";\n  background: #5E86C4;\n  width: 14px;\n  height: 14px;\n  position: absolute;\n  top: -8px;\n  left: 50%;\n  margin-left: -7px;\n  border-radius: 100%;\n  -moz-border-radius: 100%;\n  -webkit-border-radius: 100%;\n}\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXERoYW5hXFxEb2N1bWVudHNcXFZpc3VhbCBTdHVkaW8gMjAxN1xcUHJvamVjdHNcXElDQkFwcC9zcmNcXGFwcFxcaG9tZVxcaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxrQkFBQTtFQUVBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FER0E7RUFFRSxrQkFBQTtFQUVELFFBQUE7RUFDQSxVQUFBO0VBQ0MsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FDRkY7O0FESUE7RUFDRSxvQkFBQTtFQUFxQixpQkFBQTtBQ0F2Qjs7QURHQTtFQUNFLGNBQUE7QUNBRjs7QURLRTtFQUNJLGtCQUFBO0FDRk47O0FES0U7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtFQUNBLHVDQUFBO0VBQ0EsMENBQUE7QUNISjs7QURNRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7QUNKSjs7QURPRTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0FDTEo7O0FEUUU7RUFDSTtJQUNJLCtCQUFBO0VDTlI7RURTSTtJQUNJLGlDQUFBO0VDUFI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGltZyB7XHJcbiAgbWF4LWhlaWdodDogMzV2aDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbiNub3RpZmljYXRpb24tYnV0dG9uIHsgICAgICAgICAgICBcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIHRvcDowcHg7XHJcbiAgcmlnaHQ6IC01cHg7XHJcbiAgbGVmdCA6IC0zcHg7XHJcbiAgZm9udC1zaXplOjEuMjVlbTtcclxufVxyXG5cclxuXHJcbiNub3RpZmljYXRpb25zLWJhZGdlIHtcclxuXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIFxyXG4gdG9wOjBweDtcclxuIHJpZ2h0OiAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICBmb250LXdlaWdodDogMTAwO1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIGZvbnQtc2l6ZTouNWVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufVxyXG5Qe1xyXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO2ZvbnQtc2l6ZTogMS4yNWV4O1xyXG59XHJcbmlvbi1jYXJke1xyXG5pb24taWNvbiB7XHJcbiAgZm9udC1zaXplOiAzZW07XHJcbn1cclxufVxyXG5cclxucGFnZS1ob21lIHtcclxuICAuY2VudGVyIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyAgXHJcbiAgfVxyXG4gIFxyXG4gIC5pb25pYy1sb2dvIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICB3aWR0aDo4N3B4O1xyXG4gICAgaGVpZ2h0Ojg3cHg7XHJcbiAgICBib3JkZXI6My41cHggc29saWQgIzVFODZDNDtcclxuICAgIGJvcmRlci1yYWRpdXM6MTAwJTtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czoxMDAlO1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOjEwMCU7XHJcbiAgICAtbW96LWFuaW1hdGlvbjogc3BpbiAycyBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAycyBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgfVxyXG5cclxuICAuaW9uaWMtbG9nbzphZnRlciB7XHJcbiAgICBjb250ZW50OicnO1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICB3aWR0aDozOHB4O1xyXG4gICAgaGVpZ2h0OjM4cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNUU4NkM0O1xyXG4gICAgdG9wOjUwJTtcclxuICAgIGxlZnQ6NTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6LTE5cHg7XHJcbiAgICBtYXJnaW4tdG9wOi0xOXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czoxMDAlO1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOjEwMCU7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6MTAwJTtcclxuICB9XHJcblxyXG4gIC5pb25pYy1sb2dvOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OicnO1xyXG4gICAgYmFja2dyb3VuZDogIzVFODZDNDtcclxuICAgIHdpZHRoOjE0cHg7XHJcbiAgICBoZWlnaHQ6MTRweDtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgdG9wOi04cHg7XHJcbiAgICBsZWZ0OjUwJTtcclxuICAgIG1hcmdpbi1sZWZ0Oi03cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOjEwMCU7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6MTAwJTtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czoxMDAlO1xyXG4gIH1cclxuXHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4ge1xyXG4gICAgICAwJSB7XHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAxMDAlIHtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgQC1tb3ota2V5ZnJhbWVzIHNwaW4ge1xyXG4gICAgICAwJSB7XHJcbiAgICAgICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAxMDAlIHtcclxuICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgfVxyXG4gIH1cclxufVxyXG4iLCIud2VsY29tZS1jYXJkIGltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbiNub3RpZmljYXRpb24tYnV0dG9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDBweDtcbiAgcmlnaHQ6IC01cHg7XG4gIGxlZnQ6IC0zcHg7XG4gIGZvbnQtc2l6ZTogMS4yNWVtO1xufVxuXG4jbm90aWZpY2F0aW9ucy1iYWRnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAwLjVlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG5QIHtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIGZvbnQtc2l6ZTogMS4yNWV4O1xufVxuXG5pb24tY2FyZCBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogM2VtO1xufVxuXG5wYWdlLWhvbWUgLmNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbnBhZ2UtaG9tZSAuaW9uaWMtbG9nbyB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA4N3B4O1xuICBoZWlnaHQ6IDg3cHg7XG4gIGJvcmRlcjogMy41cHggc29saWQgIzVFODZDNDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAxMDAlO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIC1tb3otYW5pbWF0aW9uOiBzcGluIDJzIGluZmluaXRlIGxpbmVhcjtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMnMgaW5maW5pdGUgbGluZWFyO1xufVxucGFnZS1ob21lIC5pb25pYy1sb2dvOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMzhweDtcbiAgaGVpZ2h0OiAzOHB4O1xuICBiYWNrZ3JvdW5kOiAjNUU4NkM0O1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTE5cHg7XG4gIG1hcmdpbi10b3A6IC0xOXB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTAwJTtcbn1cbnBhZ2UtaG9tZSAuaW9uaWMtbG9nbzpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiAjNUU4NkM0O1xuICB3aWR0aDogMTRweDtcbiAgaGVpZ2h0OiAxNHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLThweDtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTdweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAxMDAlO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgc3BpbiB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIHNwaW4ge1xuICAwJSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/home/home.page.ts": 
        /*!***********************************!*\
          !*** ./src/app/home/home.page.ts ***!
          \***********************************/
        /*! exports provided: HomePage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function () { return HomePage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var src_shared_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/shared */ "./src/shared/shared.ts");
            /* harmony import */ var src_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/service */ "./src/shared/service.ts");
            /* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
            /* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_5__);
            /* harmony import */ var src_providers_data_service_masterDetailService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/providers/data-service/masterDetailService */ "./src/providers/data-service/masterDetailService.ts");
            /* harmony import */ var _popover__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./popover */ "./src/app/home/popover.ts");
            /* harmony import */ var _notificationPopover__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./notificationPopover */ "./src/app/home/notificationPopover.ts");
            var HomePage = /** @class */ (function () {
                function HomePage(navCtrl, authentication, service, popoverCtrl, ms, loading) {
                    this.navCtrl = navCtrl;
                    this.authentication = authentication;
                    this.service = service;
                    this.popoverCtrl = popoverCtrl;
                    this.ms = ms;
                    this.loading = loading;
                    this.completedMonth = [];
                    this.rentalMonth = [];
                    this.Months = [];
                    this.AvailableCount = 0;
                    this.WishesCount = 0;
                    this.NotificationCount = 0;
                    this.TransactionsCount = 0;
                }
                HomePage.prototype.ionViewWillEnter = function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var _a;
                        var _this = this;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    if (!(this.authentication.getAccessToken() != null)) return [3 /*break*/, 2];
                                    this.RentedOut = 0;
                                    _a = this;
                                    return [4 /*yield*/, this.loading.create({ message: 'loading dashboard...' })];
                                case 1:
                                    _a.loader = _b.sent();
                                    this.loader.present().then(function () {
                                        _this.drawLineChart();
                                        _this.getRentalStatus();
                                        _this.getBookCounts();
                                        _this.getActiveWishList();
                                        _this.getNotificationList();
                                        _this.getRentalTransactions();
                                    });
                                    return [3 /*break*/, 3];
                                case 2:
                                    this.navCtrl.navigateForward('tabs/login');
                                    _b.label = 3;
                                case 3: return [2 /*return*/];
                            }
                        });
                    });
                };
                HomePage.prototype.presentPopover = function (myEvent) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var popover;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.popoverCtrl.create({
                                        component: _popover__WEBPACK_IMPORTED_MODULE_7__["PopoverPage"],
                                        componentProps: { data: this.wishes },
                                        event: myEvent,
                                        translucent: true
                                    })];
                                case 1:
                                    popover = _a.sent();
                                    return [4 /*yield*/, popover.present()];
                                case 2: return [2 /*return*/, _a.sent()];
                            }
                        });
                    });
                };
                HomePage.prototype.notificationPopover = function (myEvent) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var popover;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.popoverCtrl.create({ component: _notificationPopover__WEBPACK_IMPORTED_MODULE_8__["NotificationPopoverPage"], componentProps: { data: this.notification } })];
                                case 1:
                                    popover = _a.sent();
                                    popover.present();
                                    popover.onDidDismiss();
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                HomePage.prototype.bookInfo = function (key) {
                    this.ms.setDestn(key);
                    this.navCtrl.navigateForward('/tabs/bookInfo');
                };
                HomePage.prototype.showRentals = function (key) {
                    this.ms.setDestn(key);
                    this.navCtrl.navigateForward('/tabs/rentalsPage');
                };
                HomePage.prototype.showStats = function () {
                    this.navCtrl.navigateForward('/tabs/statsPage');
                };
                HomePage.prototype.showHistory = function (key) {
                    this.ms.setDestn(key);
                    this.navCtrl.navigateForward('/tabs/historyPage');
                };
                HomePage.prototype.getNotificationList = function () {
                    var _this = this;
                    this.service.getNotificationList().then(function (data) {
                        _this.notification = data;
                        _this.NotificationCount = _this.notification.length;
                    });
                };
                HomePage.prototype.getRentalTransactions = function () {
                    var _this = this;
                    this.service.getRentalTransactions().then(function (data) {
                        _this.Transactions = data;
                        _this.TransactionsCount = _this.Transactions.length;
                        _this.loader.dismiss();
                    });
                };
                HomePage.prototype.getActiveWishList = function () {
                    var _this = this;
                    this.service.getActiveWishList().then(function (data) {
                        _this.wishes = data;
                        _this.WishesCount = _this.wishes.length;
                    });
                };
                HomePage.prototype.getBookCounts = function () {
                    var _this = this;
                    this.service.searchTrans('book', '').then(function (data) {
                        _this.books = data;
                        _this.RentedOut = _this.books.reduce(function (previous, current) {
                            return previous + parseInt(current.RentedCopies, 10);
                        }, 0);
                        _this.AvailableCount = _this.books.reduce(function (previous, current) {
                            return previous + parseInt(current.TotalCopies, 10);
                        }, 0);
                    }).catch(function (err) {
                        console.log(err);
                    });
                };
                HomePage.prototype.getRentalStatus = function () {
                    var _this = this;
                    this.service.getRentalStatus('monthly', '0').then(function (data) {
                        _this.booksStat = data;
                        _this.completedMonth.length = 0;
                        _this.rentalMonth.length = 0;
                        _this.Months.length = 0;
                        _this.booksStat.forEach(function (key) {
                            if (key.Stat === 17) {
                                _this.completedMonth.push(key.Borrower);
                            }
                            else {
                                _this.rentalMonth.push(key.Borrower);
                                _this.Months.push(key.RentalMonth);
                            }
                        });
                        _this.lineChart.update();
                    }).catch(function (err) {
                        console.log(err);
                    });
                };
                HomePage.prototype.drawLineChart = function () {
                    this.lineChart = new chart_js__WEBPACK_IMPORTED_MODULE_5__["Chart"](this.lineCanvas.nativeElement, {
                        type: 'line',
                        data: {
                            labels: this.Months,
                            datasets: [
                                {
                                    label: 'Completed',
                                    fill: false,
                                    lineTension: 0.1,
                                    backgroundColor: 'rgba(75,192,192,0.4)',
                                    borderColor: 'rgba(75,192,192,1)',
                                    borderCapStyle: 'butt',
                                    borderDash: [],
                                    borderDashOffset: 0.0,
                                    borderJoinStyle: 'miter',
                                    pointBorderColor: 'rgba(75,192,192,1)',
                                    pointBackgroundColor: '#fff',
                                    pointBorderWidth: 1,
                                    pointHoverRadius: 5,
                                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                                    pointHoverBorderWidth: 1,
                                    pointRadius: 1,
                                    pointHitRadius: 1,
                                    data: this.completedMonth,
                                    spanGaps: true,
                                },
                                {
                                    label: 'Current Rental',
                                    fill: false,
                                    lineTension: 0.1,
                                    backgroundColor: 'rgba(192,77,192,0.4)',
                                    borderColor: 'rgba(192,77,192,1)',
                                    borderCapStyle: 'butt',
                                    borderDash: [],
                                    borderDashOffset: 0.0,
                                    borderJoinStyle: 'miter',
                                    pointBorderColor: 'rgba(192,77,192,1)',
                                    pointBackgroundColor: '#fff',
                                    pointBorderWidth: 1,
                                    pointHoverRadius: 5,
                                    pointHoverBackgroundColor: 'rgba(192,77,192,1)',
                                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                                    pointHoverBorderWidth: 1,
                                    pointRadius: 1,
                                    pointHitRadius: 1,
                                    data: this.rentalMonth,
                                    spanGaps: true,
                                }
                            ]
                        }
                    });
                };
                HomePage.prototype.logOut = function () {
                    this.authentication.logout();
                    this.navCtrl.navigateForward('/tabs/login');
                };
                return HomePage;
            }());
            HomePage.ctorParameters = function () { return [
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
                { type: src_shared_shared__WEBPACK_IMPORTED_MODULE_3__["Authentication"] },
                { type: src_shared_service__WEBPACK_IMPORTED_MODULE_4__["ICBService"] },
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
                { type: src_providers_data_service_masterDetailService__WEBPACK_IMPORTED_MODULE_6__["MasterDetailService"] },
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('lineCanvas', { static: false }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
            ], HomePage.prototype, "lineCanvas", void 0);
            HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], src_shared_shared__WEBPACK_IMPORTED_MODULE_3__["Authentication"],
                    src_shared_service__WEBPACK_IMPORTED_MODULE_4__["ICBService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"], src_providers_data_service_masterDetailService__WEBPACK_IMPORTED_MODULE_6__["MasterDetailService"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
            ], HomePage);
            /***/ 
        })
    }]);
//# sourceMappingURL=home-home-module-es2015.js.map
//# sourceMappingURL=home-home-module-es5.js.map
//# sourceMappingURL=home-home-module-es5.js.map