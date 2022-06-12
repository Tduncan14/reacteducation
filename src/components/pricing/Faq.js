import React, { forwardRef } from 'react';
import { faq } from '../../dummydata';
import Title from '../title/Title';



const Faq = () => {






    return (
        <>
         <Title subtitle="FAQS"  title="Answered Questions" />

          <div className="container">
             {faq.map((val,index) =>(
                <div  key={index}className="box">

                 <button>
                    <h2>{val.title}</h2>
                 </button>

                 <div className="text">
                    <p>{val.desc}</p>
                 </div>
               </div>
             ))}
          </div>
        </>
    )
}


export default Faq