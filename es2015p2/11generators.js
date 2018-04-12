const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const window = (new JSDOM(``, { runScripts: "outside-only" })).window;

window.eval(`document.body.innerHTML = "<p>Hello, world!</p>";`);
window.document.body.children.length === 1;
var $ = require("jquery")(window);

function* incrementor(num) {
  for(let i = 0; i < num; i++) {
    yield i;
  }
}

var gen = incrementor(5);

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

//iteratable
for(val of incrementor(3)) {
  console.log(val);
}

function* getMovieData(name) {
  console.log('starting');
  yield $.getJSON(`https://omdbapi.com?t=${name}&apikey=thewdb`);
  console.log('ending');
}

var movieGetter = getMovieData('titanic');
movieGetter.next().value.then(val => console.log(val));
