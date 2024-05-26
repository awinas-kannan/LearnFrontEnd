//An array is a type that can hold a collection of values of the same type.

let list: number[] = [1, 2, 3, 4, 5];
// let listZZ: Array<number> = [1, 2, 3];

let names: string[] = ["Alice", "Bob", "Charlie"];
list.push(11)
list.push(19)
list.forEach(e => {
    console.log(e + 6)
})

console.log(list); // Output: [1, 2, 3, 4, 5]
console.log(names); // Output: ["Alice", "Bob", "Charlie"]

const namess: string[] = [];
namess.push("Dylan"); // no error
// names.push(3); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.


const ronames: readonly string[] = ["Dylan"];
// ronames.push("Jack"); // Error: Property 'push' does not exist on type 'readonly string[]'.
// try removing the readonly modifier and see if it works?

//Type Inference
//TypeScript can infer the type of an array if it has values.


const numbers = [1, 2, 3]; // inferred to type number[]
numbers.push(4); // no error
// comment line below out to see the successful assignment
// numbers.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
let head: number = numbers[0]; // no error
console.log(head)


////////////////////////////////////////////////


// A tuple is a typed array with a pre-defined length and types for each index.

// Tuples are great because they allow each element in the array to be a known type of value.

// To define a tuple, specify the type of each element in the array:

let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, 'Coding God was here'];

let ourTuple1: [number, boolean, string] = [5, false, 'Coding God was here'];

console.log(ourTuple1)
ourTuple1.push('test')
console.log(ourTuple1)


// define our readonly tuple
const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];
// throws error as it is readonly.
// ourReadonlyTuple.push('Coding God took a day off');


