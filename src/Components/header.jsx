import React from "react";

function Header(){
    return(
        <div className="header">
            <div className="container header-texts">
                  <h2>MoviesLM</h2>
                 <form className="form">
                        <input type="text" placeholder="Accion, Aventure, Ficcion, anime..."/>
                        <button>Search</button>
                 </form>
            </div>     
        </div>  
    );
}

export default Header;