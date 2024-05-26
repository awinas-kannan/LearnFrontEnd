//https://www.w3schools.com/typescript/typescript_enums.php

//Numeric Enums - Default

//By default, enums will initialize the first value to 0 and add 1 to each additional value:

enum CardinalDirections {
    North,
    East,
    South,
    West
}

let dir = CardinalDirections.East;
console.log(dir)

//You can also assign custom values to enum members:


enum CardinalDirections1 {
    North = 5,
    East,
    South,
    West
}

let dir1 = CardinalDirections1.East;
console.log(dir1)

//Numeric Enums - Fully Initialized

enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
}
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);


//String Enums

enum CardinalDirectionsStr {
    North = 'North',
    East = "East",
    South = "South",
    West = "West"
};
// logs "North"
console.log(CardinalDirectionsStr.North);
// logs "West"
console.log(CardinalDirectionsStr.West);