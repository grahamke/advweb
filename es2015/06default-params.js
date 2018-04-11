function add(a, b) {
  return a + b;
}
console.log(add());

function add2(a=10, b=20) {
  return a + b;
}

console.log(`add2(): ${add2()}`)
console.log(`add2(20): ${add2(20)}`);

let add3 = (a=3, b=5) =>  a + b ;

console.log(`add3(): ${add3()}`);
console.log(`add3(10): ${add3(10)}`);
