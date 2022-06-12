import React from 'react';
import Title from '../title/Title';
import OnlineCourses from '../allcourses/OnlineCourses'
import { coursesCard } from '../../dummydata'




const HAbout = () => {




    return (
        <>
        
        <section className="coursesCard">
  <Title subtitle="Our courses" title="explore our popular online courses" />
<div className="container grid2">
    {coursesCard.slice(0,3).map((val,index) =>(
        <div className="items">
            <div className="content flex">
               <div className="left">
                 <div className="img">
                   <img src={val.cover} />
                </div>
                </div>

                <div className="right">
                <h1>{val.coursesName}</h1> 
                    <div className="rate">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                     <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <label htmlFor=''>(5.0)</label>
                    </div>
                

                <div className="details">
                    {/* // This fetching nested api */}
                  {val.courTeacher.map((details,index)=>(
                     <div key={index}>
                      <div className="box">
                        <div className="dimg">
                            <img src={details.dcover} alt='' />
                        </div>
                          
                        <div className="para">
                          <h4>{details.name}</h4>
                        </div>
                      </div>
                      <span>{details.totalTime}</span>
                      </div>
                  ))}
                </div>
            </div>
        </div>
        <div className="price">
            <h3>{val.priceAll} / {val.pricePer}</h3>
        </div>

        <button class="outline-btn"> Enroll Now !</button>
        </div>
    ))}


</div>


</section>
<OnlineCourses />
        </>
    )
}


export default HAbout