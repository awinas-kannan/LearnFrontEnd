//https://www.w3schools.com/typescript/typescript_aliases_and_interfaces.php


// TypeScript allows types to be defined separately from the variables that use them.

// Aliases and Interfaces allows types to be easily shared between different variables/objects.

//Type Aliases

type CarYear = number
type CarType = string
type CarModel = string
type Car = {
    year: CarYear,
    type: CarType,
    model: CarModel
}

const carYear: CarYear = 2001
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla"

const carz: Car = {
    year: carYear,
    type: carType,
    model: carModel
};
console.log(carz)
//Using Interfaces to Define Object Types

interface User {
    name: string;
    age: number;
}

let user: User = {
    name: "Alice",
    age: 25
};
console.log(user)

//Optional Properties

interface User1 {
    name: string;
    class?: number; // age is optional
}
let user1: User1 = {
    name: "Alice"
};

let user2: User1 = {
    name: "Bob",
    class: 30
};

console.log(user1)
console.log(user2)

//Readonly Properties


interface UserRO {
    readonly id: number;
    name: string;
}

let userRO: UserRO = {
    id: 1,
    name: "Alice"
};
console.log(userRO)

userRO.name = "Bob"; // Allowed
// userRO.id = 2; // Error: Cannot assign to 'id' because it is a read-only property

console.log(userRO); // Output: { id: 1, name: 'Bob' }


//Index Signatures
interface StringDictionary {
    [key: string]: string;
}

let dictionary: StringDictionary = {
    firstName: "Alice",
    lastName: "Smith"
};

dictionary["middleName"] = "Marie";
dictionary.inital = "M R";

console.log(dictionary); // Output: { firstName: 'Alice', lastName: 'Smith', middleName: 'Marie' }

//Function Types in Objects

interface UserF {
    name: string;
    age: number;
    greet: () => string; // Method returning a string
}

let userF: UserF = {
    name: "Alice",
    age: 25,
    greet: function () {
        return `Hello, my name is ${this.name}`;
    }
};

console.log(userF.greet()); // Output: Hello, my name is Alice

//Extending Interfaces

interface Person {
    name: string;
    age: number;
}

interface Employee extends Person {
    readonly employeeId: number;
}

let employee: Employee = {
    name: "Alice",
    age: 25,
    employeeId: 1234
};
// employee.employeeId =1
console.log(employee); // Output: { name: 'Alice', age: 25, employeeId: 1234 }


///Intersection Types

interface Address {
    street: string;
    city: string;
}

interface Contact {
    email: string;
    phone: string;
}

type EmployeeDetails = Person & Address & Contact;


let employeeDetails: EmployeeDetails = {
    name: "Alice",
    age: 25,
    street: "123 Main St",
    city: "Somewhere",
    email: "alice@example.com",
    phone: "555-1234"
};

console.log(employeeDetails);
