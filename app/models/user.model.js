const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  name:  { type: String, required: true },
  usrname: {type: Schema.Types.ObjectId, required: true},
  password: {type: String, required: true},
  bio: {type: String, required: true},
  homepage: [String],
  profile_img: {type: String, required: true},
});

module.exports = mongoose.model('User', UserSchema);