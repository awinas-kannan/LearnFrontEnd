export class PublicPerson {
    public name: string;
    public age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
