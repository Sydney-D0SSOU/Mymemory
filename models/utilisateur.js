const mongoose = require('mongoose')
const unique = require('mongoose-unique-validator')
const utilisateurSchema = mongoose.Schema({
   
    nom:{type:String,required:true},
    prenom :{type:String,required:true },
    datenaiss:{type:String,required:true},
    email :{type:String,required:true,unique:true},
    password:{type:String,required:true}
});
    utilisateurSchema.plugin(unique)
module.exports = mongoose.model('utilisateur',utilisateurSchema);
