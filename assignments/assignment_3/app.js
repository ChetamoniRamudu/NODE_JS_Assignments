const express=require("express");
const app=express();
const faker=require("faker");
app.set("views","./views");
app.set("view engine","ejs");
var bodyparser=require("body-parser");
app.use(bodyparser.urlencoded({extended:false}));

var users=[]
for(let i=0;i<5;i++){
    users.push({
        name:faker.name.findName(),
        email:faker.internet.email(),
        age:30+i,
        city:faker.address.city(),
        profession:faker.name.jobTitle()

    })
}
console.log(users)
app.get("/",(req,res)=>{
    res.render("index.ejs",{users})
})
app.get("/form",(req,res)=>{
    res.render("form.ejs")
})
app.post("/user/add",(req,res)=>{
   // console.log(req.body)
    users.push({
        name:req.body.name,
        email:req.body.email,
        age:req.body.age,
        city:req.body.city,
        profession:req.body.profession

    })
    res.redirect("/")
})
app.listen(3000,()=>{
    console.log("express sever is ready")
})