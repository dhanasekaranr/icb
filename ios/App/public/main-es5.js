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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$": 
        /*!*****************************************************************************************************************************************!*\
          !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
          \*****************************************************************************************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            var map = {
                "./ion-action-sheet-controller_8.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-action-sheet-controller_8.entry.js",
                    "common",
                    0
                ],
                "./ion-action-sheet-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js",
                    "common",
                    1
                ],
                "./ion-action-sheet-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js",
                    "common",
                    2
                ],
                "./ion-alert-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js",
                    "common",
                    3
                ],
                "./ion-alert-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js",
                    "common",
                    4
                ],
                "./ion-app_8-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js",
                    "common",
                    5
                ],
                "./ion-app_8-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js",
                    "common",
                    6
                ],
                "./ion-avatar_3-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js",
                    "common",
                    7
                ],
                "./ion-avatar_3-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js",
                    "common",
                    8
                ],
                "./ion-back-button-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js",
                    "common",
                    9
                ],
                "./ion-back-button-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js",
                    "common",
                    10
                ],
                "./ion-backdrop-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js",
                    "common",
                    11
                ],
                "./ion-backdrop-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js",
                    "common",
                    12
                ],
                "./ion-button_2-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js",
                    "common",
                    13
                ],
                "./ion-button_2-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js",
                    "common",
                    14
                ],
                "./ion-card_5-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js",
                    "common",
                    15
                ],
                "./ion-card_5-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js",
                    "common",
                    16
                ],
                "./ion-checkbox-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js",
                    "common",
                    17
                ],
                "./ion-checkbox-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js",
                    "common",
                    18
                ],
                "./ion-chip-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js",
                    "common",
                    19
                ],
                "./ion-chip-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js",
                    "common",
                    20
                ],
                "./ion-col_3.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js",
                    21
                ],
                "./ion-datetime_3-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js",
                    "common",
                    22
                ],
                "./ion-datetime_3-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js",
                    "common",
                    23
                ],
                "./ion-fab_3-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js",
                    "common",
                    24
                ],
                "./ion-fab_3-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js",
                    "common",
                    25
                ],
                "./ion-img.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-img.entry.js",
                    26
                ],
                "./ion-infinite-scroll_2-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js",
                    "common",
                    27
                ],
                "./ion-infinite-scroll_2-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js",
                    "common",
                    28
                ],
                "./ion-input-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js",
                    "common",
                    29
                ],
                "./ion-input-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js",
                    "common",
                    30
                ],
                "./ion-item-option_3-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js",
                    "common",
                    31
                ],
                "./ion-item-option_3-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js",
                    "common",
                    32
                ],
                "./ion-item_8-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js",
                    "common",
                    33
                ],
                "./ion-item_8-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js",
                    "common",
                    34
                ],
                "./ion-loading-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js",
                    "common",
                    35
                ],
                "./ion-loading-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js",
                    "common",
                    36
                ],
                "./ion-menu_4-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-menu_4-ios.entry.js",
                    "common",
                    37
                ],
                "./ion-menu_4-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-menu_4-md.entry.js",
                    "common",
                    38
                ],
                "./ion-modal-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js",
                    "common",
                    39
                ],
                "./ion-modal-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js",
                    "common",
                    40
                ],
                "./ion-nav_4.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-nav_4.entry.js",
                    "common",
                    41
                ],
                "./ion-popover-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js",
                    "common",
                    42
                ],
                "./ion-popover-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js",
                    "common",
                    43
                ],
                "./ion-progress-bar-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js",
                    "common",
                    44
                ],
                "./ion-progress-bar-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js",
                    "common",
                    45
                ],
                "./ion-radio_2-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js",
                    "common",
                    46
                ],
                "./ion-radio_2-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js",
                    "common",
                    47
                ],
                "./ion-range-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js",
                    "common",
                    48
                ],
                "./ion-range-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js",
                    "common",
                    49
                ],
                "./ion-refresher_2-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js",
                    "common",
                    50
                ],
                "./ion-refresher_2-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js",
                    "common",
                    51
                ],
                "./ion-reorder_2-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js",
                    "common",
                    52
                ],
                "./ion-reorder_2-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js",
                    "common",
                    53
                ],
                "./ion-ripple-effect.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js",
                    54
                ],
                "./ion-route_4.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js",
                    "common",
                    55
                ],
                "./ion-searchbar-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js",
                    "common",
                    56
                ],
                "./ion-searchbar-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js",
                    "common",
                    57
                ],
                "./ion-segment_2-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js",
                    "common",
                    58
                ],
                "./ion-segment_2-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js",
                    "common",
                    59
                ],
                "./ion-select_3-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js",
                    "common",
                    60
                ],
                "./ion-select_3-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js",
                    "common",
                    61
                ],
                "./ion-slide_2-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js",
                    "common",
                    62
                ],
                "./ion-slide_2-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js",
                    "common",
                    63
                ],
                "./ion-spinner.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js",
                    "common",
                    64
                ],
                "./ion-split-pane-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js",
                    65
                ],
                "./ion-split-pane-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js",
                    66
                ],
                "./ion-tab-bar_2-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js",
                    "common",
                    67
                ],
                "./ion-tab-bar_2-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js",
                    "common",
                    68
                ],
                "./ion-tab_2.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js",
                    "common",
                    69
                ],
                "./ion-text.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-text.entry.js",
                    "common",
                    70
                ],
                "./ion-textarea-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js",
                    "common",
                    71
                ],
                "./ion-textarea-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js",
                    "common",
                    72
                ],
                "./ion-toast-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js",
                    "common",
                    73
                ],
                "./ion-toast-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js",
                    "common",
                    74
                ],
                "./ion-toggle-ios.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js",
                    "common",
                    75
                ],
                "./ion-toggle-md.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js",
                    "common",
                    76
                ],
                "./ion-virtual-scroll.entry.js": [
                    "./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js",
                    77
                ]
            };
            function webpackAsyncContext(req) {
                if (!__webpack_require__.o(map, req)) {
                    return Promise.resolve().then(function () {
                        var e = new Error("Cannot find module '" + req + "'");
                        e.code = 'MODULE_NOT_FOUND';
                        throw e;
                    });
                }
                var ids = map[req], id = ids[0];
                return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
                    return __webpack_require__(id);
                });
            }
            webpackAsyncContext.keys = function webpackAsyncContextKeys() {
                return Object.keys(map);
            };
            webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
            module.exports = webpackAsyncContext;
            /***/ 
        }),
        /***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$": 
        /*!**************************************************!*\
          !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
          \**************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            var map = {
                "./af": "./node_modules/moment/locale/af.js",
                "./af.js": "./node_modules/moment/locale/af.js",
                "./ar": "./node_modules/moment/locale/ar.js",
                "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
                "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
                "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
                "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
                "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
                "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
                "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
                "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
                "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
                "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
                "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
                "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
                "./ar.js": "./node_modules/moment/locale/ar.js",
                "./az": "./node_modules/moment/locale/az.js",
                "./az.js": "./node_modules/moment/locale/az.js",
                "./be": "./node_modules/moment/locale/be.js",
                "./be.js": "./node_modules/moment/locale/be.js",
                "./bg": "./node_modules/moment/locale/bg.js",
                "./bg.js": "./node_modules/moment/locale/bg.js",
                "./bm": "./node_modules/moment/locale/bm.js",
                "./bm.js": "./node_modules/moment/locale/bm.js",
                "./bn": "./node_modules/moment/locale/bn.js",
                "./bn.js": "./node_modules/moment/locale/bn.js",
                "./bo": "./node_modules/moment/locale/bo.js",
                "./bo.js": "./node_modules/moment/locale/bo.js",
                "./br": "./node_modules/moment/locale/br.js",
                "./br.js": "./node_modules/moment/locale/br.js",
                "./bs": "./node_modules/moment/locale/bs.js",
                "./bs.js": "./node_modules/moment/locale/bs.js",
                "./ca": "./node_modules/moment/locale/ca.js",
                "./ca.js": "./node_modules/moment/locale/ca.js",
                "./cs": "./node_modules/moment/locale/cs.js",
                "./cs.js": "./node_modules/moment/locale/cs.js",
                "./cv": "./node_modules/moment/locale/cv.js",
                "./cv.js": "./node_modules/moment/locale/cv.js",
                "./cy": "./node_modules/moment/locale/cy.js",
                "./cy.js": "./node_modules/moment/locale/cy.js",
                "./da": "./node_modules/moment/locale/da.js",
                "./da.js": "./node_modules/moment/locale/da.js",
                "./de": "./node_modules/moment/locale/de.js",
                "./de-at": "./node_modules/moment/locale/de-at.js",
                "./de-at.js": "./node_modules/moment/locale/de-at.js",
                "./de-ch": "./node_modules/moment/locale/de-ch.js",
                "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
                "./de.js": "./node_modules/moment/locale/de.js",
                "./dv": "./node_modules/moment/locale/dv.js",
                "./dv.js": "./node_modules/moment/locale/dv.js",
                "./el": "./node_modules/moment/locale/el.js",
                "./el.js": "./node_modules/moment/locale/el.js",
                "./en-SG": "./node_modules/moment/locale/en-SG.js",
                "./en-SG.js": "./node_modules/moment/locale/en-SG.js",
                "./en-au": "./node_modules/moment/locale/en-au.js",
                "./en-au.js": "./node_modules/moment/locale/en-au.js",
                "./en-ca": "./node_modules/moment/locale/en-ca.js",
                "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
                "./en-gb": "./node_modules/moment/locale/en-gb.js",
                "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
                "./en-ie": "./node_modules/moment/locale/en-ie.js",
                "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
                "./en-il": "./node_modules/moment/locale/en-il.js",
                "./en-il.js": "./node_modules/moment/locale/en-il.js",
                "./en-nz": "./node_modules/moment/locale/en-nz.js",
                "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
                "./eo": "./node_modules/moment/locale/eo.js",
                "./eo.js": "./node_modules/moment/locale/eo.js",
                "./es": "./node_modules/moment/locale/es.js",
                "./es-do": "./node_modules/moment/locale/es-do.js",
                "./es-do.js": "./node_modules/moment/locale/es-do.js",
                "./es-us": "./node_modules/moment/locale/es-us.js",
                "./es-us.js": "./node_modules/moment/locale/es-us.js",
                "./es.js": "./node_modules/moment/locale/es.js",
                "./et": "./node_modules/moment/locale/et.js",
                "./et.js": "./node_modules/moment/locale/et.js",
                "./eu": "./node_modules/moment/locale/eu.js",
                "./eu.js": "./node_modules/moment/locale/eu.js",
                "./fa": "./node_modules/moment/locale/fa.js",
                "./fa.js": "./node_modules/moment/locale/fa.js",
                "./fi": "./node_modules/moment/locale/fi.js",
                "./fi.js": "./node_modules/moment/locale/fi.js",
                "./fo": "./node_modules/moment/locale/fo.js",
                "./fo.js": "./node_modules/moment/locale/fo.js",
                "./fr": "./node_modules/moment/locale/fr.js",
                "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
                "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
                "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
                "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
                "./fr.js": "./node_modules/moment/locale/fr.js",
                "./fy": "./node_modules/moment/locale/fy.js",
                "./fy.js": "./node_modules/moment/locale/fy.js",
                "./ga": "./node_modules/moment/locale/ga.js",
                "./ga.js": "./node_modules/moment/locale/ga.js",
                "./gd": "./node_modules/moment/locale/gd.js",
                "./gd.js": "./node_modules/moment/locale/gd.js",
                "./gl": "./node_modules/moment/locale/gl.js",
                "./gl.js": "./node_modules/moment/locale/gl.js",
                "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
                "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
                "./gu": "./node_modules/moment/locale/gu.js",
                "./gu.js": "./node_modules/moment/locale/gu.js",
                "./he": "./node_modules/moment/locale/he.js",
                "./he.js": "./node_modules/moment/locale/he.js",
                "./hi": "./node_modules/moment/locale/hi.js",
                "./hi.js": "./node_modules/moment/locale/hi.js",
                "./hr": "./node_modules/moment/locale/hr.js",
                "./hr.js": "./node_modules/moment/locale/hr.js",
                "./hu": "./node_modules/moment/locale/hu.js",
                "./hu.js": "./node_modules/moment/locale/hu.js",
                "./hy-am": "./node_modules/moment/locale/hy-am.js",
                "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
                "./id": "./node_modules/moment/locale/id.js",
                "./id.js": "./node_modules/moment/locale/id.js",
                "./is": "./node_modules/moment/locale/is.js",
                "./is.js": "./node_modules/moment/locale/is.js",
                "./it": "./node_modules/moment/locale/it.js",
                "./it-ch": "./node_modules/moment/locale/it-ch.js",
                "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
                "./it.js": "./node_modules/moment/locale/it.js",
                "./ja": "./node_modules/moment/locale/ja.js",
                "./ja.js": "./node_modules/moment/locale/ja.js",
                "./jv": "./node_modules/moment/locale/jv.js",
                "./jv.js": "./node_modules/moment/locale/jv.js",
                "./ka": "./node_modules/moment/locale/ka.js",
                "./ka.js": "./node_modules/moment/locale/ka.js",
                "./kk": "./node_modules/moment/locale/kk.js",
                "./kk.js": "./node_modules/moment/locale/kk.js",
                "./km": "./node_modules/moment/locale/km.js",
                "./km.js": "./node_modules/moment/locale/km.js",
                "./kn": "./node_modules/moment/locale/kn.js",
                "./kn.js": "./node_modules/moment/locale/kn.js",
                "./ko": "./node_modules/moment/locale/ko.js",
                "./ko.js": "./node_modules/moment/locale/ko.js",
                "./ku": "./node_modules/moment/locale/ku.js",
                "./ku.js": "./node_modules/moment/locale/ku.js",
                "./ky": "./node_modules/moment/locale/ky.js",
                "./ky.js": "./node_modules/moment/locale/ky.js",
                "./lb": "./node_modules/moment/locale/lb.js",
                "./lb.js": "./node_modules/moment/locale/lb.js",
                "./lo": "./node_modules/moment/locale/lo.js",
                "./lo.js": "./node_modules/moment/locale/lo.js",
                "./lt": "./node_modules/moment/locale/lt.js",
                "./lt.js": "./node_modules/moment/locale/lt.js",
                "./lv": "./node_modules/moment/locale/lv.js",
                "./lv.js": "./node_modules/moment/locale/lv.js",
                "./me": "./node_modules/moment/locale/me.js",
                "./me.js": "./node_modules/moment/locale/me.js",
                "./mi": "./node_modules/moment/locale/mi.js",
                "./mi.js": "./node_modules/moment/locale/mi.js",
                "./mk": "./node_modules/moment/locale/mk.js",
                "./mk.js": "./node_modules/moment/locale/mk.js",
                "./ml": "./node_modules/moment/locale/ml.js",
                "./ml.js": "./node_modules/moment/locale/ml.js",
                "./mn": "./node_modules/moment/locale/mn.js",
                "./mn.js": "./node_modules/moment/locale/mn.js",
                "./mr": "./node_modules/moment/locale/mr.js",
                "./mr.js": "./node_modules/moment/locale/mr.js",
                "./ms": "./node_modules/moment/locale/ms.js",
                "./ms-my": "./node_modules/moment/locale/ms-my.js",
                "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
                "./ms.js": "./node_modules/moment/locale/ms.js",
                "./mt": "./node_modules/moment/locale/mt.js",
                "./mt.js": "./node_modules/moment/locale/mt.js",
                "./my": "./node_modules/moment/locale/my.js",
                "./my.js": "./node_modules/moment/locale/my.js",
                "./nb": "./node_modules/moment/locale/nb.js",
                "./nb.js": "./node_modules/moment/locale/nb.js",
                "./ne": "./node_modules/moment/locale/ne.js",
                "./ne.js": "./node_modules/moment/locale/ne.js",
                "./nl": "./node_modules/moment/locale/nl.js",
                "./nl-be": "./node_modules/moment/locale/nl-be.js",
                "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
                "./nl.js": "./node_modules/moment/locale/nl.js",
                "./nn": "./node_modules/moment/locale/nn.js",
                "./nn.js": "./node_modules/moment/locale/nn.js",
                "./pa-in": "./node_modules/moment/locale/pa-in.js",
                "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
                "./pl": "./node_modules/moment/locale/pl.js",
                "./pl.js": "./node_modules/moment/locale/pl.js",
                "./pt": "./node_modules/moment/locale/pt.js",
                "./pt-br": "./node_modules/moment/locale/pt-br.js",
                "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
                "./pt.js": "./node_modules/moment/locale/pt.js",
                "./ro": "./node_modules/moment/locale/ro.js",
                "./ro.js": "./node_modules/moment/locale/ro.js",
                "./ru": "./node_modules/moment/locale/ru.js",
                "./ru.js": "./node_modules/moment/locale/ru.js",
                "./sd": "./node_modules/moment/locale/sd.js",
                "./sd.js": "./node_modules/moment/locale/sd.js",
                "./se": "./node_modules/moment/locale/se.js",
                "./se.js": "./node_modules/moment/locale/se.js",
                "./si": "./node_modules/moment/locale/si.js",
                "./si.js": "./node_modules/moment/locale/si.js",
                "./sk": "./node_modules/moment/locale/sk.js",
                "./sk.js": "./node_modules/moment/locale/sk.js",
                "./sl": "./node_modules/moment/locale/sl.js",
                "./sl.js": "./node_modules/moment/locale/sl.js",
                "./sq": "./node_modules/moment/locale/sq.js",
                "./sq.js": "./node_modules/moment/locale/sq.js",
                "./sr": "./node_modules/moment/locale/sr.js",
                "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
                "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
                "./sr.js": "./node_modules/moment/locale/sr.js",
                "./ss": "./node_modules/moment/locale/ss.js",
                "./ss.js": "./node_modules/moment/locale/ss.js",
                "./sv": "./node_modules/moment/locale/sv.js",
                "./sv.js": "./node_modules/moment/locale/sv.js",
                "./sw": "./node_modules/moment/locale/sw.js",
                "./sw.js": "./node_modules/moment/locale/sw.js",
                "./ta": "./node_modules/moment/locale/ta.js",
                "./ta.js": "./node_modules/moment/locale/ta.js",
                "./te": "./node_modules/moment/locale/te.js",
                "./te.js": "./node_modules/moment/locale/te.js",
                "./tet": "./node_modules/moment/locale/tet.js",
                "./tet.js": "./node_modules/moment/locale/tet.js",
                "./tg": "./node_modules/moment/locale/tg.js",
                "./tg.js": "./node_modules/moment/locale/tg.js",
                "./th": "./node_modules/moment/locale/th.js",
                "./th.js": "./node_modules/moment/locale/th.js",
                "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
                "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
                "./tlh": "./node_modules/moment/locale/tlh.js",
                "./tlh.js": "./node_modules/moment/locale/tlh.js",
                "./tr": "./node_modules/moment/locale/tr.js",
                "./tr.js": "./node_modules/moment/locale/tr.js",
                "./tzl": "./node_modules/moment/locale/tzl.js",
                "./tzl.js": "./node_modules/moment/locale/tzl.js",
                "./tzm": "./node_modules/moment/locale/tzm.js",
                "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
                "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
                "./tzm.js": "./node_modules/moment/locale/tzm.js",
                "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
                "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
                "./uk": "./node_modules/moment/locale/uk.js",
                "./uk.js": "./node_modules/moment/locale/uk.js",
                "./ur": "./node_modules/moment/locale/ur.js",
                "./ur.js": "./node_modules/moment/locale/ur.js",
                "./uz": "./node_modules/moment/locale/uz.js",
                "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
                "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
                "./uz.js": "./node_modules/moment/locale/uz.js",
                "./vi": "./node_modules/moment/locale/vi.js",
                "./vi.js": "./node_modules/moment/locale/vi.js",
                "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
                "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
                "./yo": "./node_modules/moment/locale/yo.js",
                "./yo.js": "./node_modules/moment/locale/yo.js",
                "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
                "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
                "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
                "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
                "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
                "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
            };
            function webpackContext(req) {
                var id = webpackContextResolve(req);
                return __webpack_require__(id);
            }
            function webpackContextResolve(req) {
                if (!__webpack_require__.o(map, req)) {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                }
                return map[req];
            }
            webpackContext.keys = function webpackContextKeys() {
                return Object.keys(map);
            };
            webpackContext.resolve = webpackContextResolve;
            module.exports = webpackContext;
            webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/header.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/header.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n        <ion-toolbar color=\"head\">\r\n            <ion-buttons slot=\"start\">\r\n              <ion-button (click)=this.goBack();>\r\n                <ion-icon slot=\"icon-only\" name=\"backspace\"></ion-icon>\r\n              </ion-button>\r\n            </ion-buttons>\r\n            <ion-title class=\"primary\">{{title}}</ion-title>\r\n            <ion-buttons slot=\"primary\">\r\n              <ion-button (click)=this.logOut();>\r\n                <ion-icon slot=\"icon-only\" name=\"md-log-out\" ></ion-icon>\r\n              </ion-button>\r\n            </ion-buttons>\r\n          </ion-toolbar>\r\n      </ion-header>");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var routes = [
                {
                    path: '',
                    loadChildren: function () { return __webpack_require__.e(/*! import() | tabs-tabs-module */ "tabs-tabs-module").then(__webpack_require__.bind(null, /*! ./tabs/tabs.module */ "./src/app/tabs/tabs.module.ts")).then(function (m) { return m.TabsPageModule; }); }
                }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
                    ],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.scss": 
        /*!************************************!*\
          !*** ./src/app/app.component.scss ***!
          \************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _layout_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/header */ "./src/app/layout/header.ts");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");
            /* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
            /* harmony import */ var _home_popover__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/popover */ "./src/app/home/popover.ts");
            /* harmony import */ var _home_notificationPopover__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/notificationPopover */ "./src/app/home/notificationPopover.ts");
            /* harmony import */ var _shared_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/shared */ "./src/shared/shared.ts");
            /* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent(platform, splashScreen, statusBar) {
                    this.platform = platform;
                    this.splashScreen = splashScreen;
                    this.statusBar = statusBar;
                    this.initializeApp();
                }
                AppComponent.prototype.initializeApp = function () {
                    var _this = this;
                    this.platform.ready().then(function () {
                        _this.statusBar.styleDefault();
                        _this.splashScreen.hide();
                    });
                };
                return AppComponent;
            }());
            AppComponent.ctorParameters = function () { return [
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
                { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"] },
                { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"] }
            ]; };
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    providers: [
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
                        _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["IonicStorageModule"],
                        _home_popover__WEBPACK_IMPORTED_MODULE_7__["PopoverPage"], _home_notificationPopover__WEBPACK_IMPORTED_MODULE_8__["NotificationPopoverPage"], _shared_shared__WEBPACK_IMPORTED_MODULE_9__["Authentication"],
                        _shared_shared__WEBPACK_IMPORTED_MODULE_9__["CredentialsAuthentication"],
                        _shared_shared__WEBPACK_IMPORTED_MODULE_9__["User"],
                        _shared_shared__WEBPACK_IMPORTED_MODULE_9__["GlobalSettings"], _layout_header__WEBPACK_IMPORTED_MODULE_1__["HeaderPage"]
                    ],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
                    _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"],
                    _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"]])
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");
            /* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/fesm2015/ng2-charts.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
            /* harmony import */ var src_shared_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/shared/service */ "./src/shared/service.ts");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _home_popover__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./home/popover */ "./src/app/home/popover.ts");
            /* harmony import */ var _home_notificationPopover__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./home/notificationPopover */ "./src/app/home/notificationPopover.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _home_popover__WEBPACK_IMPORTED_MODULE_15__["PopoverPage"], _home_notificationPopover__WEBPACK_IMPORTED_MODULE_16__["NotificationPopoverPage"]],
                    entryComponents: [_home_popover__WEBPACK_IMPORTED_MODULE_15__["PopoverPage"], _home_notificationPopover__WEBPACK_IMPORTED_MODULE_16__["NotificationPopoverPage"]],
                    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"].forRoot(), _ionic_storage__WEBPACK_IMPORTED_MODULE_12__["IonicStorageModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                        ng2_charts__WEBPACK_IMPORTED_MODULE_10__["ChartsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"]],
                    providers: [
                        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"],
                        _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__["SplashScreen"],
                        { provide: _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicRouteStrategy"] }, src_shared_service__WEBPACK_IMPORTED_MODULE_13__["ICBService"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_1__["InAppBrowser"]
                    ],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
                    exports: []
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/home/notificationPopover.ts": 
        /*!*********************************************!*\
          !*** ./src/app/home/notificationPopover.ts ***!
          \*********************************************/
        /*! exports provided: NotificationPopoverPage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPopoverPage", function () { return NotificationPopoverPage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service */ "./src/shared/service.ts");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            var NotificationPopoverPage = /** @class */ (function () {
                function NotificationPopoverPage(viewCtrl, navParams) {
                    this.viewCtrl = viewCtrl;
                    this.notifications = navParams.data.data;
                }
                NotificationPopoverPage.prototype.close = function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var topLoader;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.viewCtrl.getTop()];
                                case 1:
                                    topLoader = _a.sent();
                                    if (!topLoader) return [3 /*break*/, 3];
                                    return [4 /*yield*/, topLoader.dismiss(this.notifications.length)];
                                case 2:
                                    _a.sent();
                                    _a.label = 3;
                                case 3: return [2 /*return*/];
                            }
                        });
                    });
                };
                return NotificationPopoverPage;
            }());
            NotificationPopoverPage.ctorParameters = function () { return [
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"] }
            ]; };
            NotificationPopoverPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    template: "\n    <ion-content>\n      <ion-list no-padding no-margin>\n      <ion-list-header>Current Rental</ion-list-header>\n        <ion-item *ngFor=\"let wish of notifications\" (click)=\"close()\" text-wrap style=\"color: green; font-size: .8em;align-content: right\">\n        {{wish.AlertMessage.Message}}\n        <p>{{wish.AlertMessage.SubMessage | date: 'MM/dd/yyyy'}}</p>\n         <ion-icon name=\"trash\" slot=\"end\" ></ion-icon>\n        </ion-item>\n      </ion-list>\n     </ion-content>\n      ",
                    providers: [_shared_service__WEBPACK_IMPORTED_MODULE_2__["ICBService"]]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"]])
            ], NotificationPopoverPage);
            /***/ 
        }),
        /***/ "./src/app/home/popover.ts": 
        /*!*********************************!*\
          !*** ./src/app/home/popover.ts ***!
          \*********************************/
        /*! exports provided: PopoverPage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverPage", function () { return PopoverPage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service */ "./src/shared/service.ts");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            var PopoverPage = /** @class */ (function () {
                function PopoverPage(viewCtrl, service, toastCtrl, navParams) {
                    this.viewCtrl = viewCtrl;
                    this.service = service;
                    this.toastCtrl = toastCtrl;
                    this.wishes = navParams.data.data;
                }
                PopoverPage.prototype.deleteFromWishList = function (ISBN, i) {
                    var _this = this;
                    this.service.AddToWishList(ISBN).then(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var toast;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.toastCtrl.create({
                                        message: 'Removed from the Wish List!',
                                        duration: 2000
                                    })];
                                case 1:
                                    toast = _a.sent();
                                    toast.present();
                                    // this.viewCtrl.dismiss();
                                    this.wishes.splice(i, 1);
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                };
                PopoverPage.prototype.close = function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var topLoader;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.viewCtrl.getTop()];
                                case 1:
                                    topLoader = _a.sent();
                                    if (!topLoader) return [3 /*break*/, 3];
                                    return [4 /*yield*/, topLoader.dismiss()];
                                case 2:
                                    _a.sent();
                                    _a.label = 3;
                                case 3: return [2 /*return*/];
                            }
                        });
                    });
                };
                return PopoverPage;
            }());
            PopoverPage.ctorParameters = function () { return [
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
                { type: _shared_service__WEBPACK_IMPORTED_MODULE_2__["ICBService"] },
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"] }
            ]; };
            PopoverPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    template: "\n    <ion-content>\n    <ion-list no-padding no-margin>\n        <ion-list-header>Wish List</ion-list-header>\n        <ion-item *ngFor=\"let wish of wishes; let i=index;\" (click)=\"close()\"\n          text-wrap style=\"color: green; font-size: .8em;align-content: right\">\n        {{wish.BookDescription}}\n        <ion-icon name=\"trash\" slot=\"end\" (click)=deleteFromWishList(wish.ISBN,i)></ion-icon>\n        </ion-item>\n        <ion-footer style=\"text-align:center\">More Info...</ion-footer>\n      </ion-list>\n      </ion-content>\n      ",
                    providers: [_shared_service__WEBPACK_IMPORTED_MODULE_2__["ICBService"]]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _shared_service__WEBPACK_IMPORTED_MODULE_2__["ICBService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"]])
            ], PopoverPage);
            /***/ 
        }),
        /***/ "./src/app/layout/header.ts": 
        /*!**********************************!*\
          !*** ./src/app/layout/header.ts ***!
          \**********************************/
        /*! exports provided: HeaderPage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderPage", function () { return HeaderPage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var src_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/service */ "./src/shared/service.ts");
            /* harmony import */ var src_shared_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/shared */ "./src/shared/shared.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            var HeaderPage = /** @class */ (function () {
                function HeaderPage(navCtrl, authentication, location) {
                    this.navCtrl = navCtrl;
                    this.authentication = authentication;
                    this.location = location;
                }
                HeaderPage.prototype.logOut = function () {
                    this.authentication.logout();
                    this.navCtrl.navigateForward('tabs/login');
                };
                HeaderPage.prototype.goBack = function () {
                    this.location.back();
                };
                return HeaderPage;
            }());
            HeaderPage.ctorParameters = function () { return [
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
                { type: src_shared_shared__WEBPACK_IMPORTED_MODULE_4__["Authentication"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
            ], HeaderPage.prototype, "title", void 0);
            HeaderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-header',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/header.html")).default,
                    providers: [src_shared_service__WEBPACK_IMPORTED_MODULE_3__["ICBService"]]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], src_shared_shared__WEBPACK_IMPORTED_MODULE_4__["Authentication"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
            ], HeaderPage);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
                .catch(function (err) { return console.log(err); });
            /***/ 
        }),
        /***/ "./src/shared/authentication.service.ts": 
        /*!**********************************************!*\
          !*** ./src/shared/authentication.service.ts ***!
          \**********************************************/
        /*! exports provided: Authentication */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Authentication", function () { return Authentication; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
            /* harmony import */ var _credentialsAuthentication__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./credentialsAuthentication */ "./src/shared/credentialsAuthentication.ts");
            /* harmony import */ var _globalSettings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./globalSettings */ "./src/shared/globalSettings.ts");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var Authentication = /** @class */ (function () {
                function Authentication(http, credentialsAuthentication, storage, globalSettings) {
                    this.http = http;
                    this.credentialsAuthentication = credentialsAuthentication;
                    this.storage = storage;
                    this.globalSettings = globalSettings;
                    this.accessToken = null;
                    // Set the baseUrl variable to the Api Url from the GlobalSettings
                    this.baseUrl = this.globalSettings.getSettings().apiUrl;
                    this.isAdmin = '';
                }
                Authentication.prototype.getAccessToken = function () {
                    return this.accessToken;
                };
                Authentication.prototype.getIsAdmin = function () {
                    return this.isAdmin;
                };
                Authentication.prototype.credentialsLogin = function (credentials) {
                    var _this = this;
                    // IF the access token subject is already set, just return it again
                    if (this.accessTokenSubject) {
                        if (this.accessTokenSubject.isStopped) {
                            return this.accessTokenSubject;
                        }
                    }
                    // Else instantiate a new subject and perform login request
                    this.accessTokenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["AsyncSubject"]();
                    return this.credentialsAuthentication.login(credentials)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (body) {
                        // Cache the access token in the service
                        _this.accessToken = body.access_token;
                        _this.isAdmin = 'N';
                        _this.isAdmin = body.isAdmin;
                        // Save the access token in storage
                        _this.storage.set('accessToken', body.access_token);
                        _this.storage.set('isAdmin', body.isAdmin);
                        _this.storage.set('username', credentials.username);
                        _this.storage.set('password', credentials.password);
                        // Set the access token as the result for the observerable
                        _this.accessTokenSubject.next(body.access_token);
                        _this.accessTokenSubject.complete();
                        return _this.accessTokenSubject;
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(this.handleError));
                    // return this.accessTokenSubject;
                };
                Authentication.prototype.handleError = function (error) {
                    // Clear the saved accessToken
                    console.error(error);
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
                };
                Authentication.prototype.logout = function () {
                    // Construct request header
                    var httpOptions = {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                            'Content-Type': 'application/json',
                            Authorization: 'Bearer ' + this.accessToken
                        })
                    };
                    // const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
                    // headers.append('Authorization', 'Bearer ' + this.accessToken);
                    // const options = new RequestOptions({ headers: headers });
                    // Clear the saved accessToken
                    this.storage.set('accessToken', null);
                    this.accessToken = null;
                    // Clear subject
                    this.accessTokenSubject = null;
                    // Remove saved credentials from Facebook login service
                    // this.facebookAuthentication.logout();
                    // Perform request
                    return this.http.post(this.baseUrl + '/api/Account/Logout', null, httpOptions);
                    // return null;
                };
                return Authentication;
            }());
            Authentication.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
                { type: _credentialsAuthentication__WEBPACK_IMPORTED_MODULE_5__["CredentialsAuthentication"] },
                { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
                { type: _globalSettings__WEBPACK_IMPORTED_MODULE_6__["GlobalSettings"] }
            ]; };
            Authentication = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
                    _credentialsAuthentication__WEBPACK_IMPORTED_MODULE_5__["CredentialsAuthentication"],
                    _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
                    _globalSettings__WEBPACK_IMPORTED_MODULE_6__["GlobalSettings"]])
            ], Authentication);
            /***/ 
        }),
        /***/ "./src/shared/credentialsAuthentication.ts": 
        /*!*************************************************!*\
          !*** ./src/shared/credentialsAuthentication.ts ***!
          \*************************************************/
        /*! exports provided: CredentialsAuthentication */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CredentialsAuthentication", function () { return CredentialsAuthentication; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var _globalSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./globalSettings */ "./src/shared/globalSettings.ts");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var CredentialsAuthentication = /** @class */ (function () {
                // private accessTokenSubject:ReplaySubject<any> = new ReplaySubject(1);
                function CredentialsAuthentication(http, globalSettings) {
                    this.http = http;
                    this.globalSettings = globalSettings;
                    // Set the baseUrl variable to the Api Url from the GlobalSettings
                    this.baseUrl = this.globalSettings.getSettings().apiUrl;
                }
                CredentialsAuthentication.prototype.login = function (credentials) {
                    // Construct data
                    var httpOptions = {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                            'Content-Type': 'application/json'
                            //        'Authorization': 'my-auth-token'
                        })
                    };
                    var loginData = 'grant_type=password&username=' + credentials.username + '&password=' + credentials.password;
                    // Construct POST Headers
                    return this.http.post(this.baseUrl + '/Token', loginData, httpOptions)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
                        return response;
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
                };
                CredentialsAuthentication.prototype.handleError = function (error) {
                    console.error(error);
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
                };
                return CredentialsAuthentication;
            }());
            CredentialsAuthentication.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
                { type: _globalSettings__WEBPACK_IMPORTED_MODULE_3__["GlobalSettings"] }
            ]; };
            CredentialsAuthentication = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _globalSettings__WEBPACK_IMPORTED_MODULE_3__["GlobalSettings"]])
            ], CredentialsAuthentication);
            /***/ 
        }),
        /***/ "./src/shared/globalFunctions.ts": 
        /*!***************************************!*\
          !*** ./src/shared/globalFunctions.ts ***!
          \***************************************/
        /*! exports provided: GlobalFunctions */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalFunctions", function () { return GlobalFunctions; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "./src/shared/authentication.service.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
            var GlobalFunctions = /** @class */ (function () {
                // private apiUrl = 'http://api.icarebooks.com';
                function GlobalFunctions(navCtrl, authentication, http, storage) {
                    this.navCtrl = navCtrl;
                    this.authentication = authentication;
                    this.http = http;
                    this.storage = storage;
                    this.apiUrl = 'http://localhost:52146';
                }
                /* getHttpHeaders(token: any) {
                   const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
                   if (token != null) {
                     headers.append('Authorization', 'Bearer ' + token); }
                   return headers;
                 }*/
                GlobalFunctions.prototype.getHeaders = function (token) {
                    return new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                        'Content-Type': 'application/x-www-form-urlencoded',
                        Authorization: 'Bearer ' + token
                    });
                };
                GlobalFunctions.prototype.getSettings = function () {
                    return {
                        apiUrl: this.apiUrl
                    };
                };
                return GlobalFunctions;
            }());
            GlobalFunctions.ctorParameters = function () { return [
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
                { type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["Authentication"] },
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
                { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] }
            ]; };
            GlobalFunctions = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
                    _authentication_service__WEBPACK_IMPORTED_MODULE_3__["Authentication"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]])
            ], GlobalFunctions);
            /***/ 
        }),
        /***/ "./src/shared/globalSettings.ts": 
        /*!**************************************!*\
          !*** ./src/shared/globalSettings.ts ***!
          \**************************************/
        /*! exports provided: GlobalSettings */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalSettings", function () { return GlobalSettings; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var GlobalSettings = /** @class */ (function () {
                // private apiUrl = 'http://api.icarebooks.com';
                function GlobalSettings() {
                    this.apiUrl = 'http://localhost:52146';
                }
                GlobalSettings.prototype.getSettings = function () {
                    return {
                        apiUrl: this.apiUrl
                    };
                };
                return GlobalSettings;
            }());
            GlobalSettings = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], GlobalSettings);
            /***/ 
        }),
        /***/ "./src/shared/service.ts": 
        /*!*******************************!*\
          !*** ./src/shared/service.ts ***!
          \*******************************/
        /*! exports provided: ICBService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICBService", function () { return ICBService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _globalFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globalFunctions */ "./src/shared/globalFunctions.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
            /* harmony import */ var _globalSettings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./globalSettings */ "./src/shared/globalSettings.ts");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ICBService = /** @class */ (function () {
                function ICBService(http, storage, globalSettings, func) {
                    this.http = http;
                    this.storage = storage;
                    this.globalSettings = globalSettings;
                    this.func = func;
                    this.baseUrl = 'http://localhost:52146'; // globalSettings.getSettings().apiUrl;
                    // this.baseUrl =   this.func.getSettings().apiUrl; // 'http://api.icarebooks.com';
                }
                Object.defineProperty(ICBService, "parameters", {
                    get: function () {
                        return [[_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]], [_ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]]];
                    },
                    enumerable: true,
                    configurable: true
                });
                ICBService.prototype.setDestn = function (destn) {
                    this.destn = destn;
                };
                ICBService.prototype.getDestn = function () {
                    return this.destn;
                };
                ICBService.prototype.getHeaders = function (token) {
                    return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                        'Content-Type': 'application/x-www-form-urlencoded',
                        Authorization: 'Bearer ' + token
                    });
                };
                ICBService.prototype.getJSONHeaders = function (token) {
                    return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                        'Content-Type': 'application/json',
                        Authorization: 'Bearer ' + token
                    });
                };
                ICBService.prototype.searchTrans = function (action, name) {
                    var _this = this;
                    var url = this.baseUrl + '/api/' + action + '/' + name;
                    return new Promise(function (resolve) {
                        _this.storage.get('accessToken').then(function (token) {
                            if (token == null) {
                                return;
                            }
                            _this.http.get(url, { headers: _this.getHeaders(token) })
                                .subscribe(function (data) {
                                _this.data = data;
                                resolve(_this.data);
                            }, function (err) {
                                console.log(err);
                            });
                        });
                    });
                };
                ICBService.prototype.getBookProfile = function (isbn) {
                    var _this = this;
                    var url = this.baseUrl + '/api/book/get/2/' + isbn;
                    return new Promise(function (resolve) {
                        _this.storage.get('accessToken').then(function (token) {
                            _this.http.get(url, { headers: _this.getHeaders(token) })
                                .subscribe(function (data) {
                                _this.data = data;
                                resolve(_this.data);
                            });
                        });
                    });
                };
                ICBService.prototype.getBookRead = function () {
                    var _this = this;
                    var url = this.baseUrl + '/api/history';
                    return new Promise(function (resolve) {
                        _this.storage.get('accessToken').then(function (token) {
                            _this.http.get(url, { headers: _this.getHeaders(token) })
                                .subscribe(function (data) {
                                _this.data = data;
                                resolve(_this.data);
                            });
                        });
                    });
                };
                ICBService.prototype.getUserByISBN = function (id, isbn) {
                    var _this = this;
                    var url = this.baseUrl + '/api/User/get/' + id + '/' + isbn + '/';
                    return new Promise(function (resolve) {
                        _this.storage.get('accessToken').then(function (token) {
                            _this.http.get(url, { headers: _this.getHeaders(token) })
                                .subscribe(function (data) {
                                _this.data = data;
                                resolve(_this.data);
                            });
                        });
                    });
                };
                ICBService.prototype.getTransaction = function (isbn) {
                    var _this = this;
                    var url = this.baseUrl + '/api/book/get/' + isbn;
                    return new Promise(function (resolve) {
                        _this.storage.get('accessToken').then(function (token) {
                            _this.http.get(url, { headers: _this.getHeaders(token) })
                                .subscribe(function (data) {
                                _this.data = data;
                                resolve(_this.data);
                            });
                        });
                    });
                };
                ICBService.prototype.getTransactionByISBN = function (isbn) {
                    var _this = this;
                    var url = this.baseUrl + '/api/trans/get/3/' + isbn;
                    return new Promise(function (resolve) {
                        _this.storage.get('accessToken').then(function (token) {
                            _this.http.get(url, { headers: _this.getHeaders(token) })
                                .subscribe(function (data) {
                                _this.data = data;
                                resolve(_this.data);
                            });
                        });
                    });
                };
                ICBService.prototype.markReturn = function (transId) {
                    var _this = this;
                    var url = this.baseUrl + '/api/book';
                    return new Promise(function (resolve) {
                        _this.storage.get('accessToken').then(function (token) {
                            // let body = JSON.stringify({id:transId});
                            _this.http.put(url, transId, { headers: _this.getJSONHeaders(token) })
                                .subscribe(function (data) {
                                _this.data = data;
                                resolve(_this.data);
                            });
                        });
                    });
                };
                ICBService.prototype.markRent = function (search, userid, code) {
                    var _this = this;
                    var url = this.baseUrl + '/api/user';
                    return new Promise(function (resolve) {
                        _this.storage.get('accessToken').then(function (token) {
                            var body = JSON.stringify({ id: userid, search: search, code: code });
                            _this.http.put(url, body, { headers: _this.getJSONHeaders(token) })
                                .subscribe(function (data) {
                                _this.data = data;
                                resolve(_this.data);
                            });
                        });
                    });
                };
                ICBService.prototype.notify = function (userId, BookId, transactions, search) {
                    var _this = this;
                    var url = this.baseUrl + '/api/User';
                    return new Promise(function (resolve) {
                        _this.storage.get('accessToken').then(function (token) {
                            var body = JSON.stringify({ id: userId, bookId: BookId, transaction: transactions, search: search });
                            _this.http.post(url, body, { headers: _this.getJSONHeaders(token) })
                                .subscribe(function (data) {
                                _this.data = data;
                                resolve(_this.data);
                            });
                        });
                    });
                };
                ICBService.prototype.GetBookInfo = function (isbn) {
                    var _this = this;
                    var url = 'https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbn;
                    return new Promise(function (resolve) {
                        _this.http.get(url)
                            .subscribe(function (data) {
                            _this.data = data;
                            resolve(_this.data);
                        });
                    });
                };
                ICBService.prototype.getRentalStatus = function (id, stat) {
                    var _this = this;
                    var url = this.baseUrl + '/api/dash/GetRentalStatus/' + id + '/' + stat + '/';
                    return new Promise(function (resolve) {
                        _this.storage.get('accessToken').then(function (token) {
                            _this.http.get(url, { headers: _this.getHeaders(token) })
                                .subscribe(function (data) {
                                _this.data = data;
                                resolve(_this.data);
                            });
                        });
                    });
                };
                ICBService.prototype.getRentalStatusDetails = function (choice, labelvalue) {
                    var _this = this;
                    var url = this.baseUrl + '/api/dash/GetRentalStatusDetail/' + choice + '/' + labelvalue + '/';
                    return new Promise(function (resolve) {
                        _this.storage.get('accessToken').then(function (token) {
                            _this.http.get(url, { headers: _this.getHeaders(token) })
                                .subscribe(function (data) {
                                _this.data = data;
                                resolve(_this.data);
                            });
                        });
                    });
                };
                ICBService.prototype.getActiveWishList = function () {
                    var _this = this;
                    var url = this.baseUrl + '/api/wish';
                    return new Promise(function (resolve) {
                        _this.storage.get('accessToken').then(function (token) {
                            _this.http.get(url, { headers: _this.getHeaders(token) })
                                .subscribe(function (data) {
                                _this.data = data;
                                resolve(_this.data);
                            });
                        });
                    });
                };
                ICBService.prototype.getRentalTransactions = function () {
                    var _this = this;
                    var url = this.baseUrl + '/api/trans';
                    return new Promise(function (resolve) {
                        _this.storage.get('accessToken').then(function (token) {
                            _this.http.get(url, { headers: _this.getHeaders(token) })
                                .subscribe(function (data) {
                                _this.data = data;
                                resolve(_this.data);
                            });
                        });
                    });
                };
                ICBService.prototype.getNotificationList = function () {
                    var _this = this;
                    var url = this.baseUrl + '/api/dash';
                    return new Promise(function (resolve) {
                        _this.storage.get('accessToken').then(function (token) {
                            _this.http.get(url, { headers: _this.getHeaders(token) })
                                .subscribe(function (data) {
                                _this.data = data;
                                resolve(_this.data);
                            });
                        });
                    });
                };
                ICBService.prototype.AddToWishList = function (isbn) {
                    var _this = this;
                    var url = this.baseUrl + '/api/wish/' + isbn;
                    return new Promise(function (resolve) {
                        _this.storage.get('accessToken').then(function (token) {
                            var body = JSON.stringify({ isbn: isbn });
                            _this.http.put(url, body, { headers: _this.getJSONHeaders(token) })
                                .subscribe(function (data) {
                                _this.data = data;
                                resolve(_this.data);
                            });
                        });
                    });
                };
                ICBService.prototype.getSchoolStats = function (stat) {
                    var _this = this;
                    var url = this.baseUrl + '/api/history/get/' + stat;
                    return new Promise(function (resolve) {
                        _this.storage.get('accessToken').then(function (token) {
                            _this.http.get(url, { headers: _this.getHeaders(token) })
                                .subscribe(function (data) {
                                _this.data = data;
                                resolve(_this.data);
                            });
                        });
                    });
                };
                ICBService.prototype.getTweets = function () {
                    var _this = this;
                    var url = this.baseUrl + '/api/tweet';
                    return new Promise(function (resolve) {
                        _this.storage.get('accessToken').then(function (token) {
                            _this.http.get(url, { headers: _this.getHeaders(token) })
                                .subscribe(function (data) {
                                _this.data = data;
                                resolve(_this.data);
                            });
                        });
                    });
                };
                return ICBService;
            }());
            ICBService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
                { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
                { type: _globalSettings__WEBPACK_IMPORTED_MODULE_4__["GlobalSettings"] },
                { type: _globalFunctions__WEBPACK_IMPORTED_MODULE_1__["GlobalFunctions"] }
            ]; };
            ICBService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Injectable"])(),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"], _globalSettings__WEBPACK_IMPORTED_MODULE_4__["GlobalSettings"], _globalFunctions__WEBPACK_IMPORTED_MODULE_1__["GlobalFunctions"]])
            ], ICBService);
            /***/ 
        }),
        /***/ "./src/shared/shared.ts": 
        /*!******************************!*\
          !*** ./src/shared/shared.ts ***!
          \******************************/
        /*! exports provided: GlobalSettings, Authentication, CredentialsAuthentication, User */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _globalSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globalSettings */ "./src/shared/globalSettings.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GlobalSettings", function () { return _globalSettings__WEBPACK_IMPORTED_MODULE_1__["GlobalSettings"]; });
            /* harmony import */ var _credentialsAuthentication__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./credentialsAuthentication */ "./src/shared/credentialsAuthentication.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CredentialsAuthentication", function () { return _credentialsAuthentication__WEBPACK_IMPORTED_MODULE_2__["CredentialsAuthentication"]; });
            /* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "./src/shared/authentication.service.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Authentication", function () { return _authentication_service__WEBPACK_IMPORTED_MODULE_3__["Authentication"]; });
            /* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user */ "./src/shared/user.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function () { return _user__WEBPACK_IMPORTED_MODULE_4__["User"]; });
            /***/ 
        }),
        /***/ "./src/shared/user.ts": 
        /*!****************************!*\
          !*** ./src/shared/user.ts ***!
          \****************************/
        /*! exports provided: User */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function () { return User; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _globalSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./globalSettings */ "./src/shared/globalSettings.ts");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var User = /** @class */ (function () {
                // private accessTokenSubject:ReplaySubject<any> = new ReplaySubject(1);
                function User(http, globalSettings) {
                    this.http = http;
                    this.globalSettings = globalSettings;
                    // Set the baseUrl variable to the Api Url from the GlobalSettings
                    this.baseUrl = this.globalSettings.getSettings().apiUrl;
                }
                User.prototype.getUserInfo = function (accessToken) {
                    // Construct header that supplies the access token
                    var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
                    headers.append('Authorization', 'Bearer ' + accessToken);
                    return this.http.get(this.baseUrl + '/api/Account/UserInfo', { headers: headers })
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) {
                        var body = JSON.parse(response._body);
                        return body;
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
                };
                User.prototype.handleError = function (error) {
                    console.error(error);
                    // tslint:disable-next-line: deprecation
                    return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].throw(error);
                };
                // Registers a user in the Web Api using federated login provider (Facebook)
                // A user must be registered before it can retrieve protected resources.
                User.prototype.registerExternalUser = function (accessToken, username) {
                    // const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
                    // headers.append('Authorization', 'Bearer ' + accessToken);
                    // const options = new RequestOptions({ headers: headers });
                    var httpOptions = {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                            'Content-Type': 'application/x-www-form-urlencoded',
                            Authorization: 'Bearer ' + accessToken
                        })
                    };
                    /*var registerUserData = {
                            Email: username
                        };*/
                    var registerUserData = 'Email=' + encodeURIComponent(username);
                    // Perform request
                    return this.http.post(this.baseUrl + '/api/Account/RegisterExternal', registerUserData, httpOptions);
                };
                // Registers a user in the Web Api using username/password.
                // A user must be registered before it can retrieve protected resources.
                User.prototype.registerLocalUser = function (accessToken, userCredentials) {
                    // const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
                    // headers.append('Authorization', 'Bearer ' + accessToken);
                    // const options = new RequestOptions({ headers: headers });
                    var httpOptions = {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                            'Content-Type': 'application/x-www-form-urlencoded',
                            Authorization: 'Bearer ' + accessToken
                        })
                    };
                    var registerUserData = {
                        Email: userCredentials.username,
                        Password: userCredentials.password,
                        ConfirmPassword: userCredentials.password
                    };
                    // Perform request
                    return this.http.post(this.baseUrl + '/api/Account/Register', registerUserData, httpOptions);
                };
                return User;
            }());
            User.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
                { type: _globalSettings__WEBPACK_IMPORTED_MODULE_2__["GlobalSettings"] }
            ]; };
            User = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _globalSettings__WEBPACK_IMPORTED_MODULE_2__["GlobalSettings"]])
            ], User);
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Users\Dhana\Documents\Visual Studio 2017\Projects\ICBApp\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map