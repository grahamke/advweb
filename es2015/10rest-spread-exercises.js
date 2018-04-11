/*
Write a function called smallestValue which accepts a variable number of parameters and returns the smallest parameters passed to the function.

Examples:
    smallestValue(4,1,12,0) // 0
    smallestValue(5,4,1,121) // 1
    smallestValue(4,2) // 2
    smallestValue(99,12321,12.2) // 2
*/

function smallestValue(...args){
    return Math.min(...args);
}

console.log("smallestValue");
console.log(smallestValue(4,1,12,0)); // 0
console.log(smallestValue(5,4,1,121)); // 1
console.log(smallestValue(4,2)); // 2
console.log(smallestValue(99,12321,12.2)); // 12.2

/*
Write a function called placeInMiddle which accepts two parameters, an array and another array. This function should return the first array with all of the values in the second array placed in the middle of the first array.

Examples:
    placeInMiddle([1,2,6,7],[3,4,5]) // [1,2,3,4,5,6,7]
    placeInMiddle([1],[3,4,5]) // [3,4,5,1]
    placeInMiddle([1,6],[2,3,4,5]) // [1,2,3,4,5,6]
    placeInMiddle([],[2,3,4,5]) // [2,3,4,5]
*/

function placeInMiddle(arr, vals){
  let midIdx = arr.length / 2;
  arr.splice(midIdx, 0, ...vals);
  return arr;
}

console.log("placeInMiddle");
console.log(placeInMiddle([1,2,6,7],[3,4,5])); // [1,2,3,4,5,6,7]
console.log(placeInMiddle([1],[3,4,5])); // [3,4,5,1]
console.log(placeInMiddle([1,6],[2,3,4,5])); // [1,2,3,4,5,6]
console.log(placeInMiddle([],[2,3,4,5]) );// [2,3,4,5]

/*
Write a function called joinArrays which accepts a variable number of parameters (you can assume that each argument to this function will be an array) and returns an array of all of the parameters concatenated together

Examples:

    joinArrays([1],[2],[3]) // [1,2,3]
    joinArrays([1],[2],[3],[1],[2],[3]) // [1,2,3,1,2,3]
    joinArrays([1,2,3],[4,5,6],[7,8,9]) // [1,2,3,4,5,6,7,8,9]
    joinArrays([1],[3],[0],[7]) // [1,3,0,7]

*/

function joinArrays(...args){
  // return args.reduce((acc, next) => {
  //     acc.push(...next);
  //     return acc;
  // });
  return args.reduce((acc, next) => acc.concat(next), []);
}

console.log("joinArrays");
console.log(joinArrays([1],[2],[3])); // [1,2,3]
console.log(joinArrays([1],[2],[3],[1],[2],[3])); // [1,2,3,1,2,3]
console.log(joinArrays([1,2,3],[4,5,6],[7,8,9])); // [1,2,3,4,5,6,7,8,9]
console.log(joinArrays([1],[3],[0],[7])); // [1,3,0,7]
/*
// Write a function called sumEvenArgs which takes all of the parameters passed to a function and returns the sum of the even ones.

Examples:
    sumEvenArgs(1,2,3,4) // 6
    sumEvenArgs(1,2,6) // 8
    sumEvenArgs(1,2) // 2
*/

function sumEvenArgs(...args){
  return args.filter(val => val % 2 === 0).reduce((acc, next) => acc + next);
}

console.log("sumEvenArgs");
console.log(sumEvenArgs(1,2,3,4)); // 6
console.log(sumEvenArgs(1,2,6)); // 8
console.log(sumEvenArgs(1,2)); // 2

/*
Write a function called flip which accepts a function and a value for the keyword this. Flip should return a new function that when invoked, will invoke the function passed to flip with the correct value of the keyword this and all of the parameters passed to the function REVERSED. HINT - if you pass more than two parameters to flip, those parameters should be included as parameters to the inner function when it is invoked. You will have to make use of closure!

Examples:

    function personSubtract(a,b,c){
        return this.firstName + " subtracts " + (a-b-c);
    }

    var person = {
        firstName: 'Elie'
    }

    var flipFn = flip(personSubtract, person);
    flipFn(3,2,1) // "Elie subtracts -4"

    var flipFn2 = flip(personSubtract, person, 5,6);
    flipFn2(7,8) // "Elie subtracts -4"

    flip(subtractFourNumbers,this,1)(2,3,4) // -2
    flip(subtractFourNumbers,this,1,2)(3,4) // -2
    flip(subtractFourNumbers,this,1,2,3)(4) // -2
    flip(subtractFourNumbers,this,1,2,3,4)() // -2
    flip(subtractFourNumbers,this)(1,2,3,4) // -2
    flip(subtractFourNumbers,this,1,2,3)(4,5,6,7) // -2
    flip(subtractFourNumbers,this)(1,2,3,4,5,6,7,8,9,10) // -2
    flip(subtractFourNumbers,this,11,12,13,14,15)(1,2,3,4,5,6,7,8,9,10) // -22

*/


function flip(fn, thisArg, ...outerArgs){
  return function(...innerArgs) {
    let allArgs = outerArgs.concat(innerArgs).slice(0, fn.length);
    return fn.apply(thisArg, allArgs.reverse());
  }
}

console.log("flip");
function personSubtract(a,b,c){
    return this.firstName + " subtracts " + (a-b-c);
}

var person = {
    firstName: 'Elie'
}

var flipFn = flip(personSubtract, person);
console.log(flipFn(3,2,1)); // "Elie subtracts -4"

var flipFn2 = flip(personSubtract, person, 5,6);
console.log(flipFn2(7,8)); // "Elie subtracts -4"

// console.log(flip(subtractFourNumbers,this,1)(2,3,4)); // -2
// console.log(flip(subtractFourNumbers,this,1,2)(3,4)); // -2
// console.log(flip(subtractFourNumbers,this,1,2,3)(4)); // -2
// console.log(flip(subtractFourNumbers,this,1,2,3,4)()); // -2
// console.log(flip(subtractFourNumbers,this)(1,2,3,4)); // -2
// console.log(flip(subtractFourNumbers,this,1,2,3)(4,5,6,7)); // -2
// console.log(flip(subtractFourNumbers,this)(1,2,3,4,5,6,7,8,9,10)); // -2
// console.log(flip(subtractFourNumbers,this,11,12,13,14,15)(1,2,3,4,5,6,7,8,9,10)); // -22

/*
Write a function called bind which accepts a function and a value for the keyword this. Bind should return a new function that when invoked, will invoke the function passed to bind with the correct value of the keyword this. HINT - if you pass more than two parameters to bind, those parameters should be included as parameters to the inner function when it is invoked. You will have to make use of closure!

Examples:

    function firstNameFavoriteColor(favoriteColor){
        return this.firstName + "'s favorite color is " + favoriteColor
    }

    var person = {
        firstName: 'Elie'
    }

    var bindFn = bind(firstNameFavoriteColor, person);
    bindFn('green') // "Elie's favorite color is green"

    var bindFn2 = bind(firstNameFavoriteColor, person, 'blue');
    bindFn2('green') // "Elie's favorite color is blue"

    function addFourNumbers(a,b,c,d){
        return a+b+c+d;
    }

    bind(addFourNumbers,this,1)(2,3,4) // 10
    bind(addFourNumbers,this,1,2)(3,4) // 10
    bind(addFourNumbers,this,1,2,3)(4) // 10
    bind(addFourNumbers,this,1,2,3,4)() // 10
    bind(addFourNumbers,this)(1,2,3,4) // 10
    bind(addFourNumbers,this)(1,2,3,4,5,6,7,8,9,10) // 10

*/

function bind(fn, thisArg, ...outerArgs){
  return function(...innerArgs) {
    return fn.apply(thisArg, [...outerArgs, ...innerArgs]);
  }
}

function firstNameFavoriteColor(favoriteColor){
    return this.firstName + "'s favorite color is " + favoriteColor
}

var person = {
    firstName: 'Elie'
}

var bindFn = bind(firstNameFavoriteColor, person);
console.log(bindFn('green')); // "Elie's favorite color is green"

var bindFn2 = bind(firstNameFavoriteColor, person, 'blue');
console.log(bindFn2('green')); // "Elie's favorite color is blue"

function addFourNumbers(a,b,c,d){
    return a+b+c+d;
}

console.log(bind(addFourNumbers,this,1)(2,3,4)); // 10
console.log(bind(addFourNumbers,this,1,2)(3,4)); // 10
console.log(bind(addFourNumbers,this,1,2,3)(4)); // 10
console.log(bind(addFourNumbers,this,1,2,3,4)()); // 10
console.log(bind(addFourNumbers,this)(1,2,3,4)); // 10
console.log(bind(addFourNumbers,this)(1,2,3,4,5,6,7,8,9,10)); // 10
