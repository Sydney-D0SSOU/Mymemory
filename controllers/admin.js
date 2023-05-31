const admin = require('../models/admin');
const bcrypt = require ('bcrypt');
const jwt = require('jsonwebtoken')

exports.signup =(req,res,next)=>{
    bcrypt.hash(req.body.password,10)
    .then(hash=>{
        const x = new admin({
    email :req.body.email,
    password:hash
        });
    
        x.save()
        .then(()=>{
            res.status(200).json({message:'COMPTE ADMIN CREER AVEC SUCCES'})
        })
            .catch((error)=>{
                res.status(200).json({message:'Votre compte n´a pas été créer veiller ce mail existe déja'})    
console.log(error);
});
})  

    .catch((error)=>{
        console.log(error)
    res.status(500).json({error})
})
} ;
exports.login= (req,res,next)=>{
    admin.findOne({email:req.body.email})
.then(admin=>{
    if(!admin){
     return res.status(401).json({error:'admin non trouver'})}

    bcrypt.compare(req.body.password,admin.password)
    .then(valid=>{
        if(!valid){
            return res.status(401).json({error:'mot de passe incorrect'})
        }
        res.status(200).json({
            userId:admin._id,
            token:jwt.sign(
                {userId:admin._id},
                'ADMIN_TOKEN_SECRET',
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