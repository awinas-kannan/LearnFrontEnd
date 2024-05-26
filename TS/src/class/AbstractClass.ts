abstract class PersonABS {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    abstract greet(): void; // Abstract method
}

class EmployeeABS extends PersonABS {
    employeeId: number;

    constructor(name: string, age: number, employeeId: number) {
        super(name, age);
        this.employeeId = employeeId;
    }

    // Implement the abstract method
    greet() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my employee ID is ${this.employeeId}.`);
    }
}

// let person = new PersonABS("Alice", 25); // Error: Cannot create an instance of an abstract class.
let employeeABS = new EmployeeABS("ABSTRACT EMP", 30, 1234);
employeeABS.greet(); // Output: Hello, my name is Bob, I am 30 years old, and my employee ID is 1234.