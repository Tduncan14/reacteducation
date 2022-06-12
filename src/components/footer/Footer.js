import React from 'react';
import './Footer.css';


const Footer = () => {


    return (
        <div>
             <section className="newletter">
                 <div className="container flexSB">
                    <div className="left row">
                         <h1>Newsletter-Stay tune and get lastest update</h1>

                         <span>You always have to keep moving forward</span>
                    </div>

                    <div className="right row">
                        <input type="text" placeholder="Enter Email Address" />
                        <i className='fa fa-paper-plane'></i>
                    </div>
                 </div>
             </section>
        </div>
    )
}

export default Footer