interface Employee {
  empId: number;
  empName: string;
  salary: number;
}
const employeeList: Employee[] = [
  { empId: 101, empName: "Alice", salary: 50000 },
  { empId: 102, empName: "Bob", salary: 60000 },
  { empId: 103, empName: "Charlie", salary: 55000 }
];
function processEmployees(employees: Employee[]): number {
  console.log("Employee List:");
  employees.forEach(emp => {
    console.log(`ID: ${emp.empId}, Name: ${emp.empName}, Salary: ${emp.salary}`);
  });

  return employees.length;
}
const count = processEmployees(employeeList);
console.log("Total Employees:", count);
