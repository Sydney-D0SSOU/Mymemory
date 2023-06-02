8
const { response } = require('express');
const projet = require('../models/projet');
const utilisateur = require('../models/utilisateur');
const nodemailer = require('nodemailer');


const fs = require('fs');
const { request } = require('../server');
const { log } = require('console');
const { isObjectIdOrHexString } = require('mongoose');
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
const bb = await utilisateur.findById(utilisateurId);
const emailUtilisateur = bb.email;

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
  emailUtilisateur ,
  createdAt : formattedDate
   });

  const projetsave = await X.save();
  console.log('Projet enregistré :', projetsave);
console.log(bb);
  res.status(201).json(projetsave);
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
  exports.modify = async (req, res) => {
    try {
      const X = new projet({
        _id: req.params.id,
        etat: "Validé",
        new: true,
        ...req.body
      });
  
      await   projet.updateOne({ _id: req.params.id }, X)
  
      const one = await  projet.findById({_id:req.params.id}).exec()
      const emailUtilisateur = one.emailUtilisateur
      const titre = one.titre
      const datei = one.createdAt
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'sydneydossou400@gmail.com',
          pass: 'zacgrczjeqzkwbde',
        },
      });
  
      const mailOptions = {
        from: 'sydneydossou400@gmail.com',
        to: emailUtilisateur,
        subject: 'Décision de kouè-mìton',
        text: 'Votre projet  a été validé et sera publier afin d´attirer des investisseurs et pour une campagne de collecte de fonds' ,
        html: `<!doctype html>
        <html ⚡4email>
         
          <body>
        Votre projet :   "${titre}" soumis le : "${datei}" <b text-color="red"> Vient d´être  valider pour une campagne de collecte de fonds,retrouver la  au niveau de la liste des projet à financer sur notre plateforme .  </b> . Kouè-Mìtòn vous remercie pour votre contribution </p>
         
           </body> 
        </html>`
      };
  
      const emailResult = await transporter.sendMail(mailOptions);
     console.log(X);  
      console.log('E-mail envoyé avec succès ! Réponse du serveur :', emailResult.response);
  
      res.status(201).json({ message: 'Projet modifié' });
    } catch (error) {
      console.log('Erreur lors de la modification du projet :', error);
      res.status(500).json({ error: 'Erreur lors de la modification du projet' });
    }
  };
  
  exports.modify1 = async (req, res) => {
    try {
      const X = new projet({
        _id: req.params.id,
        etat: "Refusé",
       
        new: true,
        ...req.body
      });
  
      await    projet.updateOne({ _id: req.params.id }, X)
  
      const one = await  projet.findById({_id:req.params.id}).exec()
      const emailUtilisateur = one.emailUtilisateur
      const titre = one.titre
      const img = one.files
      const datei = one.createdAt
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'sydneydossou400@gmail.com',
          pass: 'zacgrczjeqzkwbde',
        },
      });
  
      const mailOptions = {
        from: 'sydneydossou400@gmail.com',
        to: emailUtilisateur,
        subject: 'Décision de kouè-mìton',
        text: 'Votre projet  été refusé cause de faible taux de viabilité et de faisabilité (impertinence ).' ,
        html: `<!doctype html>
        <html ⚡4email>
         
          <body>
        Votre projet :   "${titre}" soumis le : "${datei}" <b text-color="red"> n´est pas valide pour une campagne de collecte de fonds </b> .  Kouè-Mìtòn vous remercie pour votre contribution</p>
         
           </body> 
        </html>`
      };
  
      const emailResult = await transporter.sendMail(mailOptions);
  
      console.log('E-mail envoyé avec succès ! Réponse du serveur :', emailResult.response);
  
      res.status(201).json({ message: 'Projet modifié' });
    } catch (error) {
      console.log('Erreur lors de la modification du projet :', error);
      res.status(500).json({ error: 'Erreur lors de la modification du projet' });
    }
  };
  