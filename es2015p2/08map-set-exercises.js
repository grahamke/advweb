class MessageBoard {

    /*
    In your constructor method, you should assign two properties for each object created from the MessageBoard class. The first should be a property called messages which is an empty Map, and the second is a property called id which has a value of 1.

    var m = new MessageBoard

    m.hasOwnProperty('messages') // true
    m.messages.constructor // function Map() { [native code] }
    m.hasOwnProperty('id') // true
    m.id // 1
    */

    constructor(){
        this.messages = new Map;
        this.id = 1;
    }

    /*

    Add a method called addMessage which accepts a string. The function should add a key and value to the messages map with a key of whatever the value of this.id is and a value of whatever the string is that is passed to the function. The function should return the object created from the class so that the method can be chained. (HINT - to implement the last part, make sure to return this).

    var m = new MessageBoard
    m.addMessage('hello');
    m.messages.size // 1
    m.addMessage('awesome!') // m
    m.addMessage('awesome!').addMessage('nice!').addMessage('cool!')
    */

    addMessage(str){
      this.messages.set(this.id++,str);
      return this;
    }

    /*
    Add a method called findMessageById which accepts a number and returns the message in the messages map with the same key as the number passed to the function. If the key is not found in the messages map, the function should return undefined.


    var m = new MessageBoard
    m.addMessage('hello!')
    m.addMessage('hi!')
    m.addMessage('whats up?')
    m.findMessageById(1) // 'hello!'
    m.findMessageById(2) // 'hi!'
    m.findMessageById(3) // 'whats up?'
    m.findMessageById(4) // undefined
    m.findMessageById() // undefined
    */

    findMessageById(arg){
      return this.messages.get(arg);
    }

    /*
    Add a method called findMessageByValue which accepts a string and returns the message in the messages map with the same value as the string passed to the function. If the value is not found in the messages map, the function should return undefined.

    var m = new MessageBoard
    m.addMessage('hello!')
    m.addMessage('hi!')
    m.addMessage('whats up?')
    m.findMessageByValue('hello!') // 'hello!'
    m.findMessageByValue('hi!') // 'hi!'
    m.findMessageByValue('whats up?') // 'whats up?'
    m.findMessageByValue('nothing here') // undefined
    m.findMessageByValue() // undefined
    */


    findMessageByValue(arg){
      for(let msg of this.messages.values()) {
        if(msg === arg) {
          return arg;
        }
      }
    }

    /*
    Add a method called removeMessage which accepts a number and removes a message in the messages map with a key of the number passed to the function.

    var m = new MessageBoard
    m.addMessage('hello!')
    m.addMessage('hi!')
    m.addMessage('whats up?')
    m.removeMessage(1)
    m.removeMessage(2)
    m.messages.size // 1
    m.removeMessage() // m
    */

    removeMessage(arg){
      this.messages.delete(arg);
      return this;
    }

    /*
    Add a method called numberOfMessages which returns the number of keys in the messages map

    var m = new MessageBoard
    m.addMessage('hello!')
    m.addMessage('hi!')
    m.addMessage('whats up?')
    m.numberOfMessages() // 3
    */

    numberOfMessages(){
      return this.messages.size;
    }

    /*
    Add a method called messagesToArray which returns an array of all of the values in the messages map

    var m = new MessageBoard
    m.addMessage('hello!')
    m.addMessage('hi!')
    m.addMessage('whats up?')
    m.messagesToArray() // ['hello!', 'hi!', 'whats up?'])
    */

    messagesToArray(){
      // let arr = [];
      // for(let msg of this.messages.values()) {
      //   arr.push(msg);
      // }
      // return arr;
      return Array.from(this.messages.values());
    }
}

/*
Write a function called uniqueValues which accepts an array and returns the number of unique values in the array

uniqueValues([1,1,2,2,2,3,3,3,3,4,4,4,5,5,6]) // 6
*/

function uniqueValues(args) {
  return new Set(args).size
}

/*

Write a function called hasDuplicates which accepts an array and returns true if there are duplicate values in the array, otherwise it should return false.

hasDuplicates([1,1,2,2,2,3,3,3,3,4,4,4,5,5,6]) // true
hasDuplicates([1,2,3,4,5,6]) // false
hasDuplicates([]) // false
*/

function hasDuplicates(args){
  let size1 = args.length;
  let size2 = new Set(args).size;
  return size1 != size2;
}

/*

Write a function called countPairs which accepts an array of numbers and a number. The function should return the number of unique pairs (two numbers) that sum up to the number passed to the function.

countPairs([8,2,6,4,10,0],10) // 3
countPairs([8,2],10) // 1
countPairs([1,2],10) // 0
countPairs([1,2,3,4,5],10) // 0
countPairs([],10) // 0
countPairs([5,4,-10,6,-20,16],-4) // 2
countPairs([0,-4],-4) // 1
*/

function countPairs(arr, num) {
  // let pairs = 0;
  // for(let i = 0; i < arr.length; ++i) {
  //   for(let j = i + 1; j < arr.length; ++j) {
  //     if(arr[i] + arr[j] === arg) {
  //       pairs++;
  //     }
  //   }
  // }
  // return pairs;
  var cache = new Set(arr);
  var count = 0;
  for(let val of arr) {
    cache.delete(val);
    if(cache.has(num - val)) {
      count++;
    }
  }
  return count;
}


var m = new MessageBoard

console.log(m.hasOwnProperty('messages')); // true
console.log(m.messages.constructor); // function Map() { [native code] }
console.log(m.hasOwnProperty('id')); // true
console.log(m.id); // 1

var m = new MessageBoard
console.log(m.addMessage('hello'));
console.log(m.messages.size); // 1
console.log(m.addMessage('awesome!')); // m
console.log(m.addMessage('awesome!').addMessage('nice!').addMessage('cool!'))

console.log("findMessageById");
var m = new MessageBoard
console.log(m.addMessage('hello!'));
console.log(m.addMessage('hi!'));
console.log(m.addMessage('whats up?'));
console.log(m.findMessageById(1)); // 'hello!'
console.log(m.findMessageById(2)); // 'hi!'
console.log(m.findMessageById(3)); // 'whats up?'
console.log(m.findMessageById(4)); // undefined
console.log(m.findMessageById()); // undefined

console.log("findMessageByValue");
var m = new MessageBoard
m.addMessage('hello!');
m.addMessage('hi!');
m.addMessage('whats up?');
console.log(m.findMessageByValue('hello!')); // 'hello!'
console.log(m.findMessageByValue('hi!')); // 'hi!'
console.log(m.findMessageByValue('whats up?')); // 'whats up?'
console.log(m.findMessageByValue('nothing here')); // undefined
console.log(m.findMessageByValue()); // undefined

console.log("removeMessage");
var m = new MessageBoard
m.addMessage('hello!')
m.addMessage('hi!')
m.addMessage('whats up?')
console.log(m.removeMessage(1));
console.log(m.removeMessage(2));
console.log(m.messages.size );// 1
console.log(m.removeMessage()); // m

var m = new MessageBoard
m.addMessage('hello!')
m.addMessage('hi!')
m.addMessage('whats up?')
console.log(m.messagesToArray()); // ['hello!', 'hi!', 'whats up?'])

console.log(uniqueValues([1,1,2,2,2,3,3,3,3,4,4,4,5,5,6])); // 6

console.log(hasDuplicates([1,1,2,2,2,3,3,3,3,4,4,4,5,5,6])); // true
console.log(hasDuplicates([1,2,3,4,5,6])); // false
console.log(hasDuplicates([])); // false
console.log("countPairs");
console.log(countPairs([8,2,6,4,10,0],10)); // 3
console.log(countPairs([8,2],10)); // 1
console.log(countPairs([1,2],10)); // 0
console.log(countPairs([1,2,3,4,5],10)); // 0
console.log(countPairs([],10)); // 0
console.log(countPairs([5,4,-10,6,-20,16],-4)); // 2
console.log(countPairs([0,-4],-4)); // 1
