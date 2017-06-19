var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();

var Recipe = require('../models/recipe');
var Material = require('../models/material');

router.post('/',function (req, res, next) {
  //find recipe by recipeid in the request body
  Recipe.findById(req.body.recipeid, function(err, recipe) {
    //create new material and insert the recipe detail into the material
    var mat = new Material ({
      name: req.body.name,
      qty: req.body.qty,
      recipe: recipe
    });
    //save the material object into database
    mat.save(function(err,result){
      //if theres an error return error object
      if (err) {
        return res.status(500).json({
          title:"an error occured when inserting material",
          error:err
        });
      }
      //if success return result
      res.status(201).json({
        message:'material inserted',
        obj: result
      })
    })
  })
});

module.exports = router;
