document.querySelector("#btn").addEventListener("click", async function () {

    // fetch a la API
    const response = await fetch("https://randomuser.me/api/");

    // parseamos la respuesta de JSON a Object
    const data = await response.json();

    let persona = data.results[0];
    console.log(persona);
    
    document.getElementById("photo").src = persona.picture.large
    document.getElementById("first").innerHTML = persona.name.first
    document.getElementById("last").innerHTML = persona.name.last
    document.getElementById("country").innerHTML = persona.location.country
    document.getElementById("phone").innerHTML = persona.phone
    document.getElementById("email").innerHTML = persona.email
})
