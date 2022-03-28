// https://www.codewars.com/kata/57a93f93bb9944516d0000c1

// Pensar: en el constructor, que tipo de datos nos va a ayudar a almacenar valores como un 'diccionario' ?
// Pista: es el tipo de dato más importante en JavaScript


class Dictionary {
    
    constructor() {
        this.dictionary = {};
    }

    // Toma dos "strings" como parámetros.
    newEntry(key, value) {
        this.dictionary[key] = value;
    }

    // IMPORTANTE: Esta función siempre devuelve un string! nada de console.log
    look(key) {
        if(!this.dictionary[key]){
            return 'Can\'t find entry for'+key;
        }
        return this.dictionary[key];
    }
}


let d = new Dictionary();

// Descomentar cuando hayas implementado los métodos 'look' y 'newEntry'

 d.newEntry('Apple', 'A fruit');
console.log(d.look('Apple'), 'A fruit');

// d.newEntry('Soccer', 'A sport');
// console.log(d.look('Soccer'), 'A sport');
// console.log(d.look('Hi'), 'Can\'t find entry for Hi');
// console.log(d.look('Ball'), 'Can\'t find entry for Ball');

// d.newEntry('soccer', 'a sport');
// console.log(d.look('soccer'), 'a sport');