"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrivatePerson = void 0;
var PrivatePerson = /** @class */ (function () {
    function PrivatePerson(name, age) {
        this.name = name;
        this.age = age;
    }
    PrivatePerson.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old."));
    };
    return PrivatePerson;
}());
exports.PrivatePerson = PrivatePerson;
