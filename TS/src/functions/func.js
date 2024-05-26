//TypeScript provides various ways to define and use functions, each with its own features and syntax.

// TypeScript supports various ways to define and use functions, each suitable for different scenarios. These include:

// Function Declarations: Named functions defined using the function keyword.
// Function Expressions: Anonymous functions assigned to variables.
// Arrow Functions: Concise syntax, especially useful for inline functions.
// Optional and Default Parameters: Making parameters optional or giving them default values.
// Rest Parameters: Handling an indefinite number of arguments.
// Function Overloading: Multiple function signatures for different parameter types.
// Function Types: Explicitly typing functions and their parameters.
// Methods: Defining functions within objects and classes.
// Higher-Order Functions: Functions that operate on other functions


//Function Declaration
function add(x, y) {
    return x + y;
}
console.log(add(2, 3));
// Function Expression
var addFE = function (x, y) {
    return x + y;
};
console.log(addFE(2, 3)); // Output: 5
// Arrow Function (Lambda)
var addLF = function (x, y) {
    return x + y;
};
var addLF1 = function (x, y) { return x + y; };
console.log(addLF(2, 3)); // Output: 5
console.log(addLF1(2, 3)); // Output: 5
//Optional and Default Parameters
function greet(name, greeting) {
    if (greeting) {
        return "".concat(greeting, ", ").concat(name, "!");
    }
    else {
        return "Hello, ".concat(name, "!");
    }
}
console.log(greet("Alice")); // Output: Hello, Alice!
console.log(greet("Alice", "Good morning")); // Output: Good morning, Alice!
// Default Parameters
// Parameters can have default values, which are used if no value is provided.
function greetDP(name, greeting) {
    if (greeting === void 0) { greeting = "Hello"; }
    return "".concat(greeting, ", ").concat(name, "!");
}
console.log(greetDP("Alice")); // Output: Hello, Alice!
console.log(greetDP("Alice", "Good morning")); // Output: Good morning, Alice!
// Rest Parameters
// Allows a function to accept an indefinite number of arguments as an array.
function sum() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (acc, curr) { return acc + curr; }, 100);
}
console.log(sum(1, 2, 3, 4, 5)); // Output: 15
function display(value) {
    if (typeof value === "string") {
        console.log("String value: ".concat(value));
    }
    else {
        console.log("Number value: ".concat(value));
    }
}
display("Hello"); // Output: String value: Hello
display(42); // Output: Number value: 42
// Function Types
// Functions can be typed, including their parameters and return type.
var addFT;
addFT = function (x, y) {
    return x + y;
};
console.log(addFT(1, 1));
// Methods in Objects and Classes
// 1 Methods in Objects
var calculator = {
    add: function (x, y) {
        return x + y;
    }
};
console.log(calculator.add(2, 3)); // Output: 5
// 2 Methods in Classes
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (x, y) {
        return x + y;
    };
    return Calculator;
}());
var calculatorC = new Calculator();
console.log(calculatorC.add(2, 3)); // Output: 5
// Higher-Order Functions
// Functions that take other functions as arguments or return them.
function applyOperation(x, y, operation) {
    return operation(x, y);
}
var addHO = function (a, b) { return a + b; };
var multiplyHO = function (a, b) { return a * b; };
console.log(applyOperation(5, 3, addHO)); // Output: 8
console.log(applyOperation(5, 3, multiplyHO)); // Output: 15
