const express=require("express")
const router=express.Router()
const db=require("../data/db")

const path=require("path")
const data={
    title:"Popüler Yazılar",
    categories:["Komisyonlar","Faaliyetlerimiz","Başardıklarımız","Hakkımızda"],
    blogs:[{
        
        blogid:1,
        baslik:"Komple ileri seviye web geliştirme",
        aciklama:"Sıfırdan ileri seviye geliştirme",
        resim:"1.png",
    },
    {
        
        blogid:2,
        baslik:"Nodejs geliştirme",
        aciklama:"Nodejs geliştiröee",
        resim:"1.png",
    }

]}
router.use("/about",function(req,res){
    res.render(path.join(__dirname,"../views/users","about2"))
})

router.use("/komisyon",function(req,res){
    db.query("select * from komisyon")
        .then(result=>{
            res.render("users/komisyon",{
                title:"Komisyonlar",
                komisyonlar:result[0]
            })
        })
        .catch(err=>console.log(err))
})

router.use("/contact",function(req,res){
    res.render(path.join(__dirname,"../views/users","komisyon"))
})

router.use("/blog", function (req, res) {
    db.query("select * from blog")
        .then(result=>{
            res.render("users/blog",{
                title:"Bloglar",
                blogs:result[0]
            });
        })
        .catch(err=>console.log(err))
});

router.use("/faaliyet",function(req,res){
    res.render(path.join(__dirname,"../views/users","faaliyet"))
})

router.use("/online",function(req,res){
    res.render(path.join(__dirname,"../views/users","online"))
})


module.exports=router;

