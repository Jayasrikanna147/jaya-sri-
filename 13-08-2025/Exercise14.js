const cities = ["Mumbai", "Delhi", "Chennai", "Bangalore", "Kolkata", "Pune"];

document.getElementById("loadCitiesBtn").addEventListener("click", function () {
  const dropdown = document.getElementById("cityDropdown");
  
  // Clear existing options except the first placeholder
  dropdown.length = 1;

  // Sort cities alphabetically
  const sortedCities = cities.slice().sort();

  // Add sorted cities to dropdown
  sortedCities.forEach(city => {
    const option = document.createElement("option");
    option.value = city;
    option.textContent = city;
    dropdown.appendChild(option);
  });

  console.log("Cities loaded into dropdown:", sortedCities);
});
