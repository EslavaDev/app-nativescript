"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(email, password, direction, country, name, lastName, identification, counter, status, type, signUpdate, phone) {
        this.email = email;
        this.password = password;
        this.direction = direction;
        this.country = country;
        this.name = name;
        this.lastName = lastName;
        this.identification = identification;
        this.counter = counter;
        this.status = status;
        this.type = type;
        this.signUpdate = signUpdate;
        this.phone = phone;
    }
    return User;
}());
exports.User = User;
