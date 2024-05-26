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
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old."));
    };
    return Person;
}());
var Employee1 = /** @class */ (function (_super) {
    __extends(Employee1, _super);
    function Employee1(name, age, employeeId) {
        var _this = _super.call(this, name, age) || this; // Call the parent class constructor
        _this.employeeId = employeeId;
        return _this;
    }
    Employee1.prototype.showEmployeeId = function () {
        console.log("My employee ID is ".concat(this.employeeId));
    };
    return Employee1;
}(Person));
var emp = new Employee1("Awinas", 30, 1234);
emp.greet(); // Output: Hello, my name is Bob and I am 30 years old.
emp.showEmployeeId(); // Output: My employee ID is 1234
