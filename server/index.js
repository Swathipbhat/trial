const express = require('express')
const path = require('path')
const bodyparser = require('body-parser')
const mongoose = require("./db.js");
const details = require('./model/datab')
app = express()
app.listen("3001",()=>console.log("server running in port 3000"));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.set('views',path.join(__dirname,'views'));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs')
app.use(express.urlencoded());
app.use(express.static("assets"));

app.get('/', async(req,res) => {
    res.render('myform')
    
})
app.post('/subfrm',async(req,res)=>{
  

    details.create({
        name : req.body.name,
        email : req.body.email,
        dob: req.body.dob,
        EBasicPay : req.body.EBasicPay,
       
        epid: req.body.epid,
        HRA:req.body.EBasicPay*12,
PF:req.body.EBasicPay*15,
TotalSal:req.body.EBasicPay*15+req.body.EBasicPay*12
    }, function(err,newu)
    {
        if(err)
        {
            console.log('User not added',err);
            return res.send('Try by changing by emailid')
        }
        
        // const messages = details.find({})

        // console.log("created user : ",newu);
        // console.log("messages user : ",messages);
        // return res.render("myformnew.ejs", {messages})
        res.redirect('/get_cotent')
    });
})

app.get('/get_cotent',async(req,res) => {
    const messages = await details.find({
        
    })
    try{
        console.log("Messages : ", messages);
        return res.render("myformnew.ejs", {messages})
    }
    catch(e) {
        return res.json({status : 'error'})
    }  
});