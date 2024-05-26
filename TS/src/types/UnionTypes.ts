//https://www.w3schools.com/typescript/typescript_union_types.php

function printStatusCode(code: string | number) {
    console.log(`My status code is ${code}.`)
}
printStatusCode(404);
printStatusCode('404');