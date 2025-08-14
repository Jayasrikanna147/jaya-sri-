function separateFirstRest(first, ...rest) {
  return { first, rest };
}
const result = separateFirstRest(10, 20, 30, 40, 50);
console.log(result);
document.getElementById('output').textContent = JSON.stringify(result, null, 2);
