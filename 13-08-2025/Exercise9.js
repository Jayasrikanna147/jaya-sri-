const people = [
    { name: "Alice", age: 25, city: "New York" },
    { name: "Bob", age: 16, city: "Chicago" },
    { name: "Charlie", age: 30, city: "Los Angeles" },
    { name: "Daisy", age: 17, city: "Houston" },
    { name: "Ethan", age: 20, city: "Miami" }
  ];
  const updatedPeople = people.map(person => ({
    ...person,
    status: person.age >= 18 ? "Adult" : "Minor"
  }));
  console.log("Updated People List:", updatedPeople);