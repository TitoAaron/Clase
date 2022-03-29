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
    let Pelicula = data[Math.floor(Math.random()* data.length)].title;
    


    /*----------------------------------------------------*/


    let PeliculaAsterisco = Pelicula.replaceAll(/[a-zA-Z]/g,"*");
    let palabras = [];
    let arrPelicula = Pelicula.split("");
    let arrPeliculaAsterisco = PeliculaAsterisco.split("");
    console.log(arrPelicula);

    /*----------------------------------------------------*/
    
    $("#puzzle").text(PeliculaAsterisco);
    

    document.addEventListener("keyup", function(e){
        let letra = e.key;
        for(var i = 0; i < arrPelicula.length; i++){
            if(arrPelicula[i] == letra){
                arrPeliculaAsterisco[i] = letra;
                
            }
        }
        palabras.push(letra);
        
        $("#letters-tried").text(palabras.join(" "));
        $("#puzzle").text(arrPeliculaAsterisco.join(" "));
    });  

    $("#reset").click(function(){
        Pelicula = data[Math.floor(Math.random()* data.length)].title;
        PeliculaAsterisco = Pelicula.replaceAll(/[a-zA-Z]/g,"*");
        palabras = [];
        arrPelicula = Pelicula.split("");
        arrPeliculaAsterisco = PeliculaAsterisco.split("");
        console.log(arrPelicula);
        $("#puzzle").text(PeliculaAsterisco);
    })

    console.log(Pelicula);

    


}