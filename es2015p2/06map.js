var firstMap = new Map;

console.log(firstMap.set(1, 'Elie'));
console.log(firstMap.set(false, 'a boolean'));
console.log(firstMap.set('nice', 'a string'));
console.log(firstMap.delete('nice')); // true
console.log(firstMap.size); //2

var arrayKey = [];
firstMap.set(arrayKey, [1,2,3,4])

var objectKey = {}
firstMap.set(objectKey, {a:1});

console.log(firstMap.get(1));
console.log(firstMap.get(false));
console.log(firstMap.get(arrayKey));
console.log(firstMap.get(objectKey));
console.log("loop");
firstMap.forEach(v => console.log(v));

console.log("values");
for(let val of firstMap.values()) {
  console.log(val);
}
console.log("keys");
for(let key of firstMap.keys()) {
  console.log(key);
}
