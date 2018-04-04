var arr = [1,2,3,4,5,6];
function double(arr) {
  for(var i = 0; i < arr.length; ++i) {
    console.log(arr[i] * 2);
  }
}

double(arr);

function forEach(arr, callback) {
  for( var i = 0; i < arr.length; ++i) {
    callback(arr[i], i, arr);
  }
}

forEach(arr, function(element, index, array) {
  console.log(index+": " + (element * 2));
});

function findIndex(arr, callback) {
  for( var i = 0; i < arr.length; ++i) {
    if(callback(arr[i], i, arr)) {
      return i;
    }
  }
  return -1;
}

function find6(element) {
  return element === 6;
}

var arr = [3,4,6,2,1];
findIndex(arr, find6);//2

var arr = [5,11,13,8,6,7];
findIndex(arr, function(num) {
  return num % 2 === 0;
});//3

var langs = ["Java", "C", "Python", "Ruby"];
findIndex(langs, function(lang, index, arr) {
  return lang === "JavaScript";
});//-1


setTimeout(function() {
    console.log("log");
}, 2000);

var timerId = setTimeout(function() {
  console.log("log should not print");
}, 20000);

setTimeout(function() {
  console.log("canceling setTimeout");
  clearTimeout(timerId);
}, 2000);

var num = 0;
function callback() {
  console.log("num: "+(++num));
}

setInterval(callback(), 3000);


function countDown(secs) {
  var intervalId = setInterval(function() {
    if(secs - 1 !== 0) {
        console.log("Timer: "+ (--secs));
    }
    else {
      console.log("Ring Ring Ring!!!");
      clearInterval(intervalId);
    }
  }, 1000);
}


// call stack, queue, and event loop
console.log("first");
setTimeout(function() {
  console.log("second");
}, 0);
console.log("third");


// Promises
var p1 = new Promise(function(resolve, reject) {
  resolve([1, 2, 3, 4]);
});

p1.then(function(arr) {
  console.log("Promise p1 resolved with data: ", arr);
});

var p2 = new Promise(function(resolve, reject) {
  reject("ERROR");
});

p2.then(function(data) {
  console.log("Promise p2 resolved with data: ", data);
}).catch(function(data) {
  console.log("Promise p2 was rejected with data: ", data);
});

var p3 = new Promise(function(resolve, reject) {
  var num = Math.random();
  if(num < .5) {
    resolve(num);
  }
  else {
    reject(num);
  }
});

p3.then(function(result) {
  console.log("Success: ",result);
}).catch(function(error) {
  console.log("Error: ", error);
});

var promise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    var rand = Math.floor(Math.random() * 10);
    resolve(rand);
  }, 3000);
});

promise.then(function(data) {
  console.log("Random int passed to resolve: ",data)
});

// promise chaining

var promise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    randomInt = Math.floor(Math.random() * 10);
    resolve(randomInt);
  }, 500);
});

promise.then(function(data) {
  console.log("Random int passed to resolve: ",data);
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(Math.floor(Math.random() * 10));
    }, 3000);
  });
}).then(function(data) {
  console.log("Second random int passed to resolved: ", data);
});
