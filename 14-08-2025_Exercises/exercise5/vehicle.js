class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getInfo() {
    return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
  }
}
class Car extends Vehicle {
  constructor(make, model, year, numDoors) {
    super(make, model, year);
    this.numDoors = numDoors;
  }
  getInfo() {
    return `${super.getInfo()}, Doors: ${this.numDoors}`;
  }
}
const myVehicle = new Vehicle("Toyota", "Corolla", 2010);
const myCar = new Car("Honda", "Civic", 2022, 4);
document.getElementById("vehicleInfo").textContent = myVehicle.getInfo();
document.getElementById("carInfo").textContent = myCar.getInfo();
