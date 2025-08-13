// var: function-scoped
var a = 10;
if (true) {
  var a = 20;
  console.log("Inside if with var:", a); // 20
}
console.log("Outside if with var:", a); // 20

// let: block-scoped
let b = 10;
if (true) {
  let b = 20;
  console.log("Inside if with let:", b); // 20
}
console.log("Outside if with let:", b); // 10

// const: block-scoped, cannot be reassigned
const c = 10;
if (true) {
  const c = 20;
  console.log("Inside if with const:", c); // 20
}
console.log("Outside if with const:", c); // 10
