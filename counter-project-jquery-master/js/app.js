let counter = 0;



$(document).ready(function () {
    
    console.log("DOM cargado! Implementa tu solución a partir de esta línea.");

    $(".prevBtn").click(function(){
        counter++;
        cambiar();
    })

    $(".nextBtn").click(function(){
        counter--;
        cambiar()
    })

   function cambiar(){
       if(counter > 0){
           $("#counter").addClass("positivo")
           $("#counter").text(counter);
       }
       else{
        $("#counter").removeClass("positivo")
        $("#counter").addClass("negativo")
         $("#counter").text(counter);
       }
       
       
   }

   
});