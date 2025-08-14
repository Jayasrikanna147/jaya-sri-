class Stack<T> {
  private items: T[] = [];

  
  push(item: T): void {
    this.items.push(item);
  }

  
  pop(): T | undefined {
    return this.items.pop();
  }

  
  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }
}



const numberStack = new Stack<number>();
numberStack.push(10);
numberStack.push(20);
numberStack.push(30);

console.log("Peek:", numberStack.peek()); 
console.log("Pop:", numberStack.pop());    
console.log("Pop:", numberStack.pop());    
console.log("Peek:", numberStack.peek()); 

const stringStack = new Stack<string>();
stringStack.push("apple");
stringStack.push("banana");

console.log("Peek:", stringStack.peek()); 
console.log("Pop:", stringStack.pop());    
