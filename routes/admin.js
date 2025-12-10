const express=require("express")
const router=express.Router()
const dbüye=require("../data/dbüye")
const path=require("path")

router.use("/login",function(req,res){
    res.render(path.join(__dirname,"../views/admin","login"))
})

router.use("/addmember",function(req,res){
    res.render(path.join(__dirname,"../views/admin","addmember"))
})

router.use("/admin",function(req,res){
    res.render(path.join(__dirname,"../views/admin","admin"))
})

router.use("/memberlist",function(req,res){
    
    dbüye.query("select * from üye")
        .then(result=>{
            res.render("admin/memberlist",{
                title:"Üyeler",
                üyeler:result[0]
            })
        })
})

router.use("/uye-ekle",async function(req,res){
    try{
        const [iller,illerMeta] = await dbüye.query("SELECT * FROM iller")
        const [kuruluslar,kuruluslarMeta]=await dbüye.query("SELECT * FROM kuruluslar")

        res.render("admin/uye-ekle",{
            title:"Üyelik",
            illerimiz:iller,
            kuruluslarımız:kuruluslar[0]
        })
    } catch(err){
        console.log(err)
        res.send("Veri alırken hata oluştu")

    }
})

const { QueryTypes } = require("sequelize");

router.get("/uyelik-islemleri", async function(req, res) {

    const il = parseInt(req.query.il_kodu);
    console.log("Gelen il:", il);

    try {
        const kuruluslar = await dbüye.query(
            "SELECT * FROM kuruluslar WHERE il_kodu = :ilkodu",
            {
                replacements: { ilkodu: il },
                type: QueryTypes.SELECT
            }
        );

        res.render("admin/uyelik_islemleri", {
            il_kodu: il,
            kuruluslar
        });

    } catch (err) {
        console.error("SQL HATASI:", err);
        res.send("SQL Hatası: " + err);
    }
});



module.exports=router;