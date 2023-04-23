import React, { useState,useEffect } from "react";
import shazam from '../assets/shazam.jpeg'
import superman from '../assets/superman1.jpg'
import Fecht from './fecht.js'


function series(){
    const api = "https://api.themoviedb.org/3/trending/all/week?api_key=cdb5b34b6205cd62b1fb36acc98795e2";
    const api_image ="https://image.tmdb.org/t/p/w500";
    const [datosApi, setdatos] = useState([])

    useEffect(()=>{
        fetch(api).then(res=>{
            res.json().then(Datos=> setdatos(Datos.results))
          
        })
    }, [])


    return(
        <section className="series">
            <h2 className="series-tilte">Los Mas Vistos</h2>
           <article className="series-container">
            {
                datosApi.map(datos=>{
                    const {vote_average} = datos
                    return(
                        <div className="box" key={datos.id}>
                              <figure className="box-img">
                                 <img src={api_image+datos.poster_path} alt={datos.title} />
                              </figure>
                             <div className="box-texts">
                                 <h1>{datos.title}</h1> 
                                 <p>Fecha de estreno:</p> 
                                 <h2>{datos.release_date}</h2>  
                             </div>
                             <div className="box-porcert">{Math.ceil(vote_average)+"/10"}</div>
                        </div>
                    );
                })
            }
           
           </article>
        </section>  
    );
}

export default series;


{/* <div className="box" key={datos.id}>
<figure className="box-img">
     <img src={datos.poster_path} alt="Shazam" />
</figure>
<div className="box-texts">
     <h1>{datos.title}</h1>  
     <h2>Duracion: 2:40hrs</h2>
</div>
<div className="box-porcert">{datos.vote_average}</div>
</div> */}