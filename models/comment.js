var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CommentSchema = new Schema(
  {
    shoot: {type: Schema.Types.ObjectId, ref: 'Shoot', required: true},
    comment_body: {type: String, required: true, minLength:10, maxLength: 99},
    date_last_updated: {type: Date},
  }
);

//Export model
module.exports = mongoose.model('Comment', CommentSchema);