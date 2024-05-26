"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicPerson = void 0;
var PublicPerson = /** @class */ (function () {
    function PublicPerson(name, age) {
        this.name = name;
        this.age = age;
    }
    PublicPerson.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old."));
    };
    return PublicPerson;
}());
exports.PublicPerson = PublicPerson;
