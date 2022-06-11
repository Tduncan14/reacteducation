import React from 'react'
import CourseCard from './CourseCard';
import Back from '../back/Back';
import OnlineCourses from './OnlineCourses';

function CoursesHome() {
  return (
    <div>

        <Back  title='Explore Courses'/>
        <CourseCard />
        <OnlineCourses />
      
    </div>
  )
}

export default CoursesHome
