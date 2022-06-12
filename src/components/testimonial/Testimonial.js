import React from 'react';
import { testimonal } from '../../dummydata';
import './Testimonial.css';
import Title from '../title/Title';



const Testimonial = () => {
    






    return (
       <>
        <section className="testimonal padding">
            <div className="container">
                 <Title subtitle="testimonial"  title='our successful stories'  />


                 <div className="content grid2">
                    {testimonal.map((val,index) => (

                        <div key={index} className="items shadow">
                             <div className="box flex">
                                  <div className="img">
                                    <img src={val.cover} alt=""/>

                                    <i className='fa fa-quote-left'></i>
                                  </div>

                                  <div className="name">
                                    <h2>{val.name}</h2>
                                    <span>{val.post}</span>
                                  </div>
                              </div>

                              <p>{val.desc}</p>
                        </div>
                    ))}
                 </div>
            </div>
        </section>
       </>
    )



}



export default Testimonial