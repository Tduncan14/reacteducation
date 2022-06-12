import React from 'react';
import AboutCard from '../about/AboutCard.js';
import HAbout from '../heading/HAbout.js';
import Testimonial from '../testimonial/Testimonial.js';
import Hero from './hero/Hero.js';
import Hblog from '../blog/Hblog';
import Hprice from '../blog/Hprice';





const Home = () => {





    return(
        <div>
            <Hero />
            <AboutCard />
            <HAbout />
            <Testimonial />
            <Hblog />
            <Hprice/>
        </div>
    )
}

export default Home