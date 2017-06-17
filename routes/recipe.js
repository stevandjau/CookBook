var express = require('express');
var router = express.Router();
var Recipe = require('../models/recipe');

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