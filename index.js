var express = require("express")
var app = express()
app.set("view engine","hbs")
app.use(express.static("public"))
// when on the home page
app.get("/", function(req, res){
  res.render("index", {
    numberOfBottles: 99,
    next: 98
  })
})
// when no bottles left
app.get("/0", function(req, res){
  res.render("index", {
    numberOfBottles: 0
  })
})
// when on a page /1 - 98
app.get("/:numberOfBottles", function(req, res){
  res.render("index", {
    numberOfBottles: req.params.numberOfBottles,
    next: req.params.numberOfBottles - 1
  })
})

app.listen(3030, function(){
  console.log("listening on http://localhost:3030/")
})
