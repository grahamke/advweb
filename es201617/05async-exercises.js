const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const window = (new JSDOM(``, { runScripts: "outside-only" })).window;

window.eval(`document.body.innerHTML = "<p>Hello, world!</p>";`);
window.document.body.children.length === 1;
var $ = require("jquery")(window);


async function hasMostFollowers(...usernames) {
  let baseUrl = "https://api.github.com/users/";
  let jsonPromises = usernames.map(username => $.getJSON(baseUrl + username));
  let data = await Promise.all(jsonPromises);
  let max = data.sort((a,b) => a.followers < b.followers)[0];
  return `${max.name} has the most followers with ${max.followers}`;
}


hasMostFollowers('elie','tigarcia','colt').then(function(data) {
  console.log(data);
});

async function starWarsString(id) {
  var str = '';
  var data = await $.getJSON(`https://swapi.co/api/people/${id}`);
  str += `${data.name} is featured in `;
  let filmData = data.films[0];
  var res = await $.getJSON(filmData);
  str += `${res.title}, directed by ${res.director} `;
  let planetData = res.planets[0];
  var res = await $.getJSON(planetData);
  str += `and it takes place on ${res.name}`;
  return str;
}

starWarsString(1).then(function(data) {
  console.log(data);
});
