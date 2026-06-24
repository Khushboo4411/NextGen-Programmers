const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  courseId: String,
  image: String,
  title: String,
  description: String,
  duration: String,
  rating: Number,
  price: String,
  discount: String,
  tag: String
});

module.exports = mongoose.model("Course", CourseSchema);