var Stack = /** @class */ (function () {
    function Stack() {
        this.items = [];
    }
    Stack.prototype.push = function (item) {
        this.items.push(item);
    };
    Stack.prototype.pop = function () {
        return this.items.pop();
    };
    Stack.prototype.peek = function () {
        return this.items[this.items.length - 1];
    };
    return Stack;
}());
var numberStack = new Stack();
numberStack.push(10);
numberStack.push(20);
numberStack.push(30);
console.log("Peek:", numberStack.peek());
console.log("Pop:", numberStack.pop());
console.log("Pop:", numberStack.pop());
console.log("Peek:", numberStack.peek());
var stringStack = new Stack();
stringStack.push("apple");
stringStack.push("banana");
console.log("Peek:", stringStack.peek());
console.log("Pop:", stringStack.pop());
