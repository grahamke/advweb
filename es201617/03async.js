async function first() {
  return "Tada!";
}

console.log(first());

first().then(val => console.log(val));

const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const window = (new JSDOM(``, { runScripts: "outside-only" })).window;

window.eval(`document.body.innerHTML = "<p>Hello, world!</p>";`);
window.document.body.children.length === 1;
var $ = require("jquery")(window);

async function getMovieData() {
  console.log('starting!');
  var movieData = await $.getJSON('https://omdbapi.com?t=titanic&apikey=thewdb');
  // this line is not run until the promise is resolved!
  console.log('All done!');
  console.log(movieData);
}

getMovieData();

//async function as an instance method!
var movieCollector = {
  data: 'titanic',
  async getMovie() {
    var response = await $.getJSON(`https://omdbapi.com?t=${this.data}&apikey=thewdb`);
    console.log(response);
  }
}

movieCollector.getMovie();

class MovieData {
  constructor(name) {
    this.name = name;
  }
  async getMovie() {
    var response = await $.getJSON(`https://omdbapi.com?t=${this.data}&apikey=thewdb`);
    console.log(response);
  }
}


var m = new MovieData('shrek');
m.getMovie();

//rejects
async function getUser(user) {
  try {
    var response = await $.getJSON(`https://api.github.com/users/${user}`);
    console.log(response.name);
  }
  catch(e) {
    console.log(`User(${user}) does not exist!`);
  }
}

getUser('grahamke');
getUser('asdfrqaewfzxcvaerfg');
