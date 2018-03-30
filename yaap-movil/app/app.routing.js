"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var login_component_1 = require("./login/login.component");
var profile_component_1 = require("./profile/profile.component");
var register_component_1 = require("./register/register.component");
var forgot_component_1 = require("./forgot/forgot.component");
var excludedComponents = [];
var APP_ROUTES = [
    {
        path: "", component: login_component_1.LoginComponent
    },
    {
        path: "login", component: login_component_1.LoginComponent
    },
    {
        path: "profile", component: profile_component_1.ProfileComponent
    },
    {
        path: "register", component: register_component_1.RegisterComponent
    },
    {
        path: "forgot", component: forgot_component_1.ForgotComponent
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(APP_ROUTES)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
