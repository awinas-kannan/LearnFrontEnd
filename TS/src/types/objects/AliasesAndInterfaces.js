//https://www.w3schools.com/typescript/typescript_aliases_and_interfaces.php
var carYear = 2001;
var carType = "Toyota";
var carModel = "Corolla";
var carz = {
    year: carYear,
    type: carType,
    model: carModel
};
console.log(carz);
var user = {
    name: "Alice",
    age: 25
};
console.log(user);
var user1 = {
    name: "Alice"
};
var user2 = {
    name: "Bob",
    class: 30
};
console.log(user1);
console.log(user2);
var userRO = {
    id: 1,
    name: "Alice"
};
console.log(userRO);
userRO.name = "Bob"; // Allowed
// userRO.id = 2; // Error: Cannot assign to 'id' because it is a read-only property
console.log(userRO); // Output: { id: 1, name: 'Bob' }
var dictionary = {
    firstName: "Alice",
    lastName: "Smith"
};
dictionary["middleName"] = "Marie";
dictionary.inital = "M R";
console.log(dictionary); // Output: { firstName: 'Alice', lastName: 'Smith', middleName: 'Marie' }
var userF = {
    name: "Alice",
    age: 25,
    greet: function () {
        return "Hello, my name is ".concat(this.name);
    }
};
console.log(userF.greet()); // Output: Hello, my name is Alice
var employee = {
    name: "Alice",
    age: 25,
    employeeId: 1234
};
// employee.employeeId =1
console.log(employee); // Output: { name: 'Alice', age: 25, employeeId: 1234 }
var employeeDetails = {
    name: "Alice",
    age: 25,
    street: "123 Main St",
    city: "Somewhere",
    email: "alice@example.com",
    phone: "555-1234"
};
console.log(employeeDetails);
