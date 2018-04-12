//ES5
function Student(first, last) {
  this.first = first;
  this.last = last;
}

var kevin = new Student('Kevin', 'Graham');

//ES2015
class Student2 {
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }
}

var kevin2 = new Student2('Kevin','Graham');
