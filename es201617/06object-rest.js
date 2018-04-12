var student = {first: "Kevin", last: "Graham", job: "Student", age: 41};
var {first, last, ...data} = student;
console.log(first);
console.log(last);
console.log(data);

var student2 = {...student, first: "Tim", last:"Garcia"};

console.log(student2);
