window.onload = async function(){
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=20");
    const data = await response.json();
    const pokemon = data.results;

    console.log(pokemon)

    for(var x = 0; x < pokemon.length; x++ ){
        let opciones = document.createElement("option");
        opciones.value = pokemon[x].url
        opciones.innerHTML = pokemon[x].name
        document.getElementById("select-pokemon").appendChild(opciones);
        
    }
    document.getElementById("select-pokemon").addEventListener("change", async function(event){
        console.log(event.target.value);
        const response = await fetch(event.target.value);
        const data = await response.json();
        const pokemon = data.sprites;
        console.log(pokemon)
        document.querySelector("img").src = pokemon.front_default;
        document.querySelector('a').addEventListener("click", function(){
            document.querySelector("img").src = pokemon.front_shiny;
        })
    })
}   