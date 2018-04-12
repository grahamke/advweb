const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const window = (new JSDOM(``, { runScripts: "outside-only" })).window;

window.eval(`document.body.innerHTML = "<p>Hello, world!</p>";`);
window.document.body.children.length === 1;
var $ = require("jquery")(window);


var duration1;
var duration2;
// SEQUENTIAL NOT PARALLEL
async function getMovieData1() {
  var response1 = await $.getJSON(`https://omdbapi.com?t=titanic&apikey=thewdb`);
  var response2 = await $.getJSON(`https://omdbapi.com?t=shrek&apikey=thewdb`);
  console.log(response1);
  console.log(response2);
}


getMovieData1();



async function getMovieData2() {
  var prom1 = $.getJSON(`https://omdbapi.com?t=titanic&apikey=thewdb`);
  var prom2 = $.getJSON(`https://omdbapi.com?t=shrek&apikey=thewdb`);

  var data1 = await prom1;
  var data2 = await prom2;

  console.log(data1);
  console.log(data2);
}


getMovieData2();


async function getMovieData3(first, second) {
  var movieList = await Promise.all([
    $.getJSON(`https://omdbapi.com?t=${first}&apikey=thewdb`),
    $.getJSON(`https://omdbapi.com?t=${second}&apikey=thewdb`)
  ]);
  console.log(movieList[0].Year);
  console.log(movieList[1].Year);
}

getMovieData3('shrek','blade');
