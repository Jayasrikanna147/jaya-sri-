const numbers = [1, 2, 3];
function sum(a, b, c) {
  return a + b + c;
}
const result = sum(...numbers);
console.log("Sum:", result);
document.getElementById("sumResult").textContent = result;
