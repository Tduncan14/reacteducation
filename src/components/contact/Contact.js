import React from 'react';
import './contact.css';
import Back from '../back/Back';






const Contact = () => {


    const map = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11881.032224574901!2d-87.7232128!3d41.887307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1655070914347!5m2!1sen!2sus"





    return (
        <div>
              <Back title='Contact Us' />
              <section className="contact padding">
                 <div className="container shadow flexSB">
                      <div className="left row">
                           <iframe src={map}></iframe>
                      </div>


                      <div className="right row">
                        <h1>Contact Us</h1>
                        <p> You should be able to find us</p>

                        <div className="items grid2">
                            <div className="box">
                               <h4>
                                Address:
                                <p>west 21,Chicago IL 60629</p>
                               </h4>
                            </div>

                            <div className="box">
                                <h4>Email:</h4>
                                <p>Info@gmail.com</p>
                            </div>

                            <div className="box">
                                <h4>Phone:</h4>
                                <p>312-456-7898</p>
                            </div>
                        </div>

                        <form action=''>
                            <div className="flexSB">
                                <input className="space" type="text" placeholder="Name" />
                                <input type="email" placeholder="Email"/>
                            </div>

                            <input type="text" placeholder="Subject" />

                            <textarea cols="30" row='10'  value=""></textarea>
                            
                               
                         
                            <button className="primary-btn"> Send Message</button>
                        </form>


                        <h3>Follow us here</h3>

                        <span>Facebook Twitter Instagram  Linkined</span>
                      </div>


                 </div>
              </section>
        </div>
    )


}



export default Contact