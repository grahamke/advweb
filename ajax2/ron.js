var url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';

var btnXhr = document.querySelector("#xhr");
var quote = document.querySelector("#quote");

btnXhr.addEventListener("click", function() {
  var XHR = new XMLHttpRequest();

  XHR.onreadystatechange = function() {
    if( XHR.readyState == 4 && XHR.status == 200) {
      var json = JSON.parse(XHR.responseText);
      quote.innerText = json[0];
    }
  };
  XHR.open("GET",url);
  XHR.send();
});

var fetchBtn = document.querySelector("#fetch");
fetchBtn.addEventListener("click",function() {
  fetch(url)
  .then(handleErrors)
  .then(parseJSON)
  .then(updateQuote)
  .catch(printError);
});

function handleErrors(response) {
  if(!response.ok) {
    throw Error(response.status);
  }
  return response;
}

function parseJSON(response) {
  return response.json()
    .then(function(data) {
      return data[0];
    });
}

function updateQuote(data) {
  quote.innerText = data;
}

function printError(error) {
  console.log(error);
}

$("#jquery").click(function() {
  $.getJSON(url)
  .then(function(res) {
    $("#quote").text(res[0]);
  });
});

var axiosBtn = document.querySelector("#axios");

axiosBtn.addEventListener("click", function() {
  axios.get(url)
  .then(function(res) {
    quote.innerText = res.data[0];
  })
});
