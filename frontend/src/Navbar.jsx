import React from 'react';
import './Navbar.css';
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom';


function Navbar() {
 
  const navigate =useNavigate();
  const gotoSignUp=()=>{
    navigate('/SignUp');
  }
  const gotoCourses=()=>{
    navigate('/Courses');
  }
    
  return (
    <div className='Nav'>
      <nav className="signup-navbar">
        <div className="signup-logo">
          <div className="signup-logo-icon">🎓</div>

          <div>
            <h3>NextGen Programmers</h3>
           
          </div>
        </div>

        <ul className="signup-nav-links">
         
          <Link to='/' className='signup-nav-link'>Home</Link>
          <Link to='/Courses' className='signup-nav-link'>Courses</Link>
          <Link to='/About' className='signup-nav-link'>About</Link>
          <Link to='/WhyChooseUs' className='signup-nav-link'>WhyChooseUs</Link>
          <Link to='/Testimonials' className='signup-nav-link'>Testimonials</Link>
          <Link to='/Contact' className='signup-nav-link'>Contact</Link>

           


        </ul>

        <div className="signup-nav-buttons">
          <button className="signup-login-btn" onClick={gotoSignUp}>
            SignUp / Login
          </button>

          <button className="signup-enroll-btn" onClick={gotoCourses}>
            Enroll Now 
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
