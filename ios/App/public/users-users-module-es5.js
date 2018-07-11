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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users-users-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/users.page.html": 
        /*!*****************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/users.page.html ***!
          \*****************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header title=\"User List\"></app-header>\n<ion-content class=\"home\" padding>\n  <ion-item>\n      <ion-searchbar\n      [showCancelButton]=\"true\"\n      (ionInput)=\"FilterUserDB($event)\"\n      (ionCancel)=\"searchUserDB($event)\">\n    </ion-searchbar>\n  </ion-item>\n  <ion-list>\n  <ion-item *ngFor=\"let user of users | search: null:null:null:null:FirstNameSearch\">\n      <ion-avatar slot=\"\"> \n          <ion-icon name=\"person\" ></ion-icon>\n      </ion-avatar>\n      <ion-label text-wrap>\n         <h2>{{user.FirstName}} {{user.LastName}}</h2><p *ngIf=\"user.JSONObject\">( Rented : {{user.JSONObject.length}} )</p>\n         <ion-label *ngIf=\"user.JSONObject\">\n            <ion-item lines=\"none\" *ngFor=\"let bk of user.JSONObject\" >\n              <p><span style=\"color: green; font-size: .8em\">{{bk.Code.substr(14,3)}}</span> - {{bk.Description}}</p>\n              <ion-button slot=\"end\" color=\"primary\" (click)=\"notify(user.Id,bk.Description, bk.TransactionId)\">\n                Notify ({{bk.RentedTransactionUpdate - 1}})\n              </ion-button>\n             </ion-item>\n          </ion-label>  \n      </ion-label>\n  </ion-item>\n  </ion-list>\n</ion-content>\n");
            /***/ 
        }),
        /***/ "./src/app/users/users.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/users/users.module.ts ***!
          \***************************************/
        /*! exports provided: UsersPageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersPageModule", function () { return UsersPageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../layout/layout.module */ "./src/app/layout/layout.module.ts");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _users_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./users.page */ "./src/app/users/users.page.ts");
            /* harmony import */ var src_shared_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/shared/pipes.module */ "./src/shared/pipes.module.ts");
            var UsersPageModule = /** @class */ (function () {
                function UsersPageModule() {
                }
                return UsersPageModule;
            }());
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
            /***/ 
        }),
        /***/ "./src/app/users/users.page.scss": 
        /*!***************************************!*\
          !*** ./src/app/users/users.page.scss ***!
          \***************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXJzLnBhZ2Uuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/users/users.page.ts": 
        /*!*************************************!*\
          !*** ./src/app/users/users.page.ts ***!
          \*************************************/
        /*! exports provided: UsersPage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersPage", function () { return UsersPage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var src_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/service */ "./src/shared/service.ts");
            /* harmony import */ var src_shared_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/shared */ "./src/shared/shared.ts");
            var UsersPage = /** @class */ (function () {
                function UsersPage(navCtrl, icbservice, platform, actionsheetCtrl, toastCtrl, loading, authentication) {
                    this.navCtrl = navCtrl;
                    this.icbservice = icbservice;
                    this.platform = platform;
                    this.actionsheetCtrl = actionsheetCtrl;
                    this.toastCtrl = toastCtrl;
                    this.loading = loading;
                    this.authentication = authentication;
                    this.queryval = '';
                }
                UsersPage.prototype.ionViewWillEnter = function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    if (!(this.authentication.getAccessToken() != null)) return [3 /*break*/, 2];
                                    _a = this;
                                    return [4 /*yield*/, this.loading.create({ message: 'Getting Users...' })];
                                case 1:
                                    _a.loader = _b.sent();
                                    this.searchUserDB(null);
                                    return [3 /*break*/, 3];
                                case 2:
                                    this.navCtrl.navigateForward('tabs/login');
                                    _b.label = 3;
                                case 3: return [2 /*return*/];
                            }
                        });
                    });
                };
                UsersPage.prototype.searchUserDB = function (event) {
                    var _this = this;
                    this.queryval = '';
                    if (event) {
                        if (event.target.value !== undefined) {
                            this.queryval = event.target.value;
                        }
                    }
                    if (this.queryval.length > 1 || this.queryval === '') {
                        this.loader.present().then(function () {
                            _this.icbservice.searchTrans('user', _this.queryval).then(function (data) {
                                _this.users = data;
                                _this.loader.dismiss();
                            });
                        });
                    }
                };
                UsersPage.prototype.FilterUserDB = function (event) {
                    this.FirstNameSearch = event.target.value;
                };
                UsersPage.prototype.notify = function (userId, BookId, transactions) {
                    var _this = this;
                    this.icbservice.notify(userId, BookId, transactions, this.queryval).then(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var toast;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    this.users = data;
                                    return [4 /*yield*/, this.toastCtrl.create({
                                            message: 'Notified User !',
                                            duration: 2000
                                        })];
                                case 1:
                                    toast = _a.sent();
                                    toast.present();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                };
                return UsersPage;
            }());
            UsersPage.ctorParameters = function () { return [
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
                { type: src_shared_service__WEBPACK_IMPORTED_MODULE_3__["ICBService"] },
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
                { type: src_shared_shared__WEBPACK_IMPORTED_MODULE_4__["Authentication"] }
            ]; };
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
            /***/ 
        })
    }]);
//# sourceMappingURL=users-users-module-es2015.js.map
//# sourceMappingURL=users-users-module-es5.js.map
//# sourceMappingURL=users-users-module-es5.js.map