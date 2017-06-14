var express = require('express');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var User = require('../models/user');

var router = express.Router();

router.post('/', function (req, res, next) {
    var user = new User({
    	firstName: req.body.firstName,
    	lastName: req.body.lastName,
    	password: bcrypt.hashSync(req.body.password, 10),
    	email: req.body.email,
    });
    user.save(function(err,result) {
    	if (err) {
    		return res.status(500).json({
    			title:"an error occured",
    			error:err
    		});
    	}
    	res.status(201).json({
    		message:'User Created',
    		obj: result
    	})
    })
});

router.post('/signin', function (req, res, next) {
	User.findOne({email:req.body.email}, function(err,user) {
		if (err) {
    		return res.status(500).json({
    			title:"an error occured",
    			error:err
    		});
    	}
    	if (!user) {
    		return res.status(500).json({
    			title:"authentication failed",
    			error:{message:'Invalid login credential'}
    		});
    	}
    	if (!bcrypt.compareSync(req.body.password, user.password)){
    		return res.status(401).json({
    			title:"authentication failed",
    			error:{message:'Invalid login credential'}
    		});
    	}
    	
    	var token = jwt.sign({user:user}, 'secret', {expiresIn:7200});
    	
    	res.status(200).json ({
    		message:'Login Success!',
    		token: token,
    		userId: user._id
    	})
	})
})

module.exports = router;
