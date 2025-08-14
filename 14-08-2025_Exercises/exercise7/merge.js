const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const mergedObj = { ...obj1, ...obj2 };
console.log("Object 1:", obj1);
console.log("Object 2:", obj2);
console.log("Merged Object:", mergedObj);
document.getElementById('mergedOutput').textContent = JSON.stringify(mergedObj);
