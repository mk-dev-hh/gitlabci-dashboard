var $localize=Object.assign(void 0===$localize?{}:$localize,{locale:"de"});
"use strict";(function(global){global.ng=global.ng||{};global.ng.common=global.ng.common||{};global.ng.common.locales=global.ng.common.locales||{};var u=undefined;function plural(n){var i=Math.floor(Math.abs(n)),v=n.toString().replace(/^[^.]*\.?/,"").length;if(i===1&&v===0)return 1;return 5}global.ng.common.locales["de"]=["de",[["AM","PM"],u,u],u,[["S","M","D","M","D","F","S"],["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."],["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."]],[["S","M","D","M","D","F","S"],["So","Mo","Di","Mi","Do","Fr","Sa"],["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."]],[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan.","Feb.","M\xE4rz","Apr.","Mai","Juni","Juli","Aug.","Sept.","Okt.","Nov.","Dez."],["Januar","Februar","M\xE4rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]],[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","M\xE4r","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],["Januar","Februar","M\xE4rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]],[["v. Chr.","n. Chr."],u,u],1,[6,0],["dd.MM.yy","dd.MM.y","d. MMMM y","EEEE, d. MMMM y"],["HH:mm","HH:mm:ss","HH:mm:ss z","HH:mm:ss zzzz"],["{1}, {0}",u,"{1} 'um' {0}",u],[",",".",";","%","+","-","E","\xB7","\u2030","\u221E","NaN",":"],["#,##0.###","#,##0\xA0%","#,##0.00\xA0\xA4","#E0"],"EUR","\u20AC","Euro",{"ATS":["\xF6S"],"AUD":["AU$","$"],"BGM":["BGK"],"BGO":["BGJ"],"CUC":[u,"Cub$"],"DEM":["DM"],"FKP":[u,"Fl\xA3"],"GNF":[u,"F.G."],"KMF":[u,"FC"],"RON":[u,"L"],"RWF":[u,"F.Rw"],"SYP":[],"THB":["\u0E3F"],"TWD":["NT$"],"XXX":[],"ZMW":[u,"K"]},"ltr",plural,[[["Mitternacht","morgens","vorm.","mittags","nachm.","abends","nachts"],u,["Mitternacht","morgens","vormittags","mittags","nachmittags","abends","nachts"]],[["Mitternacht","Morgen","Vorm.","Mittag","Nachm.","Abend","Nacht"],u,["Mitternacht","Morgen","Vormittag","Mittag","Nachmittag","Abend","Nacht"]],["00:00",["05:00","10:00"],["10:00","12:00"],["12:00","13:00"],["13:00","18:00"],["18:00","24:00"],["00:00","05:00"]]]]})(typeof globalThis!=="undefined"&&globalThis||typeof global!=="undefined"&&global||typeof window!=="undefined"&&window);;
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app/app.module.ts":
/*!***********************************!*\
  !*** ./src/app/app/app.module.ts ***!
  \***********************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _components_app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/app.component */ "./src/app/app/components/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "./src/app/app/app.routing.ts");
/* harmony import */ var _components_error404_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/error404.component */ "./src/app/app/components/error404.component.ts");
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _classes_HttpInterceptors_ErrorInterceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./classes/HttpInterceptors/ErrorInterceptor */ "./src/app/app/classes/HttpInterceptors/ErrorInterceptor.ts");
/* harmony import */ var _classes_HttpInterceptors_CacheInterceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./classes/HttpInterceptors/CacheInterceptor */ "./src/app/app/classes/HttpInterceptors/CacheInterceptor.ts");
/* harmony import */ var _frame_frame_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../frame/frame.module */ "./src/app/frame/frame.module.ts");
/* harmony import */ var _pipelines_pipelines_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../pipelines/pipelines.module */ "./src/app/pipelines/pipelines.module.ts");
/* harmony import */ var _settings_settings_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../settings/settings.module */ "./src/app/settings/settings.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");

















var AppModule = /** @class */ (function () {
    function AppModule(route, titleService, router) {
        this.route = route;
        this.titleService = titleService;
        this.router = router;
    }
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_components_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"])); }, providers: [
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
                useClass: _classes_HttpInterceptors_CacheInterceptor__WEBPACK_IMPORTED_MODULE_10__["CacheInterceptor"],
                multi: true
            },
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
                useClass: _classes_HttpInterceptors_ErrorInterceptor__WEBPACK_IMPORTED_MODULE_9__["ErrorInterceptor"],
                multi: true
            }
        ], imports: [[
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _frame_frame_module__WEBPACK_IMPORTED_MODULE_11__["FrameModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRouting"],
                _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_7__["DashboardModule"],
                _pipelines_pipelines_module__WEBPACK_IMPORTED_MODULE_12__["PipelinesModule"],
                _settings_settings_module__WEBPACK_IMPORTED_MODULE_13__["SettingsModule"]
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_components_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_error404_component__WEBPACK_IMPORTED_MODULE_6__["Error404Component"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        _frame_frame_module__WEBPACK_IMPORTED_MODULE_11__["FrameModule"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"], _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_7__["DashboardModule"],
        _pipelines_pipelines_module__WEBPACK_IMPORTED_MODULE_12__["PipelinesModule"],
        _settings_settings_module__WEBPACK_IMPORTED_MODULE_13__["SettingsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _components_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _components_error404_component__WEBPACK_IMPORTED_MODULE_6__["Error404Component"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    _frame_frame_module__WEBPACK_IMPORTED_MODULE_11__["FrameModule"],
                    _app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRouting"],
                    _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_7__["DashboardModule"],
                    _pipelines_pipelines_module__WEBPACK_IMPORTED_MODULE_12__["PipelinesModule"],
                    _settings_settings_module__WEBPACK_IMPORTED_MODULE_13__["SettingsModule"]
                ],
                providers: [
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
                        useClass: _classes_HttpInterceptors_CacheInterceptor__WEBPACK_IMPORTED_MODULE_10__["CacheInterceptor"],
                        multi: true
                    },
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
                        useClass: _classes_HttpInterceptors_ErrorInterceptor__WEBPACK_IMPORTED_MODULE_9__["ErrorInterceptor"],
                        multi: true
                    }
                ],
                bootstrap: [_components_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_14__["ActivatedRoute"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["Title"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app/app.routing.ts":
/*!************************************!*\
  !*** ./src/app/app/app.routing.ts ***!
  \************************************/
/*! exports provided: AppRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRouting", function() { return AppRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _components_error404_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/error404.component */ "./src/app/app/components/error404.component.ts");
/* harmony import */ var _dashboard_dashboard_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dashboard/dashboard.routing */ "./src/app/dashboard/dashboard.routing.ts");
/* harmony import */ var _pipelines_pipelines_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pipelines/pipelines.routing */ "./src/app/pipelines/pipelines.routing.ts");
/* harmony import */ var _settings_settings_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../settings/settings.routing */ "./src/app/settings/settings.routing.ts");





var routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', children: _dashboard_dashboard_routing__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutes"] },
    { path: 'pipelines', children: _pipelines_pipelines_routing__WEBPACK_IMPORTED_MODULE_3__["PipelinesRoutes"] },
    { path: 'settings', children: _settings_settings_routing__WEBPACK_IMPORTED_MODULE_4__["SettingsRoutes"] },
    { path: '**', component: _components_error404_component__WEBPACK_IMPORTED_MODULE_1__["Error404Component"] }
];
var AppRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes);


/***/ }),

/***/ "./src/app/app/classes/HttpInterceptors/CacheInterceptor.ts":
/*!******************************************************************!*\
  !*** ./src/app/app/classes/HttpInterceptors/CacheInterceptor.ts ***!
  \******************************************************************/
/*! exports provided: CacheInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheInterceptor", function() { return CacheInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var CacheInterceptor = /** @class */ (function () {
    function CacheInterceptor() {
    }
    // Wegen Cachingproblemen im IE
    CacheInterceptor.prototype.intercept = function (req, next) {
        var httpRequest = req.clone({
            setHeaders: {
                CacheCntrol: 'no-cache',
                Pragma: 'no-cache',
                Expires: 'Sat, 01 Jan 2000 00:00:00 GMT'
            }
        });
        return next.handle(httpRequest);
    };
    CacheInterceptor.ɵfac = function CacheInterceptor_Factory(t) { return new (t || CacheInterceptor)(); };
    CacheInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CacheInterceptor, factory: CacheInterceptor.ɵfac });
    return CacheInterceptor;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CacheInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app/classes/HttpInterceptors/ErrorInterceptor.ts":
/*!******************************************************************!*\
  !*** ./src/app/app/classes/HttpInterceptors/ErrorInterceptor.ts ***!
  \******************************************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_error_error_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/error/error.service */ "./src/app/services/error/error.service.ts");





var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(errorService) {
        this.errorService = errorService;
    }
    ErrorInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            if ([401, 403, 404].includes(err.status)) {
                var error = _this.errorService.getErrorForHttpCode(err.status);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
            }
            else if (err.error && err.error.errorCode) {
                var error = _this.errorService.getErrorForErrorCode(err.error.errorCode);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
            }
            else {
                var error = _this.errorService.getErrorForErrorCode(-1);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
            }
        }));
    };
    ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) { return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_error_error_service__WEBPACK_IMPORTED_MODULE_3__["ErrorService"])); };
    ErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ErrorInterceptor, factory: ErrorInterceptor.ɵfac });
    return ErrorInterceptor;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _services_error_error_service__WEBPACK_IMPORTED_MODULE_3__["ErrorService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app/components/app.component.ts":
/*!*************************************************!*\
  !*** ./src/app/app/components/app.component.ts ***!
  \*************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm5/platform.js");
/* harmony import */ var _frame_components_sidebar_navigation_sidebar_navigation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../frame/components/sidebar-navigation/sidebar-navigation.component */ "./src/app/frame/components/sidebar-navigation/sidebar-navigation.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/card.js");








var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc Banner im Internet Explorer
     */ 
    var MSG_EXTERNAL_rootIeBanner$$SRC_APP_APP_COMPONENTS_APP_COMPONENT_TS__1 = goog.getMsg("Ihr Browser wird nicht unterst\u00FCtzt. Wir k\u00F6nnen nicht garantieren, dass alle Funktionen einwandfrei funktionieren. Bitte verwenden Sie einen anderen Browser.");
    I18N_0 = MSG_EXTERNAL_rootIeBanner$$SRC_APP_APP_COMPONENTS_APP_COMPONENT_TS__1;
}
else {
    I18N_0 = "Ihr Browser wird nicht unterst\xFCtzt. Wir k\xF6nnen nicht garantieren, dass alle Funktionen einwandfrei funktionieren. Bitte verwenden Sie einen anderen Browser.";
}
function AppComponent_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](2, I18N_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
var AppComponent = /** @class */ (function () {
    function AppComponent(platform) {
        this.platform = platform;
        this.isIE = false;
        this.isIE = platform.TRIDENT;
    }
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"])); };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["dd-root"]], decls: 4, vars: 1, consts: [[2, "height", "100%"], ["class", "ie-banner", 4, "ngIf"], [1, "content"], [1, "ie-banner"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "dd-sidebar-navigation", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AppComponent_mat_card_1_Template, 3, 0, "mat-card", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isIE);
        } }, directives: [_frame_components_sidebar_navigation_sidebar_navigation_component__WEBPACK_IMPORTED_MODULE_3__["SidebarNavigationComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"]], styles: ["[_nghost-%COMP%] {\n      display: flex;\n      flex-direction: column;\n      height: 100%;\n    }\n\n    .ie-banner[_ngcontent-%COMP%] {\n      margin: 0.5em;\n      padding: 1em 1em;\n      background-color: hsl(340, 100%, 45%);\n      color: hsl(0, 0%, 100%);\n      text-align: center;\n    }\n\n      .content[_ngcontent-%COMP%] {\n        height: 100%;\n        overflow-y: auto;\n      }"] });
    return AppComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'dd-root',
                template: "\n    <dd-sidebar-navigation style=\"height: 100%;\">\n      <mat-card class=\"ie-banner\" *ngIf=\"isIE\">\n        <span i18n=\"Banner im Internet Explorer@@rootIeBanner\">Ihr Browser wird nicht unterst\u00FCtzt. Wir k\u00F6nnen nicht garantieren, dass alle Funktionen einwandfrei funktionieren. Bitte verwenden Sie einen anderen Browser.</span>\n      </mat-card>\n      <div class=\"content\">\n        <router-outlet></router-outlet>\n      </div>\n    </dd-sidebar-navigation>\n  ",
                styles: ["\n    :host {\n      display: flex;\n      flex-direction: column;\n      height: 100%;\n    }\n\n    .ie-banner {\n      margin: 0.5em;\n      padding: 1em 1em;\n      background-color: hsl(340, 100%, 45%);\n      color: hsl(0, 0%, 100%);\n      text-align: center;\n    }\n\n      .content {\n        height: 100%;\n        overflow-y: auto;\n      }\n  "]
            }]
    }], function () { return [{ type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"] }]; }, null); })();
var templateObject_1;


/***/ }),

/***/ "./src/app/app/components/error404.component.ts":
/*!******************************************************!*\
  !*** ./src/app/app/components/error404.component.ts ***!
  \******************************************************/
/*! exports provided: Error404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error404Component", function() { return Error404Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");



var Error404Component = /** @class */ (function () {
    function Error404Component(sanitizer) {
        this.sanitizer = sanitizer;
    }
    Error404Component.prototype.ngOnInit = function () {
        this.iFramePath = this.sanitizer.bypassSecurityTrustResourceUrl("/" + window['APP_NAME'] + "/error/statuscode/404");
    };
    Error404Component.ɵfac = function Error404Component_Factory(t) { return new (t || Error404Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
    Error404Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Error404Component, selectors: [["dd-error404"]], decls: 1, vars: 1, consts: [[3, "src"]], template: function Error404Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "iframe", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.iFramePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
        } }, styles: ["[_nghost-%COMP%] {\n      display: block;\n      height: 100%;\n    }\n\n    iframe[_ngcontent-%COMP%] {\n      width: 100%;\n      height: 99%;\n      border: none;\n    }"] });
    return Error404Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Error404Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'dd-error404',
                template: "\n    <iframe [src]=\"iFramePath\"></iframe>\n  ",
                styles: ["\n    :host {\n      display: block;\n      height: 100%;\n    }\n\n    iframe {\n      width: 100%;\n      height: 99%;\n      border: none;\n    }\n  "]
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "./src/app/dashboard/components/dashboard-branches-headers/dashboard-branches-headers.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/dashboard/components/dashboard-branches-headers/dashboard-branches-headers.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: DashboardBranchesHeadersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardBranchesHeadersComponent", function() { return DashboardBranchesHeadersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var DashboardBranchesHeadersComponent = /** @class */ (function () {
    function DashboardBranchesHeadersComponent() {
    }
    DashboardBranchesHeadersComponent.prototype.ngOnInit = function () {
    };
    DashboardBranchesHeadersComponent.ɵfac = function DashboardBranchesHeadersComponent_Factory(t) { return new (t || DashboardBranchesHeadersComponent)(); };
    DashboardBranchesHeadersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardBranchesHeadersComponent, selectors: [["dd-dashboard-branches-headers"]], decls: 7, vars: 0, consts: [["id", "headersContainer"]], template: function DashboardBranchesHeadersComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Master Monitoring");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Nightly DEV");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Nightly QA");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["#headersContainer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  align-items: flex-start;\n  flex-direction: row;\n  flex-wrap: wrap;\n  width: 100%;\n  margin-bottom: 50px;\n}\n\nh2[_ngcontent-%COMP%] {\n  width: 30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2NvbXBvbmVudHMvZGFzaGJvYXJkLWJyYW5jaGVzLWhlYWRlcnMvQzpcXFVzZXJzXFxta2FiXFxEb2N1bWVudHNcXEdpdExhYkNpRGFzaGJvYXJkXFxHdWkvc3JjXFxhcHBcXGRhc2hib2FyZFxcY29tcG9uZW50c1xcZGFzaGJvYXJkLWJyYW5jaGVzLWhlYWRlcnNcXGRhc2hib2FyZC1icmFuY2hlcy1oZWFkZXJzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kYXNoYm9hcmQvY29tcG9uZW50cy9kYXNoYm9hcmQtYnJhbmNoZXMtaGVhZGVycy9kYXNoYm9hcmQtYnJhbmNoZXMtaGVhZGVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvY29tcG9uZW50cy9kYXNoYm9hcmQtYnJhbmNoZXMtaGVhZGVycy9kYXNoYm9hcmQtYnJhbmNoZXMtaGVhZGVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNoZWFkZXJzQ29udGFpbmVye1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuaDJ7XHJcbiAgd2lkdGg6IDMwJTtcclxufVxyXG4iLCIjaGVhZGVyc0NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuaDIge1xuICB3aWR0aDogMzAlO1xufSJdfQ== */"] });
    return DashboardBranchesHeadersComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardBranchesHeadersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'dd-dashboard-branches-headers',
                templateUrl: './dashboard-branches-headers.component.html',
                styleUrls: ['./dashboard-branches-headers.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/dashboard/components/dashboard-overview-item/dashboard-overview-item.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/dashboard/components/dashboard-overview-item/dashboard-overview-item.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: DashboardOverviewItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardOverviewItemComponent", function() { return DashboardOverviewItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/card.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/button.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");






function DashboardOverviewItemComponent_div_7_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Abgeschlossen am: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r4.pipeline.updatedAt, "medium"), "");
} }
function DashboardOverviewItemComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardOverviewItemComponent_div_7_p_1_Template, 3, 4, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.pipeline.updatedAt != null && ctx_r0.pipeline.updatedAt != undefined && ctx_r0.pipeline.updatedAt != "");
} }
function DashboardOverviewItemComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Status: ", ctx_r2.pipeline.status, "");
} }
var _c0 = function (a0) { return [a0]; };
function DashboardOverviewItemComponent_mat_card_actions_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "GitLab");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Pipelines");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r3.pipeline.webUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r3.setButtonColor());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r3.setButtonColor())("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, "/pipelines/" + ctx_r3.projectId + "/" + ctx_r3.pipeline.ref.toLowerCase()));
} }
var DashboardOverviewItemComponent = /** @class */ (function () {
    function DashboardOverviewItemComponent() {
    }
    DashboardOverviewItemComponent.prototype.ngOnInit = function () {
        this.projectId = this.pipeline.projectId;
    };
    DashboardOverviewItemComponent.prototype.setClasses = function () {
        var classes = {
            'failed': this.pipeline.status === 'failed',
            'success': this.pipeline.status === 'success',
            'other': this.pipeline.status !== 'failed' && this.pipeline.status !== 'success'
        };
        return classes;
    };
    DashboardOverviewItemComponent.prototype.setClassesBorder = function () {
        var classes = {
            'failedBorder': this.pipeline.status === 'failed',
            'successBorder': this.pipeline.status === 'success',
            'otherBorder': this.pipeline.status !== 'failed' && this.pipeline.status !== 'success'
        };
        return classes;
    };
    DashboardOverviewItemComponent.prototype.setContainerColor = function () {
        var classes = {
            'runningContainer': this.pipeline.status === 'running',
            'failedContainer': this.pipeline.status === 'failed',
            'manualContainer': this.pipeline.status === 'manual',
            'successContainer': this.pipeline.status === 'success',
            'unknownContainer': this.pipeline.status !== 'failed' && this.pipeline.status !== 'success' && this.pipeline.status !== 'manual' && this.pipeline.status !== 'running' && this.pipeline.status !== 'bamboo build' && !this.pipeline.status.includes("no schedules"),
            'notVisible': this.pipeline.status.includes("no qa") || this.pipeline.status.includes("no develop")
        };
        return classes;
    };
    DashboardOverviewItemComponent.prototype.setButtonColor = function () {
        var classes = {
            'runningButton': this.pipeline.status === 'running',
            'failedButton': this.pipeline.status === 'failed',
            'manualButton': this.pipeline.status === 'manual',
            'successButton': this.pipeline.status === 'success',
            //'unknownButton': this.pipeline.status !== 'failed' && this.pipeline.status !== 'success' && this.pipeline.status !== 'manual' && this.pipeline.status !== 'running'
            'unknownButton': this.pipeline.status === "canceled" || this.pipeline.status == "blocked"
        };
        return classes;
    };
    DashboardOverviewItemComponent.ɵfac = function DashboardOverviewItemComponent_Factory(t) { return new (t || DashboardOverviewItemComponent)(); };
    DashboardOverviewItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardOverviewItemComponent, selectors: [["dd-dashboard-overview-item"]], inputs: { pipeline: "pipeline" }, decls: 11, vars: 6, consts: [[1, "cardItem", 3, "ngClass"], [4, "ngIf", "ngIfElse"], ["elseBlock", ""], [4, "ngIf"], ["mat-raised-button", "", 3, "ngClass", "href"], ["mat-raised-button", "", 3, "ngClass", "routerLink"]], template: function DashboardOverviewItemComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-subtitle");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DashboardOverviewItemComponent_div_7_Template, 2, 1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DashboardOverviewItemComponent_ng_template_8_Template, 3, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DashboardOverviewItemComponent_mat_card_actions_10_Template, 5, 6, "mat-card-actions", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.setContainerColor());
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pipeline.projectName);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pipeline.category);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pipeline.category != "bamboo build" && !ctx.pipeline.status.includes("no qa") && !ctx.pipeline.status.includes("no develop"))("ngIfElse", _r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pipeline.ref != null && ctx.pipeline.ref != undefined && ctx.pipeline.ref != "");
        } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatAnchor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: [".failed[_ngcontent-%COMP%] {\n  color: #ff867f;\n}\n\n.success[_ngcontent-%COMP%] {\n  color: #80e27e;\n}\n\n.other[_ngcontent-%COMP%] {\n  color: #002f6c;\n}\n\n.cardItem[_ngcontent-%COMP%] {\n  word-break: break-word;\n}\n\nmat-card-actions[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n\n\n.failedButton[_ngcontent-%COMP%] {\n  background-color: #BA000D;\n  color: #f0f0f0;\n}\n\n.unknownButton[_ngcontent-%COMP%] {\n  background-color: #263238;\n  color: #f0f0f0;\n}\n\n.successButton[_ngcontent-%COMP%] {\n  background-color: #087F23;\n  color: #f0f0f0;\n}\n\n.failedContainer[_ngcontent-%COMP%] {\n  background-color: #FF7961;\n}\n\n.unknownContainer[_ngcontent-%COMP%] {\n  background-color: #9e9e9e;\n}\n\n.successContainer[_ngcontent-%COMP%] {\n  background-color: #80E27E;\n}\n\n.runningButton[_ngcontent-%COMP%] {\n  background-color: #0a59a1;\n  color: #f0f0f0;\n}\n\n.runningContainer[_ngcontent-%COMP%] {\n  background-color: #1b81bd;\n}\n\n.manualButton[_ngcontent-%COMP%] {\n  background-color: goldenrod;\n}\n\n.manualContainer[_ngcontent-%COMP%] {\n  background-color: gold;\n}\n\n.notVisible[_ngcontent-%COMP%] {\n  visibility: hidden;\n  background-color: #e1e2e1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2NvbXBvbmVudHMvZGFzaGJvYXJkLW92ZXJ2aWV3LWl0ZW0vQzpcXFVzZXJzXFxta2FiXFxEb2N1bWVudHNcXEdpdExhYkNpRGFzaGJvYXJkXFxHdWkvc3JjXFxhcHBcXGRhc2hib2FyZFxcY29tcG9uZW50c1xcZGFzaGJvYXJkLW92ZXJ2aWV3LWl0ZW1cXGRhc2hib2FyZC1vdmVydmlldy1pdGVtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kYXNoYm9hcmQvY29tcG9uZW50cy9kYXNoYm9hcmQtb3ZlcnZpZXctaXRlbS9kYXNoYm9hcmQtb3ZlcnZpZXctaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBOzs7Ozs7Ozs7O0VBQUE7O0FBWUE7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUNBRjs7QURHQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQ0FGOztBREdBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0FDQUY7O0FER0E7RUFDRSx5QkFBQTtBQ0FGOztBREdBO0VBQ0UseUJBQUE7QUNBRjs7QURHQTtFQUNFLHlCQUFBO0FDQUY7O0FER0E7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUNBRjs7QURHQTtFQUNFLHlCQUFBO0FDQUY7O0FERUE7RUFDRSwyQkFBQTtBQ0NGOztBREVBO0VBQ0Usc0JBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jb21wb25lbnRzL2Rhc2hib2FyZC1vdmVydmlldy1pdGVtL2Rhc2hib2FyZC1vdmVydmlldy1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZhaWxlZHtcclxuICBjb2xvcjogI2ZmODY3ZjtcclxufVxyXG5cclxuLnN1Y2Nlc3N7XHJcbiAgY29sb3I6ICM4MGUyN2U7XHJcbn1cclxuXHJcbi5vdGhlcntcclxuICBjb2xvcjogIzAwMmY2YztcclxufVxyXG5cclxuLmNhcmRJdGVte1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbn1cclxuXHJcbm1hdC1jYXJkLWFjdGlvbnN7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi8qLmZhaWxlZEJvcmRlcntcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZDUwMDAwO1xyXG59XHJcblxyXG4uc3VjY2Vzc0JvcmRlcntcclxuICBib3JkZXI6IDJweCBzb2xpZCAjMDBjODUzO1xyXG59XHJcblxyXG4ub3RoZXJCb3JkZXJ7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMmY2YztcclxufSovXHJcblxyXG4uZmFpbGVkQnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkEwMDBEO1xyXG4gIGNvbG9yOiAjZjBmMGYwO1xyXG59XHJcblxyXG4udW5rbm93bkJ1dHRvbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYzMjM4O1xyXG4gIGNvbG9yOiAjZjBmMGYwO1xyXG59XHJcblxyXG4uc3VjY2Vzc0J1dHRvbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDg3RjIzO1xyXG4gIGNvbG9yOiAjZjBmMGYwO1xyXG59XHJcblxyXG4uZmFpbGVkQ29udGFpbmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjc5NjE7XHJcbn1cclxuXHJcbi51bmtub3duQ29udGFpbmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM5ZTllOWU7XHJcbn1cclxuXHJcbi5zdWNjZXNzQ29udGFpbmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM4MEUyN0U7XHJcbn1cclxuXHJcbi5ydW5uaW5nQnV0dG9ue1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwYTU5YTE7XHJcbiAgY29sb3I6ICNmMGYwZjA7XHJcbn1cclxuXHJcbi5ydW5uaW5nQ29udGFpbmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYjgxYmQ7XHJcbn1cclxuLm1hbnVhbEJ1dHRvbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkZW5yb2Q7XHJcbn1cclxuXHJcbi5tYW51YWxDb250YWluZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ29sZDtcclxufVxyXG5cclxuLm5vdFZpc2libGV7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMWUyZTE7XHJcbn1cclxuIiwiLmZhaWxlZCB7XG4gIGNvbG9yOiAjZmY4NjdmO1xufVxuXG4uc3VjY2VzcyB7XG4gIGNvbG9yOiAjODBlMjdlO1xufVxuXG4ub3RoZXIge1xuICBjb2xvcjogIzAwMmY2Yztcbn1cblxuLmNhcmRJdGVtIHtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbn1cblxubWF0LWNhcmQtYWN0aW9ucyB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4vKi5mYWlsZWRCb3JkZXJ7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNkNTAwMDA7XG59XG5cbi5zdWNjZXNzQm9yZGVye1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDBjODUzO1xufVxuXG4ub3RoZXJCb3JkZXJ7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDJmNmM7XG59Ki9cbi5mYWlsZWRCdXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkEwMDBEO1xuICBjb2xvcjogI2YwZjBmMDtcbn1cblxuLnVua25vd25CdXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYzMjM4O1xuICBjb2xvcjogI2YwZjBmMDtcbn1cblxuLnN1Y2Nlc3NCdXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDg3RjIzO1xuICBjb2xvcjogI2YwZjBmMDtcbn1cblxuLmZhaWxlZENvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjc5NjE7XG59XG5cbi51bmtub3duQ29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzllOWU5ZTtcbn1cblxuLnN1Y2Nlc3NDb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODBFMjdFO1xufVxuXG4ucnVubmluZ0J1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwYTU5YTE7XG4gIGNvbG9yOiAjZjBmMGYwO1xufVxuXG4ucnVubmluZ0NvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYjgxYmQ7XG59XG5cbi5tYW51YWxCdXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkZW5yb2Q7XG59XG5cbi5tYW51YWxDb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkO1xufVxuXG4ubm90VmlzaWJsZSB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UxZTJlMTtcbn0iXX0= */"] });
    return DashboardOverviewItemComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardOverviewItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'dd-dashboard-overview-item',
                templateUrl: './dashboard-overview-item.component.html',
                styleUrls: ['./dashboard-overview-item.component.scss']
            }]
    }], function () { return []; }, { pipeline: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/dashboard/components/dashboard-overview-line/dashboard-overview-line.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/dashboard/components/dashboard-overview-line/dashboard-overview-line.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: DashboardOverviewLineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardOverviewLineComponent", function() { return DashboardOverviewLineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_pipelines_pipeline_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/pipelines/pipeline.dto */ "./src/app/services/pipelines/pipeline.dto.ts");
/* harmony import */ var src_app_shared_classes_loading_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/classes/loading-state */ "./src/app/shared/classes/loading-state.ts");
/* harmony import */ var _services_pipelineSchedules_pipelineSchedules_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/pipelineSchedules/pipelineSchedules.service */ "./src/app/services/pipelineSchedules/pipelineSchedules.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _dashboard_overview_item_dashboard_overview_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dashboard-overview-item/dashboard-overview-item.component */ "./src/app/dashboard/components/dashboard-overview-item/dashboard-overview-item.component.ts");
/* harmony import */ var _shared_components_progress_indicator_progress_indicator_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/progress-indicator/progress-indicator.component */ "./src/app/shared/components/progress-indicator/progress-indicator.component.ts");









function DashboardOverviewLineComponent_div_1_dd_dashboard_overview_item_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "dd-dashboard-overview-item", 6);
} if (rf & 2) {
    var pipeline_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pipeline", pipeline_r4);
} }
function DashboardOverviewLineComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DashboardOverviewLineComponent_div_1_dd_dashboard_overview_item_1_Template, 1, 1, "dd-dashboard-overview-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.pipelines);
} }
var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc Ladebalkentext
     */ 
    var MSG_EXTERNAL_activitiesViewerLoading$$SRC_APP_DASHBOARD_COMPONENTS_DASHBOARD_OVERVIEW_LINE_DASHBOARD_OVERVIEW_LINE_COMPONENT_TS__1 = goog.getMsg("{$interpolation} wird geladen", { "interpolation": "\uFFFD0\uFFFD" });
    I18N_0 = MSG_EXTERNAL_activitiesViewerLoading$$SRC_APP_DASHBOARD_COMPONENTS_DASHBOARD_OVERVIEW_LINE_DASHBOARD_OVERVIEW_LINE_COMPONENT_TS__1;
}
else {
    I18N_0 = "" + "\uFFFD0\uFFFD" + " wird geladen";
}
var _c2 = ["text", I18N_0];
function DashboardOverviewLineComponent_dd_progress_indicator_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "dd-progress-indicator", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nAttributes"](1, _c2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nExp"](ctx_r1.project.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nApply"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("restrictedWidth", true);
} }
function DashboardOverviewLineComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.loadingError.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.loadingError.details);
} }
var DashboardOverviewLineComponent = /** @class */ (function () {
    function DashboardOverviewLineComponent(pipelineSchedulesService) {
        this.pipelineSchedulesService = pipelineSchedulesService;
        this.LoadingState = src_app_shared_classes_loading_state__WEBPACK_IMPORTED_MODULE_3__["LoadingState"];
        this.loadingState = src_app_shared_classes_loading_state__WEBPACK_IMPORTED_MODULE_3__["LoadingState"].Loading;
    }
    DashboardOverviewLineComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.project != null) {
            this.pipelineSchedulesService.getPipelineSchedules(this.project.id).subscribe(function (pipelineSchedules) {
                _this.pipelines = new Array();
                if (pipelineSchedules != undefined && pipelineSchedules.length != 0) {
                    pipelineSchedules.forEach(function (element) {
                        var pipelineFromSchedule = new _services_pipelines_pipeline_dto__WEBPACK_IMPORTED_MODULE_2__["Pipeline"]();
                        pipelineFromSchedule = element.lastPipeline;
                        pipelineFromSchedule.category = element.description;
                        pipelineFromSchedule.projectId = _this.project.id;
                        pipelineFromSchedule.projectName = _this.project.name;
                        _this.pipelines.push(pipelineFromSchedule);
                        _this.pipelines = _this.pipelines.sort(function (a, b) {
                            return a.category.localeCompare(b.category);
                        });
                        _this.pipelines = _this.pipelines.sort(function (a, b) {
                            return a.projectName.localeCompare(b.projectName);
                        });
                    });
                }
                else {
                    var unknownPipeline = new _services_pipelines_pipeline_dto__WEBPACK_IMPORTED_MODULE_2__["Pipeline"]();
                    unknownPipeline.projectId = _this.project.id;
                    unknownPipeline.category = "no schedules available";
                    unknownPipeline.status = "no schedules available";
                    unknownPipeline.projectName = _this.project.name;
                    unknownPipeline.id = 0;
                    _this.pipelines.push(unknownPipeline);
                }
                _this.pipelines = _this.pipelines.sort(function (a, b) {
                    return a.category.localeCompare(b.category);
                });
                _this.pipelines = _this.pipelines.sort(function (a, b) {
                    return a.projectName.localeCompare(b.projectName);
                });
                _this.loadingState = src_app_shared_classes_loading_state__WEBPACK_IMPORTED_MODULE_3__["LoadingState"].Finished;
            });
        }
    };
    DashboardOverviewLineComponent.ɵfac = function DashboardOverviewLineComponent_Factory(t) { return new (t || DashboardOverviewLineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_pipelineSchedules_pipelineSchedules_service__WEBPACK_IMPORTED_MODULE_4__["PipelineSchedulesService"])); };
    DashboardOverviewLineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DashboardOverviewLineComponent, selectors: [["dd-dashboard-overview-line"]], inputs: { project: "project" }, decls: 4, vars: 4, consts: [[3, "ngSwitch"], ["class", "lineContainer", 4, "ngSwitchCase"], ["class", "center-content", 3, "restrictedWidth", "text", 4, "ngSwitchCase"], ["class", "center-content  center-content__childs", 4, "ngSwitchCase"], [1, "lineContainer"], ["class", "projectListItem", 3, "pipeline", 4, "ngFor", "ngForOf"], [1, "projectListItem", 3, "pipeline"], [1, "center-content", 3, "restrictedWidth", 6, "text"], [1, "center-content", "center-content__childs"], [1, "mat-title"], [1, "mat-subheading-2"]], template: function DashboardOverviewLineComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DashboardOverviewLineComponent_div_1_Template, 2, 1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DashboardOverviewLineComponent_dd_progress_indicator_2_Template, 2, 2, "dd-progress-indicator", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DashboardOverviewLineComponent_div_3_Template, 5, 2, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx.loadingState);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx.LoadingState.Finished);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx.LoadingState.Loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx.LoadingState.Error);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _dashboard_overview_item_dashboard_overview_item_component__WEBPACK_IMPORTED_MODULE_6__["DashboardOverviewItemComponent"], _shared_components_progress_indicator_progress_indicator_component__WEBPACK_IMPORTED_MODULE_7__["ProgressIndicatorComponent"]], styles: [".projectListItem[_ngcontent-%COMP%] {\n  width: 30%;\n  background-color: #e1e2e1;\n  margin-bottom: 45px;\n}\n\n.lineContainer[_ngcontent-%COMP%] {\n  display: contents;\n}\n\n.center-content[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2NvbXBvbmVudHMvZGFzaGJvYXJkLW92ZXJ2aWV3LWxpbmUvQzpcXFVzZXJzXFxta2FiXFxEb2N1bWVudHNcXEdpdExhYkNpRGFzaGJvYXJkXFxHdWkvc3JjXFxhcHBcXGRhc2hib2FyZFxcY29tcG9uZW50c1xcZGFzaGJvYXJkLW92ZXJ2aWV3LWxpbmVcXGRhc2hib2FyZC1vdmVydmlldy1saW5lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kYXNoYm9hcmQvY29tcG9uZW50cy9kYXNoYm9hcmQtb3ZlcnZpZXctbGluZS9kYXNoYm9hcmQtb3ZlcnZpZXctbGluZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FEQ0M7RUFDRSxpQkFBQTtBQ0VIOztBRENBO0VBQ0UsV0FBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2NvbXBvbmVudHMvZGFzaGJvYXJkLW92ZXJ2aWV3LWxpbmUvZGFzaGJvYXJkLW92ZXJ2aWV3LWxpbmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvamVjdExpc3RJdGVte1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UxZTJlMTtcclxuICBtYXJnaW4tYm90dG9tOiA0NXB4O1xyXG59XHJcbiAubGluZUNvbnRhaW5lcntcclxuICAgZGlzcGxheTogY29udGVudHM7XHJcbiB9XHJcblxyXG4uY2VudGVyLWNvbnRlbnR7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIiwiLnByb2plY3RMaXN0SXRlbSB7XG4gIHdpZHRoOiAzMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMWUyZTE7XG4gIG1hcmdpbi1ib3R0b206IDQ1cHg7XG59XG5cbi5saW5lQ29udGFpbmVyIHtcbiAgZGlzcGxheTogY29udGVudHM7XG59XG5cbi5jZW50ZXItY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"] });
    return DashboardOverviewLineComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DashboardOverviewLineComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'dd-dashboard-overview-line',
                templateUrl: './dashboard-overview-line.component.html',
                styleUrls: ['./dashboard-overview-line.component.scss']
            }]
    }], function () { return [{ type: _services_pipelineSchedules_pipelineSchedules_service__WEBPACK_IMPORTED_MODULE_4__["PipelineSchedulesService"] }]; }, { project: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
var templateObject_1;


/***/ }),

/***/ "./src/app/dashboard/components/dashboard-overview-list/dashboard-overview-list.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/dashboard/components/dashboard-overview-list/dashboard-overview-list.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: DashboardOverviewListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardOverviewListComponent", function() { return DashboardOverviewListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_projects_project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/projects/project.service */ "./src/app/services/projects/project.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _dashboard_overview_line_dashboard_overview_line_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dashboard-overview-line/dashboard-overview-line.component */ "./src/app/dashboard/components/dashboard-overview-line/dashboard-overview-line.component.ts");





function DashboardOverviewListComponent_dd_dashboard_overview_line_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "dd-dashboard-overview-line", 1);
} if (rf & 2) {
    var project_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("project", project_r1);
} }
var DashboardOverviewListComponent = /** @class */ (function () {
    function DashboardOverviewListComponent(projectService) {
        this.projectService = projectService;
    }
    DashboardOverviewListComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.projectService);
        this.projectService.getDashboardConfiguredProjects().subscribe(function (projects) {
            console.log(projects);
            _this.projects = new Array();
            _this.projects = projects.sort(function (a, b) {
                return a.name.localeCompare(b.name);
            });
        });
    };
    DashboardOverviewListComponent.ɵfac = function DashboardOverviewListComponent_Factory(t) { return new (t || DashboardOverviewListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_projects_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"])); };
    DashboardOverviewListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardOverviewListComponent, selectors: [["dd-dashboard-overview-list"]], decls: 1, vars: 1, consts: [["class", "projectLine", 3, "project", 4, "ngFor", "ngForOf"], [1, "projectLine", 3, "project"]], template: function DashboardOverviewListComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DashboardOverviewListComponent_dd_dashboard_overview_line_0_Template, 1, 1, "dd-dashboard-overview-line", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projects);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _dashboard_overview_line_dashboard_overview_line_component__WEBPACK_IMPORTED_MODULE_3__["DashboardOverviewLineComponent"]], styles: [".projectLine[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  align-items: flex-start;\n  flex-direction: row;\n  flex-wrap: wrap;\n  width: 100%;\n  margin-bottom: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2NvbXBvbmVudHMvZGFzaGJvYXJkLW92ZXJ2aWV3LWxpc3QvQzpcXFVzZXJzXFxta2FiXFxEb2N1bWVudHNcXEdpdExhYkNpRGFzaGJvYXJkXFxHdWkvc3JjXFxhcHBcXGRhc2hib2FyZFxcY29tcG9uZW50c1xcZGFzaGJvYXJkLW92ZXJ2aWV3LWxpc3RcXGRhc2hib2FyZC1vdmVydmlldy1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kYXNoYm9hcmQvY29tcG9uZW50cy9kYXNoYm9hcmQtb3ZlcnZpZXctbGlzdC9kYXNoYm9hcmQtb3ZlcnZpZXctbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztFQUFBO0FBTUE7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2NvbXBvbmVudHMvZGFzaGJvYXJkLW92ZXJ2aWV3LWxpc3QvZGFzaGJvYXJkLW92ZXJ2aWV3LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKi5wcm9qZWN0TGlzdEl0ZW17XHJcbiAgd2lkdGg6IDMwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFlMmUxO1xyXG4gIG1hcmdpbi1ib3R0b206IDQ1cHg7XHJcbn0qL1xyXG5cclxuLnByb2plY3RMaW5le1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuXHJcbiIsIi8qLnByb2plY3RMaXN0SXRlbXtcbiAgd2lkdGg6IDMwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UxZTJlMTtcbiAgbWFyZ2luLWJvdHRvbTogNDVweDtcbn0qL1xuLnByb2plY3RMaW5lIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufSJdfQ== */"] });
    return DashboardOverviewListComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardOverviewListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'dd-dashboard-overview-list',
                templateUrl: './dashboard-overview-list.component.html',
                styleUrls: ['./dashboard-overview-list.component.scss']
            }]
    }], function () { return [{ type: _services_projects_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/dashboard/components/dashboard-overview-page/dashboard-overview-page.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/dashboard/components/dashboard-overview-page/dashboard-overview-page.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: DashboardOverviewPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardOverviewPageComponent", function() { return DashboardOverviewPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _dashboard_branches_headers_dashboard_branches_headers_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dashboard-branches-headers/dashboard-branches-headers.component */ "./src/app/dashboard/components/dashboard-branches-headers/dashboard-branches-headers.component.ts");
/* harmony import */ var _dashboard_overview_list_dashboard_overview_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dashboard-overview-list/dashboard-overview-list.component */ "./src/app/dashboard/components/dashboard-overview-list/dashboard-overview-list.component.ts");




var DashboardOverviewPageComponent = /** @class */ (function () {
    function DashboardOverviewPageComponent() {
    }
    DashboardOverviewPageComponent.prototype.ngOnInit = function () {
    };
    DashboardOverviewPageComponent.ɵfac = function DashboardOverviewPageComponent_Factory(t) { return new (t || DashboardOverviewPageComponent)(); };
    DashboardOverviewPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardOverviewPageComponent, selectors: [["dd-dashboard-overview-page"]], decls: 4, vars: 0, consts: [["id", "projectsList"]], template: function DashboardOverviewPageComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Dashboard");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "dd-dashboard-branches-headers");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "dd-dashboard-overview-list", 0);
        } }, directives: [_dashboard_branches_headers_dashboard_branches_headers_component__WEBPACK_IMPORTED_MODULE_1__["DashboardBranchesHeadersComponent"], _dashboard_overview_list_dashboard_overview_list_component__WEBPACK_IMPORTED_MODULE_2__["DashboardOverviewListComponent"]], styles: ["h1[_ngcontent-%COMP%] {\n  margin-left: 90px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2NvbXBvbmVudHMvZGFzaGJvYXJkLW92ZXJ2aWV3LXBhZ2UvQzpcXFVzZXJzXFxta2FiXFxEb2N1bWVudHNcXEdpdExhYkNpRGFzaGJvYXJkXFxHdWkvc3JjXFxhcHBcXGRhc2hib2FyZFxcY29tcG9uZW50c1xcZGFzaGJvYXJkLW92ZXJ2aWV3LXBhZ2VcXGRhc2hib2FyZC1vdmVydmlldy1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kYXNoYm9hcmQvY29tcG9uZW50cy9kYXNoYm9hcmQtb3ZlcnZpZXctcGFnZS9kYXNoYm9hcmQtb3ZlcnZpZXctcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7RUFBQTtBQVVBO0VBQ0UsaUJBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jb21wb25lbnRzL2Rhc2hib2FyZC1vdmVydmlldy1wYWdlL2Rhc2hib2FyZC1vdmVydmlldy1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyojcHJvamVjdHNMaXN0e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufSovXHJcblxyXG5oMXtcclxuICBtYXJnaW4tbGVmdDogOTBweDtcclxufVxyXG4iLCIvKiNwcm9qZWN0c0xpc3R7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn0qL1xuaDEge1xuICBtYXJnaW4tbGVmdDogOTBweDtcbn0iXX0= */"] });
    return DashboardOverviewPageComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardOverviewPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'dd-dashboard-overview-page',
                templateUrl: './dashboard-overview-page.component.html',
                styleUrls: ['./dashboard-overview-page.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _shared_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/material.module */ "./src/app/shared/material.module.ts");
/* harmony import */ var _components_dashboard_overview_list_dashboard_overview_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/dashboard-overview-list/dashboard-overview-list.component */ "./src/app/dashboard/components/dashboard-overview-list/dashboard-overview-list.component.ts");
/* harmony import */ var _components_dashboard_overview_item_dashboard_overview_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/dashboard-overview-item/dashboard-overview-item.component */ "./src/app/dashboard/components/dashboard-overview-item/dashboard-overview-item.component.ts");
/* harmony import */ var _components_dashboard_overview_page_dashboard_overview_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/dashboard-overview-page/dashboard-overview-page.component */ "./src/app/dashboard/components/dashboard-overview-page/dashboard-overview-page.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _components_dashboard_branches_headers_dashboard_branches_headers_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/dashboard-branches-headers/dashboard-branches-headers.component */ "./src/app/dashboard/components/dashboard-branches-headers/dashboard-branches-headers.component.ts");
/* harmony import */ var _components_dashboard_overview_line_dashboard_overview_line_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/dashboard-overview-line/dashboard-overview-line.component */ "./src/app/dashboard/components/dashboard-overview-line/dashboard-overview-line.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");











var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DashboardModule });
    DashboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DashboardModule_Factory(t) { return new (t || DashboardModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"]
            ]] });
    return DashboardModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardModule, { declarations: [_components_dashboard_overview_item_dashboard_overview_item_component__WEBPACK_IMPORTED_MODULE_4__["DashboardOverviewItemComponent"], _components_dashboard_overview_list_dashboard_overview_list_component__WEBPACK_IMPORTED_MODULE_3__["DashboardOverviewListComponent"], _components_dashboard_overview_page_dashboard_overview_page_component__WEBPACK_IMPORTED_MODULE_5__["DashboardOverviewPageComponent"], _components_dashboard_branches_headers_dashboard_branches_headers_component__WEBPACK_IMPORTED_MODULE_7__["DashboardBranchesHeadersComponent"], _components_dashboard_overview_line_dashboard_overview_line_component__WEBPACK_IMPORTED_MODULE_8__["DashboardOverviewLineComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"]], exports: [_components_dashboard_overview_page_dashboard_overview_page_component__WEBPACK_IMPORTED_MODULE_5__["DashboardOverviewPageComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_components_dashboard_overview_item_dashboard_overview_item_component__WEBPACK_IMPORTED_MODULE_4__["DashboardOverviewItemComponent"], _components_dashboard_overview_list_dashboard_overview_list_component__WEBPACK_IMPORTED_MODULE_3__["DashboardOverviewListComponent"], _components_dashboard_overview_page_dashboard_overview_page_component__WEBPACK_IMPORTED_MODULE_5__["DashboardOverviewPageComponent"], _components_dashboard_branches_headers_dashboard_branches_headers_component__WEBPACK_IMPORTED_MODULE_7__["DashboardBranchesHeadersComponent"], _components_dashboard_overview_line_dashboard_overview_line_component__WEBPACK_IMPORTED_MODULE_8__["DashboardOverviewLineComponent"]],
                exports: [
                    _components_dashboard_overview_page_dashboard_overview_page_component__WEBPACK_IMPORTED_MODULE_5__["DashboardOverviewPageComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/dashboard/dashboard.routing.ts":
/*!************************************************!*\
  !*** ./src/app/dashboard/dashboard.routing.ts ***!
  \************************************************/
/*! exports provided: DashboardRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutes", function() { return DashboardRoutes; });
/* harmony import */ var _components_dashboard_overview_page_dashboard_overview_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/dashboard-overview-page/dashboard-overview-page.component */ "./src/app/dashboard/components/dashboard-overview-page/dashboard-overview-page.component.ts");

var DashboardRoutes = [
    { path: '', component: _components_dashboard_overview_page_dashboard_overview_page_component__WEBPACK_IMPORTED_MODULE_0__["DashboardOverviewPageComponent"] }
];


/***/ }),

/***/ "./src/app/frame/components/section-item/section-item.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/frame/components/section-item/section-item.component.ts ***!
  \*************************************************************************/
/*! exports provided: SectionItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionItemComponent", function() { return SectionItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/button.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/icon.js");





var _c0 = function (a1) { return ["/", a1]; };
var SectionItemComponent = /** @class */ (function () {
    function SectionItemComponent() {
    }
    SectionItemComponent.prototype.ngOnInit = function () {
    };
    SectionItemComponent.ɵfac = function SectionItemComponent_Factory(t) { return new (t || SectionItemComponent)(); };
    SectionItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SectionItemComponent, selectors: [["dd-section-item"]], inputs: { section: "section", icon: "icon" }, decls: 4, vars: 5, consts: [["mat-button", "", 1, "selectionItem", 3, "routerLink"], ["aria-hidden", "true", "aria-label", "Example icon"]], template: function SectionItemComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.section.toLowerCase()));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.icon);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.section);
        } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]], styles: [".selectionItem[_ngcontent-%COMP%] {\n  width: 100%;\n  color: #f0f0f0;\n  font-size: 24px;\n  margin-bottom: 25px;\n  text-align: left;\n  transition-property: color;\n  transition-duration: 350ms;\n}\n.selectionItem[_ngcontent-%COMP%]:hover {\n  color: #ff5722;\n}\n.mat-icon[_ngcontent-%COMP%] {\n  vertical-align: center;\n  font-size: 28px;\n  width: 32px;\n  height: 32px;\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJhbWUvY29tcG9uZW50cy9zZWN0aW9uLWl0ZW0vQzpcXFVzZXJzXFxta2FiXFxEb2N1bWVudHNcXEdpdExhYkNpRGFzaGJvYXJkXFxHdWkvc3JjXFxhcHBcXGZyYW1lXFxjb21wb25lbnRzXFxzZWN0aW9uLWl0ZW1cXHNlY3Rpb24taXRlbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZnJhbWUvY29tcG9uZW50cy9zZWN0aW9uLWl0ZW0vc2VjdGlvbi1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7QUNDRjtBREFFO0VBQ0UsY0FBQTtBQ0VKO0FERUE7RUFDRSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9mcmFtZS9jb21wb25lbnRzL3NlY3Rpb24taXRlbS9zZWN0aW9uLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VsZWN0aW9uSXRlbXtcclxuICB3aWR0aDogMTAwJTtcclxuICBjb2xvcjogI2YwZjBmMDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGNvbG9yO1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDM1MG1zO1xyXG4gICY6aG92ZXJ7XHJcbiAgICBjb2xvcjogI2ZmNTcyMjtcclxuICB9XHJcbn1cclxuXHJcbi5tYXQtaWNvbiB7XHJcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbiAgd2lkdGg6IDMycHg7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG4iLCIuc2VsZWN0aW9uSXRlbSB7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogI2YwZjBmMDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBjb2xvcjtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMzUwbXM7XG59XG4uc2VsZWN0aW9uSXRlbTpob3ZlciB7XG4gIGNvbG9yOiAjZmY1NzIyO1xufVxuXG4ubWF0LWljb24ge1xuICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI4cHg7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn0iXX0= */"] });
    return SectionItemComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SectionItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'dd-section-item',
                templateUrl: './section-item.component.html',
                styleUrls: ['./section-item.component.scss']
            }]
    }], function () { return []; }, { section: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], icon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/frame/components/sections/sections.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/frame/components/sections/sections.component.ts ***!
  \*****************************************************************/
/*! exports provided: SectionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionsComponent", function() { return SectionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _section_item_section_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../section-item/section-item.component */ "./src/app/frame/components/section-item/section-item.component.ts");




function SectionsComponent_dd_section_item_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "dd-section-item", 1);
} if (rf & 2) {
    var section_r1 = ctx.$implicit;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("section", section_r1)("icon", ctx_r0.icons[ctx_r0.sections.indexOf(section_r1)]);
} }
var SectionsComponent = /** @class */ (function () {
    function SectionsComponent() {
    }
    SectionsComponent.prototype.ngOnInit = function () {
        this.sections = new Array();
        this.sections.push('Dashboard', 'Pipelines', 'Settings'); // 'Saved', 'Issues');
        this.icons = new Array();
        this.icons.push('home', 'graphic_eq', 'settings'); // 'bookmark', 'outlet');
    };
    SectionsComponent.ɵfac = function SectionsComponent_Factory(t) { return new (t || SectionsComponent)(); };
    SectionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SectionsComponent, selectors: [["dd-sections"]], decls: 1, vars: 1, consts: [[3, "section", "icon", 4, "ngFor", "ngForOf"], [3, "section", "icon"]], template: function SectionsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SectionsComponent_dd_section_item_0_Template, 1, 2, "dd-section-item", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sections);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _section_item_section_item_component__WEBPACK_IMPORTED_MODULE_2__["SectionItemComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZyYW1lL2NvbXBvbmVudHMvc2VjdGlvbnMvc2VjdGlvbnMuY29tcG9uZW50LnNjc3MifQ== */"] });
    return SectionsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SectionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'dd-sections',
                templateUrl: './sections.component.html',
                styleUrls: ['./sections.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/frame/components/sidebar-navigation/sidebar-navigation.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/frame/components/sidebar-navigation/sidebar-navigation.component.ts ***!
  \*************************************************************************************/
/*! exports provided: SidebarNavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarNavigationComponent", function() { return SidebarNavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm5/layout.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/toolbar.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/sidenav.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/list.js");
/* harmony import */ var _sections_sections_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sections/sections.component */ "./src/app/frame/components/sections/sections.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/icon.js");










function SidebarNavigationComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarNavigationComponent_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11); return _r1.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var _c0 = ["*"];
var SidebarNavigationComponent = /** @class */ (function () {
    function SidebarNavigationComponent(changeDetectorRef, media) {
        this.changeDetectorRef = changeDetectorRef;
        this.media = media;
    }
    SidebarNavigationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mobileQuery = this.media.matchMedia('(max-width: 975px)');
        this._mobileQueryListener = function () { return _this.changeDetectorRef.detectChanges(); };
        this.mobileQuery.addEventListener('change', this._mobileQueryListener);
    };
    SidebarNavigationComponent.prototype.ngOnDestroy = function () {
        this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
    };
    SidebarNavigationComponent.ɵfac = function SidebarNavigationComponent_Factory(t) { return new (t || SidebarNavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["MediaMatcher"])); };
    SidebarNavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarNavigationComponent, selectors: [["dd-sidebar-navigation"]], ngContentSelectors: _c0, decls: 16, vars: 4, consts: [["width", "64", "height", "64"], ["points", "0,0 32,0 0,32"], ["id", "toolbarContent"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", "onclick", "this.blur()", 3, "click", 4, "ngIf"], ["id", "svgTwo", "width", "64", "height", "64"], ["points", "64,64 32,64 64,32"], [1, "sidenav-container"], ["fixedInViewport", "", 1, "sidenav", 3, "mode", "opened"], ["drawer", ""], ["id", "selections"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", "onclick", "this.blur()", 3, "click"], ["aria-label", "Side nav toggle icon"]], template: function SidebarNavigationComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "polygon", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SidebarNavigationComponent_button_5_Template, 3, 0, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Gitlab CI Dashboard");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "svg", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "polygon", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-sidenav-container", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-sidenav", 7, 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-nav-list");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "dd-sections", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-sidenav-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mobileQuery.matches);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", ctx.mobileQuery.matches ? "push" : "side")("opened", ctx.mobileQuery.matches === false);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", "navigation");
        } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenav"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatNavList"], _sections_sections_component__WEBPACK_IMPORTED_MODULE_6__["SectionsComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavContent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"]], styles: ["#toolbarContent[_ngcontent-%COMP%] {\n  margin-left: 0px;\n}\n\n.sidenav-container[_ngcontent-%COMP%] {\n  height: 100%;\n  background-color: #484848;\n  position: fixed;\n  width: 100%;\n}\n\nmat-sidenav[_ngcontent-%COMP%] {\n  background-color: #484848;\n  color: #f0f0f0;\n  width: 250px;\n  margin-top: 64px;\n  display: flex;\n}\n\n#selections[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 95%;\n  margin: auto;\n}\n\n.mat-drawer.mat-drawer-push[_ngcontent-%COMP%] {\n  background-color: #484848;\n}\n\n.mat-toolbar.mat-primary[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\nmat-toolbar[_ngcontent-%COMP%] {\n  background-color: #212121;\n  color: #f0f0f0;\n  padding: 0;\n}\n\n.mat-icon[_ngcontent-%COMP%] {\n  vertical-align: bottom;\n  font-size: 28px;\n  width: 32px;\n  height: 28px;\n  color: #29b6f6;\n}\n\nsvg[_ngcontent-%COMP%] {\n  fill: #29b6f6;\n}\n\n#svgTwo[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n\n@media (max-width: 600px) {\n  mat-sidenav[_ngcontent-%COMP%] {\n    margin-top: 56px;\n  }\n}\n\nmat-sidenav-content[_ngcontent-%COMP%] {\n  background-color: #e1e2e1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJhbWUvY29tcG9uZW50cy9zaWRlYmFyLW5hdmlnYXRpb24vQzpcXFVzZXJzXFxta2FiXFxEb2N1bWVudHNcXEdpdExhYkNpRGFzaGJvYXJkXFxHdWkvc3JjXFxhcHBcXGZyYW1lXFxjb21wb25lbnRzXFxzaWRlYmFyLW5hdmlnYXRpb25cXHNpZGViYXItbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZnJhbWUvY29tcG9uZW50cy9zaWRlYmFyLW5hdmlnYXRpb24vc2lkZWJhci1uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRjs7QURFQTtFQUNFLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVBO0VBQ0Usc0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0U7SUFDRSxnQkFBQTtFQ0NGO0FBQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvZnJhbWUvY29tcG9uZW50cy9zaWRlYmFyLW5hdmlnYXRpb24vc2lkZWJhci1uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3Rvb2xiYXJDb250ZW50e1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbn1cclxuXHJcbi5zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0ODQ4NDg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5tYXQtc2lkZW5hdiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ4NDg0ODtcclxuICBjb2xvcjogI2YwZjBmMDtcclxuICB3aWR0aDogMjUwcHg7XHJcbiAgbWFyZ2luLXRvcDogNjRweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4jc2VsZWN0aW9uc3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDk1JTtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5tYXQtZHJhd2VyLm1hdC1kcmF3ZXItcHVzaHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDg0ODQ4O1xyXG59XHJcblxyXG4ubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiAwO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbm1hdC10b29sYmFye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7XHJcbiAgY29sb3I6ICNmMGYwZjA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLm1hdC1pY29uIHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxuICB3aWR0aDogMzJweDtcclxuICBoZWlnaHQ6IDI4cHg7XHJcbiAgY29sb3I6ICMyOWI2ZjY7XHJcbn1cclxuXHJcbnN2Z3tcclxuICBmaWxsOiAjMjliNmY2O1xyXG59XHJcblxyXG4jc3ZnVHdve1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpe1xyXG4gIG1hdC1zaWRlbmF2e1xyXG4gICAgbWFyZ2luLXRvcDogNTZweDtcclxuICB9XHJcbn1cclxuXHJcbm1hdC1zaWRlbmF2LWNvbnRlbnR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UxZTJlMTtcclxufVxyXG4iLCIjdG9vbGJhckNvbnRlbnQge1xuICBtYXJnaW4tbGVmdDogMHB4O1xufVxuXG4uc2lkZW5hdi1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0ODQ4NDg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbm1hdC1zaWRlbmF2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ4NDg0ODtcbiAgY29sb3I6ICNmMGYwZjA7XG4gIHdpZHRoOiAyNTBweDtcbiAgbWFyZ2luLXRvcDogNjRweDtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuI3NlbGVjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogOTUlO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5tYXQtZHJhd2VyLm1hdC1kcmF3ZXItcHVzaCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0ODQ4NDg7XG59XG5cbi5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTtcbn1cblxubWF0LXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMTIxO1xuICBjb2xvcjogI2YwZjBmMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLm1hdC1pY29uIHtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgZm9udC1zaXplOiAyOHB4O1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAyOHB4O1xuICBjb2xvcjogIzI5YjZmNjtcbn1cblxuc3ZnIHtcbiAgZmlsbDogIzI5YjZmNjtcbn1cblxuI3N2Z1R3byB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgbWF0LXNpZGVuYXYge1xuICAgIG1hcmdpbi10b3A6IDU2cHg7XG4gIH1cbn1cbm1hdC1zaWRlbmF2LWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFlMmUxO1xufSJdfQ== */"] });
    return SidebarNavigationComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarNavigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'dd-sidebar-navigation',
                templateUrl: './sidebar-navigation.component.html',
                styleUrls: ['./sidebar-navigation.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["MediaMatcher"] }]; }, null); })();


/***/ }),

/***/ "./src/app/frame/frame.module.ts":
/*!***************************************!*\
  !*** ./src/app/frame/frame.module.ts ***!
  \***************************************/
/*! exports provided: FrameModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrameModule", function() { return FrameModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _components_sidebar_navigation_sidebar_navigation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/sidebar-navigation/sidebar-navigation.component */ "./src/app/frame/components/sidebar-navigation/sidebar-navigation.component.ts");
/* harmony import */ var _shared_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/material.module */ "./src/app/shared/material.module.ts");
/* harmony import */ var _components_sections_sections_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sections/sections.component */ "./src/app/frame/components/sections/sections.component.ts");
/* harmony import */ var _components_section_item_section_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/section-item/section-item.component */ "./src/app/frame/components/section-item/section-item.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");








var FrameModule = /** @class */ (function () {
    function FrameModule() {
    }
    FrameModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FrameModule });
    FrameModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FrameModule_Factory(t) { return new (t || FrameModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]
            ]] });
    return FrameModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FrameModule, { declarations: [_components_sidebar_navigation_sidebar_navigation_component__WEBPACK_IMPORTED_MODULE_2__["SidebarNavigationComponent"], _components_sections_sections_component__WEBPACK_IMPORTED_MODULE_4__["SectionsComponent"], _components_section_item_section_item_component__WEBPACK_IMPORTED_MODULE_5__["SectionItemComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]], exports: [_components_sidebar_navigation_sidebar_navigation_component__WEBPACK_IMPORTED_MODULE_2__["SidebarNavigationComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FrameModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_components_sidebar_navigation_sidebar_navigation_component__WEBPACK_IMPORTED_MODULE_2__["SidebarNavigationComponent"], _components_sections_sections_component__WEBPACK_IMPORTED_MODULE_4__["SectionsComponent"], _components_section_item_section_item_component__WEBPACK_IMPORTED_MODULE_5__["SectionItemComponent"]],
                exports: [
                    _components_sidebar_navigation_sidebar_navigation_component__WEBPACK_IMPORTED_MODULE_2__["SidebarNavigationComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pipelines/components/pipeline-list-item/pipeline-list-item.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pipelines/components/pipeline-list-item/pipeline-list-item.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: PipelineListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipelineListItemComponent", function() { return PipelineListItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_pipelines_pipelines_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/pipelines/pipelines.service */ "./src/app/services/pipelines/pipelines.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/button.js");





function PipelineListItemComponent_span_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r2.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PipelineListItemComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PipelineListItemComponent_span_1_div_1_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var columnValue_r1 = ctx.$implicit;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.columnValues.indexOf(columnValue_r1) === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", columnValue_r1, " ");
} }
var PipelineListItemComponent = /** @class */ (function () {
    function PipelineListItemComponent(pipelineService, datePipe) {
        this.pipelineService = pipelineService;
        this.datePipe = datePipe;
    }
    PipelineListItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pipelineService.getPipelineTriggerUserInfo(this.projectId, this.pipeline.id).subscribe(function (pipelineTriggerUserInfo) {
            ;
            _this.pipelineTriggerUserInfo = pipelineTriggerUserInfo;
            _this.name = _this.pipelineTriggerUserInfo.user.name;
            _this.photo = _this.pipelineTriggerUserInfo.user.avatarUrl;
            //this.date = this.pipelineTriggerUserInfo.startedAt.split('T')[0].split('-').reverse().join('.');
            _this.date = _this.datePipe.transform(_this.pipelineTriggerUserInfo.startedAt, 'medium');
            var minutes = (_this.pipelineTriggerUserInfo.duration - (_this.pipelineTriggerUserInfo.duration % 60)) / 60;
            var seconds = _this.pipelineTriggerUserInfo.duration % 60;
            _this.duration = minutes + ' Min. ' + seconds + ' Sec.';
            _this.columnValues = new Array();
            _this.columnValues.push(_this.pipeline.id.toString(), _this.pipeline.status, _this.name, _this.date, _this.duration);
        });
    };
    PipelineListItemComponent.prototype.setContainerColor = function () {
        var classes = {
            'runningContainer': this.pipeline.status === 'running',
            'failedContainer': this.pipeline.status === 'failed',
            'manualContainer': this.pipeline.status === 'manual',
            'successContainer': this.pipeline.status === 'success',
            'unknownContainer': this.pipeline.status !== 'failed' && this.pipeline.status !== 'success' && this.pipeline.status !== 'manual' && this.pipeline.status !== 'running'
        };
        return classes;
    };
    PipelineListItemComponent.prototype.setButtonColor = function () {
        var classes = {
            'runningButton': this.pipeline.status === 'running',
            'failedButton': this.pipeline.status === 'failed',
            'manualButton': this.pipeline.status === 'manual',
            'successButton': this.pipeline.status === 'success',
            //'unknownButton': this.pipeline.status !== 'failed' && this.pipeline.status !== 'success' && this.pipeline.status !== 'manual' && this.pipeline.status !== 'running'
            'unknownButton': this.pipeline.status === "canceled" || this.pipeline.status == "blocked"
        };
        return classes;
    };
    PipelineListItemComponent.ɵfac = function PipelineListItemComponent_Factory(t) { return new (t || PipelineListItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_pipelines_pipelines_service__WEBPACK_IMPORTED_MODULE_1__["PipelinesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"])); };
    PipelineListItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PipelineListItemComponent, selectors: [["dd-pipeline-list-item"]], inputs: { pipeline: "pipeline", projectId: "projectId" }, decls: 4, vars: 3, consts: [["id", "pipelineListItemContainer", 3, "ngClass"], ["class", "pipelineListItem", 4, "ngFor", "ngForOf"], ["mat-button", "", 3, "ngClass"], [1, "pipelineListItem"], ["id", "imgContainer", 4, "ngIf"], ["id", "imgContainer"], ["width", "38px", 3, "src"]], template: function PipelineListItemComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PipelineListItemComponent_span_1_Template, 3, 2, "span", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "VIEW");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.setContainerColor());
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.columnValues);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.setButtonColor());
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["#pipelineListItemContainer[_ngcontent-%COMP%] {\n  margin: 25px auto auto;\n  width: 90%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  padding-left: 25px;\n  padding-right: 25px;\n}\n\n.pipelineListItem[_ngcontent-%COMP%] {\n  flex: 1;\n  align-self: center;\n}\n\n#imgContainer[_ngcontent-%COMP%] {\n  display: inline-flex;\n  vertical-align: middle;\n}\n\nbutton[_ngcontent-%COMP%] {\n  color: #ffffff;\n  margin: auto;\n  border-width: medium;\n  max-height: 30px;\n}\n\n.failedButton[_ngcontent-%COMP%] {\n  background-color: #BA000D;\n}\n\n.unknownButton[_ngcontent-%COMP%] {\n  background-color: #263238;\n}\n\n.successButton[_ngcontent-%COMP%] {\n  background-color: #087F23;\n}\n\n.failedContainer[_ngcontent-%COMP%] {\n  background-color: #FF7961;\n}\n\n.unknownContainer[_ngcontent-%COMP%] {\n  background-color: #9e9e9e;\n}\n\n.successContainer[_ngcontent-%COMP%] {\n  background-color: #80E27E;\n}\n\n.runningButton[_ngcontent-%COMP%] {\n  background-color: #0a59a1;\n}\n\n.runningContainer[_ngcontent-%COMP%] {\n  background-color: #1b81bd;\n}\n\n.manualButton[_ngcontent-%COMP%] {\n  background-color: goldenrod;\n}\n\n.manualContainer[_ngcontent-%COMP%] {\n  background-color: gold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGlwZWxpbmVzL2NvbXBvbmVudHMvcGlwZWxpbmUtbGlzdC1pdGVtL0M6XFxVc2Vyc1xcbWthYlxcRG9jdW1lbnRzXFxHaXRMYWJDaURhc2hib2FyZFxcR3VpL3NyY1xcYXBwXFxwaXBlbGluZXNcXGNvbXBvbmVudHNcXHBpcGVsaW5lLWxpc3QtaXRlbVxccGlwZWxpbmUtbGlzdC1pdGVtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9waXBlbGluZXMvY29tcG9uZW50cy9waXBlbGluZS1saXN0LWl0ZW0vcGlwZWxpbmUtbGlzdC1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxpREFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLE9BQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0Usb0JBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRjs7QURDQTtFQUNFLDJCQUFBO0FDRUY7O0FEQ0E7RUFDRSxzQkFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvcGlwZWxpbmVzL2NvbXBvbmVudHMvcGlwZWxpbmUtbGlzdC1pdGVtL3BpcGVsaW5lLWxpc3QtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwaXBlbGluZUxpc3RJdGVtQ29udGFpbmVye1xyXG4gIG1hcmdpbjogMjVweCBhdXRvIGF1dG87XHJcbiAgd2lkdGg6IDkwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcbi5waXBlbGluZUxpc3RJdGVte1xyXG4gIGZsZXg6IDE7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG59XHJcblxyXG4jaW1nQ29udGFpbmVye1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbmJ1dHRvbntcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgYm9yZGVyLXdpZHRoOiBtZWRpdW07XHJcbiAgbWF4LWhlaWdodDogMzBweDtcclxufVxyXG5cclxuLmZhaWxlZEJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0JBMDAwRDtcclxufVxyXG5cclxuLnVua25vd25CdXR0b257XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2MzIzODtcclxufVxyXG5cclxuLnN1Y2Nlc3NCdXR0b257XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4N0YyMztcclxufVxyXG5cclxuLmZhaWxlZENvbnRhaW5lcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY3OTYxO1xyXG59XHJcblxyXG4udW5rbm93bkNvbnRhaW5lcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWU5ZTllO1xyXG59XHJcblxyXG4uc3VjY2Vzc0NvbnRhaW5lcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODBFMjdFO1xyXG59XHJcblxyXG4ucnVubmluZ0J1dHRvbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGE1OWExO1xyXG59XHJcblxyXG4ucnVubmluZ0NvbnRhaW5lcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWI4MWJkO1xyXG59XHJcbi5tYW51YWxCdXR0b257XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ29sZGVucm9kO1xyXG59XHJcblxyXG4ubWFudWFsQ29udGFpbmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdvbGQ7XHJcbn1cclxuIiwiI3BpcGVsaW5lTGlzdEl0ZW1Db250YWluZXIge1xuICBtYXJnaW46IDI1cHggYXV0byBhdXRvO1xuICB3aWR0aDogOTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xufVxuXG4ucGlwZWxpbmVMaXN0SXRlbSB7XG4gIGZsZXg6IDE7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuI2ltZ0NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG5idXR0b24ge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3JkZXItd2lkdGg6IG1lZGl1bTtcbiAgbWF4LWhlaWdodDogMzBweDtcbn1cblxuLmZhaWxlZEJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNCQTAwMEQ7XG59XG5cbi51bmtub3duQnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2MzIzODtcbn1cblxuLnN1Y2Nlc3NCdXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDg3RjIzO1xufVxuXG4uZmFpbGVkQ29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNzk2MTtcbn1cblxuLnVua25vd25Db250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWU5ZTllO1xufVxuXG4uc3VjY2Vzc0NvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4MEUyN0U7XG59XG5cbi5ydW5uaW5nQnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBhNTlhMTtcbn1cblxuLnJ1bm5pbmdDb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWI4MWJkO1xufVxuXG4ubWFudWFsQnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ29sZGVucm9kO1xufVxuXG4ubWFudWFsQ29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ29sZDtcbn0iXX0= */"] });
    return PipelineListItemComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PipelineListItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'dd-pipeline-list-item',
                templateUrl: './pipeline-list-item.component.html',
                styleUrls: ['./pipeline-list-item.component.scss']
            }]
    }], function () { return [{ type: _services_pipelines_pipelines_service__WEBPACK_IMPORTED_MODULE_1__["PipelinesService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] }]; }, { pipeline: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], projectId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/pipelines/components/pipeline-list/pipeline-list.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pipelines/components/pipeline-list/pipeline-list.component.ts ***!
  \*******************************************************************************/
/*! exports provided: PipelineListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipelineListComponent", function() { return PipelineListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_pipelines_pipelines_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/pipelines/pipelines.service */ "./src/app/services/pipelines/pipelines.service.ts");
/* harmony import */ var _pipelines_filter_pipelines_filter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pipelines-filter/pipelines-filter.component */ "./src/app/pipelines/components/pipelines-filter/pipelines-filter.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _pipeline_list_item_pipeline_list_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pipeline-list-item/pipeline-list-item.component */ "./src/app/pipelines/components/pipeline-list-item/pipeline-list-item.component.ts");






function PipelineListComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var column_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](column_r2);
} }
function PipelineListComponent_dd_pipeline_list_item_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "dd-pipeline-list-item", 5);
} if (rf & 2) {
    var pipeline_r3 = ctx.$implicit;
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pipeline", pipeline_r3)("projectId", ctx_r1.projectId);
} }
var PipelineListComponent = /** @class */ (function () {
    function PipelineListComponent(pipelineService) {
        this.pipelineService = pipelineService;
        this.columns = ['Pipeline ID', 'Status', 'Started by', 'Created At', 'Total Time'];
    }
    PipelineListComponent.prototype.ngOnInit = function () {
        this.pipelines = new Array();
    };
    PipelineListComponent.prototype.updateProjectId = function (projectId) {
        this.projectId = projectId;
    };
    PipelineListComponent.prototype.listBranchPipelines = function (branchName) {
        var _this = this;
        this.branchName = branchName;
        this.pipelineService.getPipelinesByBranch(this.projectId, this.branchName).subscribe(function (pipelines) {
            _this.pipelines = pipelines;
        });
    };
    PipelineListComponent.ɵfac = function PipelineListComponent_Factory(t) { return new (t || PipelineListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_pipelines_pipelines_service__WEBPACK_IMPORTED_MODULE_1__["PipelinesService"])); };
    PipelineListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PipelineListComponent, selectors: [["dd-pipeline-list"]], decls: 4, vars: 2, consts: [[3, "listBranchPipelines", "updateProjectId"], ["id", "columnContainer"], ["class", "columnItem", 4, "ngFor", "ngForOf"], [3, "pipeline", "projectId", 4, "ngFor", "ngForOf"], [1, "columnItem"], [3, "pipeline", "projectId"]], template: function PipelineListComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "dd-pipelines-filter", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("listBranchPipelines", function PipelineListComponent_Template_dd_pipelines_filter_listBranchPipelines_0_listener($event) { return ctx.listBranchPipelines($event); })("updateProjectId", function PipelineListComponent_Template_dd_pipelines_filter_updateProjectId_0_listener($event) { return ctx.updateProjectId($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PipelineListComponent_span_2_Template, 2, 1, "span", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PipelineListComponent_dd_pipeline_list_item_3_Template, 1, 2, "dd-pipeline-list-item", 3);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.columns);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pipelines);
        } }, directives: [_pipelines_filter_pipelines_filter_component__WEBPACK_IMPORTED_MODULE_2__["PipelinesFilterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _pipeline_list_item_pipeline_list_item_component__WEBPACK_IMPORTED_MODULE_4__["PipelineListItemComponent"]], styles: ["#columnContainer[_ngcontent-%COMP%] {\n  margin: auto auto auto 5%;\n  width: 86%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: 500;\n}\n\n.columnItem[_ngcontent-%COMP%] {\n  flex: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGlwZWxpbmVzL2NvbXBvbmVudHMvcGlwZWxpbmUtbGlzdC9DOlxcVXNlcnNcXG1rYWJcXERvY3VtZW50c1xcR2l0TGFiQ2lEYXNoYm9hcmRcXEd1aS9zcmNcXGFwcFxccGlwZWxpbmVzXFxjb21wb25lbnRzXFxwaXBlbGluZS1saXN0XFxwaXBlbGluZS1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9waXBlbGluZXMvY29tcG9uZW50cy9waXBlbGluZS1saXN0L3BpcGVsaW5lLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGlEQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURDQTtFQUNFLE9BQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL3BpcGVsaW5lcy9jb21wb25lbnRzL3BpcGVsaW5lLWxpc3QvcGlwZWxpbmUtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb2x1bW5Db250YWluZXJ7XHJcbiAgbWFyZ2luOiBhdXRvIGF1dG8gYXV0byA1JTtcclxuICB3aWR0aDogODYlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi5jb2x1bW5JdGVte1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuIiwiI2NvbHVtbkNvbnRhaW5lciB7XG4gIG1hcmdpbjogYXV0byBhdXRvIGF1dG8gNSU7XG4gIHdpZHRoOiA4NiU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uY29sdW1uSXRlbSB7XG4gIGZsZXg6IDE7XG59Il19 */"] });
    return PipelineListComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PipelineListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'dd-pipeline-list',
                templateUrl: './pipeline-list.component.html',
                styleUrls: ['./pipeline-list.component.scss']
            }]
    }], function () { return [{ type: _services_pipelines_pipelines_service__WEBPACK_IMPORTED_MODULE_1__["PipelinesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pipelines/components/pipelines-filter/pipelines-filter.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pipelines/components/pipelines-filter/pipelines-filter.component.ts ***!
  \*************************************************************************************/
/*! exports provided: PipelinesFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipelinesFilterComponent", function() { return PipelinesFilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _services_branches_branches_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/branches/branches.service */ "./src/app/services/branches/branches.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _services_projects_project_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/projects/project.service */ "./src/app/services/projects/project.service.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/core.js");











function PipelinesFilterComponent_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PipelinesFilterComponent_mat_option_5_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); var project_r4 = ctx.$implicit; var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.navToProj(project_r4.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var project_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", project_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", project_r4.name, " ");
} }
function PipelinesFilterComponent_mat_error_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "W\u00E4hlen Sie eine ProjectID aus");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PipelinesFilterComponent_mat_option_11_Template(rf, ctx) { if (rf & 1) {
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PipelinesFilterComponent_mat_option_11_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); var branch_r7 = ctx.$implicit; var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.navToBranch(branch_r7.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var branch_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", branch_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", branch_r7.name, " ");
} }
function PipelinesFilterComponent_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "W\u00E4hlen Sie einen Branch aus");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var PipelinesFilterComponent = /** @class */ (function () {
    function PipelinesFilterComponent(branchesService, router, activatedRoute, projectService) {
        this.branchesService = branchesService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.projectService = projectService;
        this.listBranchPipelines = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.updateProjectId = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.projectControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.branchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
    }
    PipelinesFilterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.projectService.getDashboardConfiguredProjects().subscribe(function (projects) {
            _this.projects = projects;
            console.log(projects);
            _this.sub = _this.activatedRoute.params.subscribe(function (params) {
                _this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
                if (params['projectName'] === undefined) {
                    _this.branchesService.getBranches(_this.projects[0].id).subscribe(function (branches) {
                        _this.branchesOfSelectedProject = branches;
                        _this.projectControl.setValue(_this.projects[0].name);
                        _this.branchControl.setValue(_this.projects[0].defaultBranch);
                        _this.updateBranchList(_this.projects[0].id);
                        _this.currentId = _this.projects[0].id;
                        _this.selectBranch(_this.projects[0].defaultBranch);
                    });
                }
                else if (params['branchName'] === undefined) {
                    _this.branchesService.getBranches(params['projectName']).subscribe(function (branches) {
                        _this.branchesOfSelectedProject = branches;
                        _this.projectControl.setValue(_this.projects.filter(function (element) { return element.id == params['projectName']; })[0].name);
                        _this.currentId = _this.projects.filter(function (element) { return element.id == params['projectName']; })[0].id;
                        _this.branchControl.setValue(_this.projects.filter(function (element) { return element.id == params['projectName']; })[0].defaultBranch);
                        _this.updateBranchList(params['projectName']);
                        _this.selectBranch(_this.projects.filter(function (element) { return element.id == params['projectName']; })[0].defaultBranch);
                    });
                }
                else {
                    _this.branchesService.getBranches(params['projectName']).subscribe(function (branches) {
                        _this.branchesOfSelectedProject = branches;
                        _this.projectControl.setValue(_this.projects.filter(function (element) { return element.id == params['projectName']; })[0].name);
                        _this.currentId = _this.projects.filter(function (element) { return element.id == params['projectName']; })[0].id;
                        _this.branchControl.setValue(_this.placeSlashInBranchName(params['branchName']));
                        _this.updateBranchList(params['projectName']);
                        _this.selectBranch(params['branchName']);
                    });
                }
            });
        });
    };
    PipelinesFilterComponent.prototype.updateBranchList = function (projectId) {
        this.updateProjectId.emit(projectId);
    };
    PipelinesFilterComponent.prototype.navToProj = function (projectId) {
        this.router.navigate(['/pipelines', projectId, this.projects.filter(function (element) { return element.id == projectId; })[0].defaultBranch]).finally(function () { });
    };
    PipelinesFilterComponent.prototype.navToBranch = function (branchName) {
        this.router.navigate(['/pipelines', this.currentId, this.replaceSlashInBranchName(branchName)]).finally(function () { });
    };
    PipelinesFilterComponent.prototype.selectBranch = function (branchName) {
        branchName = this.replaceSlashInBranchName(branchName);
        this.listBranchPipelines.emit(branchName);
    };
    PipelinesFilterComponent.prototype.replaceSlashInBranchName = function (branchName) {
        if (branchName.includes('/')) {
            var branchNameSplit = branchName.split('/');
            return branchNameSplit.join('22F');
        }
        else
            return branchName;
    };
    PipelinesFilterComponent.prototype.placeSlashInBranchName = function (branchName) {
        if (branchName.includes('22F')) {
            var branchNameSplit = branchName.split('22F');
            return branchNameSplit.join('/');
        }
        else
            return branchName;
    };
    PipelinesFilterComponent.prototype.ngOnDestroy = function () {
        try {
            this.sub.unsubscribe();
        }
        catch (er) { }
    };
    PipelinesFilterComponent.ɵfac = function PipelinesFilterComponent_Factory(t) { return new (t || PipelinesFilterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_branches_branches_service__WEBPACK_IMPORTED_MODULE_2__["BranchesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_projects_project_service__WEBPACK_IMPORTED_MODULE_4__["ProjectService"])); };
    PipelinesFilterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PipelinesFilterComponent, selectors: [["dd-pipelines-filter"]], outputs: { listBranchPipelines: "listBranchPipelines", updateProjectId: "updateProjectId" }, decls: 13, vars: 6, consts: [["id", "filterContainer"], ["appearance", "fill", 1, "inputField"], ["required", "", 3, "formControl"], [3, "value", "click", 4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "value", "click"]], template: function PipelinesFilterComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "ProjectId");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-select", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PipelinesFilterComponent_mat_option_5_Template, 2, 2, "mat-option", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PipelinesFilterComponent_mat_error_6_Template, 2, 0, "mat-error", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Branch");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-select", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PipelinesFilterComponent_mat_option_11_Template, 2, 2, "mat-option", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PipelinesFilterComponent_mat_error_12_Template, 2, 0, "mat-error", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.projectControl);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projects);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.projectControl.hasError("required"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.branchControl);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.branchesOfSelectedProject);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.branchControl.hasError("required"));
        } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"]], styles: ["#filterContainer[_ngcontent-%COMP%] {\n  margin-left: 90px;\n}\n\n.inputField[_ngcontent-%COMP%] {\n  margin-right: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGlwZWxpbmVzL2NvbXBvbmVudHMvcGlwZWxpbmVzLWZpbHRlci9DOlxcVXNlcnNcXG1rYWJcXERvY3VtZW50c1xcR2l0TGFiQ2lEYXNoYm9hcmRcXEd1aS9zcmNcXGFwcFxccGlwZWxpbmVzXFxjb21wb25lbnRzXFxwaXBlbGluZXMtZmlsdGVyXFxwaXBlbGluZXMtZmlsdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9waXBlbGluZXMvY29tcG9uZW50cy9waXBlbGluZXMtZmlsdGVyL3BpcGVsaW5lcy1maWx0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BpcGVsaW5lcy9jb21wb25lbnRzL3BpcGVsaW5lcy1maWx0ZXIvcGlwZWxpbmVzLWZpbHRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNmaWx0ZXJDb250YWluZXJ7XHJcbiAgbWFyZ2luLWxlZnQ6IDkwcHg7XHJcbn1cclxuXHJcbi5pbnB1dEZpZWxke1xyXG4gIG1hcmdpbi1yaWdodDogNTBweDtcclxufVxyXG4iLCIjZmlsdGVyQ29udGFpbmVyIHtcbiAgbWFyZ2luLWxlZnQ6IDkwcHg7XG59XG5cbi5pbnB1dEZpZWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xufSJdfQ== */"] });
    return PipelinesFilterComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PipelinesFilterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'dd-pipelines-filter',
                templateUrl: './pipelines-filter.component.html',
                styleUrls: ['./pipelines-filter.component.scss']
            }]
    }], function () { return [{ type: _services_branches_branches_service__WEBPACK_IMPORTED_MODULE_2__["BranchesService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _services_projects_project_service__WEBPACK_IMPORTED_MODULE_4__["ProjectService"] }]; }, { listBranchPipelines: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], updateProjectId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/pipelines/components/pipelines-header/pipelines-header.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pipelines/components/pipelines-header/pipelines-header.component.ts ***!
  \*************************************************************************************/
/*! exports provided: PipelinesHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipelinesHeaderComponent", function() { return PipelinesHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var PipelinesHeaderComponent = /** @class */ (function () {
    function PipelinesHeaderComponent() {
    }
    PipelinesHeaderComponent.prototype.ngOnInit = function () {
    };
    PipelinesHeaderComponent.ɵfac = function PipelinesHeaderComponent_Factory(t) { return new (t || PipelinesHeaderComponent)(); };
    PipelinesHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PipelinesHeaderComponent, selectors: [["dd-pipelines-header"]], decls: 5, vars: 0, consts: [["id", "headerContainer"]], template: function PipelinesHeaderComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Pipelines");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Hier finden sie die \u00DCbersicht \u00FCber die letzten pipelines von jedem Branch der hinterlegten Projekte");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["#headerContainer[_ngcontent-%COMP%] {\n  margin-left: 90px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGlwZWxpbmVzL2NvbXBvbmVudHMvcGlwZWxpbmVzLWhlYWRlci9DOlxcVXNlcnNcXG1rYWJcXERvY3VtZW50c1xcR2l0TGFiQ2lEYXNoYm9hcmRcXEd1aS9zcmNcXGFwcFxccGlwZWxpbmVzXFxjb21wb25lbnRzXFxwaXBlbGluZXMtaGVhZGVyXFxwaXBlbGluZXMtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9waXBlbGluZXMvY29tcG9uZW50cy9waXBlbGluZXMtaGVhZGVyL3BpcGVsaW5lcy1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGlwZWxpbmVzL2NvbXBvbmVudHMvcGlwZWxpbmVzLWhlYWRlci9waXBlbGluZXMtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2hlYWRlckNvbnRhaW5lcntcclxuICBtYXJnaW4tbGVmdDogOTBweDtcclxufVxyXG4iLCIjaGVhZGVyQ29udGFpbmVyIHtcbiAgbWFyZ2luLWxlZnQ6IDkwcHg7XG59Il19 */"] });
    return PipelinesHeaderComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PipelinesHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'dd-pipelines-header',
                templateUrl: './pipelines-header.component.html',
                styleUrls: ['./pipelines-header.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pipelines/components/pipelines-view/pipelines-view.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pipelines/components/pipelines-view/pipelines-view.component.ts ***!
  \*********************************************************************************/
/*! exports provided: PipelinesViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipelinesViewComponent", function() { return PipelinesViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _pipelines_header_pipelines_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pipelines-header/pipelines-header.component */ "./src/app/pipelines/components/pipelines-header/pipelines-header.component.ts");
/* harmony import */ var _pipeline_list_pipeline_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pipeline-list/pipeline-list.component */ "./src/app/pipelines/components/pipeline-list/pipeline-list.component.ts");




var PipelinesViewComponent = /** @class */ (function () {
    function PipelinesViewComponent() {
    }
    PipelinesViewComponent.prototype.ngOnInit = function () {
    };
    PipelinesViewComponent.ɵfac = function PipelinesViewComponent_Factory(t) { return new (t || PipelinesViewComponent)(); };
    PipelinesViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PipelinesViewComponent, selectors: [["dd-pipelines-view"]], decls: 2, vars: 0, template: function PipelinesViewComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "dd-pipelines-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "dd-pipeline-list");
        } }, directives: [_pipelines_header_pipelines_header_component__WEBPACK_IMPORTED_MODULE_1__["PipelinesHeaderComponent"], _pipeline_list_pipeline_list_component__WEBPACK_IMPORTED_MODULE_2__["PipelineListComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BpcGVsaW5lcy9jb21wb25lbnRzL3BpcGVsaW5lcy12aWV3L3BpcGVsaW5lcy12aWV3LmNvbXBvbmVudC5zY3NzIn0= */"] });
    return PipelinesViewComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PipelinesViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'dd-pipelines-view',
                templateUrl: './pipelines-view.component.html',
                styleUrls: ['./pipelines-view.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pipelines/pipelines.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pipelines/pipelines.module.ts ***!
  \***********************************************/
/*! exports provided: PipelinesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipelinesModule", function() { return PipelinesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _shared_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/material.module */ "./src/app/shared/material.module.ts");
/* harmony import */ var _components_pipeline_list_pipeline_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/pipeline-list/pipeline-list.component */ "./src/app/pipelines/components/pipeline-list/pipeline-list.component.ts");
/* harmony import */ var _components_pipeline_list_item_pipeline_list_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/pipeline-list-item/pipeline-list-item.component */ "./src/app/pipelines/components/pipeline-list-item/pipeline-list-item.component.ts");
/* harmony import */ var _components_pipelines_header_pipelines_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/pipelines-header/pipelines-header.component */ "./src/app/pipelines/components/pipelines-header/pipelines-header.component.ts");
/* harmony import */ var _components_pipelines_view_pipelines_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/pipelines-view/pipelines-view.component */ "./src/app/pipelines/components/pipelines-view/pipelines-view.component.ts");
/* harmony import */ var _components_pipelines_filter_pipelines_filter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/pipelines-filter/pipelines-filter.component */ "./src/app/pipelines/components/pipelines-filter/pipelines-filter.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");










var PipelinesModule = /** @class */ (function () {
    function PipelinesModule() {
    }
    PipelinesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PipelinesModule });
    PipelinesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PipelinesModule_Factory(t) { return new (t || PipelinesModule)(); }, providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]
            ]] });
    return PipelinesModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PipelinesModule, { declarations: [_components_pipeline_list_pipeline_list_component__WEBPACK_IMPORTED_MODULE_3__["PipelineListComponent"], _components_pipeline_list_item_pipeline_list_item_component__WEBPACK_IMPORTED_MODULE_4__["PipelineListItemComponent"], _components_pipelines_header_pipelines_header_component__WEBPACK_IMPORTED_MODULE_5__["PipelinesHeaderComponent"], _components_pipelines_view_pipelines_view_component__WEBPACK_IMPORTED_MODULE_6__["PipelinesViewComponent"], _components_pipelines_filter_pipelines_filter_component__WEBPACK_IMPORTED_MODULE_7__["PipelinesFilterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]], exports: [_components_pipelines_view_pipelines_view_component__WEBPACK_IMPORTED_MODULE_6__["PipelinesViewComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PipelinesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_components_pipeline_list_pipeline_list_component__WEBPACK_IMPORTED_MODULE_3__["PipelineListComponent"], _components_pipeline_list_item_pipeline_list_item_component__WEBPACK_IMPORTED_MODULE_4__["PipelineListItemComponent"], _components_pipelines_header_pipelines_header_component__WEBPACK_IMPORTED_MODULE_5__["PipelinesHeaderComponent"], _components_pipelines_view_pipelines_view_component__WEBPACK_IMPORTED_MODULE_6__["PipelinesViewComponent"], _components_pipelines_filter_pipelines_filter_component__WEBPACK_IMPORTED_MODULE_7__["PipelinesFilterComponent"]],
                exports: [
                    _components_pipelines_view_pipelines_view_component__WEBPACK_IMPORTED_MODULE_6__["PipelinesViewComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]
                ],
                providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pipelines/pipelines.routing.ts":
/*!************************************************!*\
  !*** ./src/app/pipelines/pipelines.routing.ts ***!
  \************************************************/
/*! exports provided: PipelinesRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipelinesRoutes", function() { return PipelinesRoutes; });
/* harmony import */ var _components_pipelines_view_pipelines_view_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/pipelines-view/pipelines-view.component */ "./src/app/pipelines/components/pipelines-view/pipelines-view.component.ts");

var PipelinesRoutes = [
    { path: '', component: _components_pipelines_view_pipelines_view_component__WEBPACK_IMPORTED_MODULE_0__["PipelinesViewComponent"] },
    { path: ':projectName', component: _components_pipelines_view_pipelines_view_component__WEBPACK_IMPORTED_MODULE_0__["PipelinesViewComponent"] },
    { path: ':projectName/:branchName', component: _components_pipelines_view_pipelines_view_component__WEBPACK_IMPORTED_MODULE_0__["PipelinesViewComponent"] }
];


/***/ }),

/***/ "./src/app/services/branches/branches.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/branches/branches.service.ts ***!
  \*******************************************************/
/*! exports provided: BranchesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchesService", function() { return BranchesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
var BranchesService = /** @class */ (function () {
    function BranchesService(http) {
        this.http = http;
    }
    BranchesService.prototype.getBranches = function (projectId) {
        var route = '/gitlabcidashboard/api/' + projectId + '/branches/';
        return this.http.get(route);
    };
    BranchesService.ɵfac = function BranchesService_Factory(t) { return new (t || BranchesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    BranchesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BranchesService, factory: BranchesService.ɵfac, providedIn: 'root' });
    return BranchesService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BranchesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/configuration/configuration.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/services/configuration/configuration.service.ts ***!
  \*****************************************************************/
/*! exports provided: ConfigurationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationService", function() { return ConfigurationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    })
};
var ConfigurationService = /** @class */ (function () {
    function ConfigurationService(http) {
        this.http = http;
    }
    ConfigurationService.prototype.getConfiguration = function () {
        var route = '/gitlabcidashboard/api/configuration/';
        return this.http.get(route);
    };
    ConfigurationService.prototype.saveUserConfiguration = function (config) {
        var route = '/gitlabcidashboard/api/configuration/';
        return this.http.post(route, config, httpOptions);
    };
    ConfigurationService.ɵfac = function ConfigurationService_Factory(t) { return new (t || ConfigurationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    ConfigurationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ConfigurationService, factory: ConfigurationService.ɵfac, providedIn: 'root' });
    return ConfigurationService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfigurationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/error/error.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/error/error.service.ts ***!
  \*************************************************/
/*! exports provided: ErrorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorService", function() { return ErrorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _resource_string_resource_string_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../resource-string/resource-string.service */ "./src/app/services/resource-string/resource-string.service.ts");



var ErrorService = /** @class */ (function () {
    function ErrorService(resourceStrings) {
        this.resourceStrings = resourceStrings;
    }
    ErrorService.prototype.getErrorForErrorCode = function (errorCode) {
        switch (errorCode) {
            case 0:
                return this.resourceStrings.errors.general.unknown_error;
            default:
                return this.resourceStrings.errors.general.unknown_error;
        }
    };
    ErrorService.prototype.getErrorForHttpCode = function (httpCode) {
        switch (httpCode) {
            case 401:
                return this.resourceStrings.errors.general.session_expired;
            case 403:
                return this.resourceStrings.errors.general.session_expired;
            case 404:
                return this.resourceStrings.errors.general.resource_not_found;
            default:
                return this.resourceStrings.errors.general.unknown_error;
        }
    };
    ErrorService.ɵfac = function ErrorService_Factory(t) { return new (t || ErrorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_resource_string_resource_string_service__WEBPACK_IMPORTED_MODULE_1__["ResourceStringService"])); };
    ErrorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ErrorService, factory: ErrorService.ɵfac, providedIn: 'root' });
    return ErrorService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _resource_string_resource_string_service__WEBPACK_IMPORTED_MODULE_1__["ResourceStringService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/pipelineSchedules/pipelineSchedules.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/services/pipelineSchedules/pipelineSchedules.service.ts ***!
  \*************************************************************************/
/*! exports provided: PipelineSchedulesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipelineSchedulesService", function() { return PipelineSchedulesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
var PipelineSchedulesService = /** @class */ (function () {
    function PipelineSchedulesService(http) {
        this.http = http;
    }
    PipelineSchedulesService.prototype.getPipelineSchedules = function (projectId) {
        var route = '/gitlabcidashboard/api/' + projectId + '/pipelineSchedules/';
        return this.http.get(route);
    };
    PipelineSchedulesService.ɵfac = function PipelineSchedulesService_Factory(t) { return new (t || PipelineSchedulesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    PipelineSchedulesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PipelineSchedulesService, factory: PipelineSchedulesService.ɵfac, providedIn: 'root' });
    return PipelineSchedulesService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PipelineSchedulesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/pipelines/pipeline.dto.ts":
/*!****************************************************!*\
  !*** ./src/app/services/pipelines/pipeline.dto.ts ***!
  \****************************************************/
/*! exports provided: Pipeline, PipelineTriggerUserInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pipeline", function() { return Pipeline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipelineTriggerUserInfo", function() { return PipelineTriggerUserInfo; });
var Pipeline = /** @class */ (function () {
    function Pipeline() {
    }
    return Pipeline;
}());

var PipelineTriggerUserInfo = /** @class */ (function () {
    function PipelineTriggerUserInfo() {
    }
    return PipelineTriggerUserInfo;
}());



/***/ }),

/***/ "./src/app/services/pipelines/pipelines.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/pipelines/pipelines.service.ts ***!
  \*********************************************************/
/*! exports provided: PipelinesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipelinesService", function() { return PipelinesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
var PipelinesService = /** @class */ (function () {
    function PipelinesService(http) {
        this.http = http;
    }
    PipelinesService.prototype.getPipelines = function (projectId) {
        var route = '/gitlabcidashboard/api/' + projectId + '/pipelines/';
        return this.http.get(route);
    };
    PipelinesService.prototype.getPipeline = function (projectId, pipelineId) {
        var route = '/gitlabcidashboard/api/' + projectId + '/pipelines/' + pipelineId;
        return this.http.get(route);
    };
    PipelinesService.prototype.getPipelinesByBranch = function (projectId, branchName) {
        var route = '/gitlabcidashboard/api/' + projectId + '/pipelines/branch/' + branchName;
        return this.http.get(route);
    };
    PipelinesService.prototype.getPipelineTriggerUserInfo = function (projectId, pipelineId) {
        var route = '/gitlabcidashboard/api/' + projectId + '/pipelines/' + pipelineId + '/triggerUserInfo';
        return this.http.get(route);
    };
    PipelinesService.ɵfac = function PipelinesService_Factory(t) { return new (t || PipelinesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    PipelinesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PipelinesService, factory: PipelinesService.ɵfac, providedIn: 'root' });
    return PipelinesService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PipelinesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/projects/project.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/projects/project.service.ts ***!
  \******************************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
var ProjectService = /** @class */ (function () {
    function ProjectService(http) {
        this.http = http;
    }
    ProjectService.prototype.getProjectById = function (projectId) {
        var route = '/gitlabcidashboard/api/projects/' + projectId;
        return this.http.get(route);
    };
    ProjectService.prototype.getDashboardConfiguredProjects = function () {
        var route = '/gitlabcidashboard/api/projects/dashboard/';
        return this.http.get(route);
    };
    ProjectService.prototype.getConfigurationDto = function () {
        var route = '/gitlabcidashboard/api/projects/configurationDto';
        return this.http.get(route);
    };
    ProjectService.prototype.getAllRelevantProjects = function () {
        var route = '/gitlabcidashboard/api/projects/relevant';
        return this.http.get(route);
    };
    ProjectService.prototype.saveNewConfiguration = function (configurationDto) {
        var route = '/gitlabcidashboard/api/projects/';
        return this.http.post(route, configurationDto, httpOptions);
    };
    ProjectService.ɵfac = function ProjectService_Factory(t) { return new (t || ProjectService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    ProjectService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProjectService, factory: ProjectService.ɵfac, providedIn: 'root' });
    return ProjectService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/resource-string/resource-string.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/services/resource-string/resource-string.service.ts ***!
  \*********************************************************************/
/*! exports provided: ResourceStringService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceStringService", function() { return ResourceStringService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");



var ResourceStringService = /** @class */ (function () {
    function ResourceStringService() {
        this.dialogs = {
            dismiss_changes: {
                title: "Ungespeicherte Daten",
                details: "Einige \xC4nderungen wurden noch nicht gespeichert. M\xF6chte Sie die Seite trotzdem verlassen?",
                acceptButtonText: "Seite verlassen",
                closeButtonText: "Auf Seite bleiben",
            }
        };
        this.errors = {
            general: {
                unknown_error: {
                    title: "Unbekannter Fehler",
                    details: "Es ist ein unbekannter Fehler aufgetreten"
                },
                session_expired: {
                    title: "Sitzung abgelaufen",
                    details: "Ihre aktuelle Sitzung ist abgelaufen. Laden Sie die Seite neu, um sich erneut anzumelden."
                },
                resource_not_found: {
                    title: "Die Seite existiert nicht",
                    details: "Die angegebene URL funktioniert nicht mehr."
                }
            }
        };
    }
    ResourceStringService.ɵfac = function ResourceStringService_Factory(t) { return new (t || ResourceStringService)(); };
    ResourceStringService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ResourceStringService, factory: ResourceStringService.ɵfac, providedIn: 'root' });
    return ResourceStringService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ResourceStringService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10;


/***/ }),

/***/ "./src/app/settings/settings-dashboard-page/settings-dashboard-page.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/settings/settings-dashboard-page/settings-dashboard-page.component.ts ***!
  \***************************************************************************************/
/*! exports provided: SettingsDashboardPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsDashboardPageComponent", function() { return SettingsDashboardPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_projects_project_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/projects/project.service */ "./src/app/services/projects/project.service.ts");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/expansion.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/input.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/autocomplete.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/list.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/button.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/icon.js");















function SettingsDashboardPageComponent_ng_template_6_mat_option_10_Template(rf, ctx) { if (rf & 1) {
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsDashboardPageComponent_ng_template_6_mat_option_10_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); var project_r4 = ctx.$implicit; var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.onAddToDashboard(project_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var project_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", project_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", project_r4.name, " ");
} }
function SettingsDashboardPageComponent_ng_template_6_button_15_Template(rf, ctx) { if (rf & 1) {
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsDashboardPageComponent_ng_template_6_button_15_Template_mat_icon_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); var project_r7 = ctx.$implicit; var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.onRemoveFromDashboard(project_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "delete_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var project_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", project_r7.name, " ");
} }
function SettingsDashboardPageComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Projects viewed on dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Here you can add projects to dashboard and remove them");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Available Projects");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-autocomplete", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SettingsDashboardPageComponent_ng_template_6_mat_option_10_Template, 2, 2, "mat-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Selected Projects:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-list", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SettingsDashboardPageComponent_ng_template_6_button_15_Template, 4, 1, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-action-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsDashboardPageComponent_ng_template_6_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.onRestore(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Restore last configuration");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r0.projectControl)("matAutocomplete", _r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 4, ctx_r0.filteredProjects));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.newConfig);
} }
var SettingsDashboardPageComponent = /** @class */ (function () {
    function SettingsDashboardPageComponent(projectService) {
        this.projectService = projectService;
        this.applyNewDashboardProjectsConfig = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.projectControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
    }
    SettingsDashboardPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.projectService.getAllRelevantProjects().subscribe(function (projects) {
            console.log(projects);
            _this.allProjects = projects;
            _this.availableProjects = new Array();
            _this.newConfig = new Array();
            _this.allProjects.forEach(function (element) { return _this.availableProjects.push(element); });
            _this.appliedNow.forEach(function (element) {
                _this.newConfig.push(element);
                _this.availableProjects = _this.availableProjects.filter(function (proj) { return proj.id !== element.id; });
            });
            console.log(_this.availableProjects);
            console.log(_this.appliedNow);
            _this.filteredProjects = _this.projectControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) { return _this._filter(value); }));
        });
    };
    SettingsDashboardPageComponent.prototype._filter = function (value) {
        var filterValue = value.toLowerCase();
        return this.availableProjects.filter(function (option) { return option.name.toLowerCase().includes(filterValue); });
    };
    SettingsDashboardPageComponent.prototype.onAddToDashboard = function (project) {
        this.newConfig.push(project);
        this.availableProjects = this.availableProjects.filter(function (element) {
            return element.id !== project.id;
        });
        console.log("new dashboard config applied");
        console.log(this.newConfig);
        this.applyNewDashboardProjectsConfig.emit(this.newConfig);
    };
    SettingsDashboardPageComponent.prototype.onRemoveFromDashboard = function (project) {
        this.newConfig = this.newConfig.filter(function (element) {
            return element.id !== project.id;
        });
        this.availableProjects.push(project);
        this.applyNewDashboardProjectsConfig.emit(this.newConfig);
    };
    SettingsDashboardPageComponent.prototype.getColor = function () {
        return "accent";
    };
    SettingsDashboardPageComponent.prototype.onRestore = function () {
        this.newConfig = this.appliedNow;
    };
    SettingsDashboardPageComponent.ɵfac = function SettingsDashboardPageComponent_Factory(t) { return new (t || SettingsDashboardPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_projects_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"])); };
    SettingsDashboardPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SettingsDashboardPageComponent, selectors: [["dd-settings-dashboard-page"]], inputs: { appliedNow: "appliedNow" }, outputs: { applyNewDashboardProjectsConfig: "applyNewDashboardProjectsConfig" }, decls: 7, vars: 0, consts: [["expanded", ""], ["matExpansionPanelContent", ""], ["aria-label", "Projects available selection", "id", "availableProjectInputField"], ["type", "text", "matInput", "", 3, "formControl", "matAutocomplete"], ["autoActiveFirstOption", ""], ["auto", "matAutocomplete"], [3, "value", "click", 4, "ngFor", "ngForOf"], ["aria-label", "Projects new selection", "id", "dashboardProjectList"], ["class", "projectBtn", "mat-stroked-button", "", 4, "ngFor", "ngForOf"], ["mat-button", "", "id", "restoreBtn", "id", "restoreButton", 3, "click"], [3, "value", "click"], ["mat-stroked-button", "", 1, "projectBtn"], [1, "deleteIcon", 3, "click"]], template: function SettingsDashboardPageComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Dashboard ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-panel-description");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Projects ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SettingsDashboardPageComponent_ng_template_6_Template, 19, 6, "ng-template", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanelDescription"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanelContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatList"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], styles: [".projectBtn[_ngcontent-%COMP%] {\n  width: 20%;\n  margin: auto auto 15px;\n}\n\n#dashboardProjectList[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n#availableProjectInputField[_ngcontent-%COMP%] {\n  width: 80%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3Mvc2V0dGluZ3MtZGFzaGJvYXJkLXBhZ2UvQzpcXFVzZXJzXFxta2FiXFxEb2N1bWVudHNcXEdpdExhYkNpRGFzaGJvYXJkXFxHdWkvc3JjXFxhcHBcXHNldHRpbmdzXFxzZXR0aW5ncy1kYXNoYm9hcmQtcGFnZVxcc2V0dGluZ3MtZGFzaGJvYXJkLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLWRhc2hib2FyZC1wYWdlL3NldHRpbmdzLWRhc2hib2FyZC1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLWRhc2hib2FyZC1wYWdlL3NldHRpbmdzLWRhc2hib2FyZC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2plY3RCdG57XHJcbiAgd2lkdGg6IDIwJTtcclxuICBtYXJnaW46IGF1dG8gYXV0byAxNXB4O1xyXG59XHJcblxyXG4jZGFzaGJvYXJkUHJvamVjdExpc3R7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4jYXZhaWxhYmxlUHJvamVjdElucHV0RmllbGR7XHJcbiAgd2lkdGg6IDgwJTtcclxufVxyXG4iLCIucHJvamVjdEJ0biB7XG4gIHdpZHRoOiAyMCU7XG4gIG1hcmdpbjogYXV0byBhdXRvIDE1cHg7XG59XG5cbiNkYXNoYm9hcmRQcm9qZWN0TGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbiNhdmFpbGFibGVQcm9qZWN0SW5wdXRGaWVsZCB7XG4gIHdpZHRoOiA4MCU7XG59Il19 */"] });
    return SettingsDashboardPageComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsDashboardPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'dd-settings-dashboard-page',
                templateUrl: './settings-dashboard-page.component.html',
                styleUrls: ['./settings-dashboard-page.component.scss']
            }]
    }], function () { return [{ type: _services_projects_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"] }]; }, { appliedNow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], applyNewDashboardProjectsConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/settings/settings-overview-page/settings-overview-page.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/settings/settings-overview-page/settings-overview-page.component.ts ***!
  \*************************************************************************************/
/*! exports provided: SettingsOverviewPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsOverviewPageComponent", function() { return SettingsOverviewPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_shared_classes_loading_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/classes/loading-state */ "./src/app/shared/classes/loading-state.ts");
/* harmony import */ var _services_projects_project_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/projects/project.service */ "./src/app/services/projects/project.service.ts");
/* harmony import */ var _services_configuration_configuration_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/configuration/configuration.service */ "./src/app/services/configuration/configuration.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/expansion.js");
/* harmony import */ var _settings_dashboard_page_settings_dashboard_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../settings-dashboard-page/settings-dashboard-page.component */ "./src/app/settings/settings-dashboard-page/settings-dashboard-page.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/button.js");
/* harmony import */ var _shared_components_progress_indicator_progress_indicator_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/components/progress-indicator/progress-indicator.component */ "./src/app/shared/components/progress-indicator/progress-indicator.component.ts");











function SettingsOverviewPageComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Here you can customize projects on your dashboard ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-accordion");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "dd-settings-dashboard-page", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("applyNewDashboardProjectsConfig", function SettingsOverviewPageComponent_div_1_Template_dd_settings_dashboard_page_applyNewDashboardProjectsConfig_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.applyNewDashboardProjectsConfig($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SettingsOverviewPageComponent_div_1_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.saveConfig(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("appliedNow", ctx_r0.configurationDto.dashboardProjects);
} }
var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc Ladebalkentext
     */ 
    var MSG_EXTERNAL_activitiesViewerLoading$$SRC_APP_SETTINGS_SETTINGS_OVERVIEW_PAGE_SETTINGS_OVERVIEW_PAGE_COMPONENT_TS__1 = goog.getMsg("Aktivit\u00E4ten werden geladen");
    I18N_0 = MSG_EXTERNAL_activitiesViewerLoading$$SRC_APP_SETTINGS_SETTINGS_OVERVIEW_PAGE_SETTINGS_OVERVIEW_PAGE_COMPONENT_TS__1;
}
else {
    I18N_0 = "Aktivit\xE4ten werden geladen";
}
var _c2 = ["text", I18N_0];
function SettingsOverviewPageComponent_dd_progress_indicator_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "dd-progress-indicator", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nAttributes"](1, _c2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("restrictedWidth", true);
} }
function SettingsOverviewPageComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.loadingError.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.loadingError.details);
} }
var SettingsOverviewPageComponent = /** @class */ (function () {
    function SettingsOverviewPageComponent(projectService, configService) {
        this.projectService = projectService;
        this.configService = configService;
        this.LoadingState = src_app_shared_classes_loading_state__WEBPACK_IMPORTED_MODULE_2__["LoadingState"];
        this.loadingState = src_app_shared_classes_loading_state__WEBPACK_IMPORTED_MODULE_2__["LoadingState"].Loading;
    }
    SettingsOverviewPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.projectService.getConfigurationDto().subscribe(function (config) {
            _this.configurationDto = config;
            _this.loadingState = src_app_shared_classes_loading_state__WEBPACK_IMPORTED_MODULE_2__["LoadingState"].Finished;
            console.log(_this.configurationDto);
        });
    };
    SettingsOverviewPageComponent.prototype.applyNewDashboardProjectsConfig = function (projects) {
        this.configurationDto.dashboardProjects = projects;
    };
    SettingsOverviewPageComponent.prototype.saveConfig = function () {
        this.projectService.saveNewConfiguration(this.configurationDto).subscribe();
    };
    SettingsOverviewPageComponent.ɵfac = function SettingsOverviewPageComponent_Factory(t) { return new (t || SettingsOverviewPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_projects_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_configuration_configuration_service__WEBPACK_IMPORTED_MODULE_4__["ConfigurationService"])); };
    SettingsOverviewPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SettingsOverviewPageComponent, selectors: [["dd-settings-overview-page"]], decls: 4, vars: 4, consts: [[3, "ngSwitch"], ["id", "configurationContainer", 4, "ngSwitchCase"], ["class", "center-content", 3, "restrictedWidth", 4, "ngSwitchCase", 6, "text"], ["class", "center-content  center-content__childs", 4, "ngSwitchCase"], ["id", "configurationContainer"], ["id", "headerConfigPage"], [3, "appliedNow", "applyNewDashboardProjectsConfig"], ["mat-raised-button", "", "id", "saveBtn", 3, "click"], [1, "center-content", 3, "restrictedWidth", 6, "text"], [1, "center-content", "center-content__childs"], [1, "mat-title"], [1, "mat-subheading-2"]], template: function SettingsOverviewPageComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SettingsOverviewPageComponent_div_1_Template, 10, 1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SettingsOverviewPageComponent_dd_progress_indicator_2_Template, 2, 1, "dd-progress-indicator", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SettingsOverviewPageComponent_div_3_Template, 5, 2, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx.loadingState);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx.LoadingState.Finished);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx.LoadingState.Loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx.LoadingState.Error);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitchCase"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatAccordion"], _settings_dashboard_page_settings_dashboard_page_component__WEBPACK_IMPORTED_MODULE_7__["SettingsDashboardPageComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _shared_components_progress_indicator_progress_indicator_component__WEBPACK_IMPORTED_MODULE_9__["ProgressIndicatorComponent"]], styles: ["#configurationContainer[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 25px auto 25px;\n}\n\n#saveBtn[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  margin-left: 95%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3Mvc2V0dGluZ3Mtb3ZlcnZpZXctcGFnZS9DOlxcVXNlcnNcXG1rYWJcXERvY3VtZW50c1xcR2l0TGFiQ2lEYXNoYm9hcmRcXEd1aS9zcmNcXGFwcFxcc2V0dGluZ3NcXHNldHRpbmdzLW92ZXJ2aWV3LXBhZ2VcXHNldHRpbmdzLW92ZXJ2aWV3LXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLW92ZXJ2aWV3LXBhZ2Uvc2V0dGluZ3Mtb3ZlcnZpZXctcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvc2V0dGluZ3Mvc2V0dGluZ3Mtb3ZlcnZpZXctcGFnZS9zZXR0aW5ncy1vdmVydmlldy1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbmZpZ3VyYXRpb25Db250YWluZXJ7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXJnaW46IDI1cHggYXV0byAyNXB4O1xyXG59XHJcblxyXG4jc2F2ZUJ0bntcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA5NSU7XHJcbn1cclxuXHJcbiIsIiNjb25maWd1cmF0aW9uQ29udGFpbmVyIHtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAyNXB4IGF1dG8gMjVweDtcbn1cblxuI3NhdmVCdG4ge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBtYXJnaW4tbGVmdDogOTUlO1xufSJdfQ== */"] });
    return SettingsOverviewPageComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SettingsOverviewPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'dd-settings-overview-page',
                templateUrl: './settings-overview-page.component.html',
                styleUrls: ['./settings-overview-page.component.scss']
            }]
    }], function () { return [{ type: _services_projects_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"] }, { type: _services_configuration_configuration_service__WEBPACK_IMPORTED_MODULE_4__["ConfigurationService"] }]; }, null); })();
var templateObject_1;


/***/ }),

/***/ "./src/app/settings/settings.module.ts":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.module.ts ***!
  \*********************************************/
/*! exports provided: SettingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModule", function() { return SettingsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _settings_overview_page_settings_overview_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings-overview-page/settings-overview-page.component */ "./src/app/settings/settings-overview-page/settings-overview-page.component.ts");
/* harmony import */ var _settings_dashboard_page_settings_dashboard_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings-dashboard-page/settings-dashboard-page.component */ "./src/app/settings/settings-dashboard-page/settings-dashboard-page.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/progress-spinner.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/chips.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/expansion.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/autocomplete.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm5/scrolling.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/input.js");














var SettingsModule = /** @class */ (function () {
    function SettingsModule() {
    }
    SettingsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SettingsModule });
    SettingsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SettingsModule_Factory(t) { return new (t || SettingsModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__["ScrollingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"]
            ]] });
    return SettingsModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SettingsModule, { declarations: [_settings_overview_page_settings_overview_page_component__WEBPACK_IMPORTED_MODULE_2__["SettingsOverviewPageComponent"], _settings_dashboard_page_settings_dashboard_page_component__WEBPACK_IMPORTED_MODULE_3__["SettingsDashboardPageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__["ScrollingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"]], exports: [_settings_overview_page_settings_overview_page_component__WEBPACK_IMPORTED_MODULE_2__["SettingsOverviewPageComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_settings_overview_page_settings_overview_page_component__WEBPACK_IMPORTED_MODULE_2__["SettingsOverviewPageComponent"], _settings_dashboard_page_settings_dashboard_page_component__WEBPACK_IMPORTED_MODULE_3__["SettingsDashboardPageComponent"]],
                exports: [
                    _settings_overview_page_settings_overview_page_component__WEBPACK_IMPORTED_MODULE_2__["SettingsOverviewPageComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__["ScrollingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/settings/settings.routing.ts":
/*!**********************************************!*\
  !*** ./src/app/settings/settings.routing.ts ***!
  \**********************************************/
/*! exports provided: SettingsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsRoutes", function() { return SettingsRoutes; });
/* harmony import */ var _settings_overview_page_settings_overview_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings-overview-page/settings-overview-page.component */ "./src/app/settings/settings-overview-page/settings-overview-page.component.ts");

var SettingsRoutes = [
    { path: '', component: _settings_overview_page_settings_overview_page_component__WEBPACK_IMPORTED_MODULE_0__["SettingsOverviewPageComponent"] }
];


/***/ }),

/***/ "./src/app/shared/classes/loading-state.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/classes/loading-state.ts ***!
  \*************************************************/
/*! exports provided: LoadingState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingState", function() { return LoadingState; });
var LoadingState;
(function (LoadingState) {
    LoadingState[LoadingState["Loading"] = 0] = "Loading";
    LoadingState[LoadingState["Finished"] = 1] = "Finished";
    LoadingState[LoadingState["Error"] = 2] = "Error";
})(LoadingState || (LoadingState = {}));


/***/ }),

/***/ "./src/app/shared/components/loading-screen.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/components/loading-screen.component.ts ***!
  \***************************************************************/
/*! exports provided: LoadingScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingScreenComponent", function() { return LoadingScreenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/progress-bar.js");







var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc Text in der Ladeanzeige
     */ 
    var MSG_EXTERNAL_loadingScreenText$$SRC_APP_SHARED_COMPONENTS_LOADING_SCREEN_COMPONENT_TS_1 = goog.getMsg("Bitte warten");
    I18N_0 = MSG_EXTERNAL_loadingScreenText$$SRC_APP_SHARED_COMPONENTS_LOADING_SCREEN_COMPONENT_TS_1;
}
else {
    I18N_0 = "Bitte warten";
}
function LoadingScreenComponent_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.data.text);
} }
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc Fortschrittsanzeige
     */ 
    var MSG_EXTERNAL_loadingScreenProgress$$SRC_APP_SHARED_COMPONENTS_LOADING_SCREEN_COMPONENT_TS__3 = goog.getMsg("Fortschritt: {$interpolation}%", { "interpolation": "\uFFFD0\uFFFD" });
    I18N_2 = MSG_EXTERNAL_loadingScreenProgress$$SRC_APP_SHARED_COMPONENTS_LOADING_SCREEN_COMPONENT_TS__3;
}
else {
    I18N_2 = "Fortschritt: " + "\uFFFD0\uFFFD" + "%";
}
function LoadingScreenComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](1, I18N_2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nExp"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, ctx_r1.Progress, "1.0-0"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nApply"](1);
} }
var LoadingScreenComponent = /** @class */ (function () {
    function LoadingScreenComponent(data) {
        this.data = data;
    }
    Object.defineProperty(LoadingScreenComponent.prototype, "Progress", {
        get: function () {
            return this.progress;
        },
        set: function (value) {
            if ((!value && value !== 0) || value < 0 || value > 100) {
                this.progress = undefined;
            }
            else {
                this.progress = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoadingScreenComponent.prototype, "determinate", {
        get: function () {
            return !!this.progress || this.progress === 0;
        },
        enumerable: true,
        configurable: true
    });
    LoadingScreenComponent.ɵfac = function LoadingScreenComponent_Factory(t) { return new (t || LoadingScreenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])); };
    LoadingScreenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoadingScreenComponent, selectors: [["dd-loading-screen"]], decls: 6, vars: 4, consts: [["mat-dialog-title", "", "data-selenium-id", "loadingScreen"], ["class", "text", 4, "ngIf"], [3, "mode", "value"], ["class", "progress", 4, "ngIf"], [1, "text"], [1, "progress"]], template: function LoadingScreenComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](1, I18N_0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-dialog-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, LoadingScreenComponent_p_3_Template, 2, 1, "p", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "mat-progress-bar", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, LoadingScreenComponent_div_5_Template, 3, 4, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data.text);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mode", ctx.determinate ? "determinate" : "indeterminate")("value", ctx.determinate ? ctx.Progress : undefined);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.determinate);
        } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__["MatProgressBar"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DecimalPipe"]], styles: ["[_nghost-%COMP%] {\n      display: block;\n      width: 15em;\n    }\n\n    .text[_ngcontent-%COMP%] {\n      margin-top: 0;\n    }\n\n    .progress[_ngcontent-%COMP%] {\n      margin-top: 0.5em;\n    }"] });
    return LoadingScreenComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoadingScreenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'dd-loading-screen',
                template: "\n    <p mat-dialog-title i18n=\"Text in der Ladeanzeige@@loadingScreenText\" data-selenium-id=\"loadingScreen\">Bitte warten</p>\n    <mat-dialog-content>\n      <p class=\"text\" *ngIf=\"data.text\">{{data.text}}</p>\n      <mat-progress-bar [mode]=\"determinate ? 'determinate' : 'indeterminate'\" [value]=\"determinate ? Progress : undefined \"></mat-progress-bar>\n      <div class=\"progress\" *ngIf=\"determinate\" i18n=\"Fortschrittsanzeige@@loadingScreenProgress\">Fortschritt: {{Progress | number:\"1.0-0\"}}%</div>\n    </mat-dialog-content>\n  ",
                styles: ["\n    :host {\n      display: block;\n      width: 15em;\n    }\n\n    .text {\n      margin-top: 0;\n    }\n\n    .progress {\n      margin-top: 0.5em;\n    }\n  "]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();
var templateObject_1, templateObject_2;


/***/ }),

/***/ "./src/app/shared/components/localize.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/components/localize.component.ts ***!
  \*********************************************************/
/*! exports provided: LocalizeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalizeComponent", function() { return LocalizeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");



var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc Dialog Titel
     */ 
    var MSG_EXTERNAL_rsDialogDismissChangesTitle$$SRC_APP_SHARED_COMPONENTS_LOCALIZE_COMPONENT_TS_1 = goog.getMsg("Ungespeicherte Daten");
    I18N_0 = MSG_EXTERNAL_rsDialogDismissChangesTitle$$SRC_APP_SHARED_COMPONENTS_LOCALIZE_COMPONENT_TS_1;
}
else {
    I18N_0 = "Ungespeicherte Daten";
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc Dialog Langtext
     */ 
    var MSG_EXTERNAL_rsDialogDismissChangesDetails$$SRC_APP_SHARED_COMPONENTS_LOCALIZE_COMPONENT_TS_3 = goog.getMsg("Einige \u00C4nderungen wurden noch nicht gespeichert. M\u00F6chte Sie die Seite trotzdem verlassen?");
    I18N_2 = MSG_EXTERNAL_rsDialogDismissChangesDetails$$SRC_APP_SHARED_COMPONENTS_LOCALIZE_COMPONENT_TS_3;
}
else {
    I18N_2 = "Einige \xC4nderungen wurden noch nicht gespeichert. M\xF6chte Sie die Seite trotzdem verlassen?";
}
var I18N_4;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc Dialog Accept-Button
     */ 
    var MSG_EXTERNAL_rsDialogDismissChangesAccept$$SRC_APP_SHARED_COMPONENTS_LOCALIZE_COMPONENT_TS_5 = goog.getMsg("Seite verlassen");
    I18N_4 = MSG_EXTERNAL_rsDialogDismissChangesAccept$$SRC_APP_SHARED_COMPONENTS_LOCALIZE_COMPONENT_TS_5;
}
else {
    I18N_4 = "Seite verlassen";
}
var I18N_6;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc Dialog Abort-Button
     */ 
    var MSG_EXTERNAL_rsDialogDismissChangesClose$$SRC_APP_SHARED_COMPONENTS_LOCALIZE_COMPONENT_TS_7 = goog.getMsg("Auf Seite bleiben");
    I18N_6 = MSG_EXTERNAL_rsDialogDismissChangesClose$$SRC_APP_SHARED_COMPONENTS_LOCALIZE_COMPONENT_TS_7;
}
else {
    I18N_6 = "Auf Seite bleiben";
}
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc Fehlermeldung Überschrift
     */ 
    var MSG_EXTERNAL_errorGeneralUnknownErrorTitle$$SRC_APP_SHARED_COMPONENTS_LOCALIZE_COMPONENT_TS_9 = goog.getMsg("Unbekannter Fehler");
    I18N_8 = MSG_EXTERNAL_errorGeneralUnknownErrorTitle$$SRC_APP_SHARED_COMPONENTS_LOCALIZE_COMPONENT_TS_9;
}
else {
    I18N_8 = "Unbekannter Fehler";
}
var I18N_10;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc Fehlermeldung Langtext
     */ 
    var MSG_EXTERNAL_errorGeneralUnknownErrorDetails$$SRC_APP_SHARED_COMPONENTS_LOCALIZE_COMPONENT_TS_11 = goog.getMsg("Es ist ein unbekannter Fehler aufgetreten");
    I18N_10 = MSG_EXTERNAL_errorGeneralUnknownErrorDetails$$SRC_APP_SHARED_COMPONENTS_LOCALIZE_COMPONENT_TS_11;
}
else {
    I18N_10 = "Es ist ein unbekannter Fehler aufgetreten";
}
var I18N_12;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc Fehlermeldung Überschrift
     */ 
    var MSG_EXTERNAL_errorGeneralSessionExpiredTitle$$SRC_APP_SHARED_COMPONENTS_LOCALIZE_COMPONENT_TS_13 = goog.getMsg("Sitzung abgelaufen");
    I18N_12 = MSG_EXTERNAL_errorGeneralSessionExpiredTitle$$SRC_APP_SHARED_COMPONENTS_LOCALIZE_COMPONENT_TS_13;
}
else {
    I18N_12 = "Sitzung abgelaufen";
}
var I18N_14;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc Fehlermeldung Langtext
     */ 
    var MSG_EXTERNAL_errorGeneralSessionExpiredDetails$$SRC_APP_SHARED_COMPONENTS_LOCALIZE_COMPONENT_TS_15 = goog.getMsg("Ihre aktuelle Sitzung ist abgelaufen. Laden Sie die Seite neu, um sich erneut anzumelden.");
    I18N_14 = MSG_EXTERNAL_errorGeneralSessionExpiredDetails$$SRC_APP_SHARED_COMPONENTS_LOCALIZE_COMPONENT_TS_15;
}
else {
    I18N_14 = "Ihre aktuelle Sitzung ist abgelaufen. Laden Sie die Seite neu, um sich erneut anzumelden.";
}
var I18N_16;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc Fehlermeldung Überschrift
     */ 
    var MSG_EXTERNAL_errorGeneralResourceNotFoundTitle$$SRC_APP_SHARED_COMPONENTS_LOCALIZE_COMPONENT_TS_17 = goog.getMsg("Die Seite existiert nicht");
    I18N_16 = MSG_EXTERNAL_errorGeneralResourceNotFoundTitle$$SRC_APP_SHARED_COMPONENTS_LOCALIZE_COMPONENT_TS_17;
}
else {
    I18N_16 = "Die Seite existiert nicht";
}
var I18N_18;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc Fehlermeldung Langtext
     */ 
    var MSG_EXTERNAL_errorGeneralResourceNotFoundDetails$$SRC_APP_SHARED_COMPONENTS_LOCALIZE_COMPONENT_TS_19 = goog.getMsg("Die angegebene URL funktioniert nicht mehr.");
    I18N_18 = MSG_EXTERNAL_errorGeneralResourceNotFoundDetails$$SRC_APP_SHARED_COMPONENTS_LOCALIZE_COMPONENT_TS_19;
}
else {
    I18N_18 = "Die angegebene URL funktioniert nicht mehr.";
}
var I18N_20;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc Eine Beschreibung
     */ 
    var MSG_EXTERNAL_idTextCode$$SRC_APP_SHARED_COMPONENTS_LOCALIZE_COMPONENT_TS_21 = goog.getMsg("Ein Text mit \u00DCbersetzung im Code");
    I18N_20 = MSG_EXTERNAL_idTextCode$$SRC_APP_SHARED_COMPONENTS_LOCALIZE_COMPONENT_TS_21;
}
else {
    I18N_20 = "Ein Text mit \xDCbersetzung im Code";
}
var LocalizeComponent = /** @class */ (function () {
    function LocalizeComponent() {
    }
    LocalizeComponent.ɵfac = function LocalizeComponent_Factory(t) { return new (t || LocalizeComponent)(); };
    LocalizeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LocalizeComponent, selectors: [["ng-component"]], decls: 22, vars: 0, template: function LocalizeComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](1, I18N_0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](3, I18N_2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](5, I18N_4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](7, I18N_6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](9, I18N_8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](11, I18N_10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](13, I18N_12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](15, I18N_14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](17, I18N_16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](19, I18N_18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](21, I18N_20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } }, encapsulation: 2 });
    return LocalizeComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LocalizeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                template: "\n    <!-- resource-string.service.ts -->\n    <span i18n=\"Dialog Titel@@rsDialogDismissChangesTitle\">Ungespeicherte Daten</span>\n    <span i18n=\"Dialog Langtext@@rsDialogDismissChangesDetails\">Einige \u00C4nderungen wurden noch nicht gespeichert. M\u00F6chte Sie die Seite trotzdem verlassen?</span>\n    <span i18n=\"Dialog Accept-Button@@rsDialogDismissChangesAccept\">Seite verlassen</span>\n    <span i18n=\"Dialog Abort-Button@@rsDialogDismissChangesClose\">Auf Seite bleiben</span>\n    <span i18n=\"Fehlermeldung \u00DCberschrift@@errorGeneralUnknownErrorTitle\">Unbekannter Fehler</span>\n    <span i18n=\"Fehlermeldung Langtext@@errorGeneralUnknownErrorDetails\">Es ist ein unbekannter Fehler aufgetreten</span>\n    <span i18n=\"Fehlermeldung \u00DCberschrift@@errorGeneralSessionExpiredTitle\">Sitzung abgelaufen</span>\n    <span i18n=\"Fehlermeldung Langtext@@errorGeneralSessionExpiredDetails\">Ihre aktuelle Sitzung ist abgelaufen. Laden Sie die Seite neu, um sich erneut anzumelden.</span>\n    <span i18n=\"Fehlermeldung \u00DCberschrift@@errorGeneralResourceNotFoundTitle\">Die Seite existiert nicht</span>\n    <span i18n=\"Fehlermeldung Langtext@@errorGeneralResourceNotFoundDetails\">Die angegebene URL funktioniert nicht mehr.</span>\n\n    <!-- dummy.component.ts -->\n    <span i18n=\"Eine Beschreibung@@idTextCode\">Ein Text mit \u00DCbersetzung im Code</span>\n  "
            }]
    }], null, null); })();
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11;


/***/ }),

/***/ "./src/app/shared/components/msg-dialog.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/components/msg-dialog.component.ts ***!
  \***********************************************************/
/*! exports provided: MsgDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsgDialogComponent", function() { return MsgDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/button.js");






function MsgDialogComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r0.metaDisplay, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function MsgDialogComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.closeButtonText);
} }
function MsgDialogComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.acceptButtonText);
} }
var MsgDialogComponent = /** @class */ (function () {
    function MsgDialogComponent(dialogRef, data) {
        var _a;
        this.dialogRef = dialogRef;
        this.title = data.title;
        this.details = data.details;
        this.metaDisplay = data.metaDisplay;
        this.closeButtonText = (_a = data.closeButtonText) !== null && _a !== void 0 ? _a : 'OK';
        this.acceptButtonText = data.acceptButtonText;
    }
    MsgDialogComponent.ɵfac = function MsgDialogComponent_Factory(t) { return new (t || MsgDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
    MsgDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MsgDialogComponent, selectors: [["dd-msg-dialog"]], decls: 8, vars: 5, consts: [["mat-dialog-title", ""], [4, "ngIf"], ["mat-button", "", "mat-dialog-close", "close", "data-selenium-id", "buttonClose", 4, "ngIf"], ["mat-button", "", "mat-dialog-close", "accept", "data-selenium-id", "buttonAccept", 4, "ngIf"], [1, "meta", 3, "innerHTML"], ["mat-button", "", "mat-dialog-close", "close", "data-selenium-id", "buttonClose"], ["mat-button", "", "mat-dialog-close", "accept", "data-selenium-id", "buttonAccept"]], template: function MsgDialogComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MsgDialogComponent_ng_container_4_Template, 2, 1, "ng-container", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-dialog-actions");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MsgDialogComponent_button_6_Template, 2, 1, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MsgDialogComponent_button_7_Template, 2, 1, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.details, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.metaDisplay);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.closeButtonText);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.acceptButtonText);
        } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: ["[_nghost-%COMP%] {\n      display: block;\n      max-width: 30vw;\n    }\n\n    .meta[_ngcontent-%COMP%] {\n      margin-top: 1em;\n    }\n\n    mat-dialog-actions[_ngcontent-%COMP%] {\n      justify-content: flex-end;\n    }"] });
    return MsgDialogComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MsgDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'dd-msg-dialog',
                template: "\n    <span mat-dialog-title>{{title}}</span>\n    <mat-dialog-content>\n      {{details}}\n      <ng-container *ngIf=\"metaDisplay\">\n        <div class=\"meta\" [innerHTML]=\"metaDisplay\"></div>\n      </ng-container>\n    </mat-dialog-content>\n    <mat-dialog-actions>\n      <button mat-button mat-dialog-close=\"close\" *ngIf=\"closeButtonText\" data-selenium-id=\"buttonClose\">{{closeButtonText}}</button>\n      <button mat-button mat-dialog-close=\"accept\" *ngIf=\"acceptButtonText\" data-selenium-id=\"buttonAccept\">{{acceptButtonText}}</button>\n    </mat-dialog-actions>\n  ",
                styles: ["\n    :host {\n      display: block;\n      max-width: 30vw;\n    }\n\n    .meta {\n      margin-top: 1em;\n    }\n\n    mat-dialog-actions {\n      justify-content: flex-end;\n    }\n  "]
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/progress-indicator/progress-indicator.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/shared/components/progress-indicator/progress-indicator.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ProgressIndicatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressIndicatorComponent", function() { return ProgressIndicatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/progress-bar.js");





var _c0 = function (a0) { return { "restricted-width": a0 }; };
var ProgressIndicatorComponent = /** @class */ (function () {
    function ProgressIndicatorComponent() {
        this.defaultText = "Daten werden geladen";
        this.text = this.defaultText;
    }
    ProgressIndicatorComponent.prototype.ngOnInit = function () {
    };
    ProgressIndicatorComponent.ɵfac = function ProgressIndicatorComponent_Factory(t) { return new (t || ProgressIndicatorComponent)(); };
    ProgressIndicatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProgressIndicatorComponent, selectors: [["dd-progress-indicator"]], inputs: { text: "text", restrictedWidth: "restrictedWidth" }, decls: 4, vars: 4, consts: [[1, "progress-indicator", 3, "ngClass"], [1, "mat-subheading-1", "progress-indicator_text"], ["mode", "indeterminate"]], template: function ProgressIndicatorComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "mat-progress-bar", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, ctx.restrictedWidth));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.text);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__["MatProgressBar"]], styles: [".progress-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  margin: 15px auto auto;\n}\n.progress-indicator[_ngcontent-%COMP%]   .progress-indicator_text[_ngcontent-%COMP%] {\n  margin-bottom: 1em;\n  text-align: center;\n}\n.progress-indicator.restricted-width[_ngcontent-%COMP%] {\n  width: 33%;\n}\n@media (max-width: 900px) {\n  .progress-indicator.restricted-width[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcHJvZ3Jlc3MtaW5kaWNhdG9yL0M6XFxVc2Vyc1xcbWthYlxcRG9jdW1lbnRzXFxHaXRMYWJDaURhc2hib2FyZFxcR3VpL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXHByb2dyZXNzLWluZGljYXRvclxccHJvZ3Jlc3MtaW5kaWNhdG9yLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9wcm9ncmVzcy1pbmRpY2F0b3IvcHJvZ3Jlc3MtaW5kaWNhdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUNDRjtBRENFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQ0NKO0FERUU7RUFDRSxVQUFBO0FDQUo7QURFSTtFQUhGO0lBSUksVUFBQTtFQ0NKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9wcm9ncmVzcy1pbmRpY2F0b3IvcHJvZ3Jlc3MtaW5kaWNhdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2dyZXNzLWluZGljYXRvciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAxNXB4IGF1dG8gYXV0bztcclxuXHJcbiAgLnByb2dyZXNzLWluZGljYXRvcl90ZXh0e1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgJi5yZXN0cmljdGVkLXdpZHRoIHtcclxuICAgIHdpZHRoOiAzMyU7XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XHJcbiAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4iLCIucHJvZ3Jlc3MtaW5kaWNhdG9yIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMTVweCBhdXRvIGF1dG87XG59XG4ucHJvZ3Jlc3MtaW5kaWNhdG9yIC5wcm9ncmVzcy1pbmRpY2F0b3JfdGV4dCB7XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnByb2dyZXNzLWluZGljYXRvci5yZXN0cmljdGVkLXdpZHRoIHtcbiAgd2lkdGg6IDMzJTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xuICAucHJvZ3Jlc3MtaW5kaWNhdG9yLnJlc3RyaWN0ZWQtd2lkdGgge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbn0iXX0= */"] });
    return ProgressIndicatorComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProgressIndicatorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'dd-progress-indicator',
                template: "\n    <div class=\"progress-indicator\" [ngClass]=\"{'restricted-width': restrictedWidth}\">\n      <div class=\"mat-subheading-1 progress-indicator_text\">{{text}}</div>\n      <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n    </div>\n  ",
                styleUrls: ['./progress-indicator.component.scss']
            }]
    }], function () { return []; }, { text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], restrictedWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
var templateObject_1;


/***/ }),

/***/ "./src/app/shared/material.module.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/material.module.ts ***!
  \*******************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/button.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/card.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/icon.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/progress-bar.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/snack-bar.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/sidenav.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/paginator.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/menu.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/toolbar.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/list.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/select.js");















var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MaterialModule });
    MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"]
            ],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"]] });
    return MaterialModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"]], exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"]
                ],
                exports: [
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./material.module */ "./src/app/shared/material.module.ts");
/* harmony import */ var _components_localize_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/localize.component */ "./src/app/shared/components/localize.component.ts");
/* harmony import */ var _components_loading_screen_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/loading-screen.component */ "./src/app/shared/components/loading-screen.component.ts");
/* harmony import */ var _components_msg_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/msg-dialog.component */ "./src/app/shared/components/msg-dialog.component.ts");
/* harmony import */ var _components_progress_indicator_progress_indicator_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/progress-indicator/progress-indicator.component */ "./src/app/shared/components/progress-indicator/progress-indicator.component.ts");








var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"]
            ],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"]] });
    return SharedModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_localize_component__WEBPACK_IMPORTED_MODULE_3__["LocalizeComponent"], _components_loading_screen_component__WEBPACK_IMPORTED_MODULE_4__["LoadingScreenComponent"], _components_msg_dialog_component__WEBPACK_IMPORTED_MODULE_5__["MsgDialogComponent"], _components_progress_indicator_progress_indicator_component__WEBPACK_IMPORTED_MODULE_6__["ProgressIndicatorComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"]], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
        _components_localize_component__WEBPACK_IMPORTED_MODULE_3__["LocalizeComponent"],
        _components_progress_indicator_progress_indicator_component__WEBPACK_IMPORTED_MODULE_6__["ProgressIndicatorComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_components_localize_component__WEBPACK_IMPORTED_MODULE_3__["LocalizeComponent"], _components_loading_screen_component__WEBPACK_IMPORTED_MODULE_4__["LoadingScreenComponent"], _components_msg_dialog_component__WEBPACK_IMPORTED_MODULE_5__["MsgDialogComponent"], _components_progress_indicator_progress_indicator_component__WEBPACK_IMPORTED_MODULE_6__["ProgressIndicatorComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"]
                ],
                exports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
                    _components_localize_component__WEBPACK_IMPORTED_MODULE_3__["LocalizeComponent"],
                    _components_progress_indicator_progress_indicator_component__WEBPACK_IMPORTED_MODULE_6__["ProgressIndicatorComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app/app.module */ "./src/app/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\mkab\Documents\GitLabCiDashboard\Gui\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map