var btn = document.querySelector("#btn");
var avatar = document.querySelector("#avatar");
var fullnameDiv = document.querySelector("#fullname");
var usernameDiv = document.querySelector("#username");
var emailSpan = document.querySelector("#email");
var citySpan = document.querySelector("#city");

window.onload = function() {
    generateUser();
}

btn.addEventListener("click", function() {
  generateUser();
});

function generateUser() {
  var url = "https://randomuser.me/api/";
  fetch(url)
  .then(handleErrors)
  .then(parseJSON)
  .then(updateProfile)
  .catch(printError);
}

function handleErrors(response) {
  if(!response.ok) {
    throw Error(response.status);
  }
  return response;
}

function parseJSON(response) {
  return response.json().then(function(data) {
    return data.results[0];
  });
}

function updateProfile(user) {
  var fullname = user.name.first+" "+user.name.last;
  var username = user.login.username;
  var email = user.email;
  var city = user.location.city;
  var imgSrc = user.picture.medium;
  fullnameDiv.innerText = fullname;
  usernameDiv.innerText = username;
  emailSpan.innerText = email;
  citySpan.innerText = city;
  avatar.src = imgSrc;
}

function printError(error) {
  console.log(error);
}
