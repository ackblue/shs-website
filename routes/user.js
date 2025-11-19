const express=require("express")
const router=express.Router()

const path=require("path")

router.use("/about",function(req,res){
    res.render(path.join(__dirname,"../views/users","about2"))
})

router.use("/member",function(req,res){
    res.render(path.join(__dirname,"../views/users","want_member"))
})

router.use("/contact",function(req,res){
    res.render(path.join(__dirname,"../views/users","want_member"))
})

router.use("/blog",function(req,res){
    res.render(path.join(__dirname,"../views/users","blog"))
})

router.use("/faaliyet",function(req,res){
    res.render(path.join(__dirname,"../views/users","faaliyet"))
})

router.use("/online",function(req,res){
    res.render(path.join(__dirname,"../views/users","online"))
})


module.exports=router;

