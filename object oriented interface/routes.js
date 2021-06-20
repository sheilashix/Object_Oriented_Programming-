var express=require("express");
var router=express.router();
router.get("/", function(res,res){
    console.log("MY TEAM");
    res.render("index");
    module.export=router;
    
})