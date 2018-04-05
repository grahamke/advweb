var startBtn = document.querySelector("#toggle-btn");
var sp = document.querySelector("#price");


startBtn.addEventListener("click", function() {
  var XHR = new XMLHttpRequest();

  XHR.onreadystatechange = function() {
    if( XHR.readyState == 4 && XHR.status == 200) {
      var bpi = JSON.parse(XHR.responseText).bpi;
        var rate = bpi.USD.rate;
        sp.innerText = rate +" USD";
      }
    }
    XHR.open("GET","https://api.coindesk.com/v1/bpi/currentprice.json");
    XHR.send();
  }
);
