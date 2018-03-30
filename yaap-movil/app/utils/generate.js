"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generate = /** @class */ (function () {
    function generate() {
    }
    generate.generateP = function () {
        var id = Math.floor(Math.random() * 100000000000000000).toString(36);
        var id2 = Math.floor(Math.random() * 100000000000000000).toString(36);
        var res = id + Math.floor(Math.random() * 100000000000000000).toString(36) + id2;
        return res;
    };
    return generate;
}());
exports.generate = generate;
