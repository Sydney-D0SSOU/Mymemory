const mongoose = require('mongoose')
const projetSchema = mongoose.Schema({
   
    titre:{type:String,required:false},
    objectifs :{type:String,required:false },
    business:{type:String,required:false},
    descriptionb:{type:String,required:false},
    files :{type:String,required:false},
    cible:{type:String,required:false},
    partenaire:{type:String,required:false},
    concurrents :{type:String,required:false },
    strategiec:{type:String,required:false},
    strategiep :{type:String,required:false},
    modeleco :{type:String,required:false },
    cout:{type:Number,required:false},
    risque:{type:String,required:false},
    chiffrea :{type:Number,required:false}
    
});
   
module.exports = mongoose.model('projet',projetSchema);
