var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema ({
	seq: {type:, required:true},
	desc: {type:String, required:true},
	recipe: {type: Schema.Types.ObjectId, ref: 'Recipe'}
})

module.exports = mongoose.model('Method', schema);