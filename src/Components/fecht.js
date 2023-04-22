let datos =[]
function fectSemanal() {
    fetch("https://api.themoviedb.org/3/trending/all/week?api_key=cdb5b34b6205cd62b1fb36acc98795e2")
    .then(res=>{
        res.json().then(datos=>{
            console.log(datos);
        })
    })
    return datos;
}
export default fectSemanal;