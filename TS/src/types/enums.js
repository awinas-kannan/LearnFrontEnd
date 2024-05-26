//https://www.w3schools.com/typescript/typescript_enums.php
//Numeric Enums - Default
//By default, enums will initialize the first value to 0 and add 1 to each additional value:
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 0] = "North";
    CardinalDirections[CardinalDirections["East"] = 1] = "East";
    CardinalDirections[CardinalDirections["South"] = 2] = "South";
    CardinalDirections[CardinalDirections["West"] = 3] = "West";
})(CardinalDirections || (CardinalDirections = {}));
var dir = CardinalDirections.East;
console.log(dir);
//You can also assign custom values to enum members:
var CardinalDirections1;
(function (CardinalDirections1) {
    CardinalDirections1[CardinalDirections1["North"] = 5] = "North";
    CardinalDirections1[CardinalDirections1["East"] = 6] = "East";
    CardinalDirections1[CardinalDirections1["South"] = 7] = "South";
    CardinalDirections1[CardinalDirections1["West"] = 8] = "West";
})(CardinalDirections1 || (CardinalDirections1 = {}));
var dir1 = CardinalDirections1.East;
console.log(dir1);
//Numeric Enums - Fully Initialized
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);
//String Enums
var CardinalDirectionsStr;
(function (CardinalDirectionsStr) {
    CardinalDirectionsStr["North"] = "North";
    CardinalDirectionsStr["East"] = "East";
    CardinalDirectionsStr["South"] = "South";
    CardinalDirectionsStr["West"] = "West";
})(CardinalDirectionsStr || (CardinalDirectionsStr = {}));
;
// logs "North"
console.log(CardinalDirectionsStr.North);
// logs "West"
console.log(CardinalDirectionsStr.West);
