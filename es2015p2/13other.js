//find
var array = [1,2,3,4,5];
console.log(array.find(function(val) {
  return val === 3;
}));

array = [{name: "Elie"}, {last: "not name"},{name: "Matt"}, {name: "Tim"}, {name: "Colt"}];
console.log(array.find(function(val) {
  return val.name === "Tim";
}));

/findIndex
console.log(array.findIndex(function(val) {
  return val.name === "Colt";
}));


//includes - return a boolean if a value is in a string - easier than indexOf

//ES5
"awesome".indexOf("some") > -1 //true

//ES2015
"awesome".includes("some"); //true

//Number.isFinite
//ES5
function seeIfNumber(val) {
  if(typeof val === "number" && !isNaN(val)) {
    return "It is a number!";
  }
}

//ES2015
function seeIfNumber(val) {
  if(Number.isFinite(val)) {  //Number.isInteger
    return "It is a number!";
  }
}
