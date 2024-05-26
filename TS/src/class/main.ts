import { Person } from "./Person";
import { PrivatePerson } from "./PrivatePerson";
import { Employee } from "./ProtectedPerson";
import { PublicPerson } from "./PublicPerson";

let person = new Person("Alice", 25);
person.greet(); // Output: Hello, my name is Alice and I am 25 years old.
console.log(person.$name)

let publicPerson = new PublicPerson("PublicPerson", 25);
publicPerson.greet(); 


let privatePerson = new PrivatePerson("PrivatePerson", 25);
privatePerson.greet(); 
// privatePerson.name;

let employee = new Employee("Bob", 30, 1234);
employee.greet(); // Output: Hello, my name is Bob and I am 30 years old.
employee.showEmployeeId(); // Output: My employee ID is 1234
