import React, { useState,useEffect,useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";


import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import '../Css/styles.css'


// import required modules

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
            <h2 className="series-tilte">Lo mas popular</h2>
           <article className="series-container">
                 <Swiper
                     slidesPerView={3}
                     spaceBetween={30}
                     freeMode={true}
                     pagination={{
                         clickable: true,
                         }}
                     modules={[FreeMode, Pagination]}
                     className="mySwiper">
                        {
                            datosApi.map(datos=>{
                                const {vote_average} = datos
                                return(
                                    <SwiperSlide>
                                        <div className="box" key={datos.id}>
                                             <figure className="box-img">
                                                 <img src={api_image+datos.poster_path} alt={datos.title} />
                                             </figure>
                                             <div className="box-texts">
                                                  <h1>{datos.title}</h1> 
                                                  <p>Fecha de estreno:</p> 
                                                  <h2>{datos.release_date}</h2>  
                                            </div>
                                            <div className="box-porcert">{Math.ceil(vote_average)+"/10"} </div>
                                       </div>
                                    </SwiperSlide>
                                );                              
                            })
                        }        
                  </Swiper>
           </article>
        </section>  
    );
}

export default series;


