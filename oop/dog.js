//dog class

function Dog(name, age) {
  this.name = name;
  this.age = age;
  this.bark = function() {
    console.log(this.name + " just barked!");
  }
}

var gizmo = new Dog('Gizmo', 4);
var poof = new Dog('Poof', 3);

gizmo.bark();
poof.bark();
