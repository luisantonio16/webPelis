import React from "react";
import { NavLink } from "react-router-dom";

function Menu(){
    return(
        <div className="nav-menu">
             <nav className="nav">
                 <NavLink to="/Peliculas"  className="nav-items">Peliculas</NavLink>
                 <NavLink to="/Series" className="nav-items">Series</NavLink>
                 <NavLink to="/Proximamente" className="nav-items">Proximamente</NavLink>
             </nav>
             <form className="form">
                  <input type="text" placeholder="Accion, Aventure, Ficcion, anime..."/>
                  <button>Search</button>
             </form>
       </div>   
    );
}

export default Menu;