const express=require("express")
const router=express.Router()

const path=require("path")

router.use("/about",function(req,res){
    res.sendFile(path.join(__dirname,"../views/users","about2.html"))
})

router.use("/üye",function(req,res){
    res.sendFile(path.join(__dirname,"../views/users","want_member.html"))
})

module.exports=router;

