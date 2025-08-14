class Box<T> {
  value: T;

  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }
}
const numberBox = new Box<number>(123);
console.log("Number Box:", numberBox.getValue());  

const stringBox = new Box<string>("Hello");
console.log("String Box:", stringBox.getValue()); 

const booleanBox = new Box<boolean>(true);
console.log("Boolean Box:", booleanBox.getValue());
