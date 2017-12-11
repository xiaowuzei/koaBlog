const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
  name: String,
  username: String,
  password: String,
  createTime: Date
})
module.exports = mongoose.model('user', userSchema);
