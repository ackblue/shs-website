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

module.exports=router;

