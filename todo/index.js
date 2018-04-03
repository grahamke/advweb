var express = require("express"),
    bodyParser = require("body-parser"),
    app = express();

var todoRoutes = require("./routes/todos");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.send("root route");
});

app.use("/api/todos", todoRoutes);

app.listen(3000, function() {
  console.log("Todo server started");
});
