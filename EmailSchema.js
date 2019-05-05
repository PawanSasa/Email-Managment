const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let emailSchema = new Schema({



    id:{type:String, require: true},
    status:{type:String, require: true}


});



let Email = mongoose.model('Email', emailSchema);
module.exports.Email = Email;