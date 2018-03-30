"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Register = /** @class */ (function () {
    function Register(email, password, name, lastName, identification, type, phone) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.lastName = lastName;
        this.identification = identification;
        this.type = type;
        this.phone = phone;
    }
    return Register;
}());
exports.Register = Register;
