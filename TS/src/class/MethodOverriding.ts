class PersonMO {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

class EmployeeMO extends PersonMO {
    private employeeId: number;

    constructor(name: string, age: number, employeeId: number) {
        super(name, age);
        this.employeeId = employeeId;
    }

    // Override the greet method
    greet() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my employee ID is ${this.employeeId}.`);
    }
}

let employeeMO = new EmployeeMO("Employee MO", 30, 1234);
employeeMO.greet();