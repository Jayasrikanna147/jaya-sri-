const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const newArr = [4, 5, ...arr1, 6, 7, , ...arr2, 8, 9];
console.log("Array 1:", arr1);
console.log("Array 2:", arr2);
console.log("Combined Array:", newArr);
document.getElementById("newArrayOutput").textContent = JSON.stringify(newArr);
