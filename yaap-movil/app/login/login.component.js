"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var LS = require("nativescript-localstorage");
var page_1 = require("ui/page");
var login_service_1 = require("../services/login.service");
var login_1 = require("../models/login");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(_loginService, router, route, page) {
        this._loginService = _loginService;
        this.router = router;
        this.route = route;
        this.page = page;
    }
    LoginComponent.prototype.onLogin = function (emailForm, passwordForm) {
        var _this = this;
        if (!emailForm || !passwordForm) {
            return alert('Por favor completar todos los campos.');
        }
        if (LS.getItem('status11') !== null)
            return alert("tu cuenta ha sido bloqueada");
        this.login.email = this.email;
        this.login.password = this.password;
        console.log(this.login);
        this._loginService.signIn(this.login).subscribe(function (res) {
            if (!_this.login) {
                return console.log('Error al iniciar la sesion.');
            }
            else {
                _this.login = res.login;
                if (LS.getItem('status1') !== null) {
                    LS.removeItem('status1');
                }
                else {
                    LS.removeItem('status');
                }
                LS.setItem('token', res.token);
                LS.setItem('id', res.id);
                console.log(LS.getItem('token'));
                _this.router.navigate(["profile"], { clearHistory: true });
            }
            //{clearHistory : true}
        }, function (err) {
            if (err.status == 404) {
                if (LS.getItem('status1') !== null) {
                    LS.removeItem('status1');
                    LS.setItem('status11', "111");
                }
                else if (LS.getItem('status') !== null) {
                    LS.removeItem('status');
                    LS.setItem('status1', "11");
                }
                else {
                    LS.setItem('status', "1");
                }
                return console.log('Email o contraseña Incorrecta');
            }
            else {
                return console.log('Error en el servidor');
            }
        });
    };
    LoginComponent.prototype.tokens = function () {
        LS.removeItem('status11');
        LS.removeItem('status1');
        LS.removeItem('status');
        LS.removeItem('token');
        LS.removeItem('id');
        LS.clear();
    };
    LoginComponent.prototype.ngOnInit = function () {
        console.log(LS.getItem('token'));
        console.log(LS.getItem('id'));
        this.page.actionBarHidden = true;
        if (LS.getItem('token')) {
            return this.router.navigate(["/profile"]);
        }
        this.login = new login_1.Login("", "");
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            moduleId: module.id,
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        }),
        __metadata("design:paramtypes", [login_service_1.LoginService,
            router_2.RouterExtensions,
            router_1.ActivatedRoute,
            page_1.Page])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
