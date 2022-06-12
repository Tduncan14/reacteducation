import React from 'react';
import PriceCard from '../pricing/PriceCard';
import Title from '../title/Title.js'









const Hprice = () => {




    return(
        <>
        <section className="hprice padding">
            <div className="container">
                <Title subtitle='our blog' title='pricing and packages' />



                <div className=" price container grid">
                    <PriceCard  />
                    

                </div>


            </div>
        </section>
        </>
    )
}


export default Hprice