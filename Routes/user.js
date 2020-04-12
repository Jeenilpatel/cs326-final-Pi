const express = require('express');
const router  = express.Router();

router.use(function(req,res,next){
    console.log("Check for the users..")
    next()
});

router.get(function(req,res){
    console.log('user homePage')
    res.render('User-Page')
})

module.exports = router;