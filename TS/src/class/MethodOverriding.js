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
var PersonMO = /** @class */ (function () {
    function PersonMO(name, age) {
        this.name = name;
        this.age = age;
    }
    PersonMO.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old."));
    };
    return PersonMO;
}());
var EmployeeMO = /** @class */ (function (_super) {
    __extends(EmployeeMO, _super);
    function EmployeeMO(name, age, employeeId) {
        var _this = _super.call(this, name, age) || this;
        _this.employeeId = employeeId;
        return _this;
    }
    // Override the greet method
    EmployeeMO.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name, ", I am ").concat(this.age, " years old, and my employee ID is ").concat(this.employeeId, "."));
    };
    return EmployeeMO;
}(PersonMO));
var employeeMO = new EmployeeMO("Employee MO", 30, 1234);
employeeMO.greet(); // Outp
