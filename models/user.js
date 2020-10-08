const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userId:String,
    name:String
})

mongoose.model("Users",userSchema);