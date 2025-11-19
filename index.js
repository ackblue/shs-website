const express=require("express")
const app=express()

const path=require("path")
const userRoutes=require("./routes/user")
const adminRoutes=require("./routes/admin")

const bodyParser = require("body-parser");
const ExcelJS = require("exceljs");
const nodemailer = require("nodemailer");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/libs",express.static(path.join(__dirname,"node_modules")))
app.use("/static",express.static(path.join(__dirname,"public")))
app.set("view engine","ejs")
app.use(userRoutes)
app.use(adminRoutes)

app.post("/uyelik", (req, res) => {
  console.log(req.body); // form verilerini görmek için
  res.send("Form alındı!");
});

app.listen(3000,function(){
    console.log("listening on port 3000")
})