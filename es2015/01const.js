var first = "first";
first = "reassigned"; //no problem

const second = "second";
//second = "causes a type error"; // TypeError: Assignment to constant variable.

// const second = "causes a syntax error"; //SyntaxError: Identifier 'second' has already been declared

// can mutate object or arrary

const numbers = [1, 2, 3]
numbers.push(4);  // okay
console.log(numbers);

numbers = "no"; // TypeError: Assignment to constant variable.
