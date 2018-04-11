function printArgs(a, b,...c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

printArgs(1,2,3,4,5);

//ES5
function sumArgs1() {
  var sum = 0;
  for(var i = 0; i < arguments.length; ++i) {
    sum += arguments[i];
  }
  return sum;
}

console.log(sumArgs1(10,20,30));

// fancier ES5
function sumArgs2() {
  var args = [].slice.call(arguments);
  return args.reduce(function(acc, next) {
    return acc + next;
  });
}

console.log(sumArgs2(10,20,30));


//ES2015
var sumArgs3 = (...args) => args.reduce((acc, next) => acc + next);

console.log(sumArgs3(10,20,30));
