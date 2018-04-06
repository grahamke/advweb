var url = 'https://opentdb.com/api.php?amount=1';
var p = document.querySelector("#para");
var btn = document.querySelector("#btn");

btn.addEventListener("click",function() {
  getTriviaQuestion();
});

function getTriviaQuestion() {
  axios.get(url)
  .then(function(res) {
    var question = res.data.results[0].question;
    console.log(question);
    p.innerText = question;
  })
  .catch(handleErrors);
}

function handleErrors(err) {
    if (err.response) {
      console.log("Problem With Response ", err.response.status);
    } else if (err.request) {
      console.log("Problem With Request!");
    } else {
      console.log('Error', err.message);
    }
  }

window.onload = function() {
  getTriviaQuestion();
}
