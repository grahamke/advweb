var firstName = "Kevin";
var lastName = "Graham";

//ES 5
var instructor = {
  firstName: firstName,
  lastName: lastName
}

//ES2015
var instructor2 = {
  firstName,
  lastName
}

console.log(instructor);
console.log(instructor2);


//ES5
var instructor3 = {
  sayHello: function() {
    return "Hello!";
  }
}

//ES2015
var instructor4 = {
  sayHello() {
    return "Hello!";
  }
}

//ES5
var name = "Kevin";
var student = {};
student[name] = "That's me!";

console.log(student.Kevin);

//ES2015
var name2 = "Kevin";
var student2 = {
  [name2]: "That's me!"
}

console.log(student2.Kevin);
