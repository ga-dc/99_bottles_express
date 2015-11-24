var express = require("express");
var app = express();

app.listen(4000, function(){
  console.log("app listening on port 4000");
});

app.get("/", function(req, res){
  res.send("<p>99 bottles of beer on the wall</p><a href=\"/98\"> take one down, pass it around... </a>");
});

app.get("/:num", function(req, res){
  if (isNaN(req.params.num) === false){
    if (parseInt(req.params.num) === 99){
      res.send("<p>99 bottles of beer on the wall</p><a href=\"/98\"> take one down, pass it around... </a>");
    }
    else if (parseInt(req.params.num) === 98){
      res.send("<p>"+req.params.num+" bottles of beer on the wall</p><a href=\"/"+(req.params.num-1)+"\"> take one down, pass it around... </a> <br> <a href=\"/\"> take that bottle back, put it back up... </a>");
    }
    else if (parseInt(req.params.num) === 0){
      res.send("<p>"+req.params.num+" bottles of beer on the wall. Party\'s Over.</p><a href=\"/\"> Start Over? </a>");
    }
    else if (parseInt(req.params.num) > 99){
      res.send("<p>"+req.params.num+" bottles of beer?? You can't have that many!! What parties are you having?!</p><a href=\"/\"> Go back to 99 Bottles Start... </a>");
    }
    else if (parseInt(req.params.num) < 0){
      res.send("<p>"+req.params.num+" bottles of beer? You can't have negative beer. Only regret and hangovers.</p><a href=\"/\"> Go back to 99 Bottles Start... </a>");
    }
    else{
      res.send("<p>"+req.params.num+" bottles of beer on the wall</p><a href=\"/"+(req.params.num-1)+"\"> take one down, pass it around... </a> <br> <a href=\""+( parseInt(req.params.num) + 1)+"\"> take that bottle back, put it back up... </a>");
    }
  }
  else{
    res.send("<p>"+req.params.num+"?? You can't have that! The rules are VERY simple. We're asking for NUMBERS. PLAY BY THE RULES. </p><a href=\"/\"> Back to 99 Bottles of Beer on the wall... </a>");
  }
});
