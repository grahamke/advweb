const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const window = (new JSDOM(``, { runScripts: "outside-only" })).window;

window.eval(`document.body.innerHTML = "<p>Hello, world!</p>";`);
window.document.body.children.length === 1;
var $ = require("jquery")(window);

function getFollowers(name) {
  return $.getJSON(`https://api.github.com/users/${name}`);
}

function getMostFollowers(...usernames) {
  // let args = [].slice.call(arguments);
  // return new Promise(function(resolve, reject) {
  //   let calls = [];
  //   for(let name of usernames) {
  //     calls.push(getFollowers(name));
  //   }
  //   Promise.all(calls).then(function(data) {
  //     let max = 0;
  //     let name;
  //     for(let user of data) {
  //       var {login, followers} = user;
  //       if(followers > max) {
  //         max = followers;
  //         name = login;
  //       }
  //     }
  //     resolve(`${name} has the most followers with ${max}`);
  //   }).catch(function(err) {
  //     reject(err);
  //   });
  // });
  let baseUrl = "https://api.github.com/users/";
  let jsonPromises = usernames.map(username => $.getJSON(baseUrl + username));
  return Promise.all(jsonPromises).then(function(data) {
    let max = data.sort((a,b) => a.followers < b.followers)[0];
    return `${max.name} has the most followers with ${max.followers}`;
  });
}


getMostFollowers('elie','tigarcia','colt').then(function(data){
  console.log(data);
}).catch(function(err) {
  console.log(err);
})


function lookupStarWarsPerson(num) {
  return callStarWarsPeopleAPI(`https://swapi.co/api/people/${num}`);
}

function callStarWarsPeopleAPI(url) {
  return $.getJSON(url);
}

function lookupStarWarsFilm(num) {
  return callStarWarsFilmsAPI(`https://swapi.co/api/films/${num}`);
}

function callStarWarsFilmsAPI(url) {
  return $.getJSON(url);
}

function callStarWarsPlanetsAPI(url) {
  return $.getJSON(url);
}

function starWarsString(id) {
  // return new Promise(function(resolve, reject) {
  //   lookupStarWarsPerson(id).then(function(data) {
  //     let {name} = data;
  //     let filmUrl = data.films[0];
  //     callStarWarsFilmsAPI(filmUrl).then(function(data) {
  //       let {title, director} = data;
  //       let planetUrl = data.planets[0];
  //       callStarWarsPlanetsAPI(planetUrl).then(function(data) {
  //         let {name:planetName} = data;
  //         resolve(`${name} is featured in ${title}, directed by ${director} and it takes place on ${planetName}`);
  //       });
  //     });
  //   }).catch(function(err) {
  //     reject(err);
  //   });
  // });
  var str = '';
  return $.getJSON(`https://swapi.co/api/people/${id}`).then(function(data) {
    str += `${data.name} is featured in `;
    let filmData = data.films[0];
    return $.getJSON(filmData);
  }).then(function(res) {
    str += `${res.title}, directed by ${res.director} `;
    let planetData = res.planets[0];
    return $.getJSON(planetData);
  }).then(function(res) {
    str += `and it takes place on ${res.name}`;
    return str;
  }).then(function(finalString) {
    return finalString;
  });
}

starWarsString(1).then(function(data) {
  console.log(data);
});
