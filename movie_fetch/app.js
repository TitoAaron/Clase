const la_fkin_api_key = "42f1941bec5c4006006323f020c28fa5";
let url = "https://api.themoviedb.org/3/search/movie?api_key=42f1941bec5c4006006323f020c28fa5";

async function cargarPelis(){
let query = "jaws";
let pelis = await fetch(url + "&query=" + query);
pelis = await pelis.json();
console.log(pelis);
}

window.onload = ()=>{
    cargarPelis();
}