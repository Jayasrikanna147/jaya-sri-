// List of persons
const people = [
    { name: "Alice", age: 25, city: "New York" },
    { name: "Bob", age: 16, city: "Chicago" },
    { name: "Charlie", age: 30, city: "Los Angeles" },
    { name: "Daisy", age: 17, city: "Houston" },
    { name: "Ethan", age: 20, city: "Miami" }
  ];
  
  // Filter people who are eligible to vote (age >= 18)
  const eligibleVoters = people.filter(person => person.age >= 18);
  
  // Output results to console
  console.log("All People:", people);
  console.log("Eligible Voters:", eligibleVoters);
  