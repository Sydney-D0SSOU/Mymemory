const mongoose = require('mongoose')
const unique = require('mongoose-unique-validator')
const adminSchema = mongoose.Schema({
   
   
    email :{type:String,required:true,unique:true},
    password:{type:String,required:true}
});
    adminSchema.plugin(unique)
module.exports = mongoose.model('admin',adminSchema);
