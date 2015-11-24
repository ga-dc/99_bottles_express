var express = require("express");
var app = express();
var hbs = require("hbs");
var bottles = require("./controllers/bottles");

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public')); // Serve static content (css, etc) for the app from the “public” directory in the application directory


app.listen(3000, function(){
  console.log("app listening on port " + this.address().port);
});

app.get("/:numberOfBottles?", bottles.index);
