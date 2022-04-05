// https://www.w3schools.com/react/react_es6_destructuring.asp

// Operador de desestructuración

function tempMinMax() {
    return [-1, 20];
}

let temp = tempMinMax();
let tempMin = temp[0];
let tempMax = temp[1];

console.log(tempMin, tempMax); // Funciona, forma ES5

// Reescribe el código de arriba usando ES6

// TODO: Usa el operador de destrcturación para asignar el valor de la primera posición del array a tempDestructMin, y la segunda posición del array a tempDesustructMax

// console.log(tempDestructMin, tempDestructMax) // -1 20


