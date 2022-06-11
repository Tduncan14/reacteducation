import React from 'react';
import { online } from '../../dummydata';
import Title from '../title/Title';

export default function OnlineCourses() {
  return (
    <div>
      <section className="online">
        <div className="container">
          <Title subtitle="Courses"  title="Browse Our Online Courses"/>



          <div className="content grid3">
             {online.map((val) =>(

              <div className="box">
                <div className="img">
                  <img src={val.cover} alt=''/>
                  <img className='show' src={val.hoverCover} alt=''/>
                </div>
                   <h1>{val.courseName}</h1>
                   <span>{val.course}</span>
                </div>
             ))}
          </div>
        </div>
      </section>
    </div>
  )
}
