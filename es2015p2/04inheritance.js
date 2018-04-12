//ES5
function Person(first, last) {
  this.first = first;
  this.last = last;
}

Person.prototype.sayHello = function() {
  return "Hello " + this.first + " " + this.last;
}

function Student(first, last) {
  this.first = first;
  this.last = last;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

//ES2015
class Person2 {
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }
  sayHello() {
    return `Hello ${this.first} ${this.last}`;
  }
}

class Student2 extends Person2 {
  constructor(first, last) {
    super(first, last);
  }
}
