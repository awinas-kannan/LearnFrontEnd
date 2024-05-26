//The any type is a type that can hold any value. It disables type checking for that variable.
var randomValue = "Hello";
randomValue = 42;
randomValue = true;
console.log(randomValue); // Output: true
//The unknown type is similar to any, but safer. You need to perform some type checking before using it.
var uncertainValue = 4;
uncertainValue = "Could be anything";
// To use the value, you need to check its type first
if (typeof uncertainValue === "string") {
    console.log(uncertainValue.toUpperCase()); // Output: COULD BE ANYTHING
}
//The void type is used for functions that do not return a value.
function logMessage(message) {
    console.log(message);
}
logMessage("This is a message"); // Output: This is a message
//null and undefined are types with only one value each: the null value and the undefined value.
var u = undefined;
var n = null;
console.log(u); // Output: undefined
console.log(n); // Output: null
function displayUserInfo(name, age, isAdmin) {
    console.log("Name: ".concat(name));
    console.log("Age: ".concat(age));
    console.log("Is Admin: ".concat(isAdmin));
}
displayUserInfo("Alice", 30, true);
// Output:
// Name: Alice
// Age: 30
// Is Admin: true
