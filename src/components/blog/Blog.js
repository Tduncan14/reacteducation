import React from 'react';
import BlogCard from '../blog/BlogCard';
import Back from '../back/Back';
import './blog.css'




const Blog = () => {





    return(
        <>
        <Back title="Journal Post" />
         <section className="blog padding">
             <div className="container grid2">
                 <BlogCard />

             </div>
         </section>
        </>
    )
}


export default Blog