var arr1 = [1,2,3];
var arr2 = [4,5,6];
var arr3 = [7,8,9];

//ES5
var combined1 = arr1.concat(arr2).concat(arr3);

console.log(combined1);

//ES2015
var combined2 = [...arr1, ...arr2, ...arr3];

console.log(combined2);


function sumValues(a,b,c) {
  return a+b+c;
}

var nums = [12, 15, 20];

//ES5
console.log(sumValues.apply(this, nums));

//ES2015
console.log(sumValues(...nums));
