let car: { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
}

console.log(car)

//Example with an optional property

const car1: { type: string, mileage?: number } = { // no error
    type: "Toyota"
};
console.log(car1)
car1.mileage = 2000;
console.log(car1)