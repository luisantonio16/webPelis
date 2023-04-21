import React from "react";
import shazam from '../assets/shazam.jpeg'
import superman from '../assets/superman1.jpg'

function series(){
    return(
        <section className="series">
            <h2 className="series-tilte">Series</h2>
           <article className="series-container">
               <div className="box">
                   <div className="box-img">
                       <img src={shazam} alt="Shazam" />
                   </div>
                   <div className="box-texts">
                       <h1>Shazam fury the gods</h1>  
                       <h2>Duracion: 2:40hrs</h2>
                   </div>
               </div>
           </article>
        </section>  
    );
}

export default series;