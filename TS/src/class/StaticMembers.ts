//Static members (properties and methods) belong to the class itself, rather than to instances of the class.


class Helper {
    static greet(): void {
        console.log("Hello, this is a static method.");
    }
}

Helper.greet(); // Output: Hello, this is a static method.
