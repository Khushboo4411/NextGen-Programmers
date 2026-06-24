import React from "react";
import "./About.css";
import Navbar from "./Navbar";
import ScrollToTop from "./ScrollToTop";
import { useNavigate } from "react-router-dom";

import {
  FaArrowRight,
  FaPlay,
  FaBullseye,
  FaEye,
  FaHeart,
  FaGraduationCap,
  FaBookOpen,
  FaChalkboardTeacher,
  FaRocket,
  FaLinkedinIn,
  FaGithub,
  FaStar,
  FaQuoteLeft,
} from "react-icons/fa";

function About() {
  const experts = [
    {
      name: "Aman Verma",
      role: "MERN Stack Mentor",
      experience: "7+ Years Experience",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Priya Singh",
      role: "Data Science with python",
      experience: "6+ Years Experience",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Rohit Kumar",
      role: "Java & System Design Mentor",
      experience: "8+ Years Experience",
      image: "https://randomuser.me/api/portraits/men/41.jpg",
    },
  ];
   
  const navigate=useNavigate();

  const gotoCourses=()=>{
  navigate('/Courses');
  }
 
  return (
    <>
      <Navbar />
      <ScrollToTop />

      <div className="about-about-page">

        {/* HERO */}
        <section className="about-about-hero">

          <div className="about-hero-content">

            <span className="about-section-tag">
              ABOUT NEXTGEN PROGRAMMERS
            </span>

            <h1>
              Learn. Code.
              <br />
              Build <span>Your Future.</span>
            </h1>

            <p>
              NextGen Programmers is an online coding platform dedicated
              to helping aspiring developers master programming through
              practical learning, live mentorship, and real-world projects.
              We prepare students for successful careers in tech.
            </p>

            <div className="about-hero-buttons">

              <button className="about-primary-btn" onClick={gotoCourses}>
                Explore Courses <FaArrowRight />
              </button>

              <button className="about-secondary-btn"  onClick={() =>window.open("https://youtu.be/yjtCQtADhDY?si=JQZld0FnnS7h1WkT", "_blank")}>
                <FaPlay />
                Watch Demo
              </button>

            </div>

          </div>

          <div className="about-hero-image">

            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900"
              alt="Students Coding"
            />

            <div className="about-floating-card">
              <FaGraduationCap />
              <p>Code Today</p>
              <span>Create Tomorrow</span>
            </div>

          </div>

        </section>

        {/* WHO WE ARE */}
        <section className="about-who-we-are">

          <div className="about-who-content">

            <span className="about-section-tag">WHO WE ARE</span>

            <h2>
              Shaping the Next <br />
              Generation of <span>Programmers.</span>
            </h2>

            <p>
              We believe anyone can become a developer with the right guidance,
              practice, and consistency.
            </p>

            <p>
              Our focus is hands-on learning, real projects, and interview prep
              to make students job-ready.
            </p>

          </div>

          <div className="about-mission-cards">

            <div className="about-info-card">
              <FaBullseye className="about-icon" />
              <div>
                <h3>Our Mission</h3>
                <p>Provide practical, job-ready programming education.</p>
              </div>
            </div>

            <div className="about-info-card">
              <FaEye className="about-icon" />
              <div>
                <h3>Our Vision</h3>
                <p>Build future-ready software professionals.</p>
              </div>
            </div>

            <div className="about-info-card">
              <FaHeart className="about-icon" />
              <div>
                <h3>Our Values</h3>
                <p>Learning, growth, and student-first approach.</p>
              </div>
            </div>

          </div>
        </section>
      

        {/* EXPERTS */}
        <section className="about-experts-section">

          <h2>Meet Our <span>Mentors</span></h2>

          <div className="about-experts-grid">

            {experts.map((expert, i) => (
              <div className="about-expert-card" key={i}>

                <img src={expert.image} alt={expert.name} />

                <h3>{expert.name}</h3>
                <p>{expert.role}</p>
                <span>{expert.experience}</span>

                <div>
                  <FaLinkedinIn />
                  <FaGithub />
                </div>

              </div>
            ))}

          </div>

        </section>


        {/* CTA */}
        <section className="about-cta-section">

          <div>
            <h2>Ready to Become a NextGen Programmer?</h2>
            <p>Start your journey today with real skills & projects.</p>
          </div>

          <button className="about-cta-btn"  onClick={gotoCourses}>
            Start Learning <FaArrowRight />
          </button>

        </section>

      </div>
    </>
  );
}

export default About;