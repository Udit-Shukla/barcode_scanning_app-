const express=require('express');
const { createUser, userLogin } = require('../Controllers/auth');
const router=express.Router();

//defiing routes
router.post("/register",createUser);
router.post("/login",userLogin);

module.exports=router;