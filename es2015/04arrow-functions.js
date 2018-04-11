//ES5
var add = function(a,b) {
  return a+b;
}

console.log(add(1,1));

var add2 = (a,b) => {
  return a+b;
}

console.log(add2(1,1));

var add3 = (a, b) => a + b;

console.log(add3(1,1));

var arr1 = [1, 2, 3];
var arr2 = arr1.map(function(val) {
  return val * 2;
});

console.log(arr2);

console.log(arr1.map(val => val * 2));

function doubleAndFilter(arr) {
  return arr.map(function(val) {
    return val * 2;
  })
  .filter(function(val) {
    return val % 3 === 0;
  });
}

console.log(doubleAndFilter(arr1));

var doubleAndFilter2 = arr => arr.map(val => val * 2).filter(num => num % 3 === 0);

console.log(doubleAndFilter2(arr1));
