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

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_paginaprincipal_paginaprincipal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/paginaprincipal/paginaprincipal.component */ "./src/app/components/paginaprincipal/paginaprincipal.component.ts");
/* harmony import */ var _components_caja_actividad_caja_actividad_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/caja-actividad/caja-actividad.component */ "./src/app/components/caja-actividad/caja-actividad.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_actividad_detail_actividad_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/actividad-detail/actividad-detail.component */ "./src/app/components/actividad-detail/actividad-detail.component.ts");
/* harmony import */ var _components_nuevaactividad_nuevaactividad_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/nuevaactividad/nuevaactividad.component */ "./src/app/components/nuevaactividad/nuevaactividad.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_actividad_creadas_actividad_creadas_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/actividad-creadas/actividad-creadas.component */ "./src/app/components/actividad-creadas/actividad-creadas.component.ts");
/* harmony import */ var _components_actividad_proximas_actividad_proximas_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/actividad-proximas/actividad-proximas.component */ "./src/app/components/actividad-proximas/actividad-proximas.component.ts");
/* harmony import */ var _components_actividad_completadas_actividad_completadas_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/actividad-completadas/actividad-completadas.component */ "./src/app/components/actividad-completadas/actividad-completadas.component.ts");
/* harmony import */ var _components_puntuacion_puntuacion_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/puntuacion/puntuacion.component */ "./src/app/components/puntuacion/puntuacion.component.ts");
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../guard/auth.guard */ "./src/app/guard/auth.guard.ts");
/* harmony import */ var _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/contacts/contacts.component */ "./src/app/components/contacts/contacts.component.ts");
















const routes = [{ path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'principal', component: _components_paginaprincipal_paginaprincipal_component__WEBPACK_IMPORTED_MODULE_2__["PaginaprincipalComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'actividad', component: _components_caja_actividad_caja_actividad_component__WEBPACK_IMPORTED_MODULE_3__["CajaActividadComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'actividad-nueva', component: _components_nuevaactividad_nuevaactividad_component__WEBPACK_IMPORTED_MODULE_6__["NuevaactividadComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'actividades-creadas', component: _components_actividad_creadas_actividad_creadas_component__WEBPACK_IMPORTED_MODULE_8__["ActividadCreadasComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'actividades-proximas', component: _components_actividad_proximas_actividad_proximas_component__WEBPACK_IMPORTED_MODULE_9__["ActividadProximasComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'actividades-completadas', component: _components_actividad_completadas_actividad_completadas_component__WEBPACK_IMPORTED_MODULE_10__["ActividadCompletadasComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'puntuacion', component: _components_puntuacion_puntuacion_component__WEBPACK_IMPORTED_MODULE_11__["PuntuacionComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'actividad-detail/:id', component: _components_actividad_detail_actividad_detail_component__WEBPACK_IMPORTED_MODULE_5__["ActividadDetailComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'contactos', component: _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_13__["ContactsComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sidenav/sidenav.component */ "./src/app/components/sidenav/sidenav.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");







function AppComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-sidenav");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_app_home_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-home");
} }
class AppComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
    isHomeRoute() {
        return this.router.url === '/home';
    }
    isNotHomeRoute() {
        return this.router.url !== '/home';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 2, consts: [[4, "ngIf"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_div_0_Template, 3, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_app_home_1_Template, 1, 0, "app-home", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isNotHomeRoute());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isHomeRoute());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_4__["SidenavComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_paginaprincipal_paginaprincipal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/paginaprincipal/paginaprincipal.component */ "./src/app/components/paginaprincipal/paginaprincipal.component.ts");
/* harmony import */ var _components_caja_actividad_caja_actividad_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/caja-actividad/caja-actividad.component */ "./src/app/components/caja-actividad/caja-actividad.component.ts");
/* harmony import */ var _components_nuevaactividad_nuevaactividad_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/nuevaactividad/nuevaactividad.component */ "./src/app/components/nuevaactividad/nuevaactividad.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/sidenav/sidenav.component */ "./src/app/components/sidenav/sidenav.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_subirfoto_subirfoto_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/subirfoto/subirfoto.component */ "./src/app/components/subirfoto/subirfoto.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_actividad_detail_actividad_detail_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/actividad-detail/actividad-detail.component */ "./src/app/components/actividad-detail/actividad-detail.component.ts");
/* harmony import */ var _components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/confirm/confirm.component */ "./src/app/components/confirm/confirm.component.ts");
/* harmony import */ var _components_actividad_creadas_actividad_creadas_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/actividad-creadas/actividad-creadas.component */ "./src/app/components/actividad-creadas/actividad-creadas.component.ts");
/* harmony import */ var _components_actividad_completadas_actividad_completadas_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/actividad-completadas/actividad-completadas.component */ "./src/app/components/actividad-completadas/actividad-completadas.component.ts");
/* harmony import */ var _components_actividad_proximas_actividad_proximas_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/actividad-proximas/actividad-proximas.component */ "./src/app/components/actividad-proximas/actividad-proximas.component.ts");
/* harmony import */ var _components_nuevapassword_nuevapassword_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/nuevapassword/nuevapassword.component */ "./src/app/components/nuevapassword/nuevapassword.component.ts");
/* harmony import */ var _components_puntuacion_puntuacion_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/puntuacion/puntuacion.component */ "./src/app/components/puntuacion/puntuacion.component.ts");
/* harmony import */ var _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/contacts/contacts.component */ "./src/app/components/contacts/contacts.component.ts");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_basedatos_service__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./services/basedatos.service */ "./src/app/services/basedatos.service.ts");
/* harmony import */ var _angular_material_extensions_google_maps_autocomplete__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular-material-extensions/google-maps-autocomplete */ "./node_modules/@angular-material-extensions/google-maps-autocomplete/__ivy_ngcc__/fesm2015/angular-material-extensions-google-maps-autocomplete.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");







//FIREBASE





//COMPONENTS


















//MATERIAL


















//SERVICIOS

//GOOGLE MAPS 


//SERVER COMMUNICATION




class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_basedatos_service__WEBPACK_IMPORTED_MODULE_46__["Basedatos"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_49__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_30__["MatButtonModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__["MatMenuModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__["MatToolbarModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_32__["MatInputModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_34__["MatIconModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_35__["MatExpansionModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_36__["MatSelectModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_44__["MatProgressBarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_37__["MatTooltipModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_7__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].firebase),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestoreModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__["AngularFireAuthModule"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_10__["AngularFireStorageModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_38__["MatDialogModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_45__["FormsModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_39__["MatDatepickerModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_40__["MatFormFieldModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_42__["MatCheckboxModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_43__["MatListModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_41__["MatNativeDateModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_45__["ReactiveFormsModule"],
            _angular_material_extensions_google_maps_autocomplete__WEBPACK_IMPORTED_MODULE_47__["MatGoogleMapsAutocompleteModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_48__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyBfJCfXNgcLBQSThRuZ4TQHVu7vJLX39ME',
                libraries: ['places']
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
        _components_register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"],
        _components_paginaprincipal_paginaprincipal_component__WEBPACK_IMPORTED_MODULE_13__["PaginaprincipalComponent"],
        _components_caja_actividad_caja_actividad_component__WEBPACK_IMPORTED_MODULE_14__["CajaActividadComponent"],
        _components_nuevaactividad_nuevaactividad_component__WEBPACK_IMPORTED_MODULE_15__["NuevaactividadComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_16__["HeaderComponent"],
        _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_17__["SidenavComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"],
        _components_actividad_detail_actividad_detail_component__WEBPACK_IMPORTED_MODULE_21__["ActividadDetailComponent"],
        _components_subirfoto_subirfoto_component__WEBPACK_IMPORTED_MODULE_19__["SubirfotoComponent"],
        _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_20__["ProfileComponent"],
        _components_actividad_creadas_actividad_creadas_component__WEBPACK_IMPORTED_MODULE_23__["ActividadCreadasComponent"],
        _components_actividad_completadas_actividad_completadas_component__WEBPACK_IMPORTED_MODULE_24__["ActividadCompletadasComponent"],
        _components_actividad_proximas_actividad_proximas_component__WEBPACK_IMPORTED_MODULE_25__["ActividadProximasComponent"],
        _components_nuevapassword_nuevapassword_component__WEBPACK_IMPORTED_MODULE_26__["NuevapasswordComponent"],
        _components_puntuacion_puntuacion_component__WEBPACK_IMPORTED_MODULE_27__["PuntuacionComponent"],
        _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_28__["ContactsComponent"],
        _components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_22__["ConfirmComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_49__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_30__["MatButtonModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__["MatMenuModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__["MatToolbarModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_32__["MatInputModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_34__["MatIconModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_35__["MatExpansionModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_36__["MatSelectModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_44__["MatProgressBarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_37__["MatTooltipModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_7__["AngularFireModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestoreModule"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__["AngularFireAuthModule"],
        _angular_fire_storage__WEBPACK_IMPORTED_MODULE_10__["AngularFireStorageModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_38__["MatDialogModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_45__["FormsModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_39__["MatDatepickerModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_40__["MatFormFieldModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_42__["MatCheckboxModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_43__["MatListModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_41__["MatNativeDateModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_45__["ReactiveFormsModule"],
        _angular_material_extensions_google_maps_autocomplete__WEBPACK_IMPORTED_MODULE_47__["MatGoogleMapsAutocompleteModule"], _agm_core__WEBPACK_IMPORTED_MODULE_48__["AgmCoreModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                    _components_register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"],
                    _components_paginaprincipal_paginaprincipal_component__WEBPACK_IMPORTED_MODULE_13__["PaginaprincipalComponent"],
                    _components_caja_actividad_caja_actividad_component__WEBPACK_IMPORTED_MODULE_14__["CajaActividadComponent"],
                    _components_nuevaactividad_nuevaactividad_component__WEBPACK_IMPORTED_MODULE_15__["NuevaactividadComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_16__["HeaderComponent"],
                    _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_17__["SidenavComponent"],
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"],
                    _components_actividad_detail_actividad_detail_component__WEBPACK_IMPORTED_MODULE_21__["ActividadDetailComponent"],
                    _components_subirfoto_subirfoto_component__WEBPACK_IMPORTED_MODULE_19__["SubirfotoComponent"],
                    _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_20__["ProfileComponent"],
                    _components_actividad_creadas_actividad_creadas_component__WEBPACK_IMPORTED_MODULE_23__["ActividadCreadasComponent"],
                    _components_actividad_completadas_actividad_completadas_component__WEBPACK_IMPORTED_MODULE_24__["ActividadCompletadasComponent"],
                    _components_actividad_proximas_actividad_proximas_component__WEBPACK_IMPORTED_MODULE_25__["ActividadProximasComponent"],
                    _components_nuevapassword_nuevapassword_component__WEBPACK_IMPORTED_MODULE_26__["NuevapasswordComponent"],
                    _components_puntuacion_puntuacion_component__WEBPACK_IMPORTED_MODULE_27__["PuntuacionComponent"],
                    _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_28__["ContactsComponent"],
                    _components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_22__["ConfirmComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_49__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_30__["MatButtonModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__["MatMenuModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__["MatToolbarModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_32__["MatInputModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_34__["MatIconModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_35__["MatExpansionModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_36__["MatSelectModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_44__["MatProgressBarModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_37__["MatTooltipModule"],
                    _angular_fire__WEBPACK_IMPORTED_MODULE_7__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].firebase),
                    _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestoreModule"],
                    _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__["AngularFireAuthModule"],
                    _angular_fire_storage__WEBPACK_IMPORTED_MODULE_10__["AngularFireStorageModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_38__["MatDialogModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_45__["FormsModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_39__["MatDatepickerModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_40__["MatFormFieldModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_42__["MatCheckboxModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_43__["MatListModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_41__["MatNativeDateModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_45__["ReactiveFormsModule"],
                    _angular_material_extensions_google_maps_autocomplete__WEBPACK_IMPORTED_MODULE_47__["MatGoogleMapsAutocompleteModule"],
                    _agm_core__WEBPACK_IMPORTED_MODULE_48__["AgmCoreModule"].forRoot({
                        apiKey: 'AIzaSyBfJCfXNgcLBQSThRuZ4TQHVu7vJLX39ME',
                        libraries: ['places']
                    }),
                ],
                exports: [],
                providers: [_services_basedatos_service__WEBPACK_IMPORTED_MODULE_46__["Basedatos"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/clases/actividad.ts":
/*!*************************************!*\
  !*** ./src/app/clases/actividad.ts ***!
  \*************************************/
/*! exports provided: Actividad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Actividad", function() { return Actividad; });
class Actividad {
    constructor(id, nombre, participantes, creador_nombre, creador_email, nivel, fecha, lugar, deporte, username_participantes, tel_participantes, descripcion, hora, longitud, latitud) {
        this.id = id;
        this.nombre = nombre;
        this.participantes = participantes;
        this.username_participantes = username_participantes;
        this.tel_participantes = tel_participantes;
        this.creador_nombre = creador_nombre;
        this.creador_email = creador_email;
        this.nivel = nivel;
        this.fecha = fecha;
        this.lugar = lugar;
        this.deporte = deporte;
        this.descripcion = descripcion;
        this.hora = hora;
        this.longitud = longitud;
        this.latitud = latitud;
    }
}
;


/***/ }),

/***/ "./src/app/components/actividad-completadas/actividad-completadas.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/actividad-completadas/actividad-completadas.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ActividadCompletadasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActividadCompletadasComponent", function() { return ActividadCompletadasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_basedatos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/basedatos.service */ "./src/app/services/basedatos.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _caja_actividad_caja_actividad_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../caja-actividad/caja-actividad.component */ "./src/app/components/caja-actividad/caja-actividad.component.ts");







function ActividadCompletadasComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-caja-actividad", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const actividad_r56 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activity", actividad_r56);
} }
class ActividadCompletadasComponent {
    constructor(router, route, basedatosService, authService) {
        this.router = router;
        this.route = route;
        this.basedatosService = basedatosService;
        this.authService = authService;
        this.aux_actividades = [];
    }
    ngOnInit() {
        this.s_actividades = this.basedatosService.getActividades().subscribe(data => {
            this.aux_actividades = [];
            this.actividades = [];
            this.actividades = data;
            for (let i = 0; i < this.actividades.length; i++) {
                let a = JSON.stringify(this.actividades[i]);
                let b = (JSON.parse(a)).fecha.seconds;
                this.actividades[i].fecha = new Date(b * 1000);
            }
            this.filtro();
        });
    }
    ngOnDestroy() {
        this.s_actividades.unsubscribe();
    }
    //actividades del usuario que ya han pasado
    filtro() {
        let j = 0;
        for (let i = 0; i < this.actividades.length; i++) {
            if (this.actividades[i].fecha.getTime() < new Date().getTime()) {
                if (this.actividades[i].tel_participantes.includes(JSON.parse(localStorage.getItem('datauser')).data.mobilephone)) {
                    this.aux_actividades[j] = this.actividades[i];
                    j++;
                }
            }
        }
    }
}
ActividadCompletadasComponent.ɵfac = function ActividadCompletadasComponent_Factory(t) { return new (t || ActividadCompletadasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_basedatos_service__WEBPACK_IMPORTED_MODULE_2__["Basedatos"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
ActividadCompletadasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ActividadCompletadasComponent, selectors: [["app-actividad-completadas"]], decls: 3, vars: 1, consts: [["id", "barra_busqueda"], [1, "cajas_container"], [4, "ngFor", "ngForOf"], [3, "activity"]], template: function ActividadCompletadasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ActividadCompletadasComponent_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.aux_actividades);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _caja_actividad_caja_actividad_component__WEBPACK_IMPORTED_MODULE_5__["CajaActividadComponent"]], styles: ["#barra_busqueda[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  margin-bottom: 40px;\n}\n\n.cajas_container[_ngcontent-%COMP%] {\n  margin: auto;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2oyL2FuZ3VsYXJGaW5hbC9mcmVlZG9tL3NyYy9hcHAvY29tcG9uZW50cy9hY3RpdmlkYWQtY29tcGxldGFkYXMvYWN0aXZpZGFkLWNvbXBsZXRhZGFzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2FjdGl2aWRhZC1jb21wbGV0YWRhcy9hY3RpdmlkYWQtY29tcGxldGFkYXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWN0aXZpZGFkLWNvbXBsZXRhZGFzL2FjdGl2aWRhZC1jb21wbGV0YWRhcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNiYXJyYV9idXNxdWVkYXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICB9XG4gIFxuICAuY2FqYXNfY29udGFpbmVyIHtcbiAgICBtYXJnaW46YXV0bztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDsgIFxuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4iLCIjYmFycmFfYnVzcXVlZGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5cbi5jYWphc19jb250YWluZXIge1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActividadCompletadasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-actividad-completadas',
                templateUrl: './actividad-completadas.component.html',
                styleUrls: ['./actividad-completadas.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _services_basedatos_service__WEBPACK_IMPORTED_MODULE_2__["Basedatos"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/actividad-creadas/actividad-creadas.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/actividad-creadas/actividad-creadas.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ActividadCreadasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActividadCreadasComponent", function() { return ActividadCreadasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_basedatos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/basedatos.service */ "./src/app/services/basedatos.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _caja_actividad_caja_actividad_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../caja-actividad/caja-actividad.component */ "./src/app/components/caja-actividad/caja-actividad.component.ts");







function ActividadCreadasComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-caja-actividad", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const actividad_r52 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activity", actividad_r52);
} }
class ActividadCreadasComponent {
    constructor(router, route, basedatosService, authService) {
        this.router = router;
        this.route = route;
        this.basedatosService = basedatosService;
        this.authService = authService;
        this.aux_actividades = [];
    }
    ngOnInit() {
        this.s_actividades = this.basedatosService.getActividades().subscribe(data => {
            this.aux_actividades = [];
            this.actividades = [];
            this.actividades = data;
            for (let i = 0; i < this.actividades.length; i++) {
                let a = JSON.stringify(this.actividades[i]);
                let b = (JSON.parse(a)).fecha.seconds;
                this.actividades[i].fecha = new Date(b * 1000);
            }
            this.filtro();
        });
    }
    ngOnDestroy() { }
    //actividades creadas por el usuario actual
    filtro() {
        let j = 0;
        for (let i = 0; i < this.actividades.length; i++) {
            if (this.actividades[i].creador_email == JSON.parse(localStorage.getItem('datauser')).data.email) {
                this.aux_actividades[j] = this.actividades[i];
                j++;
            }
        }
    }
}
ActividadCreadasComponent.ɵfac = function ActividadCreadasComponent_Factory(t) { return new (t || ActividadCreadasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_basedatos_service__WEBPACK_IMPORTED_MODULE_2__["Basedatos"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
ActividadCreadasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ActividadCreadasComponent, selectors: [["app-actividad-creadas"]], decls: 3, vars: 1, consts: [["id", "barra_busqueda"], [1, "cajas_container"], [4, "ngFor", "ngForOf"], [3, "activity"]], template: function ActividadCreadasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ActividadCreadasComponent_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.aux_actividades);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _caja_actividad_caja_actividad_component__WEBPACK_IMPORTED_MODULE_5__["CajaActividadComponent"]], styles: ["#barra_busqueda[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  margin-bottom: 40px;\n}\n\n.cajas_container[_ngcontent-%COMP%] {\n  margin: auto;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2oyL2FuZ3VsYXJGaW5hbC9mcmVlZG9tL3NyYy9hcHAvY29tcG9uZW50cy9hY3RpdmlkYWQtY3JlYWRhcy9hY3RpdmlkYWQtY3JlYWRhcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9hY3RpdmlkYWQtY3JlYWRhcy9hY3RpdmlkYWQtY3JlYWRhcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hY3RpdmlkYWQtY3JlYWRhcy9hY3RpdmlkYWQtY3JlYWRhcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNiYXJyYV9idXNxdWVkYXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICB9XG4gIFxuICAuY2FqYXNfY29udGFpbmVyIHtcbiAgICBtYXJnaW46YXV0bztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDsgIFxuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4iLCIjYmFycmFfYnVzcXVlZGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5cbi5jYWphc19jb250YWluZXIge1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActividadCreadasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-actividad-creadas',
                templateUrl: './actividad-creadas.component.html',
                styleUrls: ['./actividad-creadas.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _services_basedatos_service__WEBPACK_IMPORTED_MODULE_2__["Basedatos"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/actividad-detail/actividad-detail.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/actividad-detail/actividad-detail.component.ts ***!
  \***************************************************************************/
/*! exports provided: ActividadDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActividadDetailComponent", function() { return ActividadDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_basedatos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/basedatos.service */ "./src/app/services/basedatos.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");







function ActividadDetailComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Evento creado por ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Descripci\u00F3n: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Tel\u00E9fono de los participantes: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Participantes: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " LUGAR:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](51, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " NIVEL:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " PARTICIPANTES:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r46.foto_actividad, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r46.activity.nombre, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r46.activity.creador_nombre, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r46.activity.deporte, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](21, 14, ctx_r46.activity.fecha, "fullDate")), " \u00A0 at \u00A0 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](22, 17, ctx_r46.activity.fecha, "shortTime"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r46.activity.descripcion, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r46.telefonos, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r46.activity.username_participantes, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](51, 20, ctx_r46.activity.lugar), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r46.activity.nivel, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r46.activity.participantes, "");
} }
class ActividadDetailComponent {
    constructor(basedatosService, route, location) {
        this.basedatosService = basedatosService;
        this.route = route;
        this.location = location;
        this.zoom = 15;
    }
    ngOnInit() {
        const id = this.route.snapshot.params['id'];
        this.basedatosService.getActividad(id).then(data => {
            this.activity = data;
            this.setSportImage();
            if (this.activity.creador_email == JSON.parse(localStorage.getItem('datauser')).data.email) {
                this.telefonos = this.activity.tel_participantes;
            }
            else {
                this.telefonos = ["*Solo visible para el creador de la actividad"];
            }
            this.longitud = this.activity.longitud;
            this.latitud = this.activity.latitud;
            let a = JSON.stringify(this.activity);
            let b = (JSON.parse(a)).fecha.seconds;
            this.activity.fecha = new Date(b * 1000);
        });
    }
    setSportImage() {
        if (this.activity.deporte == "Baloncesto") {
            this.foto_actividad = "./assets/basket.svg";
        }
        else if (this.activity.deporte == "Ciclismo") {
            this.foto_actividad = "./assets/bici.svg";
        }
        else if (this.activity.deporte == "Futbol") {
            this.foto_actividad = "./assets/futbol.svg";
        }
        else if (this.activity.deporte == "Tenis") {
            this.foto_actividad = "./assets/tenis.svg";
        }
        else if (this.activity.deporte == "Running") {
            this.foto_actividad = "./assets/run.svg";
        }
        else if (this.activity.deporte == "Skate") {
            this.foto_actividad = "./assets/skateboard.svg";
        }
        else if (this.activity.deporte == "Trekking") {
            this.foto_actividad = "./assets/trekking.svg";
        }
        else if (this.activity.deporte == "Patinaje") {
            this.foto_actividad = "./assets/skate.svg";
        }
    }
    goBack() {
        this.location.back();
    }
}
ActividadDetailComponent.ɵfac = function ActividadDetailComponent_Factory(t) { return new (t || ActividadDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_basedatos_service__WEBPACK_IMPORTED_MODULE_1__["Basedatos"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"])); };
ActividadDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ActividadDetailComponent, selectors: [["app-actividad-detail"]], decls: 7, vars: 6, consts: [["mat-button", "", 1, "back", 3, "click"], [1, "material-icons"], ["class", "container", 4, "ngIf"], [1, "mapa"], [3, "latitude", "zoom", "longitude"], [3, "latitude", "longitude"], [1, "container"], [1, "item"], [1, "round"], ["alt", "sport image", 1, "foto", 3, "src"], [1, "titulo"], [1, "author"], [1, "deporte"], [1, "spacer"], [1, "fecha"], [1, "descripcion"], [1, "descripciontext"], [1, "container2"], [1, "lugar"], [1, "lugardesc"], [1, "nivel"], [1, "niveldesc"], [1, "particip"], [1, "participdesc"]], template: function ActividadDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActividadDetailComponent_Template_button_click_0_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "arrow_back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ActividadDetailComponent_div_3_Template, 64, 22, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "agm-map", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "agm-marker", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx.latitud)("zoom", ctx.zoom)("longitude", ctx.longitud);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx.latitud)("longitude", ctx.longitud);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmMap"], _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmMarker"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: ["@charset \"UTF-8\";\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  background-color: rgba(255, 255, 255, 0.63);\n  border-radius: 5px;\n  padding: 3%;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  align-items: auto;\n  align-content: flex-start;\n  box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.26);\n}\n.container2[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  background-color: whitesmoke;\n  border-radius: 5px;\n  padding: 3%;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  align-items: auto;\n  align-content: flex-start;\n  margin: 3%;\n}\n.item[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  margin: auto;\n  margin-left: 2%;\n  padding-top: 1%;\n  padding-bottom: 1%;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n.titulo[_ngcontent-%COMP%] {\n  padding-left: 3%;\n  text-align: center;\n  font-weight: bolder;\n  top: 50%;\n  color: #383a53;\n  margin: auto;\n  vertical-align: middle;\n  font-size: calc(20px + (60 - 20) * ((100vw - 300px) / (1600 - 300)));\n  letter-spacing: 0.25em;\n  line-height: 1em;\n}\n.spacer[_ngcontent-%COMP%] {\n  margin: 10px;\n  width: 100%;\n}\n.round[_ngcontent-%COMP%] {\n  height: calc(25px + (85 - 25) * ((100vw - 300px) / (1600 - 300)));\n  width: calc(25px + (85 - 25) * ((100vw - 300px) / (1600 - 300)));\n  text-align: center;\n  vertical-align: middle;\n  background-color: white;\n  box-shadow: 0px 6px 8px 0px rgba(0, 0, 0, 0.26);\n  border-radius: 50%;\n}\n.foto[_ngcontent-%COMP%] {\n  margin: 10%;\n  height: calc(20px + (67 - 20) * ((100vw - 300px) / (1600 - 300)));\n  width: calc(20px + (67 - 20) * ((100vw - 300px) / (1600 - 300)));\n  align-content: center;\n}\n.author[_ngcontent-%COMP%] {\n  font-size: calc(12px + (25 - 12) * ((100vw - 300px) / (1600 - 300)));\n  color: black;\n}\n.deporte[_ngcontent-%COMP%] {\n  font-size: calc(12px + (25 - 12) * ((100vw - 300px) / (1600 - 300)));\n  color: #F5CB18;\n}\n.fecha[_ngcontent-%COMP%] {\n  font-size: calc(10px + (23 - 10) * ((100vw - 300px) / (1600 - 300)));\n  padding-left: 10%;\n  font-weight: bold;\n  color: #09878A;\n  letter-spacing: 0.1em;\n}\n.descripcion[_ngcontent-%COMP%] {\n  font-size: calc(14px + (28 - 14) * ((100vw - 300px) / (1600 - 300)));\n  color: #0C60BA;\n}\n.descripciontext[_ngcontent-%COMP%] {\n  font-size: calc(12px + (23 - 12) * ((100vw - 300px) / (1600 - 300)));\n  color: black;\n  line-height: inherit;\n}\n.lugar[_ngcontent-%COMP%] {\n  font-size: calc(12px + (23 - 12) * ((100vw - 300px) / (1600 - 300)));\n  font-weight: bold;\n  color: #770075;\n  letter-spacing: 0.2em;\n}\n.lugar[_ngcontent-%COMP%]::before {\n  color: #8A0988;\n  font-weight: bold;\n  content: \"\u2022\";\n  font-size: calc(12px + (23 - 12) * ((100vw - 300px) / (1600 - 300)));\n}\n.lugardesc[_ngcontent-%COMP%] {\n  font-size: calc(14px + (25 - 14) * ((100vw - 300px) / (1600 - 300)));\n  color: black;\n}\n.nivel[_ngcontent-%COMP%] {\n  font-size: calc(14px + (25 - 14) * ((100vw - 300px) / (1600 - 300)));\n  font-weight: bold;\n  color: #753e02;\n  letter-spacing: 0.2em;\n}\n.nivel[_ngcontent-%COMP%]::before {\n  color: #8A4C09;\n  font-weight: bold;\n  content: \"\u2022\";\n  font-size: calc(12px + (23 - 12) * ((100vw - 300px) / (1600 - 300)));\n}\n.niveldesc[_ngcontent-%COMP%] {\n  font-size: calc(14px + (25 - 14) * ((100vw - 300px) / (1600 - 300)));\n  color: black;\n}\n.particip[_ngcontent-%COMP%] {\n  font-size: calc(14px + (25 - 14) * ((100vw - 300px) / (1600 - 300)));\n  font-weight: bold;\n  color: #027904;\n  letter-spacing: 0.2em;\n}\n.particip[_ngcontent-%COMP%]::before {\n  color: #098A0B;\n  font-weight: bold;\n  content: \"\u2022\";\n  font-size: calc(12px + (23 - 12) * ((100vw - 300px) / (1600 - 300)));\n}\n.participdesc[_ngcontent-%COMP%] {\n  font-size: calc(14px + (25 - 14) * ((100vw - 300px) / (1600 - 300)));\n  color: black;\n}\n.back[_ngcontent-%COMP%] {\n  color: white;\n  background-color: #09478a;\n}\nagm-map[_ngcontent-%COMP%] {\n  height: 350px;\n}\n.mapa[_ngcontent-%COMP%] {\n  margin: auto;\n  margin-bottom: 40px;\n  padding: 3%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hY3RpdmlkYWQtZGV0YWlsL2FjdGl2aWRhZC1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9qMi9hbmd1bGFyRmluYWwvZnJlZWRvbS9zcmMvYXBwL2NvbXBvbmVudHMvYWN0aXZpZGFkLWRldGFpbC9hY3RpdmlkYWQtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdEQUFBO0FERUY7QUNDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7QURFRjtBQ0NBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFFQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0FEQ0Y7QUNFQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0VBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FEQ0Y7QUNFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FEQ0Y7QUNFQTtFQUNFLGlFQUFBO0VBQ0EsZ0VBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSwrQ0FBQTtFQUNBLGtCQUFBO0FEQ0Y7QUNFQTtFQUNFLFdBQUE7RUFDQSxpRUFBQTtFQUNBLGdFQUFBO0VBQ0EscUJBQUE7QURDRjtBQ0VBO0VBQ0Usb0VBQUE7RUFDQSxZQUFBO0FEQ0Y7QUNFQTtFQUNFLG9FQUFBO0VBQ0EsY0FBQTtBRENGO0FDRUE7RUFDRSxvRUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QURDRjtBQ0dBO0VBQ0Usb0VBQUE7RUFDQSxjQUFBO0FEQUY7QUNHQTtFQUNFLG9FQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FEQUY7QUNHQTtFQUNFLG9FQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QURBRjtBQ0dBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG9FQUFBO0FEQUY7QUNHQTtFQUNFLG9FQUFBO0VBQ0EsWUFBQTtBREFGO0FDSUE7RUFDRSxvRUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FEREY7QUNJQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxvRUFBQTtBRERGO0FDS0E7RUFDRSxvRUFBQTtFQUNBLFlBQUE7QURGRjtBQ01BO0VBQ0Usb0VBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBREhGO0FDTUE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0VBQUE7QURIRjtBQ09BO0VBQ0Usb0VBQUE7RUFDQSxZQUFBO0FESkY7QUNRQTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtBRExGO0FDUUE7RUFDRSxhQUFBO0FETEY7QUNPQztFQUNDLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QURKRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWN0aXZpZGFkLWRldGFpbC9hY3RpdmlkYWQtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42Myk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMyU7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBhdXRvO1xuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBib3gtc2hhZG93OiAwcHggNnB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNik7XG59XG5cbi5jb250YWluZXIyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAzJTtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGF1dG87XG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIG1hcmdpbjogMyU7XG59XG5cbi5pdGVtIHtcbiAgZmxleDogMSAxIGF1dG87XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IDIlO1xuICBwYWRkaW5nLXRvcDogMSU7XG4gIHBhZGRpbmctYm90dG9tOiAxJTtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbn1cblxuLnRpdHVsbyB7XG4gIHBhZGRpbmctbGVmdDogMyU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgdG9wOiA1MCU7XG4gIGNvbG9yOiAjMzgzYTUzO1xuICBtYXJnaW46IGF1dG87XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGZvbnQtc2l6ZTogY2FsYygyMHB4ICsgKDYwIC0gMjApICogKCgxMDB2dyAtIDMwMHB4KSAvICgxNjAwIC0gMzAwKSkpO1xuICBsZXR0ZXItc3BhY2luZzogMC4yNWVtO1xuICBsaW5lLWhlaWdodDogMWVtO1xufVxuXG4uc3BhY2VyIHtcbiAgbWFyZ2luOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnJvdW5kIHtcbiAgaGVpZ2h0OiBjYWxjKDI1cHggKyAoODUgLSAyNSkgKiAoKDEwMHZ3IC0gMzAwcHgpIC8gKDE2MDAgLSAzMDApKSk7XG4gIHdpZHRoOiBjYWxjKDI1cHggKyAoODUgLSAyNSkgKiAoKDEwMHZ3IC0gMzAwcHgpIC8gKDE2MDAgLSAzMDApKSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDBweCA2cHggOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjYpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5mb3RvIHtcbiAgbWFyZ2luOiAxMCU7XG4gIGhlaWdodDogY2FsYygyMHB4ICsgKDY3IC0gMjApICogKCgxMDB2dyAtIDMwMHB4KSAvICgxNjAwIC0gMzAwKSkpO1xuICB3aWR0aDogY2FsYygyMHB4ICsgKDY3IC0gMjApICogKCgxMDB2dyAtIDMwMHB4KSAvICgxNjAwIC0gMzAwKSkpO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5hdXRob3Ige1xuICBmb250LXNpemU6IGNhbGMoMTJweCArICgyNSAtIDEyKSAqICgoMTAwdncgLSAzMDBweCkgLyAoMTYwMCAtIDMwMCkpKTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uZGVwb3J0ZSB7XG4gIGZvbnQtc2l6ZTogY2FsYygxMnB4ICsgKDI1IC0gMTIpICogKCgxMDB2dyAtIDMwMHB4KSAvICgxNjAwIC0gMzAwKSkpO1xuICBjb2xvcjogI0Y1Q0IxODtcbn1cblxuLmZlY2hhIHtcbiAgZm9udC1zaXplOiBjYWxjKDEwcHggKyAoMjMgLSAxMCkgKiAoKDEwMHZ3IC0gMzAwcHgpIC8gKDE2MDAgLSAzMDApKSk7XG4gIHBhZGRpbmctbGVmdDogMTAlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMwOTg3OEE7XG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcbn1cblxuLmRlc2NyaXBjaW9uIHtcbiAgZm9udC1zaXplOiBjYWxjKDE0cHggKyAoMjggLSAxNCkgKiAoKDEwMHZ3IC0gMzAwcHgpIC8gKDE2MDAgLSAzMDApKSk7XG4gIGNvbG9yOiAjMEM2MEJBO1xufVxuXG4uZGVzY3JpcGNpb250ZXh0IHtcbiAgZm9udC1zaXplOiBjYWxjKDEycHggKyAoMjMgLSAxMikgKiAoKDEwMHZ3IC0gMzAwcHgpIC8gKDE2MDAgLSAzMDApKSk7XG4gIGNvbG9yOiBibGFjaztcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG59XG5cbi5sdWdhciB7XG4gIGZvbnQtc2l6ZTogY2FsYygxMnB4ICsgKDIzIC0gMTIpICogKCgxMDB2dyAtIDMwMHB4KSAvICgxNjAwIC0gMzAwKSkpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICM3NzAwNzU7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJlbTtcbn1cblxuLmx1Z2FyOjpiZWZvcmUge1xuICBjb2xvcjogIzhBMDk4ODtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbnRlbnQ6IFwi4oCiXCI7XG4gIGZvbnQtc2l6ZTogY2FsYygxMnB4ICsgKDIzIC0gMTIpICogKCgxMDB2dyAtIDMwMHB4KSAvICgxNjAwIC0gMzAwKSkpO1xufVxuXG4ubHVnYXJkZXNjIHtcbiAgZm9udC1zaXplOiBjYWxjKDE0cHggKyAoMjUgLSAxNCkgKiAoKDEwMHZ3IC0gMzAwcHgpIC8gKDE2MDAgLSAzMDApKSk7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLm5pdmVsIHtcbiAgZm9udC1zaXplOiBjYWxjKDE0cHggKyAoMjUgLSAxNCkgKiAoKDEwMHZ3IC0gMzAwcHgpIC8gKDE2MDAgLSAzMDApKSk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzc1M2UwMjtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMmVtO1xufVxuXG4ubml2ZWw6OmJlZm9yZSB7XG4gIGNvbG9yOiAjOEE0QzA5O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29udGVudDogXCLigKJcIjtcbiAgZm9udC1zaXplOiBjYWxjKDEycHggKyAoMjMgLSAxMikgKiAoKDEwMHZ3IC0gMzAwcHgpIC8gKDE2MDAgLSAzMDApKSk7XG59XG5cbi5uaXZlbGRlc2Mge1xuICBmb250LXNpemU6IGNhbGMoMTRweCArICgyNSAtIDE0KSAqICgoMTAwdncgLSAzMDBweCkgLyAoMTYwMCAtIDMwMCkpKTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4ucGFydGljaXAge1xuICBmb250LXNpemU6IGNhbGMoMTRweCArICgyNSAtIDE0KSAqICgoMTAwdncgLSAzMDBweCkgLyAoMTYwMCAtIDMwMCkpKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMDI3OTA0O1xuICBsZXR0ZXItc3BhY2luZzogMC4yZW07XG59XG5cbi5wYXJ0aWNpcDo6YmVmb3JlIHtcbiAgY29sb3I6ICMwOThBMEI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb250ZW50OiBcIuKAolwiO1xuICBmb250LXNpemU6IGNhbGMoMTJweCArICgyMyAtIDEyKSAqICgoMTAwdncgLSAzMDBweCkgLyAoMTYwMCAtIDMwMCkpKTtcbn1cblxuLnBhcnRpY2lwZGVzYyB7XG4gIGZvbnQtc2l6ZTogY2FsYygxNHB4ICsgKDI1IC0gMTQpICogKCgxMDB2dyAtIDMwMHB4KSAvICgxNjAwIC0gMzAwKSkpO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5iYWNrIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDk0NzhhO1xufVxuXG5hZ20tbWFwIHtcbiAgaGVpZ2h0OiAzNTBweDtcbn1cblxuLm1hcGEge1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIHBhZGRpbmc6IDMlO1xufSIsIi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjMpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDMlO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogYXV0bztcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcbiAgYm94LXNoYWRvdzogMHB4IDZweCAxMHB4IDBweCByZ2JhKDAsMCwwLDAuMjYpO1xufVxuXG4uY29udGFpbmVyMiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDI0NSwgMjQ1KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAzJTtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGF1dG87XG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIG1hcmdpbjogMyU7XG59XG5cbi5pdGVtIHtcbiAgZmxleDogMSAxIGF1dG87XG4gIG1hcmdpbjogYXV0bzsgXG4gIC8vIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICBtYXJnaW4tbGVmdDogMiU7XG4gIHBhZGRpbmctdG9wOiAxJTtcbiAgcGFkZGluZy1ib3R0b206IDElO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xufVxuXG4udGl0dWxvIHtcbiAgcGFkZGluZy1sZWZ0OiAzJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICB0b3A6IDUwJTtcbiAgY29sb3I6ICMzODNhNTM7XG4gIG1hcmdpbjogYXV0bztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgZm9udC1zaXplOiBjYWxjKDIwcHggKyAoNjAgLSAyMCkgKiAoKDEwMHZ3IC0gMzAwcHgpIC8gKDE2MDAgLSAzMDApKSk7XG4gIGxldHRlci1zcGFjaW5nOiAwLjI1ZW07XG4gIGxpbmUtaGVpZ2h0OiAxZW07XG59XG5cbi5zcGFjZXIge1xuICBtYXJnaW46IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucm91bmQge1xuICBoZWlnaHQ6IGNhbGMoMjVweCArICg4NSAtIDI1KSAqICgoMTAwdncgLSAzMDBweCkgLyAoMTYwMCAtIDMwMCkpKTtcbiAgd2lkdGg6IGNhbGMoMjVweCArICg4NSAtIDI1KSAqICgoMTAwdncgLSAzMDBweCkgLyAoMTYwMCAtIDMwMCkpKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIGJveC1zaGFkb3c6IDBweCA2cHggOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjYpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5mb3RvIHtcbiAgbWFyZ2luOiAxMCU7XG4gIGhlaWdodDogY2FsYygyMHB4ICsgKDY3IC0gMjApICogKCgxMDB2dyAtIDMwMHB4KSAvICgxNjAwIC0gMzAwKSkpOztcbiAgd2lkdGg6IGNhbGMoMjBweCArICg2NyAtIDIwKSAqICgoMTAwdncgLSAzMDBweCkgLyAoMTYwMCAtIDMwMCkpKTs7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmF1dGhvciB7XG4gIGZvbnQtc2l6ZTogY2FsYygxMnB4ICsgKDI1IC0gMTIpICogKCgxMDB2dyAtIDMwMHB4KSAvICgxNjAwIC0gMzAwKSkpO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5kZXBvcnRlIHtcbiAgZm9udC1zaXplOiBjYWxjKDEycHggKyAoMjUgLSAxMikgKiAoKDEwMHZ3IC0gMzAwcHgpIC8gKDE2MDAgLSAzMDApKSk7XG4gIGNvbG9yOiAjRjVDQjE4O1xufVxuXG4uZmVjaGF7XG4gIGZvbnQtc2l6ZTogY2FsYygxMHB4ICsgKDIzIC0gMTApICogKCgxMDB2dyAtIDMwMHB4KSAvICgxNjAwIC0gMzAwKSkpO1xuICBwYWRkaW5nLWxlZnQ6IDEwJTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMDk4NzhBO1xuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XG59XG5cblxuLmRlc2NyaXBjaW9uIHtcbiAgZm9udC1zaXplOiBjYWxjKDE0cHggKyAoMjggLSAxNCkgKiAoKDEwMHZ3IC0gMzAwcHgpIC8gKDE2MDAgLSAzMDApKSk7XG4gIGNvbG9yOiAjMEM2MEJBO1xufVxuXG4uZGVzY3JpcGNpb250ZXh0IHtcbiAgZm9udC1zaXplOiBjYWxjKDEycHggKyAoMjMgLSAxMikgKiAoKDEwMHZ3IC0gMzAwcHgpIC8gKDE2MDAgLSAzMDApKSk7XG4gIGNvbG9yOiBibGFjaztcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG59XG5cbi5sdWdhciB7XG4gIGZvbnQtc2l6ZTogY2FsYygxMnB4ICsgKDIzIC0gMTIpICogKCgxMDB2dyAtIDMwMHB4KSAvICgxNjAwIC0gMzAwKSkpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHJnYigxMTksIDAsIDExNyk7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJlbTtcbn1cblxuLmx1Z2FyOjpiZWZvcmV7XG4gIGNvbG9yOiAjOEEwOTg4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29udGVudDogXCJcXDIwMjJcIjtcbiAgZm9udC1zaXplOiBjYWxjKDEycHggKyAoMjMgLSAxMikgKiAoKDEwMHZ3IC0gMzAwcHgpIC8gKDE2MDAgLSAzMDApKSk7XG59XG5cbi5sdWdhcmRlc2Mge1xuICBmb250LXNpemU6IGNhbGMoMTRweCArICgyNSAtIDE0KSAqICgoMTAwdncgLSAzMDBweCkgLyAoMTYwMCAtIDMwMCkpKTtcbiAgY29sb3I6IHJnYigwLCAwLCAwKTtcbn1cblxuXG4ubml2ZWwge1xuICBmb250LXNpemU6IGNhbGMoMTRweCArICgyNSAtIDE0KSAqICgoMTAwdncgLSAzMDBweCkgLyAoMTYwMCAtIDMwMCkpKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiByZ2IoMTE3LCA2MiwgMik7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJlbTtcbn1cblxuLm5pdmVsOjpiZWZvcmV7XG4gIGNvbG9yOiAjOEE0QzA5O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29udGVudDogXCJcXDIwMjJcIjtcbiAgZm9udC1zaXplOiBjYWxjKDEycHggKyAoMjMgLSAxMikgKiAoKDEwMHZ3IC0gMzAwcHgpIC8gKDE2MDAgLSAzMDApKSk7XG5cbn1cblxuLm5pdmVsZGVzYyB7XG4gIGZvbnQtc2l6ZTogY2FsYygxNHB4ICsgKDI1IC0gMTQpICogKCgxMDB2dyAtIDMwMHB4KSAvICgxNjAwIC0gMzAwKSkpO1xuICBjb2xvcjogcmdiKDAsIDAsIDApO1xufVxuXG5cbi5wYXJ0aWNpcCB7XG4gIGZvbnQtc2l6ZTogY2FsYygxNHB4ICsgKDI1IC0gMTQpICogKCgxMDB2dyAtIDMwMHB4KSAvICgxNjAwIC0gMzAwKSkpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHJnYigyLCAxMjEsIDQpO1xuICBsZXR0ZXItc3BhY2luZzogMC4yZW07XG59XG5cbi5wYXJ0aWNpcDo6YmVmb3Jle1xuICBjb2xvcjogIzA5OEEwQjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbnRlbnQ6IFwiXFwyMDIyXCI7XG4gIGZvbnQtc2l6ZTogY2FsYygxMnB4ICsgKDIzIC0gMTIpICogKCgxMDB2dyAtIDMwMHB4KSAvICgxNjAwIC0gMzAwKSkpO1xuXG59XG5cbi5wYXJ0aWNpcGRlc2Mge1xuICBmb250LXNpemU6IGNhbGMoMTRweCArICgyNSAtIDE0KSAqICgoMTAwdncgLSAzMDBweCkgLyAoMTYwMCAtIDMwMCkpKTtcbiAgY29sb3I6IHJnYigwLCAwLCAwKTtcbn1cblxuXG4uYmFjayB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA5NDc4YTtcbn1cblxuYWdtLW1hcCB7XG4gIGhlaWdodDogMzUwcHg7XG4gfVxuIC5tYXBhe1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIHBhZGRpbmc6IDMlO1xuIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActividadDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-actividad-detail',
                templateUrl: './actividad-detail.component.html',
                styleUrls: ['./actividad-detail.component.scss']
            }]
    }], function () { return [{ type: _services_basedatos_service__WEBPACK_IMPORTED_MODULE_1__["Basedatos"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/actividad-proximas/actividad-proximas.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/actividad-proximas/actividad-proximas.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ActividadProximasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActividadProximasComponent", function() { return ActividadProximasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_basedatos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/basedatos.service */ "./src/app/services/basedatos.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _caja_actividad_caja_actividad_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../caja-actividad/caja-actividad.component */ "./src/app/components/caja-actividad/caja-actividad.component.ts");







function ActividadProximasComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-caja-actividad", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const actividad_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activity", actividad_r54);
} }
class ActividadProximasComponent {
    constructor(router, route, basedatosService, authService) {
        this.router = router;
        this.route = route;
        this.basedatosService = basedatosService;
        this.authService = authService;
        this.aux_actividades = [];
    }
    ngOnInit() {
        this.s_actividades = this.basedatosService.getActividades().subscribe(data => {
            this.aux_actividades = [];
            this.actividades = [];
            this.actividades = data;
            for (let i = 0; i < this.actividades.length; i++) {
                let a = JSON.stringify(this.actividades[i]);
                let b = (JSON.parse(a)).fecha.seconds;
                this.actividades[i].fecha = new Date(b * 1000);
            }
            this.filtro();
        });
    }
    ngOnDestroy() {
        this.s_actividades.unsubscribe();
    }
    //actividades del usuario que va a participar
    filtro() {
        let j = 0;
        for (let i = 0; i < this.actividades.length; i++) {
            if (this.actividades[i].fecha.getTime() > new Date().getTime()) {
                if (this.actividades[i].tel_participantes.includes(JSON.parse(localStorage.getItem('datauser')).data.mobilephone)) {
                    this.aux_actividades[j] = this.actividades[i];
                    j++;
                }
            }
        }
    }
}
ActividadProximasComponent.ɵfac = function ActividadProximasComponent_Factory(t) { return new (t || ActividadProximasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_basedatos_service__WEBPACK_IMPORTED_MODULE_2__["Basedatos"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
ActividadProximasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ActividadProximasComponent, selectors: [["app-actividad-proximas"]], decls: 3, vars: 1, consts: [["id", "barra_busqueda"], [1, "cajas_container"], [4, "ngFor", "ngForOf"], [3, "activity"]], template: function ActividadProximasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ActividadProximasComponent_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.aux_actividades);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _caja_actividad_caja_actividad_component__WEBPACK_IMPORTED_MODULE_5__["CajaActividadComponent"]], styles: ["#barra_busqueda[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  margin-bottom: 40px;\n}\n\n.cajas_container[_ngcontent-%COMP%] {\n  margin: auto;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2oyL2FuZ3VsYXJGaW5hbC9mcmVlZG9tL3NyYy9hcHAvY29tcG9uZW50cy9hY3RpdmlkYWQtcHJveGltYXMvYWN0aXZpZGFkLXByb3hpbWFzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2FjdGl2aWRhZC1wcm94aW1hcy9hY3RpdmlkYWQtcHJveGltYXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWN0aXZpZGFkLXByb3hpbWFzL2FjdGl2aWRhZC1wcm94aW1hcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNiYXJyYV9idXNxdWVkYXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICB9XG4gIFxuICAuY2FqYXNfY29udGFpbmVyIHtcbiAgICBtYXJnaW46YXV0bztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDsgIFxuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4iLCIjYmFycmFfYnVzcXVlZGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5cbi5jYWphc19jb250YWluZXIge1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActividadProximasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-actividad-proximas',
                templateUrl: './actividad-proximas.component.html',
                styleUrls: ['./actividad-proximas.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _services_basedatos_service__WEBPACK_IMPORTED_MODULE_2__["Basedatos"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/caja-actividad/caja-actividad.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/caja-actividad/caja-actividad.component.ts ***!
  \***********************************************************************/
/*! exports provided: CajaActividadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CajaActividadComponent", function() { return CajaActividadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../confirm/confirm.component */ "./src/app/components/confirm/confirm.component.ts");
/* harmony import */ var _services_basedatos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/basedatos.service */ "./src/app/services/basedatos.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");











class CajaActividadComponent {
    constructor(basedatosService, authService, router, dialog) {
        this.basedatosService = basedatosService;
        this.authService = authService;
        this.router = router;
        this.dialog = dialog;
    }
    ngOnInit() {
        this.aux_user = JSON.parse(localStorage.getItem('datauser')).data;
        if (this.activity.deporte == "Baloncesto") {
            this.foto_actividad = "./assets/basket.svg";
        }
        else if (this.activity.deporte == "Ciclismo") {
            this.foto_actividad = "./assets/bici.svg";
        }
        else if (this.activity.deporte == "Futbol") {
            this.foto_actividad = "./assets/futbol.svg";
        }
        else if (this.activity.deporte == "Tenis") {
            this.foto_actividad = "./assets/tenis.svg";
        }
        else if (this.activity.deporte == "Running") {
            this.foto_actividad = "./assets/run.svg";
        }
        else if (this.activity.deporte == "Skate") {
            this.foto_actividad = "./assets/skateboard.svg";
        }
        else if (this.activity.deporte == "Trekking") {
            this.foto_actividad = "./assets/trekking.svg";
        }
        else if (this.activity.deporte == "Patinaje") {
            this.foto_actividad = "./assets/skate.svg";
        }
        if (!this.activity.tel_participantes.includes(JSON.parse(localStorage.getItem('datauser')).data.mobilephone)) {
            this.estado = "UNIRSE";
        }
        else if (this.activity.creador_email === JSON.parse(localStorage.getItem('datauser')).data.email) {
            this.estado = "ELIMINAR";
        }
        else {
            this.estado = "ABANDONAR";
        }
        this.basedatosService.getPuntos(JSON.parse(localStorage.getItem('datauser')).data.uid);
        this.basedatosService.ptsObs.subscribe((a) => {
            this.puntos = a;
        });
    }
    openConfirmEliminar() {
        const dialogRef = this.dialog.open(_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_1__["ConfirmComponent"], {
            width: '350px',
            height: '250px',
            data: '¿Estás seguro que quieres eliminar la actividad ' + this.activity.nombre + '?'
        });
        dialogRef.afterClosed().subscribe(dialogResult => {
            this.result = dialogResult;
            if (this.result == true) {
                this.basedatosService.puntosUserNewActivity(JSON.parse(localStorage.getItem('datauser')).data.uid, this.puntos, -50);
                this.basedatosService.deleteActividad(this.activity.id);
            }
        });
    }
    openConfirmAbandonar() {
        const dialogRef = this.dialog.open(_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_1__["ConfirmComponent"], {
            width: '350px',
            height: '250px',
            data: '¿Estás seguro que deseas abandonar la actividad ' + this.activity.nombre + '?'
        });
        dialogRef.afterClosed().subscribe(dialogResult => {
            this.result = dialogResult;
            if (this.result == true) {
                this.estado = "UNIRSE";
                this.basedatosService.puntosUserNewActivity(JSON.parse(localStorage.getItem('datauser')).data.uid, this.puntos, -40);
                this.basedatosService.deleteUserInActividad(this.activity, JSON.parse(localStorage.getItem('datauser')).data.mobilephone, JSON.parse(localStorage.getItem('datauser')).data.username);
            }
        });
    }
    openAnimationUnirse() {
        const dialogRef = this.dialog.open(_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_1__["ConfirmComponent"], {
            width: '450px',
            height: '300px',
            data: 'UNIRSE'
        });
        this.basedatosService.puntosUserNewActivity(JSON.parse(localStorage.getItem('datauser')).data.uid, this.puntos, 40);
        this.basedatosService.addUserInActividad(this.activity, JSON.parse(localStorage.getItem('datauser')).data.mobilephone, JSON.parse(localStorage.getItem('datauser')).data.username);
        this.estado = "ABANDONAR";
        this.delay(2000).then(any => {
            dialogRef.close();
        });
    }
    //acciones sobre actividad para el usuario: unirse/abandonar/eliminar
    accion() {
        if (!this.activity.tel_participantes.includes(JSON.parse(localStorage.getItem('datauser')).data.mobilephone)) {
            if (this.activity.fecha < new Date()) {
                alert("No se pueden abandonar actividades ya completadas!");
            }
            else {
                this.openAnimationUnirse();
            }
        }
        else if (this.estado == "ELIMINAR") {
            if (this.activity.fecha < new Date()) {
                alert("No se pueden eliminar actividades ya completadas!");
            }
            else {
                this.openConfirmEliminar();
            }
        }
        else {
            this.openConfirmAbandonar();
        }
    }
    //acceder a detalles de la actividad
    goIn() {
        this.router.navigate(['/actividad-detail', this.activity.id]).then(() => {
        });
    }
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
CajaActividadComponent.ɵfac = function CajaActividadComponent_Factory(t) { return new (t || CajaActividadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_basedatos_service__WEBPACK_IMPORTED_MODULE_2__["Basedatos"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"])); };
CajaActividadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CajaActividadComponent, selectors: [["app-caja-actividad"]], inputs: { activity: "activity" }, decls: 46, vars: 16, consts: [[1, "caja"], [1, "firstrow"], [1, "izq"], [1, "titulo", 3, "click"], ["aria-hidden", "false", "aria-label", "info outline"], [1, "usuario"], [1, "der"], [1, "secondrow"], [1, "item"], ["width", "80", "height", "80", "alt", "run", 2, "inset-block", "initial", 3, "src"], ["mat-stroked-button", "", 3, "ngClass", "click"], [1, "thirdrow"], [1, "lista"], [1, "lugar", 2, "color", "gray"], [2, "padding-top", "2px"], [1, "nivel", 2, "color", "gray"], [1, "particip", 2, "color", "gray"]], template: function CajaActividadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CajaActividadComponent_Template_span_click_3_listener() { return ctx.goIn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "info_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Evento creado por ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CajaActividadComponent_Template_button_click_19_listener() { return ctx.accion(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "LUGAR: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "FECHA: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "PARTICIPANTES: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.activity.nombre, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.activity.creador_nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.activity.deporte);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.foto_actividad, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.estado === "ELIMINAR" ? "delete" : ctx.estado === "UNIRSE" ? "unirse" : "desunirse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.estado);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.activity.lugar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](36, 10, ctx.activity.fecha, "dd-MM-yyyy"), " at ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](37, 13, ctx.activity.fecha, "shortTime"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.activity.participantes);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__["DefaultClassDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]], styles: ["@charset \"UTF-8\";\n.caja[_ngcontent-%COMP%] {\n  margin: 20px;\n  width: 300px;\n  height: 290px;\n  border-style: solid;\n  border-radius: 10px;\n  border-width: 0px;\n  box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.26);\n}\n.firstrow[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 25%;\n  border-bottom: 1px solid #e9e7e2;\n}\n.firstrow[_ngcontent-%COMP%]    > .izq[_ngcontent-%COMP%] {\n  float: left;\n  height: 100%;\n  width: 82%;\n}\n.firstrow[_ngcontent-%COMP%]    > .izq[_ngcontent-%COMP%]    > .titulo[_ngcontent-%COMP%]:hover {\n  background-color: #dadada;\n}\n.firstrow[_ngcontent-%COMP%]    > .izq[_ngcontent-%COMP%]    > .titulo[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-left: 10px;\n  padding: 4px;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 20px;\n  border-style: solid;\n  border-width: 0.5px;\n  border-color: #cfcece;\n  background-color: #e7e7e7;\n  vertical-align: middle;\n  border-radius: 6px;\n  cursor: pointer;\n}\n.firstrow[_ngcontent-%COMP%]    > .izq[_ngcontent-%COMP%]    > .usuario[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  font-size: 12px;\n  color: #afafaf;\n  padding-left: 4px;\n}\n.firstrow[_ngcontent-%COMP%]    > .der[_ngcontent-%COMP%] {\n  float: right;\n  text-align: right;\n  height: 100%;\n  width: 18%;\n}\n.firstrow[_ngcontent-%COMP%]    > .der[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  padding-right: 4px;\n  color: #afafaf;\n}\n.secondrow[_ngcontent-%COMP%] {\n  width: 100%;\n  display: table;\n  clear: both;\n  height: 33%;\n  padding-top: 5px;\n}\n.secondrow[_ngcontent-%COMP%]    > .item[_ngcontent-%COMP%] {\n  float: left;\n  height: 100%;\n  width: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.unirse[_ngcontent-%COMP%] {\n  color: black;\n  background-color: #41d441;\n}\n.desunirse[_ngcontent-%COMP%] {\n  color: black;\n  background-color: #ce4444;\n}\n.delete[_ngcontent-%COMP%] {\n  color: black;\n  border-color: red;\n  border-width: 3px;\n}\n.thirdrow[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 40%;\n}\n.lista[_ngcontent-%COMP%] {\n  margin-left: 15px;\n  margin-top: 14px;\n  margin-right: 10px;\n}\n.lugar[_ngcontent-%COMP%]::before {\n  color: purple;\n  font-weight: bold;\n  content: \"\u2022\";\n  margin-right: 6px;\n}\n.nivel[_ngcontent-%COMP%]::before {\n  color: green;\n  font-weight: bold;\n  content: \"\u2022\";\n  margin-right: 6px;\n}\n.particip[_ngcontent-%COMP%]::before {\n  color: #ffee00;\n  font-weight: bold;\n  content: \"\u2022\";\n  margin-right: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYWphLWFjdGl2aWRhZC9jYWphLWFjdGl2aWRhZC5jb21wb25lbnQuc2NzcyIsIi9ob21lL2oyL2FuZ3VsYXJGaW5hbC9mcmVlZG9tL3NyYy9hcHAvY29tcG9uZW50cy9jYWphLWFjdGl2aWRhZC9jYWphLWFjdGl2aWRhZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnREFBQTtBREVKO0FDRUE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO0FEQ0o7QUNFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBRENKO0FDRUE7RUFFSSx5QkFBQTtBREFKO0FDS0E7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FERko7QUNLQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBREZKO0FDS0E7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBREZKO0FDSUE7RUFFSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FERko7QUNPQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBREpKO0FDT0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBREpKO0FDU0E7RUFDSSxZQUFBO0VBQ0EseUJBQUE7QUROSjtBQ1NBO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0FETko7QUNTQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FETko7QUNTQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0FETko7QUNRQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBRExKO0FDT0E7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QURKSjtBQ01BO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FESEo7QUNLQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBREZKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYWphLWFjdGl2aWRhZC9jYWphLWFjdGl2aWRhZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5jYWphIHtcbiAgbWFyZ2luOiAyMHB4O1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMjkwcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci13aWR0aDogMHB4O1xuICBib3gtc2hhZG93OiAwcHggNnB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNik7XG59XG5cbi5maXJzdHJvdyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI1JTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOWU3ZTI7XG59XG5cbi5maXJzdHJvdyA+IC5penEge1xuICBmbG9hdDogbGVmdDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogODIlO1xufVxuXG4uZmlyc3Ryb3cgPiAuaXpxID4gLnRpdHVsbzpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkYWRhZGE7XG59XG5cbi5maXJzdHJvdyA+IC5penEgPiAudGl0dWxvIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmc6IDRweDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMC41cHg7XG4gIGJvcmRlci1jb2xvcjogI2NmY2VjZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZTdlNztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5maXJzdHJvdyA+IC5penEgPiAudXN1YXJpbyB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICNhZmFmYWY7XG4gIHBhZGRpbmctbGVmdDogNHB4O1xufVxuXG4uZmlyc3Ryb3cgPiAuZGVyIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTglO1xufVxuXG4uZmlyc3Ryb3cgPiAuZGVyID4gc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZy1yaWdodDogNHB4O1xuICBjb2xvcjogI2FmYWZhZjtcbn1cblxuLnNlY29uZHJvdyB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgY2xlYXI6IGJvdGg7XG4gIGhlaWdodDogMzMlO1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuXG4uc2Vjb25kcm93ID4gLml0ZW0ge1xuICBmbG9hdDogbGVmdDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnVuaXJzZSB7XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQxZDQ0MTtcbn1cblxuLmRlc3VuaXJzZSB7XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NlNDQ0NDtcbn1cblxuLmRlbGV0ZSB7XG4gIGNvbG9yOiBibGFjaztcbiAgYm9yZGVyLWNvbG9yOiByZWQ7XG4gIGJvcmRlci13aWR0aDogM3B4O1xufVxuXG4udGhpcmRyb3cge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MCU7XG59XG5cbi5saXN0YSB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tdG9wOiAxNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5sdWdhcjo6YmVmb3JlIHtcbiAgY29sb3I6IHB1cnBsZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbnRlbnQ6IFwi4oCiXCI7XG4gIG1hcmdpbi1yaWdodDogNnB4O1xufVxuXG4ubml2ZWw6OmJlZm9yZSB7XG4gIGNvbG9yOiBncmVlbjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbnRlbnQ6IFwi4oCiXCI7XG4gIG1hcmdpbi1yaWdodDogNnB4O1xufVxuXG4ucGFydGljaXA6OmJlZm9yZSB7XG4gIGNvbG9yOiAjZmZlZTAwO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29udGVudDogXCLigKJcIjtcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XG59IiwiLmNhamF7XG4gICAgbWFyZ2luOiAyMHB4O1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IDI5MHB4O1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3JkZXItd2lkdGg6IDBweDtcbiAgICBib3gtc2hhZG93OiAwcHggNnB4IDEwcHggMHB4IHJnYmEoMCwwLDAsMC4yNik7XG4gICAgXG4gICAgXG59XG4uZmlyc3Ryb3d7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyNSU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMzMsIDIzMSwgMjI2KTtcbn1cblxuLmZpcnN0cm93ID4gLml6cXtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDgyJTtcbn1cblxuLmZpcnN0cm93ID4gLml6cSA+IC50aXR1bG86aG92ZXJ7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE4LCAyMTgsIDIxOCk7XG5cbn1cblxuXG4uZmlyc3Ryb3cgPiAuaXpxID4gLnRpdHVsb3tcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmc6IDRweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci13aWR0aDogMC41cHg7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjA3LCAyMDYsIDIwNik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMSwgMjMxLCAyMzEpO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZpcnN0cm93ID4gLml6cSA+IC51c3Vhcmlve1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiByZ2IoMTc1LCAxNzUsIDE3NSk7XG4gICAgcGFkZGluZy1sZWZ0OiA0cHg7XG59XG5cbi5maXJzdHJvdyA+IC5kZXJ7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTglO1xufVxuLmZpcnN0cm93ID4gLmRlciA+IHNwYW57XG5cbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgcGFkZGluZy1yaWdodDogNHB4O1xuICAgIGNvbG9yOiByZ2IoMTc1LCAxNzUsIDE3NSk7XG4gXG5cbn1cblxuLnNlY29uZHJvd3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICBjbGVhcjogYm90aDtcbiAgICBoZWlnaHQ6IDMzJTtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xufVxuXG4uc2Vjb25kcm93ID4gLml0ZW17XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5cblxuLnVuaXJzZSB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2NSwgMjEyLCA2NSk7XG59XG5cbi5kZXN1bmlyc2Uge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA2LCA2OCwgNjgpO1xufVxuXG4uZGVsZXRlIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcbiAgICBib3JkZXItd2lkdGg6IDNweDtcbn1cblxuLnRoaXJkcm93e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDAlO1xufVxuLmxpc3Rhe1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIG1hcmdpbi10b3A6IDE0cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmx1Z2FyOjpiZWZvcmV7XG4gICAgY29sb3I6IHB1cnBsZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb250ZW50OiBcIlxcMjAyMlwiO1xuICAgIG1hcmdpbi1yaWdodDogNnB4O1xuICB9XG4ubml2ZWw6OmJlZm9yZXtcbiAgICBjb2xvcjogcmdiKDAsIDEyOCwgMCk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29udGVudDogXCJcXDIwMjJcIjtcbiAgICBtYXJnaW4tcmlnaHQ6IDZweDtcbn1cbi5wYXJ0aWNpcDo6YmVmb3Jle1xuICAgIGNvbG9yOiByZ2IoMjU1LCAyMzgsIDApO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbnRlbnQ6IFwiXFwyMDIyXCI7XG4gICAgbWFyZ2luLXJpZ2h0OiA2cHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CajaActividadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-caja-actividad',
                templateUrl: './caja-actividad.component.html',
                styleUrls: ['./caja-actividad.component.scss']
            }]
    }], function () { return [{ type: _services_basedatos_service__WEBPACK_IMPORTED_MODULE_2__["Basedatos"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }]; }, { activity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/confirm/confirm.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/confirm/confirm.component.ts ***!
  \*********************************************************/
/*! exports provided: ConfirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmComponent", function() { return ConfirmComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");






function ConfirmComponent_div_0_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmComponent_div_0_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r39.onDismiss(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ConfirmComponent_div_0_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmComponent_div_0_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r42.onConfirm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "S\u00ED");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autofocus", _r41.focus());
} }
function ConfirmComponent_div_0_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmComponent_div_0_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r44.onConfirm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "OK");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ConfirmComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Confirmaci\u00F3n: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ConfirmComponent_div_0_button_8_Template, 2, 0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ConfirmComponent_div_0_button_9_Template, 3, 1, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ConfirmComponent_div_0_button_10_Template, 2, 0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r34.data);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r34.congrat());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r34.congrat());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r34.congrat());
} }
function ConfirmComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "circle", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \u00A1Te has unido a la actividad! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ConfirmComponent {
    constructor(dialogRef, dialog, message) {
        this.dialogRef = dialogRef;
        this.dialog = dialog;
        this.message = message;
        this.data = message;
    }
    ngOnInit() {
    }
    onConfirm() {
        // Close the dialog, return true
        this.dialogRef.close(true);
    }
    onDismiss() {
        // Close the dialog, return false
        this.dialogRef.close(false);
    }
    congrat() {
        if (this.data == "¡INVITACIÓN ENVIADA!") {
            return false;
        }
        else {
            return true;
        }
    }
    unirse() {
        if (this.data == "UNIRSE") {
            return false;
        }
        else {
            return true;
        }
    }
}
ConfirmComponent.ɵfac = function ConfirmComponent_Factory(t) { return new (t || ConfirmComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
ConfirmComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmComponent, selectors: [["app-confirm"]], decls: 2, vars: 2, consts: [[4, "ngIf"], ["class", "loading", 4, "ngIf"], ["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", ""], [1, "flex-spacer"], ["mat-button", "", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "autofocus", "click", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "click", 4, "ngIf"], ["mat-button", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "autofocus", "click"], ["btnFocus", "matButton"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "loading"], ["viewBox", "0 0 52 52", 1, "checkmark"], ["cx", "26", "cy", "26", "r", "25", "fill", "none", 1, "checkmark__circle"], ["fill", "none", "d", "M14.1 27.2l7.1 7.2 16.7-16.8", 1, "checkmark__check"]], template: function ConfirmComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ConfirmComponent_div_0_Template, 11, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ConfirmComponent_div_1_Template, 6, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.unirse());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.unirse());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]], styles: [".loading[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.checkmark__circle[_ngcontent-%COMP%] {\n  stroke-dasharray: 166;\n  stroke-dashoffset: 166;\n  stroke-width: 2;\n  stroke-miterlimit: 10;\n  stroke: green;\n  fill: none;\n  -webkit-animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;\n          animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;\n}\n\n.checkmark[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  display: block;\n  stroke-width: 2;\n  stroke: green;\n  stroke-miterlimit: 10;\n  margin: 10% auto;\n  box-shadow: inset 0px 0px 0px #7ac142;\n  -webkit-animation: fill 0.4s ease-in-out 0.4s forwards, scale 0.3s ease-in-out 0.9s both;\n          animation: fill 0.4s ease-in-out 0.4s forwards, scale 0.3s ease-in-out 0.9s both;\n}\n\n.checkmark__check[_ngcontent-%COMP%] {\n  transform-origin: 50% 50%;\n  stroke-dasharray: 48;\n  stroke-dashoffset: 48;\n  -webkit-animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;\n          animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;\n}\n\n@-webkit-keyframes stroke {\n  100% {\n    stroke-dashoffset: 0;\n  }\n}\n\n@keyframes stroke {\n  100% {\n    stroke-dashoffset: 0;\n  }\n}\n\n@-webkit-keyframes scale {\n  0%, 100% {\n    transform: none;\n  }\n  50% {\n    transform: scale3d(1.1, 1.1, 1);\n  }\n}\n\n@keyframes scale {\n  0%, 100% {\n    transform: none;\n  }\n  50% {\n    transform: scale3d(1.1, 1.1, 1);\n  }\n}\n\n@-webkit-keyframes fill {\n  100% {\n    box-shadow: inset 0px 0px 0px 30px #fff;\n  }\n}\n\n@keyframes fill {\n  100% {\n    box-shadow: inset 0px 0px 0px 30px #fff;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2oyL2FuZ3VsYXJGaW5hbC9mcmVlZG9tL3NyYy9hcHAvY29tcG9uZW50cy9jb25maXJtL2NvbmZpcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY29uZmlybS9jb25maXJtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLHNFQUFBO1VBQUEsOERBQUE7QUNDSjs7QURFRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUNBQUE7RUFDQSx3RkFBQTtVQUFBLGdGQUFBO0FDQ0o7O0FERUU7RUFDRSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSwyRUFBQTtVQUFBLG1FQUFBO0FDQ0o7O0FERUU7RUFDRTtJQUNFLG9CQUFBO0VDQ0o7QUFDRjs7QURKRTtFQUNFO0lBQ0Usb0JBQUE7RUNDSjtBQUNGOztBRENFO0VBQ0U7SUFDRSxlQUFBO0VDQ0o7RURDRTtJQUNFLCtCQUFBO0VDQ0o7QUFDRjs7QURQRTtFQUNFO0lBQ0UsZUFBQTtFQ0NKO0VEQ0U7SUFDRSwrQkFBQTtFQ0NKO0FBQ0Y7O0FEQ0U7RUFDRTtJQUNFLHVDQUFBO0VDQ0o7QUFDRjs7QURKRTtFQUNFO0lBQ0UsdUNBQUE7RUNDSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb25maXJtL2NvbmZpcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGluZ3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jaGVja21hcmtfX2NpcmNsZSB7XG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMTY2O1xuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAxNjY7XG4gICAgc3Ryb2tlLXdpZHRoOiAyO1xuICAgIHN0cm9rZS1taXRlcmxpbWl0OiAxMDtcbiAgICBzdHJva2U6IGdyZWVuO1xuICAgIGZpbGw6IG5vbmU7XG4gICAgYW5pbWF0aW9uOiBzdHJva2UgMC42cyBjdWJpYy1iZXppZXIoMC42NSwgMCwgMC40NSwgMSkgZm9yd2FyZHM7XG4gIH1cbiAgXG4gIC5jaGVja21hcmsge1xuICAgIHdpZHRoOiA1NnB4O1xuICAgIGhlaWdodDogNTZweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgc3Ryb2tlLXdpZHRoOiAyO1xuICAgIHN0cm9rZTogZ3JlZW47XG4gICAgc3Ryb2tlLW1pdGVybGltaXQ6IDEwO1xuICAgIG1hcmdpbjogMTAlIGF1dG87XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAwcHggIzdhYzE0MjtcbiAgICBhbmltYXRpb246IGZpbGwgLjRzIGVhc2UtaW4tb3V0IC40cyBmb3J3YXJkcywgc2NhbGUgLjNzIGVhc2UtaW4tb3V0IC45cyBib3RoO1xuICB9XG4gIFxuICAuY2hlY2ttYXJrX19jaGVjayB7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcbiAgICBzdHJva2UtZGFzaGFycmF5OiA0ODtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogNDg7XG4gICAgYW5pbWF0aW9uOiBzdHJva2UgMC4zcyBjdWJpYy1iZXppZXIoMC42NSwgMCwgMC40NSwgMSkgMC44cyBmb3J3YXJkcztcbiAgfVxuICBcbiAgQGtleWZyYW1lcyBzdHJva2Uge1xuICAgIDEwMCUge1xuICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XG4gICAgfVxuICB9XG4gIEBrZXlmcmFtZXMgc2NhbGUge1xuICAgIDAlLCAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLjEsIDEuMSwgMSk7XG4gICAgfVxuICB9XG4gIEBrZXlmcmFtZXMgZmlsbCB7XG4gICAgMTAwJSB7XG4gICAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDBweCAzMHB4ICNmZmY7XG4gICAgfVxuICB9IiwiLmxvYWRpbmcge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jaGVja21hcmtfX2NpcmNsZSB7XG4gIHN0cm9rZS1kYXNoYXJyYXk6IDE2NjtcbiAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDE2NjtcbiAgc3Ryb2tlLXdpZHRoOiAyO1xuICBzdHJva2UtbWl0ZXJsaW1pdDogMTA7XG4gIHN0cm9rZTogZ3JlZW47XG4gIGZpbGw6IG5vbmU7XG4gIGFuaW1hdGlvbjogc3Ryb2tlIDAuNnMgY3ViaWMtYmV6aWVyKDAuNjUsIDAsIDAuNDUsIDEpIGZvcndhcmRzO1xufVxuXG4uY2hlY2ttYXJrIHtcbiAgd2lkdGg6IDU2cHg7XG4gIGhlaWdodDogNTZweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgc3Ryb2tlLXdpZHRoOiAyO1xuICBzdHJva2U6IGdyZWVuO1xuICBzdHJva2UtbWl0ZXJsaW1pdDogMTA7XG4gIG1hcmdpbjogMTAlIGF1dG87XG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMHB4ICM3YWMxNDI7XG4gIGFuaW1hdGlvbjogZmlsbCAwLjRzIGVhc2UtaW4tb3V0IDAuNHMgZm9yd2FyZHMsIHNjYWxlIDAuM3MgZWFzZS1pbi1vdXQgMC45cyBib3RoO1xufVxuXG4uY2hlY2ttYXJrX19jaGVjayB7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XG4gIHN0cm9rZS1kYXNoYXJyYXk6IDQ4O1xuICBzdHJva2UtZGFzaG9mZnNldDogNDg7XG4gIGFuaW1hdGlvbjogc3Ryb2tlIDAuM3MgY3ViaWMtYmV6aWVyKDAuNjUsIDAsIDAuNDUsIDEpIDAuOHMgZm9yd2FyZHM7XG59XG5cbkBrZXlmcmFtZXMgc3Ryb2tlIHtcbiAgMTAwJSB7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2NhbGUge1xuICAwJSwgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMSwgMS4xLCAxKTtcbiAgfVxufVxuQGtleWZyYW1lcyBmaWxsIHtcbiAgMTAwJSB7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAwcHggMzBweCAjZmZmO1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-confirm',
                templateUrl: './confirm.component.html',
                styleUrls: ['./confirm.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/contacts/contacts.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/contacts/contacts.component.ts ***!
  \***********************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../confirm/confirm.component */ "./src/app/components/confirm/confirm.component.ts");
/* harmony import */ var _services_basedatos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/basedatos.service */ "./src/app/services/basedatos.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");










function ContactsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactsComponent_div_3_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r63); const person_r61 = ctx.$implicit; const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r62.mandarInvitacion(person_r61.displayName, person_r61.email); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " INVITAR ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const person_r61 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", person_r61.photoURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", person_r61.puntos < 600 ? "aparecer" : "ocultar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", person_r61.puntos > 599 && person_r61.puntos < 1200 ? "aparecer" : "ocultar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", person_r61.puntos > 1199 ? "aparecer" : "ocultar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", person_r61.puntos > 1999 ? "aparecer" : "ocultar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](person_r61.displayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 7, person_r61.city));
} }
class ContactsComponent {
    constructor(basedatosService, authService, http, dialog) {
        this.basedatosService = basedatosService;
        this.authService = authService;
        this.http = http;
        this.dialog = dialog;
    }
    ngOnInit() {
        this.s_users = this.basedatosService.getUsuarios().subscribe(data => {
            let nombreuser = JSON.parse(localStorage.getItem('datauser')).data.displayName;
            this.users = data;
            let index;
            for (var a in this.users) {
                if (this.users[a].displayName == nombreuser) {
                    index = +a;
                }
            }
            this.users.splice(+index, 1);
        });
    }
    //llama a la funcion cloud mandarInvi() para mandar un email con los datos del user al otro usuario
    mandarInvitacion(nombre, email) {
        const dialogRef = this.dialog.open(_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_1__["ConfirmComponent"], {
            width: '350px',
            height: '250px',
            data: '¿Estás seguro que deseas enviar un correo de invitación al usuario ' + nombre + '?'
        });
        dialogRef.afterClosed().subscribe(dialogResult => {
            this.result = dialogResult;
            if (this.result == true) {
                var obj = {
                    dest_email: email,
                    dest_nombre: nombre,
                    origen_username: JSON.parse(localStorage.getItem('datauser')).data.username,
                    origen_email: JSON.parse(localStorage.getItem('datauser')).data.email,
                    origen_tlf: JSON.parse(localStorage.getItem('datauser')).data.mobilephone,
                    origen_foto: JSON.parse(localStorage.getItem('datauser')).data.photoURL
                };
                this.http.post('https://cors-anywhere.herokuapp.com/https://us-central1-freedom-a2cc5.cloudfunctions.net/mandarInvi', obj, { responseType: 'text' }).subscribe(res => {
                    console.log(res);
                });
                this.dialog.open(_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_1__["ConfirmComponent"], {
                    width: '300px',
                    height: '200px',
                    data: '¡INVITACIÓN ENVIADA!'
                });
            }
            else {
            }
        });
    }
}
ContactsComponent.ɵfac = function ContactsComponent_Factory(t) { return new (t || ContactsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_basedatos_service__WEBPACK_IMPORTED_MODULE_2__["Basedatos"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"])); };
ContactsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactsComponent, selectors: [["app-contacts"]], decls: 4, vars: 1, consts: [[1, "titulo"], [1, "container"], ["class", "item", 4, "ngFor", "ngForOf"], [1, "item"], [1, "foto", 2, "position", "relative"], [1, "round", 2, "width", "75px", "height", "75px", "border-radius", "50%", 3, "src"], ["src", "./assets//medal1.svg", "height", "35", "width", "35", 2, "border-radius", "50%", "position", "absolute", "top", "60%", "left", "55%", 3, "ngClass"], ["src", "./assets//medal2.svg", "height", "35", "width", "35", 2, "border-radius", "50%", "position", "absolute", "top", "60%", "left", "55%", 3, "ngClass"], ["src", "./assets//medal3.svg", "height", "35", "width", "35", 2, "border-radius", "50%", "position", "absolute", "top", "60%", "left", "55%", 3, "ngClass"], ["src", "./assets//medal4.svg", "height", "35", "width", "35", 2, "border-radius", "50%", "position", "absolute", "top", "60%", "left", "55%", 3, "ngClass"], [1, "name"], ["mat-raised-button", "", 1, "button", 3, "click"], [1, "citytel"]], template: function ContactsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Usuarios registrados:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ContactsComponent_div_3_Template, 17, 9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__["DefaultClassDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["UpperCasePipe"]], styles: [".titulo[_ngcontent-%COMP%] {\n  margin: 3%;\n  font-weight: bold;\n  font-size: calc(20px + (30 - 20) * ((100vw - 300px) / (1600 - 300)));\n  letter-spacing: 0.1em;\n}\n\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  background-color: transparent;\n  border-radius: 5px;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  align-items: auto;\n  align-content: center;\n}\n\n.foto[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 5%;\n}\n\n.name[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 18px;\n  margin: 5%;\n  font-weight: bold;\n}\n\n.citytel[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 15px;\n  margin: 5%;\n}\n\n.button[_ngcontent-%COMP%] {\n  border-width: 5px;\n}\n\n.item[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  width: 200px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin: auto;\n  background-color: #f0f0f0;\n  margin: 1em;\n  padding: 1%;\n  box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.25);\n  border-radius: 5px;\n}\n\n.aparecer[_ngcontent-%COMP%] {\n  display: ruby;\n}\n\n.ocultar[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2oyL2FuZ3VsYXJGaW5hbC9mcmVlZG9tL3NyYy9hcHAvY29tcG9uZW50cy9jb250YWN0cy9jb250YWN0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0cy9jb250YWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtFQUNBLG9FQUFBO0VBQ0EscUJBQUE7QUNDSjs7QURFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnREFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FEQ0E7RUFBUyxhQUFBO0FDR1QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbnRhY3RzL2NvbnRhY3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdHVsbyB7XG4gICAgbWFyZ2luOiAzJTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IGNhbGMoMjBweCArICgzMCAtIDIwKSAqICgoMTAwdncgLSAzMDBweCkgLyAoMTYwMCAtIDMwMCkpKTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xZW07XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogYXV0bztcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG4uZm90b3tcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDUlO1xufVxuXG4ubmFtZXtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbjogNSU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY2l0eXRlbHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbjogNSU7XG59XG5cbi5idXR0b257XG4gIGJvcmRlci13aWR0aDogNXB4O1xufVxuXG4uaXRlbSB7XG4gIGZsZXg6IDAgMCBhdXRvO1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIG1hcmdpbjogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQwLCAyNDApO1xuICBtYXJnaW46IDFlbTtcbiAgcGFkZGluZzogMSU7XG4gIGJveC1zaGFkb3c6IDBweCA2cHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uYXBhcmVjZXJ7XG4gIGRpc3BsYXk6IHJ1Ynk7XG59XG4ub2N1bHRhcntkaXNwbGF5OiBub25lO30iLCIudGl0dWxvIHtcbiAgbWFyZ2luOiAzJTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogY2FsYygyMHB4ICsgKDMwIC0gMjApICogKCgxMDB2dyAtIDMwMHB4KSAvICgxNjAwIC0gMzAwKSkpO1xuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogYXV0bztcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG4uZm90byB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiA1JTtcbn1cblxuLm5hbWUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luOiA1JTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jaXR5dGVsIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbjogNSU7XG59XG5cbi5idXR0b24ge1xuICBib3JkZXItd2lkdGg6IDVweDtcbn1cblxuLml0ZW0ge1xuICBmbGV4OiAwIDAgYXV0bztcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBtYXJnaW46IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG4gIG1hcmdpbjogMWVtO1xuICBwYWRkaW5nOiAxJTtcbiAgYm94LXNoYWRvdzogMHB4IDZweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5hcGFyZWNlciB7XG4gIGRpc3BsYXk6IHJ1Ynk7XG59XG5cbi5vY3VsdGFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contacts',
                templateUrl: './contacts.component.html',
                styleUrls: ['./contacts.component.scss']
            }]
    }], function () { return [{ type: _services_basedatos_service__WEBPACK_IMPORTED_MODULE_2__["Basedatos"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_sidenav_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/sidenav.service */ "./src/app/services/sidenav.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_basedatos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/basedatos.service */ "./src/app/services/basedatos.service.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");













function HeaderComponent_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Hola ", ctx_r66.nombreuser, "!");
} }
class HeaderComponent {
    constructor(router, route, sidenavService, authService, basedatosService) {
        this.router = router;
        this.route = route;
        this.sidenavService = sidenavService;
        this.authService = authService;
        this.basedatosService = basedatosService;
    }
    ngOnInit() {
        if (this.authService.isLoggedIn == true) {
            this.nombreuser = JSON.parse(localStorage.getItem('datauser')).data.displayName;
            this.photouser = JSON.parse(localStorage.getItem('datauser')).data.photoURL;
            this.basedatosService.ptsObs.subscribe((a) => {
                this.mispuntos = a;
                if (this.mispuntos >= 2000) {
                    this.medallauser = './assets/medal4.svg';
                }
                else if (this.mispuntos >= 1200 && this.mispuntos < 2000) {
                    this.medallauser = './assets/medal3.svg';
                }
                else if (this.mispuntos >= 600 && this.mispuntos < 1200) {
                    this.medallauser = './assets/medal2.svg';
                }
                else if (this.mispuntos < 600) {
                    this.medallauser = './assets/medal1.svg';
                }
            });
        }
    }
    redirectProfile() {
        this.router.navigate(['/profile']).then(() => {
        });
    }
    toggleSidenav() {
        this.sidenavService.toggle();
    }
    logout() {
        this.authService.SignOut();
    }
    delay(ms) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield new Promise(resolve => setTimeout(() => resolve(), ms));
        });
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_sidenav_service__WEBPACK_IMPORTED_MODULE_3__["SidenavService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_basedatos_service__WEBPACK_IMPORTED_MODULE_5__["Basedatos"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 22, vars: 5, consts: [["color", "primary", 1, "allheader"], [1, "buttons"], ["mat-stroked-button", "", "matTooltip", "Abrir menu", 1, "iconbutton", 3, "click"], ["aria-label", "hamburguer"], [1, "flex-spacer"], [1, "foto", 2, "margin", "20px 3%"], ["routerLink", "/principal"], ["src", "./assets/logo3.png", "alt", "logo", 1, "freedomlogo", 2, "inset-block", "initial"], [1, "user_exit"], [1, "campouser", 2, "width", "300px", "padding-top", "6px", "text-align", "end"], [4, "ngIf"], ["matTooltip", "Perfil", 1, "perfil", 2, "width", "60px", 3, "click"], [1, "parent", 2, "position", "relative"], ["height", "45", "width", "45", 2, "border-radius", "50%", 3, "src", "ngClass"], ["src", "./assets/profile.png", "height", "50", 2, "border-radius", "50%", 3, "ngClass"], ["height", "24", "width", "24", 2, "border-radius", "50%", "position", "absolute", "top", "50%", "left", "50%", 3, "src"], ["mat-icon-button", "", "matTooltip", "Salir", 2, "margin", "0px 1%", 3, "click"], [1, "material-icons"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_2_listener() { return ctx.toggleSidenav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, HeaderComponent_span_12_Template, 2, 1, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_14_listener() { return ctx.redirectProfile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_19_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nombreuser);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.photouser, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.photouser == "" ? "ocultar" : "aparecer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.photouser == null ? "aparecer" : "ocultar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.medallauser, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__["DefaultClassDirective"]], styles: [".allheader[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  left: 0;\n  top: 0;\n  z-index: 1001;\n}\n\n.user_exit[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 5px;\n}\n\n.foto[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.perfil[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n\n.mat-toolbar.mat-primary[_ngcontent-%COMP%] {\n  background: #09478a;\n  color: #fff;\n}\n\n@media screen and (max-width: 767px) {\n  .user_exit[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n@media screen and (max-width: 340px) {\n  .user_exit[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.ocultar[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.aparecer[_ngcontent-%COMP%] {\n  display: ruby;\n}\n\n  .iconbutton {\n  width: 20px !important;\n}\n\n.freedomlogo[_ngcontent-%COMP%] {\n  width: calc(180px + (180 - 80) * ((100vw - 300px) / (1600 - 300)));\n  height: calc(33px + (33 - 20) * ((100vw - 300px) / (1600 - 300)));\n  padding-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2oyL2FuZ3VsYXJGaW5hbC9mcmVlZG9tL3NyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsYUFBQTtBQ0NGOztBRENBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUNFRjs7QURBQTtFQUNHLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDR0g7O0FEQUM7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDR0g7O0FEQUM7RUFDRSxtQkFBQTtFQUNBLFdBQUE7QUNHSDs7QURBQztFQUNHO0lBQ0UsYUFBQTtFQ0dKO0FBQ0Y7O0FEQ0M7RUFFRTtJQUNFLGFBQUE7RUNBSDtBQUNGOztBREdDO0VBQ0UsYUFBQTtBQ0RIOztBREdDO0VBQ0UsYUFBQTtBQ0FIOztBREdDO0VBQ0Usc0JBQUE7QUNBSDs7QURJRTtFQUNFLGtFQUFBO0VBQ0EsaUVBQUE7RUFDQSxnQkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsbGhlYWRlcntcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxMDAxOyBcbn1cbi51c2VyX2V4aXR7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbi5mb3RvIHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gfVxuIFxuIC5wZXJmaWwge1xuICAgZGlzcGxheTogZmxleDtcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICBjdXJzb3I6IHBvaW50ZXI7XG4gfVxuIFxuIC5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XG4gICBiYWNrZ3JvdW5kOiAjMDk0NzhhO1xuICAgY29sb3I6ICNmZmY7XG4gfVxuXG4gQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAudXNlcl9leGl0e1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cblxuXG4gQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzQwcHgpIHtcblxuICAgLnVzZXJfZXhpdHtcbiAgICAgZGlzcGxheTogbm9uZTtcbiAgIH1cbiB9XG5cbiAub2N1bHRhcntcbiAgIGRpc3BsYXk6IG5vbmU7XG4gfVxuIC5hcGFyZWNlcntcbiAgIGRpc3BsYXk6IHJ1Ynk7XG4gfVxuXG4gOjpuZy1kZWVwIC5pY29uYnV0dG9ue1xuICAgd2lkdGg6MjBweCAhaW1wb3J0YW50O1xuIH1cblxuXG4gIC5mcmVlZG9tbG9nb3tcbiAgICB3aWR0aDogY2FsYygxODBweCArICgxODAgLSA4MCkgKiAoKDEwMHZ3IC0gMzAwcHgpIC8gKDE2MDAgLSAzMDApKSk7O1xuICAgIGhlaWdodDogY2FsYygzM3B4ICsgKDMzIC0gMjApICogKCgxMDB2dyAtIDMwMHB4KSAvICgxNjAwIC0gMzAwKSkpO1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gIH1cbiIsIi5hbGxoZWFkZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDEwMDE7XG59XG5cbi51c2VyX2V4aXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5mb3RvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5wZXJmaWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XG4gIGJhY2tncm91bmQ6ICMwOTQ3OGE7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAudXNlcl9leGl0IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNDBweCkge1xuICAudXNlcl9leGl0IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4ub2N1bHRhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5hcGFyZWNlciB7XG4gIGRpc3BsYXk6IHJ1Ynk7XG59XG5cbjo6bmctZGVlcCAuaWNvbmJ1dHRvbiB7XG4gIHdpZHRoOiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5mcmVlZG9tbG9nbyB7XG4gIHdpZHRoOiBjYWxjKDE4MHB4ICsgKDE4MCAtIDgwKSAqICgoMTAwdncgLSAzMDBweCkgLyAoMTYwMCAtIDMwMCkpKTtcbiAgaGVpZ2h0OiBjYWxjKDMzcHggKyAoMzMgLSAyMCkgKiAoKDEwMHZ3IC0gMzAwcHgpIC8gKDE2MDAgLSAzMDApKSk7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _services_sidenav_service__WEBPACK_IMPORTED_MODULE_3__["SidenavService"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: _services_basedatos_service__WEBPACK_IMPORTED_MODULE_5__["Basedatos"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_fire_functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/functions */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-functions.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");










class HomeComponent {
    constructor(dialog, http, functions, fbs) {
        this.dialog = dialog;
        this.http = http;
        this.functions = functions;
        this.fbs = fbs;
    }
    ngOnInit() {
    }
    openLoginForm() {
        this.dialog.open(_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"], { width: '500px', height: '400px' });
    }
    openRegisterForm() {
        this.dialog.open(_register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"], { width: '80%', height: '70%' });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_functions__WEBPACK_IMPORTED_MODULE_5__["AngularFireFunctions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire__WEBPACK_IMPORTED_MODULE_6__["FirebaseApp"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 38, vars: 0, consts: [["color", "primary", 1, "header"], ["src", "./assets/logoonly.png", "width", "50", "height", "50", "alt", "logo", 2, "inset-block", "initial"], [1, "flex-spacer"], ["mat-button", "", 3, "click"], [1, "fa", "fa-sign-in", "fa-lg"], [1, "backgr"], [1, "space"], [1, "imgbox"], ["src", "./assets/logoletters.svg", "width", "1000", "height", "auto", "alt", "logo", 1, "center-fit", 2, "inset-block", "initial"], [2, "height", "15%"], [1, "caption", 2, "font-weight", "bold"], [1, "backgr2"], [1, "caption"], [1, "insidecaption"], [2, "font-size", "calc(15px + (30 - 15) * ((100vw - 300px) / (1600 - 300)))"], [1, "material-icons"], [1, "captionsmall"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_3_listener() { return ctx.openLoginForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_6_listener() { return ctx.openRegisterForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " FEEL FREE TO BE FREE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "cached");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "GIRA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " TU VIDA CON ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "FREEDOM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " \u00DAnete a actividades deportivas en tu barrio y disfruta del deporte en compa\u00F1ia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Organiza actividades, gana puntos y comparte tu pasi\u00F3n por la aventura ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " ALZA EL VUELO CON FREEDOM ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatAnchor"]], styles: [".header[_ngcontent-%COMP%] {\n  position: fixed;\n  height: 60px;\n}\n\n.space[_ngcontent-%COMP%] {\n  height: 60px;\n}\n\n.backgr[_ngcontent-%COMP%] {\n  \n  background-image: url('city.jpeg');\n  \n  height: 100%;\n  \n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.backgr2[_ngcontent-%COMP%] {\n  \n  background-image: url('city2.jpeg');\n  \n  height: 100%;\n  \n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.mat-toolbar[_ngcontent-%COMP%] {\n  background-color: rgba(26, 26, 26, 0.3);\n}\n\n.imgbox[_ngcontent-%COMP%] {\n  display: flex;\n  background-color: rgba(0, 0, 0, 0.6);\n}\n\n.center-fit[_ngcontent-%COMP%] {\n  max-width: 95%;\n  max-height: 100vh;\n  margin: auto;\n}\n\n.caption[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.3);\n  padding: calc(20px + (40 - 20) * ((100vw - 300px) / (1600 - 300)));\n  font-size: calc(20px + (40 - 20) * ((100vw - 300px) / (1600 - 300)));\n  letter-spacing: calc(10px + (20 - 10) * ((100vw - 300px) / (1600 - 300)));\n  border-radius: 1.5rem;\n  text-align: center;\n  vertical-align: center;\n  max-width: 50%;\n  margin: auto;\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  line-height: 1.4em;\n}\n\n.insidecaption[_ngcontent-%COMP%] {\n  font-size: calc(18px + (25 - 18) * ((100vw - 300px) / (1600 - 300)));\n  letter-spacing: calc(2px + (5 - 2) * ((100vw - 300px) / (1600 - 300)));\n}\n\n.reflection[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: #353535;\n  font-weight: lighter;\n  transform: scaleX(-1);\n}\n\n.captionsmall[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.3);\n  padding: calc(10px + (20 - 10) * ((100vw - 300px) / (1600 - 300)));\n  font-size: calc(11px + (22 - 11) * ((100vw - 300px) / (1600 - 300)));\n  letter-spacing: normal;\n  border-radius: 0.5rem;\n  text-align: center;\n  vertical-align: center;\n  max-width: 80%;\n  margin: auto;\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  line-height: 1.4em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2oyL2FuZ3VsYXJGaW5hbC9mcmVlZG9tL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNFLG1CQUFBO0VBQ0Esa0NBQUE7RUFFQSxnQkFBQTtFQUNBLFlBQUE7RUFFQSxzQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQ0RGOztBRElBO0VBQ0UsbUJBQUE7RUFDQSxtQ0FBQTtFQUVBLGdCQUFBO0VBQ0EsWUFBQTtFQUVBLHNDQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FDSEY7O0FETUE7RUFDSSx1Q0FBQTtBQ0hKOztBRE9BO0VBQ0ksYUFBQTtFQUNBLG9DQUFBO0FDSko7O0FET0E7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDSko7O0FET0E7RUFDSSwwQ0FBQTtFQUNBLGtFQUFBO0VBQ0Esb0VBQUE7RUFDQSx5RUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFFQSxrQkFBQTtBQ05KOztBRFNBO0VBQ0ksb0VBQUE7RUFDQSxzRUFBQTtBQ05KOztBRFNBO0VBRUkscUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFLQSxxQkFBQTtBQ1BKOztBRFVBO0VBQ0ksMENBQUE7RUFDQSxrRUFBQTtFQUNBLG9FQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBRUEsa0JBQUE7QUNUSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcntcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgaGVpZ2h0OiA2MHB4O1xufVxuXG4uc3BhY2V7XG4gICAgaGVpZ2h0OiA2MHB4O1xufVxuXG4uYmFja2dyIHtcbiAgLyogVGhlIGltYWdlIHVzZWQgKi9cbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2NpdHkuanBlZ1wiKTtcblxuICAvKiBGdWxsIGhlaWdodCAqL1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgLyogQ2VudGVyIGFuZCBzY2FsZSB0aGUgaW1hZ2UgbmljZWx5ICovXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmJhY2tncjIge1xuICAvKiBUaGUgaW1hZ2UgdXNlZCAqL1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvY2l0eTIuanBlZ1wiKTtcblxuICAvKiBGdWxsIGhlaWdodCAqL1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgLyogQ2VudGVyIGFuZCBzY2FsZSB0aGUgaW1hZ2UgbmljZWx5ICovXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLm1hdC10b29sYmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogIzFhMWExYSwgJGFscGhhOiAwLjMpO1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICMwOTQ3OGE7XG59XG5cbi5pbWdib3gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICMwMDAwMDAsICRhbHBoYTogMC42KTtcbn1cblxuLmNlbnRlci1maXQge1xuICAgIG1heC13aWR0aDogOTUlO1xuICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLmNhcHRpb24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiAjZmZmZmZmLCAkYWxwaGE6IDAuMyk7XG4gICAgcGFkZGluZzogY2FsYygyMHB4ICsgKDQwIC0gMjApICogKCgxMDB2dyAtIDMwMHB4KSAvICgxNjAwIC0gMzAwKSkpO1xuICAgIGZvbnQtc2l6ZTogY2FsYygyMHB4ICsgKDQwIC0gMjApICogKCgxMDB2dyAtIDMwMHB4KSAvICgxNjAwIC0gMzAwKSkpO1xuICAgIGxldHRlci1zcGFjaW5nOiBjYWxjKDEwcHggKyAoMjAgLSAxMCkgKiAoKDEwMHZ3IC0gMzAwcHgpIC8gKDE2MDAgLSAzMDApKSk7XG4gICAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xuICAgIG1heC13aWR0aDogNTAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGxpbmUtaGVpZ2h0OjEuNGVtO1xufVxuXG4uaW5zaWRlY2FwdGlvbntcbiAgICBmb250LXNpemU6IGNhbGMoMThweCArICgyNSAtIDE4KSAqICgoMTAwdncgLSAzMDBweCkgLyAoMTYwMCAtIDMwMCkpKTtcbiAgICBsZXR0ZXItc3BhY2luZzogY2FsYygycHggKyAoNSAtIDIpICogKCgxMDB2dyAtIDMwMHB4KSAvICgxNjAwIC0gMzAwKSkpO1xufVxuXG4ucmVmbGVjdGlvblxue1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBjb2xvcjogcmdiKDUzLCA1MywgNTMpO1xuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xuICAgIC1vLXRyYW5zZm9ybTogc2NhbGVYKC0xKTtcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcbn1cblxuLmNhcHRpb25zbWFsbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICNmZmZmZmYsICRhbHBoYTogMC4zKTtcbiAgICBwYWRkaW5nOiBjYWxjKDEwcHggKyAoMjAgLSAxMCkgKiAoKDEwMHZ3IC0gMzAwcHgpIC8gKDE2MDAgLSAzMDApKSk7XG4gICAgZm9udC1zaXplOiBjYWxjKDExcHggKyAoMjIgLSAxMSkgKiAoKDEwMHZ3IC0gMzAwcHgpIC8gKDE2MDAgLSAzMDApKSk7XG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XG4gICAgbWF4LXdpZHRoOiA4MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgbGluZS1oZWlnaHQ6MS40ZW07XG59IiwiLmhlYWRlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuXG4uc3BhY2Uge1xuICBoZWlnaHQ6IDYwcHg7XG59XG5cbi5iYWNrZ3Ige1xuICAvKiBUaGUgaW1hZ2UgdXNlZCAqL1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvY2l0eS5qcGVnXCIpO1xuICAvKiBGdWxsIGhlaWdodCAqL1xuICBoZWlnaHQ6IDEwMCU7XG4gIC8qIENlbnRlciBhbmQgc2NhbGUgdGhlIGltYWdlIG5pY2VseSAqL1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5iYWNrZ3IyIHtcbiAgLyogVGhlIGltYWdlIHVzZWQgKi9cbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2NpdHkyLmpwZWdcIik7XG4gIC8qIEZ1bGwgaGVpZ2h0ICovXG4gIGhlaWdodDogMTAwJTtcbiAgLyogQ2VudGVyIGFuZCBzY2FsZSB0aGUgaW1hZ2UgbmljZWx5ICovXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLm1hdC10b29sYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNiwgMjYsIDI2LCAwLjMpO1xufVxuXG4uaW1nYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xufVxuXG4uY2VudGVyLWZpdCB7XG4gIG1heC13aWR0aDogOTUlO1xuICBtYXgtaGVpZ2h0OiAxMDB2aDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uY2FwdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgcGFkZGluZzogY2FsYygyMHB4ICsgKDQwIC0gMjApICogKCgxMDB2dyAtIDMwMHB4KSAvICgxNjAwIC0gMzAwKSkpO1xuICBmb250LXNpemU6IGNhbGMoMjBweCArICg0MCAtIDIwKSAqICgoMTAwdncgLSAzMDBweCkgLyAoMTYwMCAtIDMwMCkpKTtcbiAgbGV0dGVyLXNwYWNpbmc6IGNhbGMoMTBweCArICgyMCAtIDEwKSAqICgoMTAwdncgLSAzMDBweCkgLyAoMTYwMCAtIDMwMCkpKTtcbiAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XG4gIG1heC13aWR0aDogNTAlO1xuICBtYXJnaW46IGF1dG87XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxLjRlbTtcbn1cblxuLmluc2lkZWNhcHRpb24ge1xuICBmb250LXNpemU6IGNhbGMoMThweCArICgyNSAtIDE4KSAqICgoMTAwdncgLSAzMDBweCkgLyAoMTYwMCAtIDMwMCkpKTtcbiAgbGV0dGVyLXNwYWNpbmc6IGNhbGMoMnB4ICsgKDUgLSAyKSAqICgoMTAwdncgLSAzMDBweCkgLyAoMTYwMCAtIDMwMCkpKTtcbn1cblxuLnJlZmxlY3Rpb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOiAjMzUzNTM1O1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgtMSk7XG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xuICAtby10cmFuc2Zvcm06IHNjYWxlWCgtMSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlWCgtMSk7XG4gIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcbn1cblxuLmNhcHRpb25zbWFsbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgcGFkZGluZzogY2FsYygxMHB4ICsgKDIwIC0gMTApICogKCgxMDB2dyAtIDMwMHB4KSAvICgxNjAwIC0gMzAwKSkpO1xuICBmb250LXNpemU6IGNhbGMoMTFweCArICgyMiAtIDExKSAqICgoMTAwdncgLSAzMDBweCkgLyAoMTYwMCAtIDMwMCkpKTtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XG4gIG1heC13aWR0aDogODAlO1xuICBtYXJnaW46IGF1dG87XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxLjRlbTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _angular_fire_functions__WEBPACK_IMPORTED_MODULE_5__["AngularFireFunctions"] }, { type: _angular_fire__WEBPACK_IMPORTED_MODULE_6__["FirebaseApp"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nuevapassword_nuevapassword_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../nuevapassword/nuevapassword.component */ "./src/app/components/nuevapassword/nuevapassword.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_basedatos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/basedatos.service */ "./src/app/services/basedatos.service.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");













function LoginComponent_mat_error_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_mat_error_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Contrase\u00F1a requerida");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(dialogRef, router, authService, basedatosService, dialog) {
        this.dialogRef = dialogRef;
        this.router = router;
        this.authService = authService;
        this.basedatosService = basedatosService;
        this.dialog = dialog;
        this.user = { email: '', password: '', remember: false };
    }
    ngOnInit() { }
    onSubmit() {
        console.log('User: ', this.user);
        this.authService.SignIn(this.user.email, this.user.password);
        this.dialogRef.close();
    }
    nuevaPassword() {
        this.dialog.open(_nuevapassword_nuevapassword_component__WEBPACK_IMPORTED_MODULE_1__["NuevapasswordComponent"], { width: '350px', height: '280px' });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_basedatos_service__WEBPACK_IMPORTED_MODULE_5__["Basedatos"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 29, vars: 5, consts: [["color", "primary"], [1, "flex-spacer"], ["mat-button", "", "mat-dialog-close", ""], ["novalidate", "", 3, "ngSubmit"], ["loginForm", "ngForm"], ["appearance", "fill"], ["matInput", "", "placeholder", "Email", "type", "text", "name", "email", "required", "", 3, "ngModel", "ngModelChange"], ["username", "ngModel"], [4, "ngIf"], ["matInput", "", "placeholder", "Contrase\u00F1a", "type", "password", "name", "password", "required", "", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], ["color", "primary", "type", "submit", "mat-stroked-button", "", 3, "disabled"], [2, "float", "right"], ["mat-button", "", "mat-dialog-close", "", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_6_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_11_listener($event) { return ctx.user.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LoginComponent_mat_error_13_Template, 2, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_16_listener($event) { return ctx.user.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, LoginComponent_mat_error_18_Template, 2, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Entrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_27_listener() { return ctx.nuevaPassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Contrase\u00F1a olvidada?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r4.errors == null ? null : _r4.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r6.errors == null ? null : _r6.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r3.form.invalid);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatError"]], styles: ["*[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2oyL2FuZ3VsYXJGaW5hbC9mcmVlZG9tL3NyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIiwiKiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: _services_basedatos_service__WEBPACK_IMPORTED_MODULE_5__["Basedatos"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/nuevaactividad/nuevaactividad.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/nuevaactividad/nuevaactividad.component.ts ***!
  \***********************************************************************/
/*! exports provided: NuevaactividadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevaactividadComponent", function() { return NuevaactividadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _clases_actividad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../clases/actividad */ "./src/app/clases/actividad.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_basedatos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/basedatos.service */ "./src/app/services/basedatos.service.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_extensions_google_maps_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular-material-extensions/google-maps-autocomplete */ "./node_modules/@angular-material-extensions/google-maps-autocomplete/__ivy_ngcc__/fesm2015/angular-material-extensions-google-maps-autocomplete.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
















function NuevaactividadComponent_mat_error_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r50.getErrorMessage());
} }
class NuevaactividadComponent {
    constructor(router, route, basedatosService) {
        this.router = router;
        this.route = route;
        this.basedatosService = basedatosService;
        this.hour = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-2][0-9]:[0-5][0-9]'));
        this.myFilter = (d) => {
            const day = new Date();
            day.setHours(0, 0, 0, 0);
            return day <= d;
        };
    }
    ngOnInit() {
        this.basedatosService.getPuntos(JSON.parse(localStorage.getItem('datauser')).data.uid);
        this.basedatosService.ptsObs.subscribe((a) => {
            this.puntos = a;
        });
    }
    getErrorMessage() {
        return this.hour.hasError('pattern') ? 'Not a valid hour' : '';
    }
    crearActividad() {
        try {
            var id = "";
            var nombre = this.actividad;
            var creador_nombre = "";
            var creador_email = "";
            var participantes_number = 1;
            var nivel = this.selectedNivel;
            var hours = +this.hora.slice(0, 2);
            var minutes = +this.hora.slice(3);
            this.data.setHours(hours, minutes);
            var fecha = this.data;
            if (fecha < new Date()) {
                throw new Error('Tiene que ser una fecha futura');
            }
            var lugar = this.prueba;
            var deporte = this.Deporte;
            var descripcion = this.descript;
            var hora = this.hora;
            var finalActivity = new _clases_actividad__WEBPACK_IMPORTED_MODULE_2__["Actividad"](id, nombre, participantes_number, creador_nombre, creador_email, nivel, fecha, lugar, deporte, null, null, descripcion, hora, this.longitude, this.latitude);
            finalActivity.creador_email = JSON.parse(localStorage.getItem('datauser')).data.email;
            finalActivity.creador_nombre = JSON.parse(localStorage.getItem('datauser')).data.username;
            finalActivity.tel_participantes = [JSON.parse(localStorage.getItem('datauser')).data.mobilephone];
            finalActivity.username_participantes = [JSON.parse(localStorage.getItem('datauser')).data.username];
            this.basedatosService.addActividad(finalActivity).then(() => this.nav());
            this.basedatosService.puntosUserNewActivity(JSON.parse(localStorage.getItem('datauser')).data.uid, this.puntos, 50);
        }
        catch (error) {
            this.data = null;
            alert('Hay campos incorrectos o vacíos.\n' + error);
        }
    }
    nav() {
        this.router.navigate(['/principal']).then(() => {
            // window.location.reload();
        });
    }
    onAutocompleteSelected(result) {
        this.prueba = result.formatted_address;
    }
    onLocationSelected(location) {
        this.latitude = location.latitude;
        this.longitude = location.longitude;
    }
}
NuevaactividadComponent.ɵfac = function NuevaactividadComponent_Factory(t) { return new (t || NuevaactividadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_basedatos_service__WEBPACK_IMPORTED_MODULE_4__["Basedatos"])); };
NuevaactividadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NuevaactividadComponent, selectors: [["app-nuevaactividad"]], decls: 97, vars: 10, consts: [[1, "mycontainer"], ["color", "primary"], ["novalidate", ""], ["loginForm", "ngForm"], ["id", "seccion_deporte", 1, "seccion"], ["appearance", "fill"], ["matInput", "", "placeholder", "Ex. Pachanga en el Parque", "maxlength", "27", "name", "activity", "required", "", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["required", "", 3, "value", "valueChange"], ["value", "Futbol"], ["value", "Baloncesto"], ["value", "Running"], ["value", "Skate"], ["value", "Trekking"], ["value", "Ciclismo"], ["value", "Patinaje"], ["value", "Tenis"], ["value", "0"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["id", "seccion_fecha", 1, "seccion"], ["matInput", "", "name", "fecha", "required", "", 3, "matDatepickerFilter", "matDatepicker", "ngModel", "ngModelChange"], ["matSuffix", "", 3, "for"], ["picker", ""], ["matInput", "", "placeholder", "HH:MM", "pattern", "[0-2][0-9]:[0-5][0-9]", "name", "hora", "required", "", 3, "ngModel", "ngModelChange"], [4, "ngIf"], ["id", "mymap"], ["placeholder", "onnjn", "appearance", "fill", 3, "onAutocompleteSelected", "onLocationSelected"], ["id", "descript", 1, "seccion"], ["matInput", "", "name", "desc", "required", "", 3, "ngModel", "ngModelChange"], ["id", "seccion_botones", 1, "seccion"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", 3, "click"]], template: function NuevaactividadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Organiza tu actividad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Nombre Actividad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Actividad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NuevaactividadComponent_Template_input_ngModelChange_15_listener($event) { return ctx.actividad = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Deporte a Realizar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Deporte");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function NuevaactividadComponent_Template_mat_select_valueChange_23_listener($event) { return ctx.Deporte = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Futbol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Baloncesto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Running");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Skate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Trekking");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Ciclismo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Patinaje");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Tenis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Nivel Necesario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Nivel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function NuevaactividadComponent_Template_mat_select_valueChange_47_listener($event) { return ctx.selectedNivel = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Fecha");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Seleccione una fecha");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NuevaactividadComponent_Template_input_ngModelChange_68_listener($event) { return ctx.data = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "mat-datepicker-toggle", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "mat-datepicker", null, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Hora");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Hora");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NuevaactividadComponent_Template_input_ngModelChange_78_listener($event) { return ctx.hora = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, NuevaactividadComponent_mat_error_79_Template, 2, 1, "mat-error", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Lugar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "mat-google-maps-autocomplete", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onAutocompleteSelected", function NuevaactividadComponent_Template_mat_google_maps_autocomplete_onAutocompleteSelected_83_listener($event) { return ctx.onAutocompleteSelected($event); })("onLocationSelected", function NuevaactividadComponent_Template_mat_google_maps_autocomplete_onLocationSelected_83_listener($event) { return ctx.onLocationSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Descripci\u00F3n actividad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Puntos relevantes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "textarea", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NuevaactividadComponent_Template_textarea_ngModelChange_90_listener($event) { return ctx.descript = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NuevaactividadComponent_Template_button_click_92_listener() { return ctx.crearActividad(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Crear Actividad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NuevaactividadComponent_Template_button_click_95_listener() { return ctx.nav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.actividad);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.Deporte);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.selectedNivel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepickerFilter", ctx.myFilter)("matDatepicker", _r49)("ngModel", ctx.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.hora);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hour.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.descript);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOption"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["PatternValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_extensions_google_maps_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatGoogleMapsAutocompleteComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"]], styles: [".mycontainer[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.63);\n  border-radius: 5px;\n  padding: 3%;\n  box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.26);\n}\n\n.seccion[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-align: center;\n  width: 30%;\n}\n\n.seccion[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 80%;\n}\n\n#descript[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-align: center;\n  width: 95%;\n}\n\n#descript[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 80%;\n}\n\n#seccion_botones[_ngcontent-%COMP%] {\n  margin: auto;\n  width: 60%;\n  padding-bottom: 50px;\n  align-items: center;\n  text-align: center;\n}\n\n#seccion_botones[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 120%;\n  margin-top: 2%;\n  margin-bottom: 5%;\n  width: 75%;\n}\n\n#mymap[_ngcontent-%COMP%] {\n  margin: auto;\n  align-items: center;\n  text-align: center;\n  padding: 3%;\n  width: 25%;\n}\n\n@media screen and (max-width: 768px) {\n  .seccion[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    display: inline-block;\n    text-align: center;\n    width: 100%;\n  }\n\n  #mymap[_ngcontent-%COMP%] {\n    width: 80%;\n    margin: auto;\n    align-items: center;\n    text-align: center;\n    margin-left: 7%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2oyL2FuZ3VsYXJGaW5hbC9mcmVlZG9tL3NyYy9hcHAvY29tcG9uZW50cy9udWV2YWFjdGl2aWRhZC9udWV2YWFjdGl2aWRhZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9udWV2YWFjdGl2aWRhZC9udWV2YWFjdGl2aWRhZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0RBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDQ0o7O0FEQ0E7RUFDSSxVQUFBO0FDRUo7O0FEQUE7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ0dKOztBREFBO0VBQ0ksVUFBQTtBQ0dKOztBREFBO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNHSjs7QURBQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0FDR0o7O0FEQUE7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDR0o7O0FEQ0E7RUFFSTtJQUNJLHFCQUFBO0lBQ0Esa0JBQUE7SUFDQSxXQUFBO0VDQ047O0VERUU7SUFDSSxVQUFBO0lBQ0EsWUFBQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7SUFDQSxlQUFBO0VDQ047QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbnVldmFhY3RpdmlkYWQvbnVldmFhY3RpdmlkYWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXljb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42Myk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDMlO1xuICAgIGJveC1zaGFkb3c6IDBweCA2cHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjI2KTtcbiAgfVxuICBcbi5zZWNjaW9uIGRpdntcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOjMwJTtcbn1cbi5zZWNjaW9uIG1hdC1mb3JtLWZpZWxke1xuICAgIHdpZHRoOjgwJTtcbn1cbiNkZXNjcmlwdCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDo5NSU7XG4gICAgXG59XG4jZGVzY3JpcHQgbWF0LWZvcm0tZmllbGR7XG4gICAgd2lkdGg6ODAlO1xufVxuXG4jc2VjY2lvbl9ib3RvbmVze1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB3aWR0aDo2MCU7XG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbn1cbiNzZWNjaW9uX2JvdG9uZXMgYnV0dG9ue1xuICAgIGZvbnQtc2l6ZToxMjAlO1xuICAgIG1hcmdpbi10b3A6IDIlO1xuICAgIG1hcmdpbi1ib3R0b206IDUlO1xuICAgIHdpZHRoOjc1JTtcbn1cblxuI215bWFwe1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAzJTtcbiAgICB3aWR0aDoyNSU7XG59XG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweClcbntcbiAgICAuc2VjY2lvbiBkaXZ7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB3aWR0aDoxMDAlO1xuICAgIH1cblxuICAgICNteW1hcHtcbiAgICAgICAgd2lkdGg6ODAlO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDclO1xuXG4gICAgfVxuICBcblxufSAiLCIubXljb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjMpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDMlO1xuICBib3gtc2hhZG93OiAwcHggNnB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNik7XG59XG5cbi5zZWNjaW9uIGRpdiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMzAlO1xufVxuXG4uc2VjY2lvbiBtYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiA4MCU7XG59XG5cbiNkZXNjcmlwdCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogOTUlO1xufVxuXG4jZGVzY3JpcHQgbWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogODAlO1xufVxuXG4jc2VjY2lvbl9ib3RvbmVzIHtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogNjAlO1xuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jc2VjY2lvbl9ib3RvbmVzIGJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMTIwJTtcbiAgbWFyZ2luLXRvcDogMiU7XG4gIG1hcmdpbi1ib3R0b206IDUlO1xuICB3aWR0aDogNzUlO1xufVxuXG4jbXltYXAge1xuICBtYXJnaW46IGF1dG87XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMyU7XG4gIHdpZHRoOiAyNSU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5zZWNjaW9uIGRpdiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gICNteW1hcCB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDclO1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NuevaactividadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nuevaactividad',
                templateUrl: './nuevaactividad.component.html',
                styleUrls: ['./nuevaactividad.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _services_basedatos_service__WEBPACK_IMPORTED_MODULE_4__["Basedatos"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/nuevapassword/nuevapassword.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/nuevapassword/nuevapassword.component.ts ***!
  \*********************************************************************/
/*! exports provided: NuevapasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevapasswordComponent", function() { return NuevapasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");









function NuevapasswordComponent_mat_error_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NuevapasswordComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
    }
}
NuevapasswordComponent.ɵfac = function NuevapasswordComponent_Factory(t) { return new (t || NuevapasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
NuevapasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NuevapasswordComponent, selectors: [["app-nuevapassword"]], decls: 16, vars: 3, consts: [["novalidate", ""], ["loginForm", "ngForm"], ["appearance", "fill"], ["matInput", "", "placeholder", "Email", "type", "text", "name", "email", "required", "", 3, "ngModel", "ngModelChange"], ["username", "ngModel"], [4, "ngIf"], [1, "flex-spacer"], ["mat-button", "", "mat-dialog-close", ""], ["color", "primary", "type", "submit", "mat-stroked-button", "", 3, "disabled", "click"]], template: function NuevapasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Introduce tu email para resetear la contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NuevapasswordComponent_Template_input_ngModelChange_7_listener($event) { return ctx.miemail = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NuevapasswordComponent_mat_error_9_Template, 2, 0, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NuevapasswordComponent_Template_button_click_14_listener() { return ctx.authService.ForgotPassword(ctx.miemail); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Enviar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.miemail);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors == null ? null : _r1.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.form.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogClose"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatError"]], styles: ["*[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2oyL2FuZ3VsYXJGaW5hbC9mcmVlZG9tL3NyYy9hcHAvY29tcG9uZW50cy9udWV2YXBhc3N3b3JkL251ZXZhcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbnVldmFwYXNzd29yZC9udWV2YXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbnVldmFwYXNzd29yZC9udWV2YXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIiwiKiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NuevapasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nuevapassword',
                templateUrl: './nuevapassword.component.html',
                styleUrls: ['./nuevapassword.component.scss']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/paginaprincipal/paginaprincipal.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/paginaprincipal/paginaprincipal.component.ts ***!
  \*************************************************************************/
/*! exports provided: PaginaprincipalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginaprincipalComponent", function() { return PaginaprincipalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_basedatos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/basedatos.service */ "./src/app/services/basedatos.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _caja_actividad_caja_actividad_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../caja-actividad/caja-actividad.component */ "./src/app/components/caja-actividad/caja-actividad.component.ts");


















const _c0 = ["snav"];
function PaginaprincipalComponent_mat_list_item_7_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PaginaprincipalComponent_mat_list_item_7_Template_mat_checkbox_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const i_r26 = ctx.index; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r27.deportes[i_r26] = $event); })("ngModelChange", function PaginaprincipalComponent_mat_list_item_7_Template_mat_checkbox_ngModelChange_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.filter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const deporte_r25 = ctx.$implicit;
    const i_r26 = ctx.index;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r22.deportes[i_r26]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](deporte_r25);
} }
function PaginaprincipalComponent_button_18_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginaprincipalComponent_button_18_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.enable(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PaginaprincipalComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-caja-actividad", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const actividad_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activity", actividad_r32);
} }
class PaginaprincipalComponent {
    constructor(router, route, basedatosService, authService, db) {
        this.router = router;
        this.route = route;
        this.basedatosService = basedatosService;
        this.authService = authService;
        this.db = db;
        this.all_actividades = [];
        this.aux_actividades = [];
        this.filtered = [];
        this.isfilter = false;
        // public dificultad: number[] = [0,1,2,3,4,5];
        this.listdeportes = ["Futbol", "Baloncesto", "Running", "Skate", "Trekking", "Ciclismo", "Patinaje", "Tenis"];
        this.deportes = [false, false, false, false, false, false, false, false];
    }
    ngOnInit() {
        this.s_actividades = this.basedatosService.getActividades().subscribe(data => {
            this.all_actividades = [];
            this.actividades = [];
            this.actividades = data;
            for (let i = 0; i < this.actividades.length; i++) {
                let a = JSON.stringify(this.actividades[i]);
                let b = (JSON.parse(a)).fecha.seconds;
                this.actividades[i].fecha = new Date(b * 1000);
                if (b > (new Date().getTime() / 1000)) {
                    this.all_actividades.push(this.actividades[i]);
                }
            }
            this.actividades = this.all_actividades;
        });
    }
    ngOnDestroy() { }
    getData() {
        if (this.buscador != '') {
            if (this.isfilter) {
                this.actividades = this.filtered.filter(c => c.nombre.toLowerCase().includes(this.buscador.toLowerCase()));
            }
            else {
                this.actividades = this.actividades.filter(c => c.nombre.toLowerCase().includes(this.buscador.toLowerCase()));
            }
        }
        else {
            if (this.isfilter) {
                this.actividades = this.filtered;
            }
            else {
                this.actividades = this.all_actividades;
            }
        }
    }
    //filtrar actividades
    filter() {
        this.aux_actividades = [];
        this.filtered = [];
        this.buscador = '';
        if (this.deportes.indexOf(true) > -1) {
            this.isfilter = true;
            for (let i in this.listdeportes) {
                if (this.deportes[i] == true) {
                    let aux = this.all_actividades.filter(act => act.deporte.toLowerCase() === this.listdeportes[i].toLowerCase());
                    this.aux_actividades = this.aux_actividades.concat(aux);
                }
            }
            this.actividades = this.aux_actividades;
            this.filtered = this.aux_actividades;
        }
        else {
            this.isfilter = false;
            this.actividades = this.all_actividades;
        }
    }
    sidenavfun() {
        if (this.sidenav.opened) {
            this.sidenav.close();
        }
    }
    enable() {
        this.isfilter = false;
        for (let i in this.listdeportes) {
            this.deportes[i] = false;
        }
        this.actividades = this.all_actividades;
    }
}
PaginaprincipalComponent.ɵfac = function PaginaprincipalComponent_Factory(t) { return new (t || PaginaprincipalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_basedatos_service__WEBPACK_IMPORTED_MODULE_2__["Basedatos"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"])); };
PaginaprincipalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaginaprincipalComponent, selectors: [["app-paginaprincipal"]], viewQuery: function PaginaprincipalComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sidenav = _t.first);
    } }, decls: 23, vars: 6, consts: [["fullscreen", "", 3, "hasBackdrop"], ["position", "end", "mode", "over"], ["snav", ""], [1, "sidenavcontainer"], [2, "font-weight", "bold"], [4, "ngFor", "ngForOf"], ["id", "barra_busqueda"], [1, "buscar", 3, "click"], ["appearance", "outline", 1, "prueba1", 2, "font-size", "medium"], ["matInput", "", "placeholder", "Ex. Running madrid", 3, "ngModel", "ngModelChange"], [1, "filtrar"], ["mat-stroked-button", "", 3, "ngClass", "click", "clickOutside"], ["mat-icon-button", "", "matTooltip", "Quitar Filtro", 3, "click", 4, "ngIf"], [1, "cajas_container", 3, "click"], [1, "rest", 3, "click"], [3, "ngModel", "ngModelChange"], ["mat-icon-button", "", "matTooltip", "Quitar Filtro", 3, "click"], [1, "material-icons", 2, "color", "red"], [3, "activity"]], template: function PaginaprincipalComponent_Template(rf, ctx) { if (rf & 1) {
        const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-list-item", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " DEPORTES: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PaginaprincipalComponent_mat_list_item_7_Template, 3, 2, "mat-list-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginaprincipalComponent_Template_div_click_9_listener() { return ctx.sidenavfun(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Buscar actividades");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PaginaprincipalComponent_Template_input_ngModelChange_13_listener($event) { return ctx.buscador = $event; })("ngModelChange", function PaginaprincipalComponent_Template_input_ngModelChange_13_listener() { return ctx.getData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginaprincipalComponent_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r21.toggle(); })("clickOutside", function PaginaprincipalComponent_Template_button_clickOutside_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r21.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "filter_list_alt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, PaginaprincipalComponent_button_18_Template, 3, 0, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginaprincipalComponent_Template_div_click_20_listener() { return ctx.sidenavfun(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, PaginaprincipalComponent_div_21_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginaprincipalComponent_Template_div_click_22_listener() { return ctx.sidenavfun(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hasBackdrop", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listdeportes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.buscador);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.isfilter ? "prueba4" : "prueba3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isfilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.actividades);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenav"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListItem"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__["DefaultClassDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckbox"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltip"], _caja_actividad_caja_actividad_component__WEBPACK_IMPORTED_MODULE_16__["CajaActividadComponent"]], styles: [".mat-sidenav-backdrop.mat-sidenav-shown {\n  background-color: transparent;\n}\n\nmat-sidenav[_ngcontent-%COMP%] {\n  width: 200px;\n  background-color: #cccccc;\n}\n\nmat-list-item[_ngcontent-%COMP%] {\n  align-content: center;\n  text-align: center;\n}\n\n.sidenavcontainer[_ngcontent-%COMP%] {\n  padding: 3%;\n  align-content: center;\n  text-align: center;\n}\n\n#barra_busqueda[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  margin-bottom: 40px;\n  overflow: hidden;\n}\n\n#barra_busqueda[_ngcontent-%COMP%]    > .filtrar[_ngcontent-%COMP%] {\n  height: 50px;\n  padding-left: 10px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding-top: 25px;\n}\n\n#barra_busqueda[_ngcontent-%COMP%]    > .delfiltro[_ngcontent-%COMP%] {\n  margin-top: 18px;\n  margin-left: 5px;\n}\n\n.prueba3[_ngcontent-%COMP%] {\n  height: 60px;\n}\n\n.prueba4[_ngcontent-%COMP%] {\n  height: 60px;\n  background-color: #959595;\n}\n\n#barra_busqueda[_ngcontent-%COMP%]    > .buscar[_ngcontent-%COMP%] {\n  flex: 0 50%;\n  padding-top: 20px;\n  padding-left: 20px;\n}\n\n.mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n  padding-left: 8px;\n}\n\n.prueba1[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.cajas_container[_ngcontent-%COMP%] {\n  margin: auto;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n}\n\n@media screen and (max-width: 340px) {\n  #barra_busqueda[_ngcontent-%COMP%]    > .buscar[_ngcontent-%COMP%] {\n    flex: 0 50%;\n    padding-top: 20px;\n    padding-left: 20px;\n    width: 170px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2oyL2FuZ3VsYXJGaW5hbC9mcmVlZG9tL3NyYy9hcHAvY29tcG9uZW50cy9wYWdpbmFwcmluY2lwYWwvcGFnaW5hcHJpbmNpcGFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3BhZ2luYXByaW5jaXBhbC9wYWdpbmFwcmluY2lwYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2QkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FERUE7RUFFRSxxQkFBQTtFQUNBLGtCQUFBO0FDQUY7O0FER0E7RUFDRSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQ0FGOztBREdBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDQUY7O0FESUE7RUFDRSxZQUFBO0VBRUEsa0JBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxpQkFBQTtBQ0ZGOztBREtBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ0ZGOztBRElBO0VBQ0UsWUFBQTtBQ0RGOztBREdBO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0FDQUY7O0FES0E7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0ZGOztBRE1BO0VBQ0UsaUJBQUE7QUNIRjs7QURLQTtFQUNDLFdBQUE7QUNGRDs7QURNQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0hGOztBRE1BO0VBRUU7SUFDRSxXQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLFlBQUE7RUNKRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYWdpbmFwcmluY2lwYWwvcGFnaW5hcHJpbmNpcGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5tYXQtc2lkZW5hdi1iYWNrZHJvcC5tYXQtc2lkZW5hdi1zaG93biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5tYXQtc2lkZW5hdntcbiAgd2lkdGg6IDIwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xufVxuXG5tYXQtbGlzdC1pdGVte1xuICBcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zaWRlbmF2Y29udGFpbmVye1xuICBwYWRkaW5nOiAzJTtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNiYXJyYV9idXNxdWVkYXtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5cbiNiYXJyYV9idXNxdWVkYSA+IC5maWx0cmFyIHtcbiAgaGVpZ2h0OiA1MHB4O1xuXG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBwYWRkaW5nLXRvcDogMjVweDtcbn1cblxuI2JhcnJhX2J1c3F1ZWRhID4gLmRlbGZpbHRybyB7XG4gIG1hcmdpbi10b3A6IDE4cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4ucHJ1ZWJhM3tcbiAgaGVpZ2h0OiA2MHB4O1xufVxuLnBydWViYTR7XG4gIGhlaWdodDogNjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0OSwgMTQ5LCAxNDkpO1xufVxuXG5cblxuI2JhcnJhX2J1c3F1ZWRhID4gLmJ1c2NhciB7XG4gIGZsZXg6IDAgNTAlOyBcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcblxufVxuXG4ubWF0LWZvcm0tZmllbGQgKyAubWF0LWZvcm0tZmllbGQge1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbn1cbi5wcnVlYmExe1xuIHdpZHRoOiAxMDAlO1xuXG59XG5cbi5jYWphc19jb250YWluZXIge1xuICBtYXJnaW46YXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDsgIFxuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNDBweCkge1xuXG4gICNiYXJyYV9idXNxdWVkYSA+IC5idXNjYXIge1xuICAgIGZsZXg6IDAgNTAlOyBcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgd2lkdGg6IDE3MHB4O1xuICBcbiAgfVxufVxuXG4iLCI6Om5nLWRlZXAgLm1hdC1zaWRlbmF2LWJhY2tkcm9wLm1hdC1zaWRlbmF2LXNob3duIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbm1hdC1zaWRlbmF2IHtcbiAgd2lkdGg6IDIwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xufVxuXG5tYXQtbGlzdC1pdGVtIHtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zaWRlbmF2Y29udGFpbmVyIHtcbiAgcGFkZGluZzogMyU7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jYmFycmFfYnVzcXVlZGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbiNiYXJyYV9idXNxdWVkYSA+IC5maWx0cmFyIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgcGFkZGluZy10b3A6IDI1cHg7XG59XG5cbiNiYXJyYV9idXNxdWVkYSA+IC5kZWxmaWx0cm8ge1xuICBtYXJnaW4tdG9wOiAxOHB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4ucHJ1ZWJhMyB7XG4gIGhlaWdodDogNjBweDtcbn1cblxuLnBydWViYTQge1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5NTk1OTU7XG59XG5cbiNiYXJyYV9idXNxdWVkYSA+IC5idXNjYXIge1xuICBmbGV4OiAwIDUwJTtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuLm1hdC1mb3JtLWZpZWxkICsgLm1hdC1mb3JtLWZpZWxkIHtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG59XG5cbi5wcnVlYmExIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jYWphc19jb250YWluZXIge1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM0MHB4KSB7XG4gICNiYXJyYV9idXNxdWVkYSA+IC5idXNjYXIge1xuICAgIGZsZXg6IDAgNTAlO1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICB3aWR0aDogMTcwcHg7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginaprincipalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-paginaprincipal',
                templateUrl: './paginaprincipal.component.html',
                styleUrls: ['./paginaprincipal.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _services_basedatos_service__WEBPACK_IMPORTED_MODULE_2__["Basedatos"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"] }]; }, { sidenav: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['snav']
        }] }); })();


/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_basedatos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/basedatos.service */ "./src/app/services/basedatos.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










class ProfileComponent {
    constructor(basedatosService, authService, router) {
        this.basedatosService = basedatosService;
        this.authService = authService;
        this.router = router;
        this.user = JSON.parse(localStorage.getItem('datauser')).data;
    }
    ngOnInit() {
        this.fecha = new Date(null);
        this.fecha.setTime(JSON.parse(localStorage.getItem('datauser')).data.birthday.seconds * 1000);
    }
    saveChanges() {
        this.basedatosService.editUsuario(this.user).then(a => {
            this.authService.fetchDataUser(this.user.uid);
            this.router.navigate(['/principal']);
        });
    }
    nav() {
        this.router.navigate(['/principal']);
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_basedatos_service__WEBPACK_IMPORTED_MODULE_1__["Basedatos"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 52, vars: 11, consts: [[1, "titulo"], [1, "container"], [1, "item"], [1, "container2"], ["alt", "profile", 1, "foto", 3, "src"], ["matInput", "", "placeholder", "www.imgbd.com/i3jd.jpg", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Paco Antonio", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "paco@gmail.com", "disabled", "", 3, "ngModel", "ngModelChange"], [1, "spacer"], ["matInput", "", "placeholder", "Fecha Nacimiento", "disabled", "", 3, "value"], ["matInput", "", "placeholder", "Madrid", 3, "ngModel", "ngModelChange"], ["appearance", "fill"], ["matInput", "", "placeholder", "XXXXXXXXX", "type", "text", "pattern", "^\\(?[\\d]{3}\\)?[\\d]{3}[\\s-]?[\\d]{3}$", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "XXXXXXXXX", "type", "text", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", 3, "click"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Mi perfil:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Foto de perfil (URL):");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_11_listener($event) { return ctx.user.photoURL = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Nombre completo:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_18_listener($event) { return ctx.user.displayName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Email de usuario:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_23_listener($event) { return ctx.user.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Ciudad de residencia:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_35_listener($event) { return ctx.user.city = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Tel\u00E9fono:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_40_listener($event) { return ctx.user.mobilephone = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "DNI:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_45_listener($event) { return ctx.user.dni = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " *Los cambios se har\u00E1n efectivos tr\u00E1s volver a hacer log in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_48_listener() { return ctx.saveChanges(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Guardar Cambios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_50_listener() { return ctx.nav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.user.photoURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.photoURL);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.displayName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](30, 8, ctx.fecha, "longDate"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.city);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.mobilephone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.dni);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["PatternValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]], styles: [".titulo[_ngcontent-%COMP%] {\n  margin: 3%;\n  font-weight: bold;\n  font-size: calc(20px + (30 - 20) * ((100vw - 300px) / (1600 - 300)));\n  letter-spacing: 0.1em;\n}\n\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  background-color: rgba(255, 255, 255, 0.63);\n  border-radius: 5px;\n  padding: 3%;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  align-items: auto;\n  align-content: flex-start;\n  box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.26);\n}\n\n.container2[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  background-color: #eeeeee;\n  border-radius: 5px;\n  padding: 3%;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  align-items: auto;\n  align-content: flex-start;\n  margin: 3%;\n}\n\n.item[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  margin: auto;\n  margin-left: 2%;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  font-size: calc(15px + (20 - 15) * ((100vw - 300px) / (1600 - 300)));\n}\n\n.spacer[_ngcontent-%COMP%] {\n  margin: 10px;\n  width: 100%;\n}\n\n.foto[_ngcontent-%COMP%] {\n  height: calc(50px + (100 - 50) * ((100vw - 300px) / (1600 - 300)));\n  width: calc(50px + (100 - 50) * ((100vw - 300px) / (1600 - 300)));\n  align-content: center;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2oyL2FuZ3VsYXJGaW5hbC9mcmVlZG9tL3NyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0VBQUE7RUFDQSxxQkFBQTtBQ0NKOztBREVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0RBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBRUEsZUFBQTtBQ0FGOztBREdBO0VBQ0ksb0VBQUE7QUNBSjs7QURHQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDQUY7O0FER0E7RUFDRSxrRUFBQTtFQUNBLGlFQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0dWxvIHtcbiAgICBtYXJnaW46IDMlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogY2FsYygyMHB4ICsgKDMwIC0gMjApICogKCgxMDB2dyAtIDMwMHB4KSAvICgxNjAwIC0gMzAwKSkpO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42Myk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMyU7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBhdXRvO1xuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBib3gtc2hhZG93OiAwcHggNnB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNik7XG59XG5cbi5jb250YWluZXIyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOCwgMjM4LCAyMzgpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDMlO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogYXV0bztcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcbiAgbWFyZ2luOiAzJTtcbn1cblxuLml0ZW0ge1xuICBmbGV4OiAxIDEgYXV0bztcbiAgbWFyZ2luOiBhdXRvO1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgbWFyZ2luLWxlZnQ6IDIlO1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICAgIGZvbnQtc2l6ZTogY2FsYygxNXB4ICsgKDIwIC0gMTUpICogKCgxMDB2dyAtIDMwMHB4KSAvICgxNjAwIC0gMzAwKSkpO1xufVxuXG4uc3BhY2VyIHtcbiAgbWFyZ2luOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZvdG8ge1xuICBoZWlnaHQ6IGNhbGMoNTBweCArICgxMDAgLSA1MCkgKiAoKDEwMHZ3IC0gMzAwcHgpIC8gKDE2MDAgLSAzMDApKSk7XG4gIHdpZHRoOiBjYWxjKDUwcHggKyAoMTAwIC0gNTApICogKCgxMDB2dyAtIDMwMHB4KSAvICgxNjAwIC0gMzAwKSkpO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuIiwiLnRpdHVsbyB7XG4gIG1hcmdpbjogMyU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IGNhbGMoMjBweCArICgzMCAtIDIwKSAqICgoMTAwdncgLSAzMDBweCkgLyAoMTYwMCAtIDMwMCkpKTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xufVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYzKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAzJTtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGF1dG87XG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGJveC1zaGFkb3c6IDBweCA2cHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjI2KTtcbn1cblxuLmNvbnRhaW5lcjIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDMlO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogYXV0bztcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcbiAgbWFyZ2luOiAzJTtcbn1cblxuLml0ZW0ge1xuICBmbGV4OiAxIDEgYXV0bztcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tbGVmdDogMiU7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIGZvbnQtc2l6ZTogY2FsYygxNXB4ICsgKDIwIC0gMTUpICogKCgxMDB2dyAtIDMwMHB4KSAvICgxNjAwIC0gMzAwKSkpO1xufVxuXG4uc3BhY2VyIHtcbiAgbWFyZ2luOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZvdG8ge1xuICBoZWlnaHQ6IGNhbGMoNTBweCArICgxMDAgLSA1MCkgKiAoKDEwMHZ3IC0gMzAwcHgpIC8gKDE2MDAgLSAzMDApKSk7XG4gIHdpZHRoOiBjYWxjKDUwcHggKyAoMTAwIC0gNTApICogKCgxMDB2dyAtIDMwMHB4KSAvICgxNjAwIC0gMzAwKSkpO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.scss']
            }]
    }], function () { return [{ type: _services_basedatos_service__WEBPACK_IMPORTED_MODULE_1__["Basedatos"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/puntuacion/puntuacion.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/puntuacion/puntuacion.component.ts ***!
  \***************************************************************/
/*! exports provided: PuntuacionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PuntuacionComponent", function() { return PuntuacionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_basedatos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/basedatos.service */ "./src/app/services/basedatos.service.ts");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");






function PuntuacionComponent_i_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "lock_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PuntuacionComponent_i_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "lock_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PuntuacionComponent_i_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "lock_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PuntuacionComponent {
    constructor(basedatosService) {
        this.basedatosService = basedatosService;
    }
    ngOnInit() {
        this.basedatosService.getPuntos(JSON.parse(localStorage.getItem('datauser')).data.uid);
        this.basedatosService.ptsObs.subscribe((a) => {
            this.mispuntos = a;
            if (this.mispuntos > 2000) {
                this.pintarpuntos = 100;
            }
            else {
                this.pintarpuntos = this.mispuntos / 20;
            }
        });
    }
    medal2() {
        if (this.mispuntos < 600) {
            return false;
        }
        else {
            return true;
        }
    }
    medal3() {
        if (this.mispuntos < 1200) {
            return false;
        }
        else {
            return true;
        }
    }
    medal4() {
        if (this.mispuntos < 2000) {
            return false;
        }
        else {
            return true;
        }
    }
}
PuntuacionComponent.ɵfac = function PuntuacionComponent_Factory(t) { return new (t || PuntuacionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_basedatos_service__WEBPACK_IMPORTED_MODULE_1__["Basedatos"])); };
PuntuacionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PuntuacionComponent, selectors: [["app-puntuacion"]], decls: 69, vars: 8, consts: [[1, "titulo"], [1, "container"], [1, "item"], [1, "progressbar"], [1, "outer"], [1, "puntos"], ["mode", "determinate", "color", "warn", 1, "mat-progress-bar", 3, "value"], [1, "item2"], [1, "fotoouter"], ["src", "./assets//medal1.svg", 1, "foto"], [1, "name"], [1, "citytel"], ["src", "./assets//medal2.svg", 3, "ngClass"], ["class", "material-icons", 4, "ngIf"], ["src", "./assets//medal3.svg", 3, "ngClass"], ["src", "./assets//medal4.svg", 3, "ngClass"], [1, "textdesc"], [1, "material-icons"]], template: function PuntuacionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Mi puntuaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "mat-progress-bar", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Medallas: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Novato");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Acabas de llegar a Freedom, empieza a participar!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "0 pts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, PuntuacionComponent_i_27_Template, 2, 0, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Intermedio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Vas por el buen camino, sigue participando!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "600 pts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, PuntuacionComponent_i_39_Template, 2, 0, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Pro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Eres todo un deportista, puedo llamarte fuertaco?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "1200 pts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, PuntuacionComponent_i_51_Template, 2, 0, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Leyenda");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Has hecho hecho de Freedom tu segunda familia, felicidades!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "2000 pts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Instrucciones: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "- Consigue 50 puntos por cada actividad que creas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "- Consigue 40 puntos por cada actividad a la que te unes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "br");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.mispuntos, "/2000 puntos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.pintarpuntos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.medal2() ? "foto" : "fotodim");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.medal2());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.medal3() ? "foto" : "fotodim");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.medal3());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.medal4() ? "foto" : "fotodim");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.medal4());
    } }, directives: [_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_2__["MatProgressBar"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".titulo[_ngcontent-%COMP%] {\n  margin: 3%;\n  font-weight: bold;\n  font-size: calc(20px + (30 - 20) * ((100vw - 300px) / (1600 - 300)));\n  letter-spacing: 0.1em;\n}\n\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  background-color: transparent;\n  border-radius: 5px;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  align-items: auto;\n  align-content: center;\n}\n\n.textdesc[_ngcontent-%COMP%] {\n  font-size: calc(15px + (28 - 15) * ((100vw - 300px) / (1600 - 300)));\n  padding: 0.6em;\n}\n\n.outer[_ngcontent-%COMP%] {\n  margin: 1em;\n}\n\n.progressbar[_ngcontent-%COMP%] {\n  text-align: center;\n  align-content: center;\n  padding: 0.2em;\n}\n\n.puntos[_ngcontent-%COMP%] {\n  font-size: calc(15px + (28 - 15) * ((100vw - 300px) / (1600 - 300)));\n}\n\n.mat-progress-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 1em;\n  border-radius: 10px;\n}\n\n.fotoouter[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 5%;\n}\n\n.foto[_ngcontent-%COMP%] {\n  width: calc(55px + (75 - 55) * ((100vw - 300px) / (1600 - 300)));\n  border-radius: 50%;\n  height: auto;\n}\n\n.fotodim[_ngcontent-%COMP%] {\n  width: calc(55px + (75 - 55) * ((100vw - 300px) / (1600 - 300)));\n  border-radius: 50%;\n  -webkit-filter: brightness(30%);\n          filter: brightness(30%);\n  height: auto;\n}\n\n.name[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 18px;\n  margin: 5%;\n  font-weight: bold;\n}\n\n.citytel[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 15px;\n  margin: 5%;\n}\n\n.button[_ngcontent-%COMP%] {\n  border-width: 5px;\n}\n\n.item[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin: auto;\n  background-color: #f0f0f0;\n  margin: 1em;\n  padding: 1%;\n  box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.25);\n  border-radius: 5px;\n}\n\n.item2[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  width: 200px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin: auto;\n  background-color: #f0f0f0;\n  margin: 1em;\n  padding: 1%;\n  box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.25);\n  border-radius: 5px;\n}\n\n.aparecer[_ngcontent-%COMP%] {\n  display: ruby;\n}\n\n.ocultar[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2oyL2FuZ3VsYXJGaW5hbC9mcmVlZG9tL3NyYy9hcHAvY29tcG9uZW50cy9wdW50dWFjaW9uL3B1bnR1YWNpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcHVudHVhY2lvbi9wdW50dWFjaW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0VBQUE7RUFDQSxxQkFBQTtBQ0NKOztBREVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURFQTtFQUNJLG9FQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURDQTtFQUNJLG9FQUFBO0FDRUo7O0FEQ0E7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDRUo7O0FEQ0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QUNFSjs7QURDQTtFQUNFLGdFQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDRUY7O0FEQ0E7RUFDRSxnRUFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7VUFBQSx1QkFBQTtFQUNBLFlBQUE7QUNFRjs7QURDQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQ0VGOztBRENBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQ0VGOztBRENBO0VBQ0UsaUJBQUE7QUNFRjs7QURDQTtFQUNFLGNBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdEQUFBO0VBQ0Esa0JBQUE7QUNFRjs7QURDQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnREFBQTtFQUNBLGtCQUFBO0FDRUo7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FEQ0E7RUFBUyxhQUFBO0FDR1QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3B1bnR1YWNpb24vcHVudHVhY2lvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXR1bG8ge1xuICAgIG1hcmdpbjogMyU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiBjYWxjKDIwcHggKyAoMzAgLSAyMCkgKiAoKDEwMHZ3IC0gMzAwcHgpIC8gKDE2MDAgLSAzMDApKSk7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xufVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGF1dG87XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnRleHRkZXNje1xuICAgIGZvbnQtc2l6ZTogY2FsYygxNXB4ICsgKDI4IC0gMTUpICogKCgxMDB2dyAtIDMwMHB4KSAvICgxNjAwIC0gMzAwKSkpO1xuICAgIHBhZGRpbmc6IDAuNmVtO1xufVxuXG4ub3V0ZXJ7XG4gICAgbWFyZ2luOiAxZW07XG59XG5cbi5wcm9ncmVzc2JhcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDAuMmVtO1xufVxuLnB1bnRvcyB7XG4gICAgZm9udC1zaXplOiBjYWxjKDE1cHggKyAoMjggLSAxNSkgKiAoKDEwMHZ3IC0gMzAwcHgpIC8gKDE2MDAgLSAzMDApKSk7XG59XG5cbi5tYXQtcHJvZ3Jlc3MtYmFye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5mb3Rvb3V0ZXJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogNSU7XG5cbn1cbi5mb3Rve1xuICB3aWR0aDogY2FsYyg1NXB4ICsgKDc1IC0gNTUpICogKCgxMDB2dyAtIDMwMHB4KSAvICgxNjAwIC0gMzAwKSkpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmZvdG9kaW17XG4gIHdpZHRoOiBjYWxjKDU1cHggKyAoNzUgLSA1NSkgKiAoKDEwMHZ3IC0gMzAwcHgpIC8gKDE2MDAgLSAzMDApKSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDMwJSk7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLm5hbWV7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW46IDUlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNpdHl0ZWx7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW46IDUlO1xufVxuXG4uYnV0dG9ue1xuICBib3JkZXItd2lkdGg6IDVweDtcbn1cblxuLml0ZW0ge1xuICBmbGV4OiAxIDEgYXV0bztcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBtYXJnaW46IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI0MCwgMjQwKTtcbiAgbWFyZ2luOiAxZW07XG4gIHBhZGRpbmc6IDElO1xuICBib3gtc2hhZG93OiAwcHggNnB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLml0ZW0yIHtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQwLCAyNDApO1xuICAgIG1hcmdpbjogMWVtO1xuICAgIHBhZGRpbmc6IDElO1xuICAgIGJveC1zaGFkb3c6IDBweCA2cHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIH1cblxuXG4uYXBhcmVjZXJ7XG4gIGRpc3BsYXk6IHJ1Ynk7XG59XG4ub2N1bHRhcntkaXNwbGF5OiBub25lO30iLCIudGl0dWxvIHtcbiAgbWFyZ2luOiAzJTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogY2FsYygyMHB4ICsgKDMwIC0gMjApICogKCgxMDB2dyAtIDMwMHB4KSAvICgxNjAwIC0gMzAwKSkpO1xuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogYXV0bztcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG4udGV4dGRlc2Mge1xuICBmb250LXNpemU6IGNhbGMoMTVweCArICgyOCAtIDE1KSAqICgoMTAwdncgLSAzMDBweCkgLyAoMTYwMCAtIDMwMCkpKTtcbiAgcGFkZGluZzogMC42ZW07XG59XG5cbi5vdXRlciB7XG4gIG1hcmdpbjogMWVtO1xufVxuXG4ucHJvZ3Jlc3NiYXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMC4yZW07XG59XG5cbi5wdW50b3Mge1xuICBmb250LXNpemU6IGNhbGMoMTVweCArICgyOCAtIDE1KSAqICgoMTAwdncgLSAzMDBweCkgLyAoMTYwMCAtIDMwMCkpKTtcbn1cblxuLm1hdC1wcm9ncmVzcy1iYXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxZW07XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5mb3Rvb3V0ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogNSU7XG59XG5cbi5mb3RvIHtcbiAgd2lkdGg6IGNhbGMoNTVweCArICg3NSAtIDU1KSAqICgoMTAwdncgLSAzMDBweCkgLyAoMTYwMCAtIDMwMCkpKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5mb3RvZGltIHtcbiAgd2lkdGg6IGNhbGMoNTVweCArICg3NSAtIDU1KSAqICgoMTAwdncgLSAzMDBweCkgLyAoMTYwMCAtIDMwMCkpKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMzAlKTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4ubmFtZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW46IDUlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNpdHl0ZWwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luOiA1JTtcbn1cblxuLmJ1dHRvbiB7XG4gIGJvcmRlci13aWR0aDogNXB4O1xufVxuXG4uaXRlbSB7XG4gIGZsZXg6IDEgMSBhdXRvO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIG1hcmdpbjogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgbWFyZ2luOiAxZW07XG4gIHBhZGRpbmc6IDElO1xuICBib3gtc2hhZG93OiAwcHggNnB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLml0ZW0yIHtcbiAgZmxleDogMCAwIGF1dG87XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgbWFyZ2luOiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xuICBtYXJnaW46IDFlbTtcbiAgcGFkZGluZzogMSU7XG4gIGJveC1zaGFkb3c6IDBweCA2cHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uYXBhcmVjZXIge1xuICBkaXNwbGF5OiBydWJ5O1xufVxuXG4ub2N1bHRhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PuntuacionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-puntuacion',
                templateUrl: './puntuacion.component.html',
                styleUrls: ['./puntuacion.component.scss']
            }]
    }], function () { return [{ type: src_app_services_basedatos_service__WEBPACK_IMPORTED_MODULE_1__["Basedatos"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _subirfoto_subirfoto_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../subirfoto/subirfoto.component */ "./src/app/components/subirfoto/subirfoto.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_basedatos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/basedatos.service */ "./src/app/services/basedatos.service.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");












class RegisterComponent {
    constructor(dialogRef, authService, basedatosService, dialog) {
        this.dialogRef = dialogRef;
        this.authService = authService;
        this.basedatosService = basedatosService;
        this.dialog = dialog;
        this.photoURL = "https://image.flaticon.com/icons/png/512/64/64572.png";
        this.myFilter = (d) => {
            const day = new Date();
            day.setFullYear(day.getFullYear() - 18);
            day.setHours(0, 0, 0, 0);
            return day > d;
        };
    }
    ngOnInit() {
        this.startDate = new Date;
        this.startDate.setFullYear(this.startDate.getFullYear() - 18);
    }
    crearUsuario() {
        try {
            this.authService.SignUp(this.myemail, this.password, this.photoURL, this.displayName, this.myusername, this.mobilephone, this.birthday, this.city, this.dni);
            this.openRegisterForm();
        }
        catch (error) {
        }
    }
    openRegisterForm() {
        this.dialog.open(_subirfoto_subirfoto_component__WEBPACK_IMPORTED_MODULE_1__["SubirfotoComponent"], { width: '80%', height: '250px' });
        this.dialogRef.close();
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_basedatos_service__WEBPACK_IMPORTED_MODULE_4__["Basedatos"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 90, vars: 14, consts: [[1, "displayTable"], [1, "displayTableCell"], [1, "authBlock"], ["color", "primary"], [1, "flex-spacer"], ["mat-button", "", "mat-dialog-close", ""], ["novalidate", ""], ["loginForm", "ngForm"], [1, "seccion"], ["UserData", ""], ["appearance", "fill"], ["matInput", "", "placeholder", "Paco7", "type", "text", "name", "username", "required", "", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["matInput", "", "placeholder", "paco@gmail.com", "type", "text", "name", "email", "required", "", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "password", "name", "password", "required", "", 3, "ngModel", "ngModelChange"], ["PersonalData", ""], ["matInput", "", "placeholder", "Paco Garc\u00EDa", "type", "text", "name", "displayName", "required", "", 3, "ngModel", "ngModelChange"], ["matInput", "", "name", "cumple", "required", "", 3, "matDatepickerFilter", "matDatepicker", "ngModel", "ngModelChange"], ["matSuffix", "", 3, "for"], [3, "startAt"], ["picker", ""], ["matInput", "", "placeholder", "Madrid", "type", "text", "name", "city", "required", "", 3, "ngModel", "ngModelChange"], ["SensitiveData", ""], ["matInput", "", "placeholder", "XXXXXXXXX", "type", "text", "name", "mobilephone", "pattern", "^\\(?[\\d]{3}\\)?[\\d]{3}[\\s-]?[\\d]{3}$", "required", "", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "XXXXXXXXA", "type", "text", "name", "dni", "required", "", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "www.imgbd.com/photo123.jpg", "type", "text", "name", "photoURL", "required", "", 3, "ngModel", "ngModelChange"], ["id", "Submit"], ["color", "primary", "type", "submit", "mat-stroked-button", "", 3, "disabled", "click"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-toolbar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Crear cuenta ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Nombre de Usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_17_listener($event) { return ctx.myusername = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 13, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_23_listener($event) { return ctx.myemail = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Tu contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 14, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_31_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 8, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Nombre Completo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Tu nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "input", 16, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_41_listener($event) { return ctx.displayName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Fecha de Nacimiento");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "DD/MM/AAAA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_49_listener($event) { return ctx.birthday = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "mat-datepicker-toggle", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "mat-datepicker", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Ciudad de Residencia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Tu ciudad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "input", 21, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_59_listener($event) { return ctx.city = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 8, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "N\u00FAmero de Tel\u00E9fono M\u00F3vil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Tu n\u00FAmero");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "input", 23, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_69_listener($event) { return ctx.mobilephone = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "DNI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Tu DNI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "input", 24, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_77_listener($event) { return ctx.dni = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Foto de Perfil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "URL foto perfil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "input", 25, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_85_listener($event) { return ctx.photoURL = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_88_listener() { return ctx.crearUsuario(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Continuar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.myusername);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.myemail);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.displayName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepickerFilter", ctx.myFilter)("matDatepicker", _r15)("ngModel", ctx.birthday);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("startAt", ctx.startDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.city);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.mobilephone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.dni);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.photoURL);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r8.form.invalid);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["PatternValidator"]], styles: ["*[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.seccion[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-align: center;\n  width: 30%;\n}\n\n.seccion[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 80%;\n}\n\n#Submit[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n#Submit[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 100%;\n  margin-top: 2%;\n  margin-bottom: 5%;\n  width: 40%;\n}\n\n@media screen and (max-width: 768px) {\n  .seccion[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    display: inline-block;\n    text-align: center;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2oyL2FuZ3VsYXJGaW5hbC9mcmVlZG9tL3NyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUNDSjs7QURHQTtFQUVJO0lBQ0kscUJBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7RUNETjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNlY2Npb24gZGl2e1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6MzAlO1xufVxuXG4uc2VjY2lvbiBtYXQtZm9ybS1maWVsZHtcbiAgICB3aWR0aDo4MCU7XG59XG5cbiNTdWJtaXQgZGl2e1xuICAgIHdpZHRoOjEwMCU7XG59XG5cbiNTdWJtaXQgYnV0dG9ue1xuICAgIGZvbnQtc2l6ZToxMDAlO1xuICAgIG1hcmdpbi10b3A6IDIlO1xuICAgIG1hcmdpbi1ib3R0b206IDUlO1xuICAgIHdpZHRoOiA0MCU7XG59XG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweClcbntcbiAgICAuc2VjY2lvbiBkaXZ7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB3aWR0aDoxMDAlO1xuICAgIH1cbn0iLCIqIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2VjY2lvbiBkaXYge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDMwJTtcbn1cblxuLnNlY2Npb24gbWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogODAlO1xufVxuXG4jU3VibWl0IGRpdiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4jU3VibWl0IGJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgbWFyZ2luLXRvcDogMiU7XG4gIG1hcmdpbi1ib3R0b206IDUlO1xuICB3aWR0aDogNDAlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuc2VjY2lvbiBkaXYge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _services_basedatos_service__WEBPACK_IMPORTED_MODULE_4__["Basedatos"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/sidenav/sidenav.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sidenav/sidenav.component.ts ***!
  \*********************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_sidenav_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/sidenav.service */ "./src/app/services/sidenav.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_basedatos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/basedatos.service */ "./src/app/services/basedatos.service.ts");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");














const _c0 = ["snav"];
function SidenavComponent_span_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Hola ", ctx_r68.nombreuser, "!");
} }
class SidenavComponent {
    constructor(sidenavService, authService, router, route, basedatosService) {
        this.sidenavService = sidenavService;
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.basedatosService = basedatosService;
        this.mode_sidenav = "side";
        this.opened = true;
        this.getScreenSize();
    }
    //permite al menu lateral cambiar de vista dependiendo de la pantalla
    getScreenSize(event) {
        this.screenHeight = window.innerHeight;
        this.screenWidth = window.innerWidth;
        if (this.screenWidth < 768) {
            this.mode_sidenav = "";
            this.opened = false;
        }
        else {
            this.mode_sidenav = "side";
            this.opened = true;
        }
    }
    ngOnInit() {
        if (this.authService.isLoggedIn == true) {
            this.nombreuser = JSON.parse(localStorage.getItem('datauser')).data.displayName;
            this.photouser = JSON.parse(localStorage.getItem('datauser')).data.photoURL;
            this.basedatosService.getPuntos(JSON.parse(localStorage.getItem('datauser')).data.uid);
            this.basedatosService.ptsObs.subscribe((a) => {
                this.mispuntos = a;
                if (this.mispuntos > 2000) {
                    this.pintarpuntos = 100;
                }
                else {
                    this.pintarpuntos = this.mispuntos / 20;
                }
                if (this.mispuntos >= 2000) {
                    this.medallauser = './assets/medal4.svg';
                }
                else if (this.mispuntos >= 1200 && this.mispuntos < 2000) {
                    this.medallauser = './assets/medal3.svg';
                }
                else if (this.mispuntos >= 600 && this.mispuntos < 1200) {
                    this.medallauser = './assets/medal2.svg';
                }
                else if (this.mispuntos < 600) {
                    this.medallauser = './assets/medal1.svg';
                }
            });
        }
    }
    ngAfterViewInit() {
        this.sidenavService.setSidenav(this.sidenav);
    }
    logout() {
        this.authService.SignOut();
    }
    redirectActividad() {
        this.router.navigate(['/actividad-nueva']).then(() => {
        });
    }
    delay(ms) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield new Promise(resolve => setTimeout(() => resolve(), ms));
        });
    }
    redirectProfile() {
        this.router.navigate(['/profile']).then(() => {
        });
    }
    redirectActCreada() {
        this.router.navigate(['/actividades-creadas']).then(() => {
        });
    }
    redirectActProxima() {
        this.router.navigate(['/actividades-proximas']).then(() => {
        });
        ;
    }
    redirectActCompleta() {
        this.router.navigate(['/actividades-completadas']).then(() => {
        });
    }
    redirectAct() {
        this.router.navigate(['/principal']).then(() => {
        });
    }
    redirectContacts() {
        this.router.navigate(['/contactos']).then(() => {
        });
    }
    redirectPts() {
        this.router.navigate(['/puntuacion']).then(() => {
        });
    }
}
SidenavComponent.ɵfac = function SidenavComponent_Factory(t) { return new (t || SidenavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_sidenav_service__WEBPACK_IMPORTED_MODULE_2__["SidenavService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_basedatos_service__WEBPACK_IMPORTED_MODULE_5__["Basedatos"])); };
SidenavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SidenavComponent, selectors: [["app-sidenav"]], viewQuery: function SidenavComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sidenav = _t.first);
    } }, hostBindings: function SidenavComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function SidenavComponent_resize_HostBindingHandler($event) { return ctx.getScreenSize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, decls: 44, vars: 10, consts: [["fullscreen", "", 1, "contenido"], [3, "mode", "opened", "openedChange"], ["snav", ""], [1, "navcontainer"], ["mat-raised-button", "", 1, "nueva_actividad", 3, "click"], ["src", "./assets/mas.svg", "width", "50", "height", "50", "alt", "logo", 2, "inset-block", "initial", "margin-right", "10px"], ["mat-raised-button", "", 1, "navitem", 3, "click"], [2, "width", "50px", "text-align", "center", "float", "left", "margin-top", "7px", "margin-right", "15px"], ["width", "40", "height", "40", "alt", "logo", 3, "src"], [2, "width", "131px", "text-align", "center", "float", "right"], ["mode", "determinate", "color", "warn", 2, "height", "12px", "width", "130px", "border-radius", "10px", 3, "value"], ["src", "./assets/search1.svg", "width", "30", "height", "30", "alt", "logo", 2, "inset-block", "initial", "margin", "10px"], ["src", "./assets/equipo.svg", "width", "30", "height", "30", "alt", "logo", 2, "inset-block", "initial", "margin", "10px"], ["src", "./assets/edit1.svg", "width", "30", "height", "30", "alt", "logo", 2, "inset-block", "initial", "margin", "10px"], ["src", "./assets/schedule.svg", "width", "30", "height", "30", "alt", "logo", 2, "inset-block", "initial", "margin", "10px"], ["src", "./assets/finish.svg", "width", "30", "height", "30", "alt", "logo", 2, "inset-block", "initial"], [1, "user_exit2", 2, "font-size", "medium", "color", "white", "margin-top", "10px"], [4, "ngIf"], [1, "user_exit", "user_exit2"], ["matTooltip", "Perfil", 1, "foto", 3, "click"], [1, "parent", 2, "position", "relative"], ["height", "45", "width", "45", 2, "border-radius", "50%", 3, "src", "ngClass"], ["src", "./assets/profile.png", "height", "50", 2, "border-radius", "50%", 3, "ngClass"], ["height", "24", "width", "24", 2, "border-radius", "50%", "position", "absolute", "top", "50%", "left", "50%", 3, "src"], ["mat-icon-button", "", "matTooltip", "Salir", 2, "margin", "0px 1%", 3, "click"], [1, "material-icons"]], template: function SidenavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-sidenav", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("openedChange", function SidenavComponent_Template_mat_sidenav_openedChange_1_listener($event) { return ctx.opened = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidenavComponent_Template_a_click_4_listener() { return ctx.redirectActividad(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Crear actividad");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidenavComponent_Template_a_click_8_listener() { return ctx.redirectPts(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "mat-progress-bar", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidenavComponent_Template_a_click_15_listener() { return ctx.redirectAct(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Buscar actividades ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidenavComponent_Template_a_click_18_listener() { return ctx.redirectContacts(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Usuarios de Freedom ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidenavComponent_Template_a_click_21_listener() { return ctx.redirectActCreada(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " Actividades creadas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidenavComponent_Template_a_click_24_listener() { return ctx.redirectActProxima(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " Pr\u00F3ximas actividades ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidenavComponent_Template_a_click_27_listener() { return ctx.redirectActCompleta(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " Actividades completadas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, SidenavComponent_span_31_Template, 2, 1, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, " \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidenavComponent_Template_div_click_34_listener() { return ctx.redirectProfile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidenavComponent_Template_button_click_39_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("mode", ctx.mode_sidenav);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("opened", ctx.opened);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.medallauser, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.mispuntos, "/2000 puntos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx.pintarpuntos);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nombreuser);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.photouser, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.photouser == "" ? "ocultar" : "aparecer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.photouser == null ? "aparecer" : "ocultar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.medallauser, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenav"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatAnchor"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__["MatProgressBar"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__["DefaultClassDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavContent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: [".contenido[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n\nmat-sidenav[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  position: fixed;\n}\n\nmat-sidenav[_ngcontent-%COMP%], mat-sidenav-content[_ngcontent-%COMP%] {\n  padding: 16px;\n  position: fixed;\n}\n\nmat-sidenav-content[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n}\n\nmat-sidenav[_ngcontent-%COMP%] {\n  background-color: #383a53;\n  width: 300px;\n}\n\n.navcontainer[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: center;\n}\n\n.navcontainer[_ngcontent-%COMP%], .nueva_actividad[_ngcontent-%COMP%], .navitem[_ngcontent-%COMP%] {\n  margin: auto;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n}\n\n.nueva_actividad[_ngcontent-%COMP%] {\n  width: 250px;\n  height: 70px;\n  margin: 10px;\n  padding-left: 33px;\n  border-radius: 10px;\n  font-size: 20px;\n  background-color: white;\n}\n\n.nueva_actividad[_ngcontent-%COMP%]:hover {\n  background-color: rgba(166, 227, 255, 0.959);\n}\n\n.navitem[_ngcontent-%COMP%] {\n  width: 250px;\n  height: 55px;\n  margin: 10px;\n  justify-content: center;\n  border-radius: 10px;\n  background-color: #ededf6;\n  font-weight: normal;\n}\n\n.navitem[_ngcontent-%COMP%]:hover {\n  background-color: rgba(166, 227, 255, 0.959);\n}\n\n.user_exit[_ngcontent-%COMP%] {\n  margin: 20px;\n  color: white;\n}\n\n.user_exit2[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.ocultar[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.aparecer[_ngcontent-%COMP%] {\n  display: ruby;\n}\n\n@media screen and (max-width: 768px) {\n  #barra_busqueda[_ngcontent-%COMP%]    > .item[_ngcontent-%COMP%] {\n    flex: 0 100%;\n  }\n}\n\n@media screen and (min-width: 768px) {\n  .user_exit2[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2oyL2FuZ3VsYXJGaW5hbC9mcmVlZG9tL3NyYy9hcHAvY29tcG9uZW50cy9zaWRlbmF2L3NpZGVuYXYuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZW5hdi9zaWRlbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsdUJBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FEQ0E7RUFDSSw0Q0FBQTtBQ0VKOztBRENBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUNFRjs7QURDQTtFQUNFLDRDQUFBO0FDRUY7O0FERUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQ0NGOztBRENBO0VBQ0UsYUFBQTtBQ0VGOztBRENBO0VBQ0UsYUFBQTtBQ0VGOztBREFBO0VBQ0UsYUFBQTtBQ0dGOztBREFBO0VBRUU7SUFDRSxZQUFBO0VDRUY7QUFDRjs7QURDQTtFQUNFO0lBQ0UsYUFBQTtFQ0NGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpZGVuYXYvc2lkZW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW5pZG8ge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG5tYXQtc2lkZW5hdiB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cblxubWF0LXNpZGVuYXYsIG1hdC1zaWRlbmF2LWNvbnRlbnQge1xuICBwYWRkaW5nOiAxNnB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG5cbn1cbm1hdC1zaWRlbmF2LWNvbnRlbnR7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5tYXQtc2lkZW5hdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzODNhNTM7XG4gIHdpZHRoOiAzMDBweDtcbn1cblxuLm5hdmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm5hdmNvbnRhaW5lciwgLm51ZXZhX2FjdGl2aWRhZCwgLm5hdml0ZW0ge1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm51ZXZhX2FjdGl2aWRhZCB7XG4gIHdpZHRoOiAyNTBweDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBtYXJnaW46IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMzNweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5udWV2YV9hY3RpdmlkYWQ6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjYsIDIyNywgMjU1LCAwLjk1OSk7XG59XG5cbi5uYXZpdGVtIHtcbiAgd2lkdGg6IDI1MHB4O1xuICBoZWlnaHQ6IDU1cHg7XG4gIG1hcmdpbjogMTBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGVkZjY7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi5uYXZpdGVtOmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAgcmdiYSgxNjYsIDIyNywgMjU1LCAwLjk1OSk7XG59XG5cblxuLnVzZXJfZXhpdHtcbiAgbWFyZ2luOiAyMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG4udXNlcl9leGl0MntcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLm9jdWx0YXJ7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uYXBhcmVjZXJ7XG4gIGRpc3BsYXk6IHJ1Ynk7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG5cbiAgI2JhcnJhX2J1c3F1ZWRhID4gLml0ZW0ge1xuICAgIGZsZXg6IDAgMTAwJTtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAudXNlcl9leGl0MntcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIFxufVxuXG4iLCIuY29udGVuaWRvIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxubWF0LXNpZGVuYXYge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbm1hdC1zaWRlbmF2LCBtYXQtc2lkZW5hdi1jb250ZW50IHtcbiAgcGFkZGluZzogMTZweDtcbiAgcG9zaXRpb246IGZpeGVkO1xufVxuXG5tYXQtc2lkZW5hdi1jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbm1hdC1zaWRlbmF2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4M2E1MztcbiAgd2lkdGg6IDMwMHB4O1xufVxuXG4ubmF2Y29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubmF2Y29udGFpbmVyLCAubnVldmFfYWN0aXZpZGFkLCAubmF2aXRlbSB7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubnVldmFfYWN0aXZpZGFkIHtcbiAgd2lkdGg6IDI1MHB4O1xuICBoZWlnaHQ6IDcwcHg7XG4gIG1hcmdpbjogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAzM3B4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4ubnVldmFfYWN0aXZpZGFkOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjYsIDIyNywgMjU1LCAwLjk1OSk7XG59XG5cbi5uYXZpdGVtIHtcbiAgd2lkdGg6IDI1MHB4O1xuICBoZWlnaHQ6IDU1cHg7XG4gIG1hcmdpbjogMTBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGVkZjY7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi5uYXZpdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjYsIDIyNywgMjU1LCAwLjk1OSk7XG59XG5cbi51c2VyX2V4aXQge1xuICBtYXJnaW46IDIwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnVzZXJfZXhpdDIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ub2N1bHRhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5hcGFyZWNlciB7XG4gIGRpc3BsYXk6IHJ1Ynk7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICNiYXJyYV9idXNxdWVkYSA+IC5pdGVtIHtcbiAgICBmbGV4OiAwIDEwMCU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC51c2VyX2V4aXQyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SidenavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-sidenav',
                templateUrl: './sidenav.component.html',
                styleUrls: ['./sidenav.component.scss']
            }]
    }], function () { return [{ type: _services_sidenav_service__WEBPACK_IMPORTED_MODULE_2__["SidenavService"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _services_basedatos_service__WEBPACK_IMPORTED_MODULE_5__["Basedatos"] }]; }, { sidenav: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['snav']
        }], getScreenSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['window:resize', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/components/subirfoto/subirfoto.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/subirfoto/subirfoto.component.ts ***!
  \*************************************************************/
/*! exports provided: SubirfotoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubirfotoComponent", function() { return SubirfotoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
/* harmony import */ var _services_basedatos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/basedatos.service */ "./src/app/services/basedatos.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");










class SubirfotoComponent {
    constructor(afStorage, basedatos, af, dialogRef) {
        this.afStorage = afStorage;
        this.basedatos = basedatos;
        this.af = af;
        this.dialogRef = dialogRef;
        this.image = null;
    }
    ngOnInit() { }
    //subir foto a firebase storage y obtener link
    upload(event) {
        const id = Math.random().toString(36).substring(2);
        this.ref = this.afStorage.ref(id);
        this.task = this.ref.put(event.target.files[0]);
        this.task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(() => {
            this.downloadURL = this.ref.getDownloadURL();
            this.downloadURL.subscribe(url => (this.image = url));
        }))
            .subscribe();
    }
    //guardar link foto en usuario actual
    subirfoto() {
        this.basedatos.subirDNI(this.af.userData.uid, this.image);
        this.dialogRef.close();
        this.af.AuxSignIn(this.af.userData.uid);
    }
}
SubirfotoComponent.ɵfac = function SubirfotoComponent_Factory(t) { return new (t || SubirfotoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_basedatos_service__WEBPACK_IMPORTED_MODULE_3__["Basedatos"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"])); };
SubirfotoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SubirfotoComponent, selectors: [["app-subirfoto"]], decls: 9, vars: 1, consts: [[1, "card-title"], ["type", "file", "accept", ".png,.jpg,.jpeg", 3, "change"], ["mat-stroked-button", "", 2, "margin-top", "40px", 3, "ngClass", "click"]], template: function SubirfotoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Verificaci\u00F3n con DNI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Seleccione el fichero");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SubirfotoComponent_Template_input_change_4_listener($event) { return ctx.upload($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\nSi su documento DNI no coincide con el n\u00FAmero de DNI o fecha de nacimiento, su cuenta ser\u00E1 cancelada. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubirfotoComponent_Template_button_click_7_listener() { return ctx.subirfoto(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Finalizar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.image == null ? "borrar" : "aparecer");
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__["DefaultClassDirective"]], styles: [".borrar[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.aparecer[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2oyL2FuZ3VsYXJGaW5hbC9mcmVlZG9tL3NyYy9hcHAvY29tcG9uZW50cy9zdWJpcmZvdG8vc3ViaXJmb3RvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3N1YmlyZm90by9zdWJpcmZvdG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0o7O0FEQ0E7RUFDSSxjQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3N1YmlyZm90by9zdWJpcmZvdG8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9ycmFye1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG4uYXBhcmVjZXJ7XG4gICAgZGlzcGxheTogYmxvY2s7XG59IiwiLmJvcnJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5hcGFyZWNlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubirfotoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-subirfoto',
                templateUrl: './subirfoto.component.html',
                styleUrls: ['./subirfoto.component.scss']
            }]
    }], function () { return [{ type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"] }, { type: _services_basedatos_service__WEBPACK_IMPORTED_MODULE_3__["Basedatos"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/guard/auth.guard.ts":
/*!*************************************!*\
  !*** ./src/app/guard/auth.guard.ts ***!
  \*************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    //comprueba si hay un usuario logueado con un método del service auth
    canActivate(next, state) {
        if (this.authService.isLoggedIn !== true) {
            this.router.navigate(['/home']);
        }
        return true;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






class AuthService {
    constructor(afs, // Inject Firestore service
    afAuth, // Inject Firebase auth service
    router, ngZone) {
        this.afs = afs;
        this.afAuth = afAuth;
        this.router = router;
        this.ngZone = ngZone;
        /* Usamos local storage para guardar info usuario,
        Se borra al hacer log out */
        this.afAuth.authState.subscribe(user => {
            if (user) {
                this.userData = user;
                localStorage.setItem('user', JSON.stringify(this.userData));
                JSON.parse(localStorage.getItem('user'));
            }
            else {
                localStorage.setItem('user', null);
                localStorage.setItem('datauser', null);
                JSON.parse(localStorage.getItem('user'));
                JSON.parse(localStorage.getItem('datauser'));
            }
        });
    }
    // Log in con email/contrasena
    SignIn(email, password) {
        return this.afAuth.signInWithEmailAndPassword(email, password)
            .then((result) => {
            this.fetchDataUser(result.user.uid).then(data => {
                this.auxuserData = data;
                this.ngZone.run(() => {
                    this.router.navigate(['/principal']);
                });
            });
        }).catch((error) => {
            window.alert(error.message);
        });
    }
    //Usado tras subir foto dni a BBDD
    AuxSignIn(id) {
        this.fetchDataUser(id).then(data => {
            this.auxuserData = data;
            this.ngZone.run(() => {
                this.router.navigate(['/principal']);
            });
        });
    }
    /*Guardar info usuario en fichero local,
    al salir se borra*/
    fetchDataUser(uid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const snapshot = yield this.afs.collection('users').doc(uid).get().toPromise().then(data => this.fetcheddata = data);
                const data = snapshot.data();
                localStorage.setItem('datauser', JSON.stringify({ data }));
                JSON.parse(localStorage.getItem('datauser'));
                return data;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    // Registro con email/contrasena
    SignUp(email, password, photo, fullname, username, phone, birth, city, dni) {
        return this.afAuth.createUserWithEmailAndPassword(email, password)
            .then((result) => {
            this.SetUserData(result.user, photo, fullname, username, phone, birth, city, dni);
        }).catch((error) => {
            window.alert(error.message);
            this.router.navigate(['/home']).then(() => {
                window.location.reload();
            });
        });
    }
    /* Salvar toda la info del usuario en firebase tras el registro */
    SetUserData(user, photo, fullname, username, phone, birth, city, dni) {
        const userRef = this.afs.doc(`users/${user.uid}`);
        const userData = {
            uid: user.uid,
            email: user.email,
            displayName: fullname,
            photoURL: photo,
            username: username,
            mobilephone: phone,
            birthday: birth,
            city: city,
            dni: dni,
            photoDNI: "",
            puntos: 0,
        };
        return userRef.set(userData, {
            merge: true
        });
    }
    // Cerrar sesion
    SignOut() {
        return this.afAuth.signOut().then(() => {
            localStorage.removeItem('user');
            localStorage.removeItem('datauser');
            this.router.navigate(['/home']).then(() => {
                // window.location.reload();
            });
        });
    }
    // Resetear contrasena olvidada
    ForgotPassword(passwordResetEmail) {
        return this.afAuth.sendPasswordResetEmail(passwordResetEmail)
            .then(() => {
            window.alert('Password reset email sent, check your inbox.');
        }).catch((error) => {
            window.alert(error);
        });
    }
    // Usado en Guard para restringir el routing si user no logueado
    get isLoggedIn() {
        const user = JSON.parse(localStorage.getItem('user'));
        return (user !== null) ? true : false;
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }, { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/basedatos.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/basedatos.service.ts ***!
  \***********************************************/
/*! exports provided: Basedatos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Basedatos", function() { return Basedatos; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");






class Basedatos {
    constructor(firestore, authService, http) {
        this.firestore = firestore;
        this.authService = authService;
        this.http = http;
        this.mis_puntos = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.ptsObs = this.mis_puntos.asObservable();
        this.actividades = this.firestore.collection('actividades');
        this.usuarios = this.firestore.collection('users');
        if (this.authService.isLoggedIn == true) {
            this.getPuntos(JSON.parse(localStorage.getItem('datauser')).data.uid);
        }
    }
    getActividades() {
        return this.actividades.valueChanges();
    }
    getUsuarios() {
        return this.usuarios.valueChanges();
    }
    addActividad(data) {
        data.id = this.firestore.createId();
        return this.actividades.doc(data.id).set(Object.assign({}, data)).then(r => {
            return data.id;
        });
    }
    getActividad(id) {
        return this.actividades.doc(id).get().toPromise().then(r => {
            return r.data();
        });
    }
    getUsuario(myuid) {
        return this.usuarios.doc(myuid).get().toPromise().then(r => {
            this.mis_puntos.next(r.data().puntos);
            return r.data();
        });
    }
    editActividad(actividad_editada) {
        return this.actividades.doc(actividad_editada.id).set(actividad_editada);
    }
    addUserInActividad(actividad_escogida, tel_user, username) {
        let aux_tel = actividad_escogida.tel_participantes;
        aux_tel.push(tel_user);
        let aux_nombre = actividad_escogida.username_participantes;
        aux_nombre.push(username);
        this.actividades.doc(actividad_escogida.id).update({ "tel_participantes": aux_tel,
            "username_participantes": aux_nombre, "participantes": actividad_escogida.participantes + 1 }).then(() => {
        });
    }
    deleteUserInActividad(actividad_escogida, tel_user, username) {
        let aux_tel = actividad_escogida.tel_participantes;
        aux_tel.splice(aux_tel.indexOf(tel_user), 1);
        let aux_nombre = actividad_escogida.username_participantes;
        ;
        aux_nombre.splice(aux_nombre.indexOf(username), 1);
        this.actividades.doc(actividad_escogida.id).update({ "tel_participantes": aux_tel,
            "username_participantes": aux_nombre, "participantes": actividad_escogida.participantes - 1 }).then(() => {
        });
    }
    puntosUserNewActivity(id, puntos, puntosextra) {
        let result = puntos + puntosextra;
        this.usuarios.doc(id).update({ "puntos": result }).then(() => {
            this.mis_puntos.next(result);
            if ((puntos < 600 && result >= 600) ||
                puntos < 1200 && result >= 1200 ||
                puntos < 2000 && result >= 2000) {
                this.mandarmedalla(result, 1);
            }
            else if ((result < 600 && puntos >= 600) ||
                result < 1200 && puntos >= 1200 ||
                result < 2000 && puntos >= 2000) {
                this.mandarmedalla(result, 0);
            }
        });
    }
    getPuntos(id) {
        this.getUsuario(JSON.parse(localStorage.getItem('datauser')).data.uid).then(data => {
            this.mis_puntos.next(data.puntos);
        });
    }
    //llama a la funcion cloud para mandar un mail al user cuando sube/baja de nivel
    mandarmedalla(puntos, cambio) {
        let gif;
        let medalla;
        let texto;
        if (puntos <= 599) {
            medalla = "https://i.imgur.com/z3sSaID.png";
        }
        else if (puntos > 599 && puntos < 1200) {
            medalla = "https://i.imgur.com/XuDzgFk.png";
        }
        else if (puntos > 1199 && puntos < 2000) {
            medalla = "https://i.imgur.com/XW2NoLu.png";
        }
        else {
            medalla = "https://i.imgur.com/GLXCh0R.png";
        }
        if (cambio == 0) { //bajar puntos
            gif = "https://i.gifer.com/2NgG.gif";
            texto = "Has bajado de nivel";
        }
        else { //subit puntos
            gif = "https://i.gifer.com/2DO.gif";
            texto = "Has subido de nivel";
        }
        var obj = {
            dest_email: JSON.parse(localStorage.getItem('datauser')).data.email,
            dest_nombre: JSON.parse(localStorage.getItem('datauser')).data.displayName,
            dest_gif: gif,
            dest_medalla_foto: medalla,
            texto_nivel: texto,
            dest_puntos: puntos
        };
        this.http.post('https://cors-anywhere.herokuapp.com/https://us-central1-freedom-a2cc5.cloudfunctions.net/cambioMedalla', obj, { responseType: 'text' }).subscribe(res => {
            console.log(res);
        });
    }
    subirDNI(id, urldni) {
        this.usuarios.doc(id).update({ "photoDNI": urldni });
    }
    editUsuario(usuario_editado) {
        return this.usuarios.doc(usuario_editado.uid).set(usuario_editado);
    }
    deleteActividad(id) {
        return this.actividades.doc(id).delete();
    }
    deleteUsuario(username) {
        return this.usuarios.doc(username).delete();
    }
    setfullName(name) {
        this.userFullName = name;
    }
}
Basedatos.ɵfac = function Basedatos_Factory(t) { return new (t || Basedatos)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
Basedatos.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: Basedatos, factory: Basedatos.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Basedatos, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/sidenav.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/sidenav.service.ts ***!
  \*********************************************/
/*! exports provided: SidenavService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavService", function() { return SidenavService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SidenavService {
    constructor() {
    }
    setSidenav(sidenav) {
        this.sidenav = sidenav;
    }
    open() {
        return this.sidenav.open();
    }
    close() {
        return this.sidenav.close();
    }
    toggle() {
        this.sidenav.toggle();
    }
}
SidenavService.ɵfac = function SidenavService_Factory(t) { return new (t || SidenavService)(); };
SidenavService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SidenavService, factory: SidenavService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidenavService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


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
const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyCsf0aDpgzKoIOoaoEz8J0oLnalUO4ZRjc",
        authDomain: "freedom-a2cc5.firebaseapp.com",
        databaseURL: "https://freedom-a2cc5.firebaseio.com",
        projectId: "freedom-a2cc5",
        storageBucket: "freedom-a2cc5.appspot.com",
        messagingSenderId: "940841537562",
        appId: "1:940841537562:web:365433349d4ef13aad81a3",
        measurementId: "G-YFZS8JB901"
    }
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/j2/angularFinal/freedom/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map