function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}
const numberStringPair = pair<number, string>(1, "one");
console.log("Number-String Pair:", numberStringPair); // [1, "one"]

const booleanDatePair = pair<boolean, Date>(true, new Date());
console.log("Boolean-Date Pair:", booleanDatePair);   // [true, current date]
