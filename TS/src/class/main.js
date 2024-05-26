"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person_1 = require("./Person");
var PrivatePerson_1 = require("./PrivatePerson");
var ProtectedPerson_1 = require("./ProtectedPerson");
var PublicPerson_1 = require("./PublicPerson");
var person = new Person_1.Person("Alice", 25);
person.greet(); // Output: Hello, my name is Alice and I am 25 years old.
console.log(person.$name);
var publicPerson = new PublicPerson_1.PublicPerson("PublicPerson", 25);
publicPerson.greet();
var privatePerson = new PrivatePerson_1.PrivatePerson("PrivatePerson", 25);
privatePerson.greet();
// privatePerson.name;
var employee = new ProtectedPerson_1.Employee("Bob", 30, 1234);
employee.greet(); // Output: Hello, my name is Bob and I am 30 years old.
employee.showEmployeeId(); // Output: My employee ID is 1234
