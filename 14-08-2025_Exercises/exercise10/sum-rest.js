function sumNumbers(...nums) {
  return nums.reduce((total, num) => total + num, 0);
}
const result = sumNumbers(5, 10, 15, 20);
console.log("Sum:", result);
document.getElementById("sumResult").textContent = result;
