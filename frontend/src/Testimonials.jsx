import React, { useState } from "react";
import "./Testimonials.css";
import Navbar from "./Navbar";
import ScrollToTop from "./ScrollToTop";

function Testimonials() {

  const testimonials = [
    {
      name: "Aman Kumar",
      role: "MERN Stack Student",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      review:
        "The MERN Stack course helped me build real-world projects and improve my coding skills significantly.",
    },
    {
      name: "Priya Sharma",
      role: "Java Full Stack Student",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      review:
        "Amazing mentors and excellent guidance throughout the learning journey.",
    },
    {
      name: "Rahul Verma",
      role: "Python Student",
      image: "https://randomuser.me/api/portraits/men/52.jpg",
      review:
        "The teaching style is practical and easy to understand. Highly recommended for beginners.",
    },
    {
      name: "Sneha Gupta",
      role: "Frontend Developer",
      image: "https://randomuser.me/api/portraits/women/12.jpg",
      review:
        "I learned React from scratch and built multiple projects that strengthened my portfolio.",
    },
    {
      name: "Rohit Singh",
      role: "Java Developer",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      review:
        "The practical assignments and mentor support made learning enjoyable and effective.",
    },
    {
      name: "Neha Kumari",
      role: "Data Science Student",
      image: "https://randomuser.me/api/portraits/women/28.jpg",
      review:
        "Excellent curriculum and hands-on machine learning projects helped me gain confidence.",
    },
    {
      name: "Vikas Sharma",
      role: "MERN Developer",
      image: "https://randomuser.me/api/portraits/men/41.jpg",
      review:
        "The instructors explained concepts clearly and helped me solve real-world coding challenges.",
    },
    {
      name: "Anjali Verma",
      role: "Python Developer",
      image: "https://randomuser.me/api/portraits/women/31.jpg",
      review:
        "The Python course was beginner-friendly and covered everything from basics to advanced topics.",
    },
    {
      name: "Aditya Raj",
      role: "Android Developer",
      image: "https://randomuser.me/api/portraits/men/47.jpg",
      review:
        "Building Android applications during the course gave me practical industry experience.",
    },
    {
      name: "Pooja Sinha",
      role: "Flutter Student",
      image: "https://randomuser.me/api/portraits/women/56.jpg",
      review:
        "The Flutter training was excellent and helped me develop cross-platform mobile apps.",
    },
    {
      name: "Karan Patel",
      role: "Backend Developer",
      image: "https://randomuser.me/api/portraits/men/63.jpg",
      review:
        "Node.js and Express concepts were taught in a structured and easy-to-understand way.",
    },
    {
      name: "Riya Das",
      role: "Frontend Student",
      image: "https://randomuser.me/api/portraits/women/67.jpg",
      review:
        "The UI design lessons improved my creativity and helped me build responsive websites.",
    },
    {
      name: "Deepak Kumar",
      role: "DSA Student",
      image: "https://randomuser.me/api/portraits/men/71.jpg",
      review:
        "The DSA course significantly improved my problem-solving and interview preparation skills.",
    },
    {
      name: "Shreya Mishra",
      role: "Machine Learning Student",
      image: "https://randomuser.me/api/portraits/women/73.jpg",
      review:
        "Real-world datasets and projects made machine learning concepts easy to understand.",
    },
    {
      name: "Arjun Gupta",
      role: "Software Engineer",
      image: "https://randomuser.me/api/portraits/men/81.jpg",
      review:
        "Thanks to NextGen Programmers, I gained the skills and confidence needed for my first tech job.",
    },
  ];

  const [currentReview, setCurrentReview] = useState(0);

  const nextReview = () => {
    setCurrentReview(
      currentReview === testimonials.length - 1
        ? 0
        : currentReview + 1
    );
  };

  const prevReview = () => {
    setCurrentReview(
      currentReview === 0
        ? testimonials.length - 1
        : currentReview - 1
    );
  };

  return (
    <>
        <Navbar />
        <ScrollToTop/>
    <div className="testimonial-page">

      <section className="testimonial-hero">

        <span className="testimonial-label">
          STUDENT SUCCESS STORIES
        </span>

        <h1>
          What Our <span>Students Say</span>
        </h1>

        <p>
          Thousands of students have transformed their careers
          with NextGen Programmers.
        </p>

      </section>

      <section className="testimonial-section">

        <div className="testimonial-card">

          <img
            src={testimonials[currentReview].image}
            alt={testimonials[currentReview].name}
            className="student-image"
          />

          <h2>
            {testimonials[currentReview].name}
          </h2>

          <span className="student-role">
            {testimonials[currentReview].role}
          </span>

          <div className="stars">
            ⭐⭐⭐⭐⭐
          </div>

          <p className="review">
            "{testimonials[currentReview].review}"
          </p>

          <div className="testimonial-buttons">

            <button onClick={prevReview}>
              ← Previous
            </button>

            <button onClick={nextReview}>
              Next →
            </button>

          </div>

          <div className="dots">

            {testimonials.map((_, index) => (
              <span
                key={index}
                className={
                  currentReview === index
                    ? "dot active-dot"
                    : "dot"
                }
                onClick={() => setCurrentReview(index)}
              ></span>
            ))}

          </div>

        </div>

      </section>

    </div>
    </>
    
  );
}

export default Testimonials;