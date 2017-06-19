var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();

var Recipe = require('../models/recipe');
var User = require('../models/user');

router.get('/',function (req, res, next) {
	Recipe.find()
		.populate('user', 'firstName lastName')
		.exec(function(err,recipes){
			if (err) {
				return res.status(500).json({
					title:"error occured",
					error:err
				})
			}
			res.status(200).json({
				message:'Success',
				obj:recipes
			})
		})
})

router.post('/create',function (req, res, next) {
	var token = jwt.verify(req.query.token,'secret',function(err, decoded){
		if (err) {
    		return res.status(500).json({
    			title:"an error occured",
    			error:err
    		});
    	}
		User.findById(decoded.user._id, function(err, user){
			if (err) {
	    		return res.status(500).json({
	    			title:"an error occured",
	    			error:err
	    		});
	    	}
			var recipe= new Recipe({
				name:req.body.recipe.name,
				user:user
			});
			recipe.save(function(err, result) {
				if (err) {
	    		return res.status(500).json({
	    			title:"an error occured",
	    			error:err
	    		});
	    	}
				/*for(var i=0;i < req.body.material.length;i++){
					var material = new Material({
						name:req.body.material[i].name,
						qty:req.body.material[i].qty,
						recipe:result
					})
				}*/
	    	res.status(201).json({
	    		message:'Recipe Created',
	    		obj: result
	    	})
			})
		})
	});
})

module.exports = router;
