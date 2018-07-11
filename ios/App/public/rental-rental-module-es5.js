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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rental-rental-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/rental/rental.page.html": 
        /*!*******************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/rental/rental.page.html ***!
          \*******************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header [title]=\"'Rental'\"></app-header>\n\n<ion-content class=\"home\" padding>\n  <ion-item>\n    <ion-searchbar\n      [showCancelButton]=\"true\"\n      (ionInput)=\"FilterBookDB($event)\"\n      (ionCancel)=\"searchTransDB()\">\n    </ion-searchbar>\n  </ion-item>\n\n  <ion-list>\n      <ion-item *ngFor=\"let book of books | search: null:CodeSearch\">\n        <ion-label text-wrap>\n          <h2>{{book.Code}}</h2>\n          <p class=\"item-description\">{{book.Description}}</p>\n          <p *ngIf=\"book.Status != 2\" style=\"color:green;\">{{book.RenterName}} </p>\n        </ion-label>    \n        <ion-button color=\"danger\" (click)=\"markReturn(book.TransactionId)\" slot=\"end\" *ngIf=\"book.Status != 2 \">\n            <ion-icon name=\"refresh\"></ion-icon>\n            Return Book\n        </ion-button>\n        <ion-button color=\"primary\" (click)=\"checkout(book)\" slot=\"end\" *ngIf=\"book.Status == 2 \">\n            <ion-icon name=\"cart\"></ion-icon>\n            Check out\n        </ion-button>          \n      </ion-item>\n  </ion-list>\n</ion-content>");
            /***/ 
        }),
        /***/ "./src/app/rental/rental.module.ts": 
        /*!*****************************************!*\
          !*** ./src/app/rental/rental.module.ts ***!
          \*****************************************/
        /*! exports provided: RentalPageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RentalPageModule", function () { return RentalPageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _rental_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rental.page */ "./src/app/rental/rental.page.ts");
            /* harmony import */ var src_shared_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/shared/pipes.module */ "./src/shared/pipes.module.ts");
            /* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../layout/layout.module */ "./src/app/layout/layout.module.ts");
            var RentalPageModule = /** @class */ (function () {
                function RentalPageModule() {
                }
                return RentalPageModule;
            }());
            RentalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
                    imports: [
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                        _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _rental_page__WEBPACK_IMPORTED_MODULE_6__["RentalPage"] }]), src_shared_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], _layout_layout_module__WEBPACK_IMPORTED_MODULE_8__["LayoutModule"]
                    ],
                    declarations: [_rental_page__WEBPACK_IMPORTED_MODULE_6__["RentalPage"]]
                })
            ], RentalPageModule);
            /***/ 
        }),
        /***/ "./src/app/rental/rental.page.scss": 
        /*!*****************************************!*\
          !*** ./src/app/rental/rental.page.scss ***!
          \*****************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlbnRhbC9yZW50YWwucGFnZS5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/rental/rental.page.ts": 
        /*!***************************************!*\
          !*** ./src/app/rental/rental.page.ts ***!
          \***************************************/
        /*! exports provided: RentalPage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RentalPage", function () { return RentalPage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_shared_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared/shared */ "./src/shared/shared.ts");
            /* harmony import */ var src_providers_data_service_masterDetailService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/data-service/masterDetailService */ "./src/providers/data-service/masterDetailService.ts");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var src_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/shared/service */ "./src/shared/service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var RentalPage = /** @class */ (function () {
                function RentalPage(navCtrl, icbservice, platform, toastCtrl, authentication, loading, ms, route, router) {
                    this.navCtrl = navCtrl;
                    this.icbservice = icbservice;
                    this.platform = platform;
                    this.toastCtrl = toastCtrl;
                    this.authentication = authentication;
                    this.loading = loading;
                    this.ms = ms;
                    this.route = route;
                    this.router = router;
                    this.CodeSearch = '';
                }
                RentalPage.prototype.searchTransDB = function () {
                    var _this = this;
                    this.icbservice.searchTrans('book', 'GetBookCodes').then(function (data) {
                        _this.books = data;
                    });
                };
                RentalPage.prototype.FilterBookDB = function (event) {
                    this.CodeSearch = event.target.value;
                };
                RentalPage.prototype.OnDestroy = function () {
                    this.sub.unsubscribe();
                };
                RentalPage.prototype.ionViewWillEnter = function () {
                    var _this = this;
                    this.sub = this.route
                        .queryParams
                        .subscribe(function (params) {
                        if (params.refresh) {
                            _this.books = null;
                        }
                    });
                    if (this.books != null) {
                        return;
                    }
                    if (this.authentication.getAccessToken() != null) {
                        this.loader = this.loading.create({
                            message: 'Getting books...'
                        });
                        this.searchTransDB();
                    }
                    else {
                        this.navCtrl.navigateForward('tabs/login');
                    }
                };
                RentalPage.prototype.markReturn = function (trasnsId) {
                    var _this = this;
                    this.icbservice.markReturn(trasnsId).then(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var toast;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.toastCtrl.create({
                                        message: 'Returned successfully !',
                                        duration: 2000
                                    })];
                                case 1:
                                    toast = _a.sent();
                                    toast.present();
                                    this.searchTransDB();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                };
                RentalPage.prototype.checkout = function (key) {
                    this.ms.setDestn(key);
                    this.ms.setAction('Out');
                    this.ms.setHome('N');
                    this.navCtrl.navigateForward('tabs/checkoutPage');
                };
                return RentalPage;
            }());
            RentalPage.ctorParameters = function () { return [
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
                { type: src_shared_service__WEBPACK_IMPORTED_MODULE_5__["ICBService"] },
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
                { type: src_shared_shared__WEBPACK_IMPORTED_MODULE_2__["Authentication"] },
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
                { type: src_providers_data_service_masterDetailService__WEBPACK_IMPORTED_MODULE_3__["MasterDetailService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
            ]; };
            RentalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-rental',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./rental.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/rental/rental.page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./rental.page.scss */ "./src/app/rental/rental.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], src_shared_service__WEBPACK_IMPORTED_MODULE_5__["ICBService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], src_shared_shared__WEBPACK_IMPORTED_MODULE_2__["Authentication"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
                    src_providers_data_service_masterDetailService__WEBPACK_IMPORTED_MODULE_3__["MasterDetailService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
            ], RentalPage);
            /***/ 
        })
    }]);
//# sourceMappingURL=rental-rental-module-es2015.js.map
//# sourceMappingURL=rental-rental-module-es5.js.map
//# sourceMappingURL=rental-rental-module-es5.js.map