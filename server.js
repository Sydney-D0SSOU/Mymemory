const express = require('express');
const mongoose = require ('mongoose');
const userrouter = require('./routes/utilisateur')
const adminrouter = require('./routes/admin')
const projetrouter = require('./routes/projet')
const bodyparser= require('body-parser')
const nodemailer = require('nodemailer');

const path = require('path');
const app = express() ;
const port = 3004 ;
app.use(express.json());
mongoose.set('strictQuery', true);
app.listen(port, () => {
  console.log(` serveur en ecoute sur le port : ${port}`)
  
})
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});
db_url = 'mongodb+srv://blog123:blog123@cluster0.ixgvyv9.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(db_url)
.then((result)=>{
  console.log('connexion avec succes a la BDD');

})
.catch((err)=>{
  console.log(err);
});
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sydneydossou400@gmail.com',
    pass: 'zacgrczjeqzkwbde',
  },
});

app.use(express.urlencoded({extended :true}));
app.use(bodyparser.json());
app.use('/images', express.static(path.join(__dirname, 'images')));
  app.use('/auth' ,userrouter);
  app.use('/pro' ,projetrouter);
 app.use('/auth1',adminrouter);

  module.exports =app ;