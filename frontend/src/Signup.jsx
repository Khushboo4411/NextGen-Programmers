
import React, { useState } from "react";
import "./Signup.css";
import axios from "axios";

import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaGoogle,
  FaFacebookF,
  FaApple,
  FaBookOpen,
  FaClipboardList,
  FaTrophy,
} from "react-icons/fa";

import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";


function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:2000/Signup",
        {
          name,
          email,
          password,
        }
      );

      if (response.data.message === "success") {
        alert("Signup successful!");

        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        navigate('/');
      } else {
        alert("Signup failed");
      }
    } catch (error) {
      console.error(error);
      alert("Unable to signup. Please try again.");
    }
  };
  const navigate = useNavigate();
   const gotoLogin=()=>{
      navigate('/Login');
    }

  return (
    <>
    <Navbar />
          <ScrollToTop/>

    <div className="signup-page">
      

      <div className="signup-main-content">
        {/* Left Section */}
        <div className="signup-left-section">
          <h2>Join NextGen Programmers</h2>

          <p>Create an account and start learning</p>

          <div className="signup-card-illustration">
            <div className="signup-card">
              <div className="signup-circle"></div>

              <div className="signup-line"></div>

              <div className="signup-line signup-small"></div>
            </div>

            <div className="signup-plus-btn">+</div>
          </div>

          <div className="signup-features">
            <div className="signup-feature">
              <FaBookOpen />
              <span>Access to all courses</span>
            </div>

            <div className="signup-feature">
              <FaClipboardList />
              <span>Track your progress</span>
            </div>

            <div className="signup-feature">
              <FaTrophy />
              <span>Get certified</span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <form onSubmit={handleSignup}>
          <div className="signup-form-container">
            <h3>Sign Up</h3>

            <p>Create your account to get started</p>

            {/* Full Name */}
            <label>Full Name</label>

            <div className="signup-input-box">
              <FaUser />

              <input
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            {/* Email */}
            <label>Email Address</label>

            <div className="signup-input-box">
              <FaEnvelope />

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password */}
            <label>Password</label>

            <div className="signup-input-box">
              <FaLock />

              <input
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Confirm Password */}
            <label>Confirm Password</label>

            <div className="signup-input-box">
              <FaLock />

              <input
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) =>
                  setConfirmPassword(e.target.value)
                }
                required
              />
            </div>

            {/* Terms */}
            <div className="signup-checkbox">
              <input type="checkbox" required />

              <span>
                I agree to the{" "}
                <a href="/">Terms & Conditions</a> and{" "}
                <a href="/">Privacy Policy</a>
              </span>
            </div>

            {/* Signup Button */}
            <button
              type="submit"
              className="signup-submit-btn"
            >
              Sign Up
            </button>

            {/* Divider */}
            <div className="signup-divider">
              <span>or sign up with</span>
            </div>

            {/* Social Buttons */}
            <div className="signup-social-buttons">
              <button type="button">
                <FaGoogle />
              </button>

              <button type="button">
                <FaFacebookF />
              </button>

              <button type="button">
                <FaApple />
              </button>
            </div>

            <p className="signup-signin-text">
              Already have an account?{" "}
              <span onClick={gotoLogin}>Login</span>
            </p>
          </div>
        </form>
      </div>
    </div></>
  );
}

export default Signup;

