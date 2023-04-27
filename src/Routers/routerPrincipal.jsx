import React from "react";
import { Route,Routes,BrowserRouter } from "react-router-dom";
import Peliculas from '../Components/peliculas'
import Menu from '../Components/menu.jsx'
import Series from '../Components/series'
import Avances from "../Components/avances";
import Header from '../Components/header.jsx'
import '../Css/styles.css'

function routerPrincipal(){
    return(
        <BrowserRouter>
           <Header/>
           <Menu/>
            <section>
                   <Routes>
                       <Route path="/" element={<Peliculas />}/>
                       <Route path="/Peliculas" element={<Peliculas />}/>
                       <Route path="/Series" element={<Series />}/>
                       <Route path="/Proximamente" element={<Avances />}/>
                    </Routes>  
            </section>
                
        </BrowserRouter>
    );
}

export default routerPrincipal;