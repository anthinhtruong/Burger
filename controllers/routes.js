var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");


router.get("/", function(req,res){
    burger.all(function(data){
        console.log(data)
        res.render("index", { burgers: data })
    });
    
});


router.put("/burger/update",function(req,res){
    burger.update(req.body.burger_id, function(result){
        console.log(result);
        res.redirect("/");
    

    });
});


router.post("/add", function(req,res){
    burger.create(req.body.burger_name, function(result){
        console.log(result);
        res.redirect("/");
    });
});
module.exports = router;