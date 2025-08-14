var Box = /** @class */ (function () {
    function Box(value) {
        this.value = value;
    }
    Box.prototype.getValue = function () {
        return this.value;
    };
    return Box;
}());
var numberBox = new Box(123);
console.log("Number Box:", numberBox.getValue());
var stringBox = new Box("Hello");
console.log("String Box:", stringBox.getValue());
var booleanBox = new Box(true);
console.log("Boolean Box:", booleanBox.getValue());
