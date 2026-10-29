const mongoose = require("mongoose");

const ScoreSchema = new mongoose.Schema({

user:String,

score:Number,

category:String,

date:{type:Date,default:Date.now}

});

module.exports = mongoose.model("Score",ScoreSchema);