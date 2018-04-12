//ES5
function Student(first, last) {
  this.first = first;
  this.last = last;
}

Student.prototype.sayHello = function() {
  return "Hello " + this.first + " " + this.last;
}

Student.isStudent = function(obj) {
  return obj.constructor === Student;
}

//ES2015
class Student2 {
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }
  sayHello() {
    return `Hello ${this.first} ${this.last}`;
  }
  static isStudent(obj) {
    return obj.constructor === Student2;
  }
}
