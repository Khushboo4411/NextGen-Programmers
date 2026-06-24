import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CourseDetails.css";
import Navbar from "./Navbar";
import ScrollToTop from "./ScrollToTop";
import { FaStar, FaClock, FaCheckCircle } from "react-icons/fa";

function CourseDetails() {
  const { id } = useParams();

  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:2000/CourseDetails/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Course Data:", data);
        setCourse(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="details-page">
          <h2 className="status-text">Loading...</h2>
        </div>
      </>
    );
  }

  if (!course) {
    return (
      <>
        <Navbar />
        <div className="details-page">
          <h2 className="status-text">Course Not Found</h2>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <ScrollToTop />

      <div className="details-page">
        {/* Hero Section */}
        <div className="hero">
          <div className="hero-content">
            <span className="tag">
              {course.tag || "Best Seller"}
            </span>

            <h1>{course.title}</h1>

            <p>{course.description}</p>

            <div className="stats">
              <span>
                <FaStar />
                {course.rating}
              </span>

              <span>
                <FaClock />
                {course.duration}
              </span>
            </div>
          </div>

          <div className="hero-image">
            <img
              src={course.image}
              alt={course.title}
            />
          </div>
        </div>

        {/* Content Section */}
<div className="details-grid">
          <div className="left">

            <div className="card">
              <h2>What You'll Learn</h2>

              {course.skills?.map((skill, index) => (
                <p key={index}>
                  <FaCheckCircle /> {skill}
                </p>
              ))}
            </div>

            <div className="card">
              <h2>Projects You'll Build</h2>

              {course.projects?.map((project, index) => (
                <p key={index}>
                  <FaCheckCircle /> {project}
                </p>
              ))}
            </div>

            {/* Projects */}
            <div className="card">
              <h2>Projects You'll Build</h2>

              {course.projects && course.projects.length > 0 ? (
                course.projects.map((project, index) => (
                  <p key={index}>
                    <FaCheckCircle />
                    {project}
                  </p>
                ))
              ) : (
                <p>No projects available.</p>
              )}
            </div>

            {/* Curriculum */}
            <div className="card">
              <h2>Course Curriculum</h2>

              {course.curriculum &&
              course.curriculum.length > 0 ? (
                <ul>
                  {course.curriculum.map(
                    (module, index) => (
                      <li key={index}>{module}</li>
                    )
                  )}
                </ul>
              ) : (
                <ul>
                  <li>Module 1 - Introduction</li>
                  <li>Module 2 - Fundamentals</li>
                  <li>Module 3 - Intermediate Concepts</li>
                  <li>Module 4 - Advanced Topics</li>
                  <li>Module 5 - Final Project</li>
                </ul>
              )}
            </div>

            {/* Requirements */}
            <div className="card">
              <h2>Requirements</h2>

              <ul>
                <li>Basic Computer Knowledge</li>
                <li>Internet Connection</li>
                <li>Passion to Learn</li>
              </ul>
            </div>

          </div>

          {/* Right Side */}
          <div className="right">
            <div className="price-card">

              <h2>{course.price}</h2>

              <button className="enroll-btn">
                Enroll Now
              </button>

              <div className="features">
                <p>✔ Live Interactive Classes</p>
                <p>✔ Recorded Sessions</p>
                <p>✔ Notes & Assignments</p>
                <p>✔ Certificate of Completion</p>
                <p>✔ Placement Assistance</p>
                <p>✔ Resume Building</p>
                <p>✔ Mock Interviews</p>
                <p>✔ Lifetime Access</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseDetails;