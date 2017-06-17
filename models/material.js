var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema ({
	name: {type:String, required:true},
	qty: {type:String, required:true},
	recipe: {type: Schema.Types.ObjectId, ref: 'Recipe'}
})

module.exports = mongoose.model('Material', schema);