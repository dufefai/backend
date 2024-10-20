const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const classSchema = new Schema({
  classId: {
    type: Number,
    required: true,
    unique: true,
  },
  teacher: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: false,
  },
  studentNumber:{
    type :Number,
  },
  courseId:{
    type: Number,
    ref: "Course"
  }
});

const Class = mongoose.model("Class", classSchema);

module.exports = Class;
