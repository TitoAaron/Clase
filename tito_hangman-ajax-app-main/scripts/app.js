// Código principal de la aplicación

// Obtener las películas de
// https://github.com/hjorturlarsen/IMDB-top-100/blob/master/data/movies.json

/*
fetch('https://raw.githubusercontent.com/hjorturlarsen/IMDB-top-100/master/data/movies.json').then((response) => {
    return response.json();
}).then((data)=> {
    console.log(data);
})
*/

//prueba

window.onload = async function(){
    let response =  await fetch("https://raw.githubusercontent.com/hjorturlarsen/IMDB-top-100/master/data/movies.json");
    let data = await response.json();
    STATE.reset(data[Math.floor(Math.random()* data.length)].title);
    $("#puzzle").text(STATE.movieGuess);


    document.addEventListener("keyup", function(letra){
        DOM.OcultarPelicula(STATE.movie,STATE.movieGuess, letra);
        STATE.movieGuess[2] = "S";
        console.log(STATE.movieGuess);
    });  

    $("#reset").click(function(){
        STATE.reset(data[Math.floor(Math.random()* data.length)].title);
        $("#puzzle").text(STATE.movieGuess); 
        
        
    })

    console.log(STATE.movie);

    


}