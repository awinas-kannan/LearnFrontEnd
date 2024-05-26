//Static members (properties and methods) belong to the class itself, rather than to instances of the class.
var Helper = /** @class */ (function () {
    function Helper() {
    }
    Helper.greet = function () {
        console.log("Hello, this is a static method.");
    };
    return Helper;
}());
Helper.greet(); // Output: Hello, this is a static method.
