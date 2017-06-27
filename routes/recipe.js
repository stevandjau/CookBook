var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
var multer = require('multer');
var upload = multer({dest: './public/img'});

var Recipe = require('../models/recipe');
var User = require('../models/user');
var Material = require('../models/material');

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

router.post('/create', upload.single('file'), function (req, res, next) {
	var token = jwt.verify(req.query.token,'secret',function(err, decoded){
		if (err) {
    		return res.status(500).json({
    			title:"an error occured",
    			error:err
    		});
    	}
		//find the user by token userid
		User.findById(decoded.user._id, function(err, user){
			if (err) {
	    		return res.status(500).json({
	    			title:"an error occured",
	    			error:err
	    		});
	    	}
			//create a new object of recipe with detail from the form input
			var recipe= new Recipe({
				name:req.body.recipe.name,
				user:user
			});
			//save the recipe
			recipe.save(function(err, result) {
				if (err) {
	    		return res.status(500).json({
	    			title:"an error occured",
	    			error:err
	    		});
	    	}
				//loop through each materials input and save them to database
				for (var i=0; i < req.body.material.length ; i++) {
					var material = new Material({
						name:req.body.material[i].name,
						qty:req.body.material[i].qty,
						recipe:result
					})
					material.save(function(err,result) {
						if (err) {
				    		return res.status(500).json({
				    			title:"an error occured",
				    			error:err
				    		});
				    	}
						//find the recipe by material's recipe id and append the material into the array
						Recipe.findById(result.recipe._id, function(err, recipe){
							recipe.materials.push(result);
							recipe.save();
						})
					});
				}
	    	res.status(201).json({
	    		message:'Recipe Created',
	    		obj: result
	    	})
			})
		})
	});
})

module.exports = router;
