// block scope

let variable = "something";

variable = "changed"; //okay

// let variable = "something";  //SyntaxError: Identifier 'variable' has already been declared

var var1 = 1;

if(var1 == 1) {
  let scopedVar = "in scope";
}

// console.log(scopedVar); //ReferenceError: scopedVar is not defined

for(var var2 = 0; var2 < 5; var2++) {
  setTimeout(function() {
    console.log(var2);
  }, 10);
}

for(let var3 = 0; var3 < 5; var3++) {
  setTimeout(function() {
    console.log(var3);
  }, 100);
}
