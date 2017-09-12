const mongoose = require('mongoose');
// Allows us to create a schema object for the model
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  postCount: Number
});

// Represents the entire collection of user
const User = mongoose.model('user', UserSchema);

module.exports = User;

