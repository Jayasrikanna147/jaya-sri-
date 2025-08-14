function pair(first, second) {
    return [first, second];
}
var numberStringPair = pair(1, "one");
console.log("Number-String Pair:", numberStringPair); // [1, "one"]
var booleanDatePair = pair(true, new Date());
console.log("Boolean-Date Pair:", booleanDatePair); // [true, current date]
