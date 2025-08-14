const numbers = [10, 20, 30, 40, 50];

const sumArray = (arr) => arr.reduce((total, num) => total + num, 0);

const sum = sumArray(numbers);
document.getElementById('array').textContent = numbers.join(', ');
document.getElementById('sum').textContent = sum;
