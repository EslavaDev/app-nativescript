"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var LS = require("nativescript-localstorage");
var page_1 = require("ui/page");
var login_service_1 = require("../services/login.service");
var login_1 = require("../models/login");
var generate_1 = require("../utils/generate");
var ForgotComponent = /** @class */ (function () {
    function ForgotComponent(_loginService, router, route, page) {
        this._loginService = _loginService;
        this.router = router;
        this.route = route;
        this.page = page;
    }
    ForgotComponent.prototype.onForgot = function (emailForm) {
        var _this = this;
        if (!emailForm) {
            return alert('Por favor completar todos los campos.');
        }
        else {
            this.login.password = this.password;
            this._loginService.Forgot(this.login).subscribe(function (res) {
                if (!_this.login) {
                    return alert('Error al enviar el email.');
                }
                else {
                    _this.login = res.login;
                    LS.removeItem('token');
                    LS.removeItem('status11');
                    LS.removeItem('status1');
                    LS.removeItem('status');
                    LS.removeItem('id');
                    LS.clear();
                    return alert('Tu nueva contraseña llegara en breve instantes en a tu correo.');
                    //setTimeout( "" , 50000);
                }
                //{clearHistory : true}
            }, function (err) {
                if (err.status == 404) {
                    return alert('Email Incorrecto');
                }
                else {
                    return alert('Error en el servidor');
                }
            });
        }
    };
    ForgotComponent.prototype.ngOnInit = function () {
        console.log(LS.getItem('token'));
        console.log(LS.getItem('id'));
        this.page.actionBarHidden = true;
        this.password = generate_1.generate.generateP();
        this.login = new login_1.Login("", "");
    };
    ForgotComponent = __decorate([
        core_1.Component({
            selector: 'app-forgot',
            moduleId: module.id,
            templateUrl: './forgot.component.html',
            styleUrls: ['./forgot.component.css']
        }),
        __metadata("design:paramtypes", [login_service_1.LoginService,
            router_2.RouterExtensions,
            router_1.ActivatedRoute,
            page_1.Page])
    ], ForgotComponent);
    return ForgotComponent;
}());
exports.ForgotComponent = ForgotComponent;
