var express = require("express")
var app = express()
var bottles = require("./bottles")

app.set("view engine","hbs")
app.use(express.static("public"))
app.get("/", bottles.home)
app.get("/0", bottles.none)
app.get("/:numberOfBottles", bottles.some)

app.listen(3030, function(){
  console.log("listening on http://localhost:3030/")
})
