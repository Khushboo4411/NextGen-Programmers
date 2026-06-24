const mongoose = require("mongoose");

const CourseDetailSchema = new mongoose.Schema({
  courseId: String,
  title: String,
  image: String,
  description: String,
  duration: String,
  rating: Number,
  price: String,
  projects: [String],
  skills: [String]
});

module.exports = mongoose.model(
  "CourseDetail",
  CourseDetailSchema
);