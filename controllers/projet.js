const projet = require('../models/projet');
const fs = require('fs')
exports.createprojet = ((req, res, next) => {
 
  const X = new   projet({
    titre :req.body.titre,
    objectifs:req.body.objectifs,
    business :req.body.business,
    descriptionb:req.body.descriptionb, 
    files: `${req.protocol}://${req.get('host')}/images/${req.file.filename}` ,
    cible :req.body.cible,
    partenaire:req.body.partenaire, 
    concurrents:req.body.concurrents, 
    strategiec :req.body.strategiec,
    strategiep:req.body.strategiep, 
    modeleco:req.body.modeleco, 
    cout :req.body.cout,
    risque:req.body.risque,
    chiffrea: req.body.chiffrea
    
  });

  X.save()
  .then(() => {
      res.status(201).json({
          message: 'Objet créé !'
        });

      })
   .catch((error) => { 
      res.status(400).json({error: error  });
      }
    );
  
});
exports.getallprojet = ((req,res,next)=>{
  console.log(req.headers);
  projet.find()
  .then((product)=>{
res.status(200).json(product);})
.catch((error)=>{
  console.log(error);
})

         
      
  });
