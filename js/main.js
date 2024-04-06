"use strict";

document.getElementById('numberOne').addEventListener('click', function(){
    let input = document.getElementById('inputAnswer');
    let number = 122;
    input.outerHTML = input.outerHTML + number;
    // `<input id="inputAnswer" type="text" value="1">`;
});

document.getElementById('numberTwo').addEventListener('click', function(){
    let input = document.getElementById('inputAnswer');
    let number = 2;
    input.outerHTML = `<input id="inputAnswer" type="text" value="${ + number }">`;
});

document.getElementById('numberThree').addEventListener('click', function(){
    let input = document.getElementById('inputAnswer');
    let number = 2;
    input.innerHTML += "3";
});
document.getElementById('numberFour').addEventListener('click', function(){
    let input = document.getElementById('inputAnswer') ;
    let answer = input.getAttribute('value') + 4 ;
    console.log(answer);
    input.outerHTML = `<input id="inputAnswer" type="text" value="${ answer }">`;
});

document.getElementById('numberFive').addEventListener('click', function(){
    let input = document.getElementById('inputAnswer') ;
    let answer = input.getAttribute('value');
    if(answer.length < 6){
        answer = input.getAttribute('value') + 4 ;
        console.log(answer);
        input.outerHTML = `<input id="inputAnswer" type="text" value="${ answer }">`;
    } else{
        input.style.color = "red";
    }
});

document.getElementById('numberSeven').addEventListener('click', function(){
    let input = document.getElementById('inputAnswer') ;
    input.style.backgroundColor = "red";
});