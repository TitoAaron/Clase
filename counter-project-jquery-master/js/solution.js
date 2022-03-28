$(document).ready(function () {
    console.log("DOM cargado! Implementa tu solución a partir de esta línea.");


    $('.prevBtn').click(function () {
        counter--;
        updateDOM();
    });

    $('.nextBtn').click(function () {
        counter++;
        updateDOM();
    });

    function updateDOM() {
        $('#counter').text(counter);

        if (counter == 0) {
            $('#counter').removeClass('positivo');
            $('#counter').removeClass('negativo');
        }

        else if (counter > 0) {
            $('#counter').addClass('positivo');
        }

        else {
            $('#counter').addClass('negativo');
        }
    }
});