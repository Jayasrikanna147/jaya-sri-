// Create a date object for 13th August 2030
let date = new Date(2030, 7, 13); // Month is 0-based, so 7 = August

// Days of the week array
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Get the day name
let dayName = days[date.getDay()];

// Output to console
console.log("13th August 2030 is a:", dayName);
