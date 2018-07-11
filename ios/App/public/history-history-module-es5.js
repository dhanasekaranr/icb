(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["history-history-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/history/history.page.html": 
        /*!*********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/history/history.page.html ***!
          \*********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (" <app-header title=\"Completed Book List\"></app-header> \n  <ion-content class=\"home\" padding>\n    <ion-item>\n        <ion-searchbar\n        [showCancelButton]=\"true\"\n        (ionInput)=\"FilterBookDB($event)\"\n        (ionCancel)=\"searchUserDB()\">\n      </ion-searchbar>\n    </ion-item>\n    <span style=\"color:red\" *ngIf=\"books\"><p>Total Books completed : {{books.length}}</p> </span>\n<!--\n    <ion-row radio-group>\n      <ion-col *ngFor=\"let name of renters\">\n        <ion-item>\n          <ion-label><p>{{name}}</p></ion-label>\n          <ion-radio value=\"{{name}}\"></ion-radio>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n-->\n    <ion-list>\n      <ion-item *ngFor=\"let book of books | search: null:null:null:CodeSearch\">\n        <ion-avatar slot=\"start\" (click)=\"bookInfo(book)\" >\n          <img src=\"{{book.PictureLink}}\">\n        </ion-avatar>\n        <ion-label>\n        <h2>{{book.Description}}</h2>\n        <p>{{book.BorrowerName}}</p>\n        <p>Rented on {{book.RentedDate | date: 'MM/dd/yyyy'}}</p>\n        <p *ngIf=\"book.DaysRented > 0 \"> Returned in {{book.DaysRented}} days</p>\n      </ion-label>\n      </ion-item>\n    </ion-list>\n  </ion-content>\n");
            /***/ 
        }),
        /***/ "./src/app/history/history.module.ts": 
        /*!*******************************************!*\
          !*** ./src/app/history/history.module.ts ***!
          \*******************************************/
        /*! exports provided: HistoryPageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPageModule", function () { return HistoryPageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _history_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./history.page */ "./src/app/history/history.page.ts");
            /* harmony import */ var src_shared_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/shared/pipes.module */ "./src/shared/pipes.module.ts");
            /* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../layout/layout.module */ "./src/app/layout/layout.module.ts");
            var HistoryPageModule = /** @class */ (function () {
                function HistoryPageModule() {
                }
                return HistoryPageModule;
            }());
            HistoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
                    imports: [
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                        _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _history_page__WEBPACK_IMPORTED_MODULE_6__["HistoryPage"] }]), src_shared_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], _layout_layout_module__WEBPACK_IMPORTED_MODULE_8__["LayoutModule"]
                    ],
                    declarations: [_history_page__WEBPACK_IMPORTED_MODULE_6__["HistoryPage"]]
                })
            ], HistoryPageModule);
            /***/ 
        }),
        /***/ "./src/app/history/history.page.scss": 
        /*!*******************************************!*\
          !*** ./src/app/history/history.page.scss ***!
          \*******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hpc3RvcnkvaGlzdG9yeS5wYWdlLnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/history/history.page.ts": 
        /*!*****************************************!*\
          !*** ./src/app/history/history.page.ts ***!
          \*****************************************/
        /*! exports provided: HistoryPage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPage", function () { return HistoryPage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var src_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/service */ "./src/shared/service.ts");
            /* harmony import */ var src_shared_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/shared */ "./src/shared/shared.ts");
            /* harmony import */ var src_providers_data_service_masterDetailService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/providers/data-service/masterDetailService */ "./src/providers/data-service/masterDetailService.ts");
            var HistoryPage = /** @class */ (function () {
                function HistoryPage(navCtrl, bookService, authentication, ms) {
                    this.navCtrl = navCtrl;
                    this.bookService = bookService;
                    this.authentication = authentication;
                    this.ms = ms;
                    this.copy = 0;
                    this.code = '';
                    this.CodeSearch = '';
                    //
                    this.i = 0;
                }
                HistoryPage.prototype.ionViewWillEnter = function () {
                    this.getBookRead();
                };
                HistoryPage.prototype.getBookRead = function () {
                    var _this = this;
                    this.bookService.getBookRead().then(function (data) {
                        _this.books = data;
                        var curr = data.map(function (d) { return d.BorrowerName; });
                        _this.renters = curr.filter(function (x, i, a) { return x && a.indexOf(x) === i; });
                    });
                };
                HistoryPage.prototype.bookInfo = function (key) {
                    this.ms.setDestn(key);
                    this.navCtrl.navigateForward('/tabs/bookInfo');
                };
                HistoryPage.prototype.FilterBookDB = function (event) {
                    this.CodeSearch = event.target.value;
                };
                HistoryPage.prototype.updateStat = function (selcode, seldesc) {
                    /*this.navCtrl.push(CheckOutPage, {
                        code: selcode, desc: seldesc, action: 'Out'
                     });*/
                };
                HistoryPage.prototype.searchUserDB = function () {
                    this.getBookRead();
                };
                return HistoryPage;
            }());
            HistoryPage.ctorParameters = function () { return [
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
                { type: src_shared_service__WEBPACK_IMPORTED_MODULE_3__["ICBService"] },
                { type: src_shared_shared__WEBPACK_IMPORTED_MODULE_4__["Authentication"] },
                { type: src_providers_data_service_masterDetailService__WEBPACK_IMPORTED_MODULE_5__["MasterDetailService"] }
            ]; };
            HistoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-history',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./history.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/history/history.page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./history.page.scss */ "./src/app/history/history.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], src_shared_service__WEBPACK_IMPORTED_MODULE_3__["ICBService"],
                    src_shared_shared__WEBPACK_IMPORTED_MODULE_4__["Authentication"], src_providers_data_service_masterDetailService__WEBPACK_IMPORTED_MODULE_5__["MasterDetailService"]])
            ], HistoryPage);
            /***/ 
        })
    }]);
//# sourceMappingURL=history-history-module-es2015.js.map
//# sourceMappingURL=history-history-module-es5.js.map
//# sourceMappingURL=history-history-module-es5.js.map