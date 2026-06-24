const express = require('express');
const app = express();

const SignupSchema = require('./models/SignupSchema');
const Course = require("./models/CourseSchema");
const CourseDetail = require("./models/CourseDetailSchema");
const ContactInfoSchema = require("./models/ContactInfoSchema");
const dotenv = require('dotenv');
dotenv.config();

const connectdb = require('./DB');
const cors = require('cors');

connectdb();

app.use(cors());
app.use(express.json());

app.get("/Courses", async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching courses"
    });
  }
});

app.get("/Courses/:id", async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    res.json(course);
  } catch (error) {
    res.status(500).json({
      message: "Course not found",
    });
  }
});

app.get("/CourseDetails", async (req, res) => {
  try {
    const data = await CourseDetail.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching course details"
    });
  }
});

app.get("/CourseDetails/:id", async (req, res) => {
  try {
    const course = await CourseDetail.findOne({
      courseId: req.params.id,
    });

    res.json(course);
  } catch (error) {
    res.status(500).json({
      message: "Course not found"
    });
  }
});

app.post("/Signup", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const newUser = new SignupSchema({
            name,
            email,
            password
        });

        await newUser.save();

        console.log("Signup success!!");

        res.status(201).json({
            message: "success"
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "failed"
        });
    }
});

app.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "missing_fields" });
    }

    try {
        const userexist = await SignupSchema.findOne({email});
        if (!userexist) {
            return res.status(404).json({ message: "not_found" });
        }

        if (userexist.password===password) {
            return res.json({message:"success"});
        }

        return res.status(401).json({message:"incorrect"});
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "error" });
    }
});

app.post("/contactinfo", async (req, res) => {
  console.log(req.body);

  try {
    const { name, email, subject, message } = req.body;

    const newMessage = new ContactInfoSchema({
      name,
      email,
      subject,
      message,
    });

    await newMessage.save();

    console.log("Message saved");

    res.status(200).json({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Failed",
    });
  }
});



const port = process.env.PORT || 2000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});