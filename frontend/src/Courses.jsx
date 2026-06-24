import React, { useEffect, useState } from "react";
import "./Courses.css";
import ScrollToTop from "./ScrollToTop";
import Navbar from "./Navbar";
import { FaArrowRight, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Courses() {
  const navigate = useNavigate();

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:2000/Courses")
      .then((res) => res.json())
     .then((data) => {
  console.log(data);
  setCourses(data);
  setLoading(false);
})
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <>
        <Navbar />
        <h2 style={{ textAlign: "center", marginTop: "120px" }}>
          Loading Courses...
        </h2>
      </>
    );
  }

  return (
    <>
      <ScrollToTop />
      <Navbar />

      {/* Hero Section */}
      <section className="course-header">
        <div className="course-header-content">
          <span className="course-label">
            NEXTGEN PROGRAMMERS
          </span>

          <h1 className="course-heading">
            Learn. Code.
            <br />
            <span>Get Hired.</span>
          </h1>

          <p className="course-description-text">
            Learn, build projects, and get career-ready with NextGen
            Programmers.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="course-categories-section">
        <div className="course-categories">
          <button className="course-active">All</button>
          <button>Full Stack</button>
          <button>Programming</button>
          <button>Data Science</button>
          <button>Android</button>
        </div>
      </section>

      {/* Courses */}
      <section className="course-container">
        {courses.map((course) => (
          <div className="course-card" key={course._id}>
            <img
              src={course.image}
              alt={course.title}
              className="course-card-image"
            />

            <div className="course-card-content">
              <span className="course-card-tag">
                {course.tag}
              </span>

              <h3 className="course-card-title">
                {course.title}
              </h3>

              <p className="course-card-description">
                {course.description}
              </p>

              <div className="course-card-info">
                <span>{course.duration}</span>

                <span className="course-card-rating">
                  <FaStar />
                  {course.rating}
                </span>
              </div>

              <div className="course-price-detail">
                <h3 className="course-price">
                  {course.price}
                </h3>

                <span className="course-discount">
                  {course.discount}
                </span>
              </div>

              <button
                className="course-btn"
                onClick={() => {
  console.log("FULL COURSE =", course);
  console.log("courseId =", course.courseId);

  navigate(`/course/${course.courseId}`);
}}         >
                View Details <FaArrowRight />
              </button>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default Courses;