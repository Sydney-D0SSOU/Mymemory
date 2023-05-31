const utilisateur = require('../models/utilisateur');
const bcrypt = require ('bcrypt');
const jwt = require('jsonwebtoken')

exports.signup =(req,res,next)=>{
    bcrypt.hash(req.body.password,10)
    .then(hash=>{
        const induvidual = new utilisateur({
    nom:req.body.nom,
    prenom :req.body.prenom,
    datenaiss:req.body.datenaiss,
    email :req.body.email,
    password:hash
        });
    
        induvidual.save()
        .then(()=>{
            res.status(200).json({message:'COMPTE CREER AVEC SUCCES'})
        })
            .catch((error)=>{
                res.status(200).json({message:'Votre compte n´a pas été créer, ce mail existe déja '})    
console.log(error);
});
})  

    .catch((error)=>{
    res.status(500).json({error})
    res.status(500).json({message:'Notre site est en maitenance veillez  recommencez un peu plus tard '})    

})
} ;
exports.login= (req,res,next)=>{
    utilisateur.findOne({email:req.body.email})
.then(utilisateur=>{
    if(!utilisateur){
     return res.status(401).json({error:'Utilisateur non trouver'})}

    bcrypt.compare(req.body.password,utilisateur.password)
    .then(valid=>{
        if(!valid){
            return res.status(401).json({error:'mot de passe incorrect'})
        }
        res.status(200).json({
            message:'Authentification avec succes',
            userId:utilisateur._id,
            token:jwt.sign(
                {userId:utilisateur._id},
                'RANDOM_TOKEN_SECRET',
                { expiresIn: '12h' }
            )
        });
    })
    .catch(error=>{
        res.status(500).json({error})
    });

})
 .catch(error=>{
        res.status(500).json({error})
    });
};