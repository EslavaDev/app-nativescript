"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
//import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
var LoginService = /** @class */ (function () {
    function LoginService(_http) {
        this._http = _http;
        this.headers = new http_1.Headers();
        this.url = 'http://31.220.55.37:3800/';
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Authorization', "Bearer " + localStorage.getItem("token"));
    }
    LoginService.prototype.signIn = function (login) {
        var json = JSON.stringify(login);
        var params = json;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        console.log(json + "    " + params);
        return this._http.post(this.url + 'workerSignIn', params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    LoginService.prototype.signUpUser = function (register) {
        var json = JSON.stringify(register);
        var params = json;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this._http.post(this.url + 'workerSignUp/', params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    LoginService.prototype.Forgot = function (login) {
        var json = JSON.stringify(login);
        var params = json;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this._http.post(this.url + 'workers/recuperate', params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    LoginService.prototype.getUser = function (id) {
        console.log(this.headers);
        return this._http.get(this.url + 'oneWorker/' + id, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    LoginService.prototype.editUser = function (id, user) {
        var json = JSON.stringify(user);
        var params = json;
        return this._http.put(this.url + 'workerUpdate/' + id, params, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    LoginService.prototype.changedPassword = function (id, user) {
        console.log(this.headers);
        var json = JSON.stringify(user);
        var params = json;
        return this._http.post(this.url + 'changed/' + id, params, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    LoginService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
