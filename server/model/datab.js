const mongoose = require('mongoose'); 
var Details = mongoose.model('Details',{ 
    name : {type : String},
    email : {type:String,unique : true},
    epid : {type : String},
    dob : {type : Date}, 
    EBasicPay:{type:Number},
    HRA:{type:Number},
    PF:{type:Number},
    TotalSal:{type:Number}
});
module.exports = Details;