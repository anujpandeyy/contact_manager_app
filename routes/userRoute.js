const express = require("express");
const router = express.Router();
const{getCurrentUser,postLoginUser,postRegisterUser} = require('../controllers/userControllers');


router.route('/login').post(postLoginUser);
router.route('/register').post(postRegisterUser);
router.route('/current').get(getCurrentUser);

module.exports = router;




