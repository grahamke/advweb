//ES5
var student = {
  first: "Kevin",
  last: "Graham"
}

var firstName = student.first;
var lastName = student.last;

//ES2015
var {first, last} = student;

console.log(first);
console.log(last);

var {first:firstName, last:lastName} = student;

console.log(firstName);
console.log(lastName);



function createStudent(options) {
  var options = options || {};
  var name = options.name || {first: "Matt", last: "Lane"}
  var isFunny = options.isFunny || false;
  return [name.first, name.last, isFunny];
}

console.log(createStudent());
console.log(createStudent({isFunny: true}));
console.log(createStudent({name: {first:"Tim", last:"Garcia"}}));


function createStudent2({name = {first:"Matt", last:"Lane"}, isFunny=false } = {}){
  return [name.first, name.last, isFunny];
}

console.log(createStudent2());
console.log(createStudent2({isFunny: true}));
console.log(createStudent2({name: {first:"Tim", last:"Garcia"}}));


// Object fields as parameters ES5
function displayInfo(obj) {
  return [obj.name, obj.favColor];
}

var student2 = {
  name: "Kevin",
  favColor: "Shade"
};

console.log(displayInfo(student2));

//ES2015
function displayInfo2({name, favColor}) {
  return [name, favColor];
}

console.log(displayInfo2(student2));
