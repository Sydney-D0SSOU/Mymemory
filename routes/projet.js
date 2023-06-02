const express = require('express');
const router = express.Router();
const upload  = require('../middlewares/multer')
const auth = require('../middlewares/auth')
const projetCtrl = require('../controllers/projet');
const adauth =  require('../middlewares/authadmin')

 
router.post('/create',auth,upload,projetCtrl.createprojet);
router.get('/all',auth,projetCtrl.getallprojet);
router.get('/all1',adauth,projetCtrl.getallprojet1);
router.get ('/oneuser/:id',projetCtrl.getoneprojet);
router.get ('/one/:id',projetCtrl.getoneprojet);

router.get ('/one1/:id',projetCtrl.getoneprojet1);
router.put('/modify/:id',adauth,projetCtrl.modify);
router.put('/modify1/:id',adauth,projetCtrl.modify1)


module.exports=router;

