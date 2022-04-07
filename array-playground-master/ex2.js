// map

// Utiliza el método map para devolver un nuevo array indicando la posición de cada uno de los elementos del array original con el siguiente formato. Pista: la función de callback de .map puede recibir más de un parámetro...

let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];

let resultado = colors.map((x, index) => {
    return  index + "-" + x;
})

console.log(resultado); // ['0-Blue', '1-Green', '2-Red', '3-Orange', '4-Violet', '5-Indigo', '6-Yellow']