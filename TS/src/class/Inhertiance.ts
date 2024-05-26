class Person {
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

class Employee1 extends Person {
    employeeId: number;

    constructor(name: string, age: number, employeeId: number) {
        super(name, age); // Call the parent class constructor
        this.employeeId = employeeId;
    }

    showEmployeeId() {
        console.log(`My employee ID is ${this.employeeId}`);
    }
}

let emp = new Employee1("Awinas", 30, 1234);
emp.greet(); // Output: Hello, my name is Bob and I am 30 years old.
emp.showEmployeeId(); // Output: My employee ID is 1234
