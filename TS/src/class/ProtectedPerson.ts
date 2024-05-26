class ProtectedPerson {
    protected name: string;
    protected age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

export class Employee extends ProtectedPerson {
    private employeeId: number;

    constructor(name: string, age: number, employeeId: number) {
        super(name, age);
        this.employeeId = employeeId;
    }

    public showEmployeeId() {
        console.log(`My employee ID is ${this.employeeId}`);
    }
}

