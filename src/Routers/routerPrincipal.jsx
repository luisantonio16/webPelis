import React from "react";
import { Route,Routes,BrowserRouter } from "react-router-dom";
import Peliculas from '../Components/peliculas'
import Menu from '../Components/menu.jsx'
import Series from '../Components/series'
import Avances from "../Components/avances";
import Header from '../Components/header.jsx'
import Error from '../Components/Error.jsx'
import Find from '../Components/Find'
import '../Css/styles.css'

function routerPrincipal(){
    return(
       <div>
      

<BrowserRouter>
<Header/>
        <Menu/>
          
          <section>
                 <Routes>
                     <Route path="/" element={<Peliculas />}/>
                     <Route path="/Peliculas" element={<Peliculas />}/>
                     <Route path="/Series" element={<Series />}/>
                     <Route path="/Proximamente" element={<Avances />}/>
                     <Route path="/Find/:key" element={<Find />}/>
                     <Route path="*" element={<Error />}/>
                  </Routes>  
          </section>
              
      </BrowserRouter>
       </div>
       
    );
}

export default routerPrincipal;