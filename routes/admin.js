const express=require("express")
const router=express.Router()

const path=require("path")

router.use("/login",function(req,res){
    res.render(path.join(__dirname,"../views/admin","login"))
})


module.exports=router;