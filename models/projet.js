const mongoose = require('mongoose')
const utilisateur = require('./utilisateur')
const projetSchema = mongoose.Schema({
    titre:{type:String,required:true},
    objectifs :{type:String,required:true },
    business:{type:String,required:true},
    descriptionb:{type:String,required:true},
    files :{type:String,required:true},
    cible:{type:String,required:true},
    partenaire:{type:String,required:true},
    concurrents :{type:String,required:true },
    strategiec:{type:String,required:true},
    strategiep :{type:String,required:true},
    modeleco :{type:String,required:true },
    cout:{type:Number,required:true},
    risque:{type:String,required:true},
    chiffrea :{type:Number,required:true},
    utilisateurId: {type:String,required:true },
    emailUtilisateur : {type:String,required:true },
    createdAt: {
        type: String ,
      required :true
      },
      updatedAt: {
        type: Date ,
        default:Date ,
      required :false
      },

      etat:{
        type :String,
        default:'En attente de traitement ...',
        required:true
      }
       
    
});
   
module.exports = mongoose.model('projet',projetSchema);
