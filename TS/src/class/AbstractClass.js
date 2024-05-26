var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var PersonABS = /** @class */ (function () {
    function PersonABS(name, age) {
        this.name = name;
        this.age = age;
    }
    return PersonABS;
}());
var EmployeeABS = /** @class */ (function (_super) {
    __extends(EmployeeABS, _super);
    function EmployeeABS(name, age, employeeId) {
        var _this = _super.call(this, name, age) || this;
        _this.employeeId = employeeId;
        return _this;
    }
    // Implement the abstract method
    EmployeeABS.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name, ", I am ").concat(this.age, " years old, and my employee ID is ").concat(this.employeeId, "."));
    };
    return EmployeeABS;
}(PersonABS));
// let person = new PersonABS("Alice", 25); // Error: Cannot create an instance of an abstract class.
var employeeABS = new EmployeeABS("ABSTRACT EMP", 30, 1234);
employeeABS.greet(); // Output: Hello, my name is Bob, I am 30 years old, and my employee ID is 1234.
