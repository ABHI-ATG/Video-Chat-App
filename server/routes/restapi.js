const router=require('express')();

const create=require('../controllers/create')

router.route('/create').post(create);
router.route('/create').post(create);

module.exports=router;