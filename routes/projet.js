const express = require('express');
const router = express.Router();
const upload  = require('../middlewares/multer')
const auth = require('../middlewares/auth')
const projetCtrl = require('../controllers/projet');

 
router.post('/create',auth,upload,projetCtrl.createprojet);


router.get('/all',auth,projetCtrl.getallprojet);
router.get ('/one/:id',auth,projetCtrl.getoneprojet)
module.exports=router;

