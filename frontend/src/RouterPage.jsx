import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Courses from './Courses';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import WhyChooseUs from './WhyChooseUs';
import Testimonials from './Testimonials';
import CourseDetails from './CourseDetails';


function RouterPage() {
  return (
    <div>
      
      <Routes>
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/' element={<Home />} />
        <Route path='/Courses' element={<Courses />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Testimonials' element={<Testimonials />} />
        <Route path='/WhyChooseUs' element={<WhyChooseUs />} />
        <Route path="/course/:id" element={<CourseDetails />} />
      

      </Routes>
    </div>
  )
}

export default RouterPage;
