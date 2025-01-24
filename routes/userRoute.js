const express = require("express");
const router = express.Router();
const{getCurrentUser,postLoginUser,postRegisterUser} = require('../controllers/userControllers');
const validateToken = require("../middleware/validateTokenHandler");


router.route('/login').post(postLoginUser);
router.route('/register').post(postRegisterUser);
router.route('/current').get(validateToken,getCurrentUser);

module.exports = router;




