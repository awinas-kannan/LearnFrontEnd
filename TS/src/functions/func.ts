//TypeScript provides various ways to define and use functions, each with its own features and syntax.


//Function Declaration


function add(x: number, y: number): number {
    return x + y;
}
console.log(add(2, 3));



// Function Expression

const addFE = function (x: number, y: number): number {
    return x + y;
}
console.log(addFE(2, 3)); // Output: 5

// Arrow Function (Lambda)

const addLF = (x: number, y: number): number => {
    return x + y;
}
const addLF1 = (x: number, y: number): number => x + y;
console.log(addLF(2, 3)); // Output: 5
console.log(addLF1(2, 3)); // Output: 5

//Optional and Default Parameters

function greet(name: string, greeting?: string): string {
    if (greeting) {
        return `${greeting}, ${name}!`;
    } else {
        return `Hello, ${name}!`;
    }
}
console.log(greet("Alice")); // Output: Hello, Alice!
console.log(greet("Alice", "Good morning")); // Output: Good morning, Alice!

// Default Parameters
// Parameters can have default values, which are used if no value is provided.

function greetDP(name: string, greeting: string = "Hello"): string {
    return `${greeting}, ${name}!`;
}
console.log(greetDP("Alice")); // Output: Hello, Alice!
console.log(greetDP("Alice", "Good morning")); // Output: Good morning, Alice!


// Rest Parameters
// Allows a function to accept an indefinite number of arguments as an array.
function sum(...numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 100);
}
console.log(sum(1, 2, 3, 4, 5)); // Output: 15

// Function Overloading
// TypeScript allows defining multiple signatures for a function. The actual implementation must handle all the cases.

function display(value: string): void;
function display(value: number): void;
function display(value: string | number): void {
    if (typeof value === "string") {
        console.log(`String value: ${value}`);
    } else {
        console.log(`Number value: ${value}`);
    }
}
display("Hello"); // Output: String value: Hello
display(42); // Output: Number value: 42

// Function Types
// Functions can be typed, including their parameters and return type.

let addFT: (x: number, y: number) => number;
addFT = function (x: number, y: number): number {
    return x + y;
}
console.log(addFT(1, 1))

// Methods in Objects and Classes

// 1 Methods in Objects

const calculator = {
    add(x: number, y: number): number {
        return x + y;
    }
};
console.log(calculator.add(2, 3)); // Output: 5

// 2 Methods in Classes
class Calculator {
    add(x: number, y: number): number {
        return x + y;
    }
}

const calculatorC = new Calculator();
console.log(calculatorC.add(2, 3)); // Output: 5

// Higher-Order Functions
// Functions that take other functions as arguments or return them.

function applyOperation(x: number, y: number,
    operation: (a: number, b: number) => number): number {
    return operation(x, y);
}
const addHO = (a: number, b: number): number => a + b;
const multiplyHO = (a: number, b: number): number => a * b;

console.log(applyOperation(5, 3, addHO)); // Output: 8
console.log(applyOperation(5, 3, multiplyHO)); // Output: 15
