//ES5
var arr = [1,2,3];

var a = arr[0];
var b = arr[1];
var c = arr[2];

console.log(a);
console.log(b);
console.log(c);

//ES2015
var [a2,b2,c2] = arr;

console.log(a2);
console.log(b2);
console.log(c2);

//ES5
function returnNums1(a,b) {
  return [a,b];
}

var first = returnNums1(5,10)[0];
var second = returnNums1(5,10)[1];

console.log(first);
console.log(second);

var [first2, second2] = returnNums1(5,10);
console.log(first2);
console.log(second2);


//Swapping values in ES5
function swap(a, b) {
  var temp = a;
  a = b;
  b = temp;
  return [a,b];
}

console.log(swap(1,2));

//Swapping values in ES2015
function swap2(a, b) {
  return [a, b] = [b, a];
}

console.log(swap2(1,2));
