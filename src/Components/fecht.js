function fectMovie() {
    const datos = []
    fetch("https://api.themoviedb.org/3/trending/all/week?api_key=cdb5b34b6205cd62b1fb36acc98795e2")
    .then(res=>{
        res.json().then(datos)
        return console.log(datos)
      
    })
}
export default fectMovie;


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
                             <div className="box-porcert">{Math.ceil(vote_average)+"/10"} </div>
                      </div>
        
        );
    })
}