function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}

Car.prototype.getDetails = function() {
  console.log(`Car: ${this.brand} ${this.model}`);
};

const car1 = new Car("Toyota", "Corolla");
const car2 = new Car("Honda", "Civic");

car1.getDetails(); // Car: Toyota Corolla
car2.getDetails(); // Car: Honda Civic