//An array is a type that can hold a collection of values of the same type.
var list = [1, 2, 3, 4, 5];
var names = ["Alice", "Bob", "Charlie"];
list.push(11);
list.push(19);
list.forEach(function (e) {
    console.log(e + 6);
});
console.log(list); // Output: [1, 2, 3, 4, 5]
console.log(names); // Output: ["Alice", "Bob", "Charlie"]
var namess = [];
namess.push("Dylan"); // no error
// names.push(3); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
var ronames = ["Dylan"];
// ronames.push("Jack"); // Error: Property 'push' does not exist on type 'readonly string[]'.
// try removing the readonly modifier and see if it works?
//Type Inference
//TypeScript can infer the type of an array if it has values.
var numbers = [1, 2, 3]; // inferred to type number[]
numbers.push(4); // no error
// comment line below out to see the successful assignment
// numbers.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
var head = numbers[0]; // no error
console.log(head);
////////////////////////////////////////////////
// A tuple is a typed array with a pre-defined length and types for each index.
// Tuples are great because they allow each element in the array to be a known type of value.
// To define a tuple, specify the type of each element in the array:
var ourTuple;
// initialize correctly
ourTuple = [5, false, 'Coding God was here'];
var ourTuple1 = [5, false, 'Coding God was here'];
console.log(ourTuple1);
ourTuple1.push('test');
console.log(ourTuple1);
// define our readonly tuple
var ourReadonlyTuple = [5, true, 'The Real Coding God'];
// throws error as it is readonly.
// ourReadonlyTuple.push('Coding God took a day off');
