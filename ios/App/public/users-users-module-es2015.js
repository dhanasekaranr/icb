(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users-users-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/users.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/users.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"User List\"></app-header>\n<ion-content class=\"home\" padding>\n  <ion-item>\n      <ion-searchbar\n      [showCancelButton]=\"true\"\n      (ionInput)=\"FilterUserDB($event)\"\n      (ionCancel)=\"searchUserDB($event)\">\n    </ion-searchbar>\n  </ion-item>\n  <ion-list>\n  <ion-item *ngFor=\"let user of users | search: null:null:null:null:FirstNameSearch\">\n      <ion-avatar slot=\"\"> \n          <ion-icon name=\"person\" ></ion-icon>\n      </ion-avatar>\n      <ion-label text-wrap>\n         <h2>{{user.FirstName}} {{user.LastName}}</h2><p *ngIf=\"user.JSONObject\">( Rented : {{user.JSONObject.length}} )</p>\n         <ion-label *ngIf=\"user.JSONObject\">\n            <ion-item lines=\"none\" *ngFor=\"let bk of user.JSONObject\" >\n              <p><span style=\"color: green; font-size: .8em\">{{bk.Code.substr(14,3)}}</span> - {{bk.Description}}</p>\n              <ion-button slot=\"end\" color=\"primary\" (click)=\"notify(user.Id,bk.Description, bk.TransactionId)\">\n                Notify ({{bk.RentedTransactionUpdate - 1}})\n              </ion-button>\n             </ion-item>\n          </ion-label>  \n      </ion-label>\n  </ion-item>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/users/users.module.ts":
/*!***************************************!*\
  !*** ./src/app/users/users.module.ts ***!
  \***************************************/
/*! exports provided: UsersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersPageModule", function() { return UsersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../layout/layout.module */ "./src/app/layout/layout.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _users_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./users.page */ "./src/app/users/users.page.ts");
/* harmony import */ var src_shared_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/shared/pipes.module */ "./src/shared/pipes.module.ts");









let UsersPageModule = class UsersPageModule {
};
UsersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{ path: '', component: _users_page__WEBPACK_IMPORTED_MODULE_7__["UsersPage"] }]), src_shared_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"], _layout_layout_module__WEBPACK_IMPORTED_MODULE_1__["LayoutModule"]
        ],
        declarations: [_users_page__WEBPACK_IMPORTED_MODULE_7__["UsersPage"]]
    })
], UsersPageModule);



/***/ }),

/***/ "./src/app/users/users.page.scss":
/*!***************************************!*\
  !*** ./src/app/users/users.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXJzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/users/users.page.ts":
/*!*************************************!*\
  !*** ./src/app/users/users.page.ts ***!
  \*************************************/
/*! exports provided: UsersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersPage", function() { return UsersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/service */ "./src/shared/service.ts");
/* harmony import */ var src_shared_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/shared */ "./src/shared/shared.ts");





let UsersPage = class UsersPage {
    constructor(navCtrl, icbservice, platform, actionsheetCtrl, toastCtrl, loading, authentication) {
        this.navCtrl = navCtrl;
        this.icbservice = icbservice;
        this.platform = platform;
        this.actionsheetCtrl = actionsheetCtrl;
        this.toastCtrl = toastCtrl;
        this.loading = loading;
        this.authentication = authentication;
        this.queryval = '';
    }
    ionViewWillEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.authentication.getAccessToken() != null) {
                this.loader = yield this.loading.create({ message: 'Getting Users...' });
                this.searchUserDB(null);
            }
            else {
                this.navCtrl.navigateForward('tabs/login');
            }
        });
    }
    searchUserDB(event) {
        this.queryval = '';
        if (event) {
            if (event.target.value !== undefined) {
                this.queryval = event.target.value;
            }
        }
        if (this.queryval.length > 1 || this.queryval === '') {
            this.loader.present().then(() => {
                this.icbservice.searchTrans('user', this.queryval).then(data => {
                    this.users = data;
                    this.loader.dismiss();
                });
            });
        }
    }
    FilterUserDB(event) {
        this.FirstNameSearch = event.target.value;
    }
    notify(userId, BookId, transactions) {
        this.icbservice.notify(userId, BookId, transactions, this.queryval).then((data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.users = data;
            const toast = yield this.toastCtrl.create({
                message: 'Notified User !',
                duration: 2000
            });
            toast.present();
        }));
    }
};
UsersPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: src_shared_service__WEBPACK_IMPORTED_MODULE_3__["ICBService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: src_shared_shared__WEBPACK_IMPORTED_MODULE_4__["Authentication"] }
];
UsersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-users',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./users.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/users.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./users.page.scss */ "./src/app/users/users.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], src_shared_service__WEBPACK_IMPORTED_MODULE_3__["ICBService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        src_shared_shared__WEBPACK_IMPORTED_MODULE_4__["Authentication"]])
], UsersPage);



/***/ })

}]);
//# sourceMappingURL=users-users-module-es2015.js.map