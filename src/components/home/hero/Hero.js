import React from 'react';
import './hero.css'
import Title from '../../title/Title';



const Hero = () => {




    return (
     <>
     <section className="hero">
          <div className="container">
               <div className="row">
                   <Title subtitle='WELCOME TO ACADEMIA'  title=" Best Online Education"/>
                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam dolorum ducimus ratione autem! Tempore voluptatibus cumque, alias molestiae iusto omnis ex corporis facilis quibusdam quod maxime dolorum, unde asperiores quo.</p>
                      <div className="button">
                   <button className="primary-btn">
                       GET STARTED NOW <i className="fa fa-long-arrow-alt-right"></i>
                   </button>
                   

                   <button className="">
                       View Course<i className="fa fa-long-arrow-alt-right"></i>
                   </button>
                   </div>
               </div>
          </div>
     </section>


     <div className="margin"></div>
     </>
    )
}


export default Hero