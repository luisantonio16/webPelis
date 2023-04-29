import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Menu(){
    const navegar = useNavigate();

    const mandarUrl =e=>{
        e.preventDefault();
        let key = e.target.txtNombre.value;

        if(key.length <=0 ){
            navegar("/Peliculas")

        }else{
            navegar(`/Find/${key}`)
        }
      

    }

    return(
        <div className="nav-menu">
             <nav className="nav">
                 <NavLink to="/Peliculas"  className={({isActive})=> isActive ? 'active': 'nav-items'}
                 >Peliculas</NavLink>
                 <NavLink to="/Series" className={({isActive})=> isActive ? 'active': 'nav-items'}>Series</NavLink>
                 <NavLink to="/Proximamente"className={({isActive})=> isActive ? 'active': 'nav-items'}>Proximamente</NavLink>
             </nav>
             <form className="form" onSubmit={mandarUrl} >
                  <input name="txtNombre" type="text" placeholder="Accion, Aventure, Ficcion, anime..."/>
                 <button>Buscar</button>
             </form>
       </div>   
    );
}

export default Menu;