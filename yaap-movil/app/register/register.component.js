"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var LS = require("nativescript-localstorage");
var page_1 = require("ui/page");
var login_service_1 = require("../services/login.service");
var register_1 = require("../models/register");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(_register, _router, route, page) {
        this._register = _register;
        this._router = _router;
        this.route = route;
        this.page = page;
    }
    RegisterComponent.prototype.onRegister = function (Email, Password, PasswordConfirmation, Name, LastName, Identification, Type, Phone) {
        var _this = this;
        console.log(this.passwordConfirmation);
        console.log(this.password);
        console.log(this.identification);
        if (!Email || !Password || !PasswordConfirmation || !Name || !LastName || !Identification || !Type || !Phone) {
            return alert('Por favor completar todos los campos.');
        }
        if (this.password !== this.passwordConfirmation) {
            return alert("contraseñas no cohinciden");
        }
        console.log(this.email);
        if (this.email.length < 1) {
            return alert("ingrese un email");
        }
        this.register.name = this.name;
        this.register.lastName = this.lastName;
        this.register.phone = this.phone;
        this.register.type = this.type;
        this.register.email = this.email;
        this.register.identification = this.identification;
        this._register.signUpUser(this.register).subscribe(function (response) {
            if (!_this.register) {
                alert('error en el servidor');
            }
            else {
                _this.register = response.register;
                LS.setItem('token', response.token);
                LS.setItem('id', response.id);
                console.log(LS.getItem('token'), " ", response.email, "    ", _this.register);
                _this._router.navigate(['profile'], { clearHistory: true });
            }
        }, function (err) {
            if (err.status == 404) {
                return alert("el usuario existe" + "    " + err);
            }
            else if (err.status == 0) {
                return alert("error, no hay conexion" + "    " + err);
            }
            else if (err.status == 500) {
                return alert("error al crear el usuario        " + err);
            }
            else {
                return alert("error de servidor" + "    " + err);
            }
        });
    };
    RegisterComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        this.register = new register_1.Register("", "", "", "", "", "", "");
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-register',
            moduleId: module.id,
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.css']
        }),
        __metadata("design:paramtypes", [login_service_1.LoginService,
            router_2.RouterExtensions,
            router_1.ActivatedRoute,
            page_1.Page])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
