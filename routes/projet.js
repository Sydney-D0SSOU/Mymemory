const express = require('express');
const router = express.Router();
const upload  = require('../middlewares/multer')
const auth = require('../middlewares/auth')
const projetCtrl = require('../controllers/projet');

 
router.post('/create',upload,projetCtrl.createprojet);

router.get('/all',auth,projetCtrl.getallprojet);
module.exports=router;

