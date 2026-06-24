import React from 'react'
import { useNavigate } from 'react-router-dom'


function handlers() {

    const navigate= useNavigate();

    const gotoCourses=()=>{
        navigate('./Courses.jsx');
    }


  return (
    <div>
      
    </div>
  )
}

export default handlers
