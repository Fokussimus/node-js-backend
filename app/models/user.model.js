const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  name:       {type: String},
  usrname:    {type: String, required: true},
  password:   {type: String, required: true},
  biography:  {type: String},
  links:   [{site: String, type: String}],
  profile_img: {type: String},
});

module.exports = mongoose.model('User', UserSchema);