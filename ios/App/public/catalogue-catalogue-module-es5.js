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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["catalogue-catalogue-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/catalogue/catalogue.page.html": 
        /*!*************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/catalogue/catalogue.page.html ***!
          \*************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header [title]=\"'Catalogue'\"></app-header>\n<ion-content class=\"home\" padding >\n    <span *ngIf=\"this.AvailableCount\" style=\"color: green; font-size: .8em;align-content: right\">\n      Total Books:{{this.AvailableCount}}({{this.books.length}}); Rented Out:{{this.RentedOut}}</span>\n    <ion-item>\n      <ion-searchbar\n        [showCancelButton]=\"true\"\n        (ionInput)=\"FilterBookDB($event)\"\n        (ionCancel)=\"searchBookDB($event)\">\n      </ion-searchbar>\n    </ion-item>\n    <ion-list>\n      <ion-item-sliding *ngFor=\"let book of books | search : DescriptionSearch : null\" >\n        <ion-item>\n\n             <ion-avatar thumbnail  slot=\"start\" (click)=\"bookInfo(book)\">\n                  <img src=\"{{book.PictureLink}}\" />\n              </ion-avatar>\n              <ion-label text-wrap> \n                  <h2>{{book.Description}}</h2>\n                  <p *ngIf=\"book.TotalCopies > 0\" class=\"item-description\">\n                    Available : {{book.TotalCopies - book.RentedCopies}}\n                  <span *ngIf=\"book.RentedCopies > 0\">[Checked Out : {{book.RentedCopies}}]</span></p>\n                  <p *ngIf=\"book.TotalCopies == 1\" style=\"color:green;\">{{book.Code}} </p>\n              </ion-label>\n\n          <ion-icon *ngIf=\"book.WishList != 'Y'\" name=\"heart-empty\" (click)=\"AddToWishList(book,'Y','Added to Wish List!')\" style=\"color:red\" title=\"Add to Wish list\"></ion-icon>\n          <ion-icon *ngIf=\"book.WishList === 'Y'\" name=\"heart\" (click)=\"AddToWishList(book,'N','Removed from your Wish List!')\" style=\"color:red\" title=\"Remove from Wish list\"></ion-icon>\n      </ion-item>\n        <ion-item-options *ngIf=\"this.authentication.getIsAdmin() == 'Y'\" side=\"end\">\n          <button ion-button color=\"danger\" style=\"background-color: red;color:white\" (click)=\"returnBook(book)\"  *ngIf=\"book.RentedCopies > 0 \">\n              <ion-icon name=\"refresh\"></ion-icon>\n              Return ({{book.RentedCopies}})\n          </button>\n          <button ion-button  color=\"primary\" style=\"background-color: green; color:white\" (click)=\"checkout(book)\" *ngIf=\"(book.TotalCopies - book.RentedCopies) > 0\" >\n              <ion-icon name=\"cart\"></ion-icon>\n            Check out ({{book.TotalCopies - book.RentedCopies}})\n          </button>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n</ion-content>\n\n\n\n");
            /***/ 
        }),
        /***/ "./src/app/catalogue/catalogue.module.ts": 
        /*!***********************************************!*\
          !*** ./src/app/catalogue/catalogue.module.ts ***!
          \***********************************************/
        /*! exports provided: CataloguePageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CataloguePageModule", function () { return CataloguePageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layout/layout.module */ "./src/app/layout/layout.module.ts");
            /* harmony import */ var _catalogue_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catalogue.page */ "./src/app/catalogue/catalogue.page.ts");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var src_shared_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/shared/pipes.module */ "./src/shared/pipes.module.ts");
            var CataloguePageModule = /** @class */ (function () {
                function CataloguePageModule() {
                }
                return CataloguePageModule;
            }());
            CataloguePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
                    imports: [
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                        _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{ path: '', component: _catalogue_page__WEBPACK_IMPORTED_MODULE_2__["CataloguePage"] }]), src_shared_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"], _layout_layout_module__WEBPACK_IMPORTED_MODULE_1__["LayoutModule"]
                    ],
                    declarations: [_catalogue_page__WEBPACK_IMPORTED_MODULE_2__["CataloguePage"]]
                })
            ], CataloguePageModule);
            /***/ 
        }),
        /***/ "./src/app/catalogue/catalogue.page.scss": 
        /*!***********************************************!*\
          !*** ./src/app/catalogue/catalogue.page.scss ***!
          \***********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGFsb2d1ZS9jYXRhbG9ndWUucGFnZS5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/catalogue/catalogue.page.ts": 
        /*!*********************************************!*\
          !*** ./src/app/catalogue/catalogue.page.ts ***!
          \*********************************************/
        /*! exports provided: CataloguePage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CataloguePage", function () { return CataloguePage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var src_app_layout_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/layout/header */ "./src/app/layout/header.ts");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var src_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/service */ "./src/shared/service.ts");
            /* harmony import */ var src_shared_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/shared/shared */ "./src/shared/shared.ts");
            /* harmony import */ var src_providers_data_service_masterDetailService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/providers/data-service/masterDetailService */ "./src/providers/data-service/masterDetailService.ts");
            var CataloguePage = /** @class */ (function () {
                function CataloguePage(navCtrl, service, platform, actionsheetCtrl, authentication, loading, toastCtrl, ms) {
                    this.navCtrl = navCtrl;
                    this.service = service;
                    this.platform = platform;
                    this.actionsheetCtrl = actionsheetCtrl;
                    this.authentication = authentication;
                    this.loading = loading;
                    this.toastCtrl = toastCtrl;
                    this.ms = ms;
                    this.queryval = '';
                    this.DescriptionSearch = '';
                }
                CataloguePage.prototype.ionViewWillEnter = function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    if (!(this.authentication.getAccessToken() != null)) return [3 /*break*/, 2];
                                    _a = this;
                                    return [4 /*yield*/, this.loading.create({ message: 'Getting books...' })];
                                case 1:
                                    _a.loader = _b.sent();
                                    this.searchBookDB(null);
                                    return [3 /*break*/, 3];
                                case 2:
                                    this.navCtrl.navigateForward('tabs/login');
                                    _b.label = 3;
                                case 3: return [2 /*return*/];
                            }
                        });
                    });
                };
                CataloguePage.prototype.searchBookDB = function (event) {
                    var _this = this;
                    if (event) {
                        if (event.target.value !== undefined) {
                            this.queryval = event.target.value;
                        }
                    }
                    if (this.queryval.length > 1 || this.queryval === '') {
                        this.loader.present().then(function () {
                            _this.service.searchTrans('book', _this.queryval).then(function (data) {
                                console.log(data);
                                _this.books = data;
                                _this.RentedOut = _this.books.reduce(function (previous, current) {
                                    return previous + parseInt(current.RentedCopies, 10);
                                }, 0);
                                _this.AvailableCount = _this.books.reduce(function (previous, current) {
                                    return previous + parseInt(current.TotalCopies, 10);
                                }, 0);
                                _this.loader.dismiss();
                            }).catch(function (err) {
                                console.log(err);
                            });
                        });
                    }
                };
                CataloguePage.prototype.getIdCheval = function () {
                    this.AvailableCount = this.books.reduce(function (previous, current) {
                        return previous + parseInt(current.Course.allocation, 10);
                    }, 0);
                };
                CataloguePage.prototype.FilterBookDB = function (event) {
                    this.DescriptionSearch = event.target.value;
                };
                CataloguePage.prototype.bookInfo = function (key) {
                    this.ms.setDestn(key);
                    this.navCtrl.navigateForward('tabs/bookInfo');
                };
                CataloguePage.prototype.AddToWishList = function (key, flag, message) {
                    var _this = this;
                    this.service.AddToWishList(key.ISBN).then(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var toast;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.toastCtrl.create({
                                        message: message,
                                        duration: 1000
                                    })];
                                case 1:
                                    toast = _a.sent();
                                    toast.present();
                                    key.WishList = flag;
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                };
                CataloguePage.prototype.returnBook = function (key) {
                    var _this = this;
                    if (key.TotalCopies > 1) {
                        this.ms.setDestn(key);
                        this.navCtrl.navigateForward('tabs/multipleReturnPage');
                    }
                    else {
                        this.service.markReturn(key.RentedTransId).then(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
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
                                        this.searchBookDB(null);
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                    }
                };
                CataloguePage.prototype.checkout = function (key) {
                    this.ms.setDestn(key);
                    this.ms.setAction('Out');
                    if (key.TotalCopies > 1) {
                        this.navCtrl.navigateForward('tabs/multiCopiesPage');
                    }
                    else {
                        this.ms.setHome('C');
                        this.navCtrl.navigateForward('tabs/checkoutPage');
                    }
                };
                CataloguePage.prototype.openMenu = function (event, key) {
                    var _this = this;
                    this.service.getBookProfile(key.ISBN).then(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var actionSheet;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    this.Available = data;
                                    this.RentedOut = this.Available.filter(function (t) { return t.Status === '3'; }).length;
                                    this.AvailableCount = this.Available.filter(function (t) { return t.Status !== '3'; }).length;
                                    return [4 /*yield*/, this.actionsheetCtrl.create({
                                            header: 'Click the link below.',
                                            cssClass: 'action-sheets-basic-page',
                                            buttons: [
                                                {
                                                    text: 'Book Info [Count: ' + this.Available.length + ']',
                                                    role: 'destructive',
                                                    icon: !this.platform.is('ios') ? 'list' : null,
                                                    handler: function () {
                                                        var navigationOptions = {
                                                            queryParams: {
                                                                book: key
                                                            }
                                                        };
                                                        _this.navCtrl.navigateForward('CheckOutPage', navigationOptions);
                                                    }
                                                },
                                                /*       {
                                                           text: 'Checked Out - ' + this.RentedOut,
                                                           icon: !this.platform.is('ios') ? 'share' : null,
                                                           handler: () => {
                                                               //console.log('Checked Out clicked');
                                                               if( this.RentedOut > 0 )
                                                               this.navCtrl.push(TransPage, {
                                                                 book:key, isbn: key.ISBN,action: 'Out'
                                                             });
                                                           }
                                                       },
                                                       {
                                                           text: 'Available - ' + this.AvailableCount,
                                                           icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
                                                           handler: () => {
                                                             if( this.AvailableCount > 0 )
                                                             this.navCtrl.push(RentPage, {
                                                               book:key, isbn: key.ISBN,action: 'Out'
                                                           });
                                                           }
                                                       },*/
                                                {
                                                    text: 'Cancel',
                                                    role: 'cancel',
                                                    icon: !this.platform.is('ios') ? 'close' : null,
                                                    handler: function () {
                                                    }
                                                }
                                            ]
                                        })];
                                case 1:
                                    actionSheet = _a.sent();
                                    actionSheet.present();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                };
                CataloguePage.prototype.itemTapped = function (event, book) {
                    var navigationOptions = { queryParams: { book: book } };
                    this.navCtrl.navigateForward('BookInfo', navigationOptions);
                    /*this.navCtrl.push(BookInfo, {
                         book
                     });*/
                };
                return CataloguePage;
            }());
            CataloguePage.ctorParameters = function () { return [
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
                { type: src_shared_service__WEBPACK_IMPORTED_MODULE_4__["ICBService"] },
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] },
                { type: src_shared_shared__WEBPACK_IMPORTED_MODULE_5__["Authentication"] },
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
                { type: src_providers_data_service_masterDetailService__WEBPACK_IMPORTED_MODULE_6__["MasterDetailService"] }
            ]; };
            CataloguePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
                    selector: 'app-catalogue',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./catalogue.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/catalogue/catalogue.page.html")).default,
                    providers: [src_shared_service__WEBPACK_IMPORTED_MODULE_4__["ICBService"], src_app_layout_header__WEBPACK_IMPORTED_MODULE_1__["HeaderPage"]],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./catalogue.page.scss */ "./src/app/catalogue/catalogue.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], src_shared_service__WEBPACK_IMPORTED_MODULE_4__["ICBService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"], src_shared_shared__WEBPACK_IMPORTED_MODULE_5__["Authentication"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], src_providers_data_service_masterDetailService__WEBPACK_IMPORTED_MODULE_6__["MasterDetailService"]])
            ], CataloguePage);
            /***/ 
        })
    }]);
//# sourceMappingURL=catalogue-catalogue-module-es2015.js.map
//# sourceMappingURL=catalogue-catalogue-module-es5.js.map
//# sourceMappingURL=catalogue-catalogue-module-es5.js.map