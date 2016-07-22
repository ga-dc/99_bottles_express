module.exports = {
  home: function(req, res){
    res.redirect("/99")
  },
  none: function(req, res){
    res.render("index", {
      numberOfBottles: 0
    })
  },
  some: function(req, res){
    res.render("index", {
      numberOfBottles: req.params.numberOfBottles,
      next: req.params.numberOfBottles - 1
    })
  }
}
