const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
    name:String,
    age:Number,
    email:String,
    classroom:String,
    M:String,
    description:String
});

const STUDENT_MODEL = mongoose.model("students",studentSchema);

module.exports = STUDENT_MODEL;