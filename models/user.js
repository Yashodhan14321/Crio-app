const mongoose = require('mongoose');

//user Schema
const UserSchema = mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true,
    unique:true
  },
  username:{
    type: String,
    required: true,
    unique:true
  },
  password:{
    type: String,
    required: true
  },
  profileimg:{
    type: String,
    required: true
  }
});

const User = module.exports = mongoose.model('User', UserSchema);
