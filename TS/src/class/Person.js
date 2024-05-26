"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Object.defineProperty(Person.prototype, "$name", {
        /**
         * Getter $name
         * @return {string}
         */
        get: function () {
            return this.name;
        },
        /**
         * Setter $name
         * @param {string} value
         */
        set: function (value) {
            this.name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "$age", {
        /**
         * Getter $age
         * @return {number}
         */
        get: function () {
            return this.age;
        },
        /**
         * Setter $age
         * @param {number} value
         */
        set: function (value) {
            this.age = value;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old."));
    };
    return Person;
}());
exports.Person = Person;
