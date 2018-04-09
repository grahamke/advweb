var arr = [];

console.log(arr.hasOwnProperty('length'));
console.log(arr.hasOwnProperty('slice'));
console.log(arr.hasOwnProperty('foo'));

function Person(name) {
  this.name = name;
  // this.sayHi = function() {
  //   return "Hi " + this.name;
  // }
}

Person.prototype.sayHi = function() {
  return "Hi " + this.name;
}

elie = new Person("Elie");
console.log(elie.sayHi());

function Vehicle(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.isRunning = false;
}

Vehicle.prototype.turnOn = function() {
  this.isRunning = true;
}

Vehicle.prototype.turnOff = function() {
  this.isRunning = false;
}

Vehicle.prototype.honk = function() {
  if(this.isRunning) {
    return "beep!";
  }
}
