const {DataTypes} = require("sequelize");
const sequelize =require("../data/dbüye");

const Üye = sequelize.define("üye",{
    üyeid:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    il:{
        type:DataTypes.STRING,
        allowNull:false
    },
    kadro_yeri:{
        type:DataTypes.TEXT,
        allowNull:false,
    },
    görev_yeri:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    isim:{
        type:DataTypes.STRING,
        allowNull:false
    },
    soyisim:{
        type:DataTypes.STRING,
        allowNull:false
    },
    unvan:{
        type:DataTypes.STRING,
        allowNull:false
    },
    ilkodu:{
        type:DataTypes.INTEGER,
        allowNull:true
    },
    ilcekodu:{
        type:DataTypes.INTEGER,
        allowNull:true
    },
    isyerikodu:{
        type:DataTypes.INTEGER,
        allowNull:true
    },
    komisyonkodu:{
        type:DataTypes.INTEGER,
        allowNull:true
    },
    eklenmeTarihi:{
        type:DataTypes.DATE,
        defaultValue:DataTypes.NOW
    },

}, {
  freezeTableName: true
})

async function sync() {
    await Üye.sync({alter:true});
    console.log("Üye tablosuna eklendi")  

    const count = await Üye.count();
    console.log(count)
    if(count==0){
        await Üye.create({
            il:"Eskişehir",
            kadro_yeri:"Eskişehir Ash İl Müdürlüğü",
            görev_yeri:"Eskişehir 1. Kadın Konukevi Müdürlüğü",
            isim:"Mert",
            soyisim:"Demir",
            unvan:"Memur",
            ilkodu:"26",
            ilcekodu:"1",
            isyerikodu:"4",
            komisyonkodu:"1",

        })
        await Üye.create({
            il:"Eskişehir",
            kadro_yeri:"Eskişehir Çocuk Evleri Koordinasyon Merkezi Müdürlüğü",
            görev_yeri:"Eskişehir Çocuk Evleri Koordinasyon Merkezi Müdürlüğü",
            isim:"Ahmet",
            soyisim:"Ertaş",
            unvan:"Sosyal Çalışmacı",
            ilkodu:"26",
            ilcekodu:"1",
            isyerikodu:"2",
            komisyonkodu:"2",

        })
        await Üye.create({
            il:"Eskişehir",
            kadro_yeri:"Eskişehir Halis Toprak Huzurevi Müdürlüğü",
            görev_yeri:"Eskişehir Halis Toprak Huzurevi Müdürlüğü",
            isim:"Hilmi",
            soyisim:"Tezcan",
            unvan:"Sosyal Çalışmacı",
            ilkodu:"26",
            ilcekodu:"1",
            isyerikodu:"3",
            komisyonkodu:"3",

        })
        await Üye.create({
            il:"Eskişehir",
            kadro_yeri:"Eskişehir Hacı Süleyman Çakır Huzurevi Müdürlüğü",
            görev_yeri:"Eskişehir Fethi Yılmaz Sezer Huzurevi Müdürlüğü",
            isim:"Davut",
            soyisim:"Gündoğan",
            unvan:"Hizmetli(Yaşlı Bakımcı)",
            ilkodu:"26",
            ilcekodu:"1",
            isyerikodu:"4",
            komisyonkodu:"4",

        })
    }
}

sync()

module.exports = Üye
