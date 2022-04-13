# PokeMemoty

## Iteración 1

- Cargar el json de ./assets/package.json
- Crear un array con los 10 primeros pokemons de ./assets/package.json

## Iteración 2

- Crear un componente Card
- El componente Card recibe dos propiedades
  - el anvererso de la carta, en formato de ruta a la imagen
  - el reverso de la carta, en formato de ruta a la imagen
  - el estado inicial, oculta o revelada.

Prueba de crear el componente y usarlo en App.vue.
Juega con sus propiedades para poder alcanzar a mostrar todos los estados posibles (dos estados, oculto o revelado. De momento, usa cualquier imagen de pokemon).

## Iteración 3

- En App.vue

  - Mapea los pokemons para obtener un array de objetos que solo contenga
    - un identificar único
    - el nombre del pokemon en inglés
    - la ruta a la imagen del pokemon de la carpeta **public**

- Crea un componente ChessBoard
- El componente recibe varias propiedades:
  - Un array de objetos
    - Un identificador único
    - El anverso para la carta
  - El reverso, que será usado para todas las cartas
- El componente debe crear tantas Card como elementos recibe en el array (nos preocuparemos en la siguiente iteración de pensar como doblar las cartas para hacer parejas)

## Iteración 4.

Debemos añadir ahora funcionalidad al ChessBoard. De momento, lo único que hara es revelar cartas.

- Asocia el evento @click a cada carta
  - Debemos ahora pasar la propiedad "reveal" a cada carta
  - ¿Cuál sería la mejor manera de guardar el estado de cada carta, si esta revelado o no?
  - Gestiona el evento click para cambiar el estado a revelado de la carta

## Iterción 5

Dobla el número de cartas disponibles. Verifica que sigue funcionando el hecho de poder revelar las cartas individualmente. No te preocupes por el momento de mezclarlas.

Recuerda que no es buena idea modificar las propiedades. Hay que crear una nueva variable, doblar el array original, y usar este nuevo array para iterar en el v-for.

PISTA: Es relativamente sencillo duplicar un array usando el método .concat y el operador de spread.

## Iteración 6

Debemos ahora implementar la lógica para saber si hemos hecho **match** en una pareja. De alguna forma, nuestro ChessBoard debe saber si hay 0, 1 o 2 cartas seleccionadas.

Si hay dos cartas seleccionadas, debe comparar sus identificadores. Si son el mismo, hemos hecho match. No deberiámos volver a girar dichas cartas.

**Bug**: se puede clickar en cartas ya seleccionadas

## Iteración 7

Instalar una barra de progreso para llegar a las 10 parejas
