const doubleNumbers = (arr) => arr.map(num => num * 2);
const inputArray = [1, 2, 3, 4];
const doubledArray = doubleNumbers(inputArray);
document.getElementById('original').textContent = inputArray.join(', ');
document.getElementById('doubled').textContent = doubledArray.join(', ');
