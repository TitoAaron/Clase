// filter

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present', 'away', 'silent', 'generate', 'stunning', 'complete'];

// Usa el método filter para filtrar las palabras que empiezan por la letra 'e'

console.log(words.filter( e => e.charAt(0) == 'e')); // TODO [ 'elite', 'exuberant']

// Usa el método filter para filtrar las palabras que empiezan por voca

const regexp = new RegExp('^[aeiou].*', 'i');



console.log(words.filter(  e => regexp.test(e.charAt(0)))); // TODO [ 'elite', 'exuberant', 'away']
