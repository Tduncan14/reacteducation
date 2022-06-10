import React from 'react';
import Title from '../title/Title';
import { homeAbout } from '../../dummydata';
import Awrapper from './Awrapper';
import './about.css';

const AboutCard = () =>{










    return(
        <>
        <section className="aboutHome">
            <div className="container flexSB">

                <div className="left row">
                    <img src="./images/about.webp" alt=""/>
                </div>


                <div className="right row">
                    <Title  subtitle='Learn Anything' title='Benefits About Online Learning Expertise '/>
                    <div className="items">
                        {homeAbout.map((val,index) => (
                            <div key={index} className="item flexSB">
                                <div className="img">
                                <img src={val.cover} about=''/>
                                </div>

                                <div className='text'>
                                    <h2>{val.title}</h2>
                                    <p>{val.desc}</p>

                                </div>


                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
        <Awrapper />
        </>
    )
}



export default AboutCard;