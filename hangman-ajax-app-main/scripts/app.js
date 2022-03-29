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
    let random = Math.floor(Math.random()* data.length)
    let Palabra = data[random].title;
    let Pelicula = Palabra.replaceAll(/[a-zA-Z]/g,"*");

    let palabras = "";
        
    let arrPalabra = Palabra.split("");
    let arrPelicula = Pelicula.split("");
    console.log(arrPalabra);
    $("#puzzle").text(Pelicula);

    $("#prueba").keyup(function(e){
        let letra = e.key;
        palabras += e.key;
        for(var i = 0; i < arrPalabra.length; i++){
            if(arrPalabra[i] == letra){
                arrPelicula[i] = letra;
            }
        }
        $("#puzzle").text(arrPelicula.join(" "));
    });   

    /*console.log(arrPalabra);
    console.log(arrPelicula);*/
    
    console.log(arrPelicula);

    //console.log(Pelicula.charAt(4)  + " -----" + Palabra.length);
    
    /*
    for (var i = 0; i< Palabra.length; i++){
        console.log(Palabra.charAt(i))
        var letra = Palabra.charAt(i);
        if(letra == a){
            Pelicula.charAt(i) = "a";
        }
    }
    console.log(Pelicula);
    */

}