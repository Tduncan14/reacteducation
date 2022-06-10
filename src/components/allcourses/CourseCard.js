import React from 'react'
import { coursesCard } from '../../dummydata'

const CourseCard = () => {
  return (
    <>
    <section className="coursesCard">

    <div className="container grid2">
        {coursesCard.map((val,index) =>(
            <div className="items">

            </div>
        ))}


    </div>


    </section>
    </>
  )
}

export default CourseCard
