import React from 'react';
import Title from '../title/Title';



const AboutCard = () =>{










    return(
        <>
        <section className="aboutHome">
            <div className="container flex">

                <div className="left row">
                    <img src="./images/about.webp" alt=""/>
                </div>


                <div className="right row">
                    <Title  subtitle='Learn Anything' title='Benefits About Online Learning Expertise '/>
                    <div className="items">
                        {homeAbout}
                    </div>
                </div>

            </div>
        </section>
        </>
    )
}



export default AboutCard;