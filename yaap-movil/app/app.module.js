"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var common_1 = require("@angular/common");
var http_1 = require("nativescript-angular/http");
var app_routing_1 = require("./app.routing");
var forms_1 = require("nativescript-angular/forms");
var login_service_1 = require("./services/login.service");
var app_component_1 = require("./app.component");
var login_component_1 = require("./login/login.component");
var profile_component_1 = require("./profile/profile.component");
var register_component_1 = require("./register/register.component");
var forgot_component_1 = require("./forgot/forgot.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                profile_component_1.ProfileComponent,
                register_component_1.RegisterComponent,
                forgot_component_1.ForgotComponent
            ],
            bootstrap: [app_component_1.AppComponent],
            imports: [
                nativescript_module_1.NativeScriptModule,
                common_1.CommonModule,
                app_routing_1.AppRoutingModule,
                forms_1.NativeScriptFormsModule,
                http_1.NativeScriptHttpModule,
            ],
            providers: [
                login_service_1.LoginService,
            ],
            schemas: [core_1.NO_ERRORS_SCHEMA],
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
