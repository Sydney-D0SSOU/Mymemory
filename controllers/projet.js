const projet = require('../models/projet');
const utilisateur = require('../models/utilisateur');

const fs = require('fs')
exports.createprojet = (async(req, res, next) => {
 const {    
  titre ,
  objectifs,
  business ,
  descriptionb, 
  files,
  cible ,
  partenaire, 
  concurrents, 
  strategiec,
  strategiep, 
  modeleco, 
  cout ,
  risque,
  chiffrea ,
  
  
} =req.body
const utilisateurId = req.auth.userId;
const createdAt = new Date();
const formattedDate = createdAt.toString();

// Utilisez la valeur `formattedDate` lors de l'enregistrement en base de données


// Utilisez la valeur de 'formattedDate' lors de l'enregistrement dans la base de données

try{
  const X = new   projet({
    titre ,
  objectifs,
  business ,
  descriptionb, 
  files: `${req.protocol}://${req.get('host')}/images/${req.file.filename}` ,
  cible ,
  partenaire, 
  concurrents, 
  strategiec,
  strategiep, 
  modeleco, 
  cout ,
  risque,
  chiffrea ,
  utilisateurId ,
  createdAt : formattedDate
   });

  const produitEnregistre = await X.save();
  console.log('Produit enregistré :', produitEnregistre);
  res.status(201).json(produitEnregistre);
} 
catch (error) {
  console.error('Erreur lors de l\'enregistrement du produit :', error);
  res.status(500).json({ error: 'Erreur lors de l\'enregistrement du produit' });
}  
  });
exports.getallprojet = ((req,res,next)=>{
  projet.find()
  .then((product)=>{
res.status(200).json(product);})
.catch((error)=>{
  console.log(error);
})

         
      
  });
  exports.getallprojet1 = ((req,res,next)=>{
    console.log(req.headers);
    projet.find()
    .then((product)=>{
  res.status(200).json(product);})
  .catch((error)=>{
    console.log(error);
  })
  
           
        
    });
  exports.getoneprojet =(req,res,next)=>{
    projet.findById({_id:req.params.id})
    .then((projet)=>{
      res.status(200).json(projet)
    })
    .catch((error)=>{
      console.log(error);
      
    })
  };
  exports.getoneprojet1 =(req,res,next)=>{
    projet.findById({_id:req.params.id})
    .then((projet)=>{
      res.status(200).json(projet)
    })
    .catch((error)=>{
      console.log(error);
      
    })
  };
  exports.modify=(req,res)=>{
    const X = new projet({
      _id:req.params.id,
      etat:"Validé",
     new:true ,
      ...req.body
  });
  projet.updateOne({_id:req.params.id},X)
  .then(()=>{
    res.status(201).json({message:'Projet modifier'})
  })
  .catch((error)=>{
    console.log(error);
  })
  };
  exports.modify1=(req,res)=>{
    const X = new projet({
      _id:req.params.id,
      etat:"Refusé",
     new:true ,
      ...req.body
  });
  projet.updateOne({_id:req.params.id},X)
  .then(()=>{
    res.status(201).json({message:'Projet modifier'})
  })
  .catch((error)=>{
    console.log(error);
  })
  };