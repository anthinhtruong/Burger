var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req,res){
    burger.selectAll(function(data) {
    var hbsObject = {
      cats: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});


router.post("/", function(req, res) {
  cat.insertOne(["burger_name", "devour"], [ req.body.name, req.body.devour], function() {
    res.redirect("/");
  });
});



router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.updateOne({
    sleepy: req.body.devour
  }, condition, function() {
    res.redirect("/");
  });
});


module.exports = router;