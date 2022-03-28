# El contador colorido - CON JQUERY

Este contador muestras los números en verde cuando son positivos, en rojo cuando son negativos, y en casi negro cuando es un 0. Implementa la funcionalidad de la [Demo](https://js-beginners.github.io/counter-project/)

## Pasos a seguir

0. Implementa tu solución en app.js.
1. Intenta primero simplemente recuperar los dos elementos del DOM al que debes aplicar el evento click
2. Comprueba que eres capaz de aplicarlo, haciendo una prueba simple, como por ejemplo, que al hacer clic, en uno de los botones, muestre una cosa. Y al hacer clic en otro botón, muestre un mensaje diferente por consola.
3. Vas a necesitar una variable de estado para almacenar el valor del contador. Piensa bien donde debe ir.
4. La función invocada por el evento click de LOWER COUNT debe decrementar la variable que has definido, y además, actualizar el valor en el elemento del DOM adecuado. Por otro lado, ADD COUNT debe incrementarla. No lo hagas todo a la vez. Primero comprueba que eres capaz de actualizar el valor de la variable y mostrarlo por consola. Y luego, lleva el valor de dicha variable al elemento del DOM que le corresponda.
5. Cuando el valro del contador sea mayor de 0; añade con JQuery la clase CSS **positivo** . Cuando sea igual a 0; el color del contador no debería tener ninguna clase que le dé color. Cuando el contador sea menor a 0; añade con JQuery la clase CSS **negativo**

## Restricciones

1. NO copies/pegues líneas de la documentación JQuery. Ni siquiera de tu ejercicio anterior. El objetivo es que obtengas soltura y entendimiento en los datos que estás tratando.
