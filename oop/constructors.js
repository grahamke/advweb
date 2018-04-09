function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.numWheels = 4;
}

function Motorcycle(make, model, year) {
  this.make = make;  // <- duplicate
  this.model = model;  // <- duplicate
  this.year = year;  // <- duplicate
  this.numWheels = 2;
}

// reused Car constructor
function Motorcycle(make, model, year) {
  // using call
  Car.call(this, make, model, year);
  this.numWheels = 2;
}

function Motorcycle(make, model, year) {
  // using apply
  Car.apply(this, arguments);
  this.numWheels = 2;
}
