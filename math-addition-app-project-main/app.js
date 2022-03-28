//generate random numbers
let firstNumber = parseInt(Math.random()*10);
let secondNumber = parseInt(Math.random()*10);

//get the total
let total = firstNumber + secondNumber;

//display numbers on the canvas

$(document).ready(function(){
    $("#primary-number").text(firstNumber);
    $("#secondary-number").text(secondNumber);

    $("#btn").click(function(){
        console.log(total);
        if(total == $("#guess").val()){
            alert("correcto");
        }
        else{alert("incorrecto");}
    })
    
})