var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CommentSchema = new Schema(
  {
    // shoot: {type: Schema.Types.ObjectId, ref: 'Shoot', required: true}, not using MongoDB so a required ID reference should suffice
    shoot_id_reference: {type: String, required:true},
    comment_body: {type: String, required: true, minLength:10, maxLength: 99},
    date_last_updated: {type: Date},
  }
);

//Export model
module.exports = mongoose.model('Comment', CommentSchema);