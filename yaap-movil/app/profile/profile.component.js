"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var LS = require("nativescript-localstorage");
var page_1 = require("ui/page");
var login_service_1 = require("../services/login.service");
var user_1 = require("../models/user");
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(_UserService, _router, route, page) {
        this._UserService = _UserService;
        this._router = _router;
        this.route = route;
        this.page = page;
        this.date = Date.now();
    }
    ProfileComponent.prototype.getUser = function (_id2) {
        var _this = this;
        this._UserService.getUser(_id2).subscribe(function (response) {
            if (!_this.favorito) {
                alert('error en el servidor');
            }
            else {
                console.log(_this.name + _this.lastName + response.favorito._id);
                _this.favorito = response.favorito;
                _this.name = _this.favorito.name;
                _this.lastName = _this.favorito.lastName;
                _this.type = _this.favorito.type;
                _this.country = _this.favorito.country;
                _this.direction = _this.favorito.direction;
                _this.phone = _this.favorito.phone;
                _this.identification = _this.favorito.identification;
                _this.email = _this.favorito.email;
                _this.signUpdate = _this.favorito.signUpdate;
                _this.status = _this.favorito.status;
                _this.status = _this.favorito.status;
            }
        }, function (err) {
            if (err.status == 403) {
                return alert("no tienes autorizacion" + "    " + err);
            }
            if (err.status == 401) {
                return alert("Token ha expirado" + "    " + err);
            }
            if (err.status == 500) {
                return alert("token invalido" + "    " + err);
            }
            if (err.status == 0) {
                return alert("error no hay conexion" + "    " + err);
            }
            else {
                return alert("error de peticion");
            }
        });
    };
    ProfileComponent.prototype.ngOnInit = function () {
        this.favorito = new user_1.User("", "", "", "", "", "", "", 0, true, "", this.date, "");
        this._id = LS.getItem('id');
        this.getUser(LS.getItem('id'));
        if (LS.getItem('token') == null) {
            return this._router.navigate(['']);
        }
    };
    ProfileComponent = __decorate([
        core_1.Component({
            selector: 'profile',
            moduleId: module.id,
            templateUrl: './profile.component.html',
            styleUrls: ['./profile.component.css']
        }),
        __metadata("design:paramtypes", [login_service_1.LoginService,
            router_2.RouterExtensions,
            router_1.ActivatedRoute,
            page_1.Page])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
