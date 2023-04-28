import React from 'react'

function ErrorPage(){
    return(
        <section className='container'>
            <div className='pageError'>
                <h1>Error 404 Page not found</h1>  
                <Link to="/Peliculas">Volver al Inicio</Link>
            </div>
        </section>

    );
}

export default ErrorPage;