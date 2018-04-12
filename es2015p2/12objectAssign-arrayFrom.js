//ES5

var o = {name: "Elie"};
var o2 = o;

o2.name = "Tim";
console.log(o.name);

//ES2015

var ob = {name: "Elie"};
var ob2 = Object.assign({}, o); //not a deep clone!!!

ob2.name = "Tim";
console.log(ob.name);

var obj = {instructors: ["Elie", "Tim"]};
var obj2 = Object.assign({}, obj);

obj2.instructors.push("Colt");
console.log(obj.instructors);


//ES5
var divs = document.getElementsByTagName("div");//return array like Object
divs.reduce // undefined

var converted = [].slice.call(divs);
converted.reduce...

//ES2015
var divs = document.getElementsByTagName("div");//return array like Object
var converted = Array.from(divs);

//works with String, Maps, Sets, and array like object
