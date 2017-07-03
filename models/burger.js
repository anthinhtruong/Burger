var orm = require("../config/orm.js")

var burger = {
    all: function(cb){
        orm.all("burger", function(res){
            cb(res);
        })
    },
    update: function(id, cb) {
        // orm.update("burger",  devoured = true , "id = " + id , function(res){
        //     cb(res);
        // });
        var condition = "id=" + id;
        orm.update("burgers", {devoured: true}, condition, cb);
  
    },
    create: function(name, cb){
        // orm.create("burger","burger_name", burgerName,function(res){
        //     cb(res);
        // })
        orm.create("burgers", ["burger_name", "devoured"], [name, false], cb);
    
    }
};

module.exports = burger;