function displayAtRandomTime() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      if(Math.random > .5) {
        resolve('Yes!');
      } else {
        reject('No!');
      }
    }, 1000);
  })
}

displayAtRandomTime().then(function(value) {
  console.log(value);
})
.catch(function(error) {
  console.log(error);
});


const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const window = (new JSDOM(``, { runScripts: "outside-only" })).window;

window.eval(`document.body.innerHTML = "<p>Hello, world!</p>";`);
window.document.body.children.length === 1;
var $ = require("jquery")(window);



var years = [];
$.getJSON('https://omdbapi.com?t=titanic&apikey=thewdb')
.then(function(movie) {
  years.push(movie.Year);
  return $.getJSON('https://omdbapi.com?t=shrek&apikey=thewdb');
})
.then(function(movie) {
  years.push(movie.Year);
  console.log(years);
});
console.log('All Done!');


//Promise.all
function getMovie(title) {
  return $.getJSON(`https://omdbapi.com?t=${title}&apikey=thewdb`);
}

var titanicPromise = getMovie('titanic');
var shrekPromise = getMovie('shrek');
var braveheartPromise = getMovie('braveheart');

Promise.all([titanicPromise, shrekPromise, braveheartPromise])
.then(function(movies) {
  return movies.forEach(function(value) {
    console.log(value.Year);
  });
});

//1997
//2001
//1995
