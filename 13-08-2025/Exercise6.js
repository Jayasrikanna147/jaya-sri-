// Array of names
let names = ["John", "Michael", "Sara", "Alexander", "Tom", "Priya"];

// Filter names longer than 5 characters
let longNames = names.filter(name => name.length > 5);

// Convert those names to uppercase
let upperCaseNames = longNames.map(name => name.toUpperCase());

// Output results
console.log("Original Names:", names);
console.log("Filtered Names (>5 chars):", longNames);
console.log("Uppercase Names:", upperCaseNames);
