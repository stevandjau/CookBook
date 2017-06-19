var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema ({
	name: {type: String, required: true},
	imgurl: {type: String},
	user: {type: Schema.Types.ObjectId, ref: 'User'},
	materials: [{type:Schema.Types.ObjectId, ref: 'Material'}]
})

module.exports = mongoose.model('Recipe', schema);
