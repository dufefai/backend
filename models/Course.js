const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    id: {
        type: Number,
        required: true,
      },
      dayOfWeek: {
        type: String,
        required: true,
      },
      timeOfCourse: {
        type: String,
        required: true,
      },
      courseType: {
        type: String,
        required: true,
      },
      description:{
        type: String,
        required: false,
      },
      duration:{
        type: Number,
        required: true,
      },
      capacity:{
        type: Number,
        required: true,
      },
      price:{
        type: mongoose.Schema.Types.Decimal128,
        required: true,
      }

});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
