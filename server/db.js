const mongoose = require('mongoose'); 

mongoose.connect('mongodb://localhost:27017/sampled',(err)=>{
    if(!err){
        console.log("Mongodb Connection succeeded");
    }
    else{
        console.log("Mongodb Connection failed");
    }
});
module.exports = mongoose;