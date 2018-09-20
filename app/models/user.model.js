const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  name:       {type: String, required: true },
  usrname:    {type: Schema.Types.ObjectId, required: true},
  password:   {type: String, required: true},
  biography:  {type: String, required: true},
  links:   [{site: String, type: String}],
  profile_img: {type: String, required: true},
});

module.exports = mongoose.model('User', UserSchema);