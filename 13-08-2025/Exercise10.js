var listEmployee = [
  {
    name: "John Doe",
    age: 30,
    position: "Software Engineer",
  },
  {
    name: "Mark Freeman",
    age: 32,
    position: "Software Engineer",
  },
  {
    name: "Patricia Dark",
    age: 35,
    position: "Accounts",
  }
];

// Using map to add status
listEmployee = listEmployee.map((employee, index) => {
  return {
    ...employee,
    status: index % 2 === 0 ? "active" : "inactive"
  };
});

console.log("Updated Employee List:", listEmployee);
