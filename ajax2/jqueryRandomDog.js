$("#btn").click(function() {
  getRandomPhoto();
});

function getRandomPhoto() {
  $.getJSON("https://dog.ceo/api/breeds/image/random")
  .done(function(json) {
    console.log(json.message);
    $("#photo").attr("src",json.message);
    console.log("done");
  })
  .fail(function() {
    console.log("error");
  });
}

window.onload = function() {
    getRandomPhoto();
}
