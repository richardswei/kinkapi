var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ShootSchema = new Schema(
  {
    shoot_title: {type: String, maxLength: 100},
    date_last_updated: {type: Date},
    id: {type: Number},
  }, {_id: false}
);

// Virtual for author's URL
ShootSchema
.virtual('url')
.get(function () {
  return '/shoots/' + this._id;
});

//Export model
module.exports = mongoose.model('Shoot', ShootSchema);