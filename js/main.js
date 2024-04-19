"use strict";

var answer = 0;
var score = 0;
var mistake = 0;
var countExample = 10;
var seconds = 0;
var timeArray = [0, 0, 0, 0,0,0,0,0,0,0,];
window.onload = function () {
    firstTry();
}

function timer() {
    seconds++; 
    let input = document.getElementById('time') ;
    input.outerHTML = `<p id="time">${seconds}</p>`;
}

function firstTry(){
    score = sessionStorage.getItem('score');
    if(document.location.href == 'https://sashkka1.github.io/MathScore/html/add.html'){
    // if(document.location.href == 'http://127.0.0.1:5501/MathScore/html/add.html'){
        score = 0;
        setExample();
        seconds = 0;
        var interval = setInterval(timer, 1000);
    } else if(document.location.href == 'https://sashkka1.github.io/MathScore/index.html' && score == example){
    // } else if(document.location.href == 'http://127.0.0.1:5501/MathScore/index.html' && score == countExample){
        mistake = sessionStorage.getItem('mistake');
        let timeArrayString =[];
        timeArrayString = sessionStorage.getItem('timeArray');
        timeArray = timeArrayString.split(',');
        let min;
        let max = 0;
        let total = 0;
        for(let i=0;i<10;i++){
            total += Number(timeArray[i]);
            console.log(timeArray[i]);
            if(timeArray[i]>= max){
                max = timeArray[i];
            } else{
                min = timeArray[i];
            }
        };

        let inputExample = document.getElementById('message-first') ;
        inputExample.outerHTML = `<p class="message-first"> Уровень завершен <br><br> Количество решенных примеров: <br> ${countExample}<br><br>   Количество ошибок:<br>  ${mistake} <br><br> Время(секунд): <br>total - ${total}, max - ${max}, min - ${min}</p>`;
    }
    score = 0;
    mistake = 0;
    timeArray = [0, 0, 0, 0,0,0,0,0,0,0,];
    sessionStorage.setItem('score', score);
    sessionStorage.setItem('mistake',mistake );
    sessionStorage.setItem('timeArray',timeArray );
}
function setOne(){
    let input = document.getElementById('inputAnswer')
    let answer = input.textContent ;
    if(answer.length < 6){
        answer += 1 ;
        input.outerHTML = `<p id="inputAnswer" class="inputAnswer">${ answer }</p>`;
    } else{
        blink('inputAnswer','red')
    }
};
function setTwo(){
    let input = document.getElementById('inputAnswer')
    let answer = input.textContent ;
    if(answer.length < 6){
        answer += 2 ;
        input.outerHTML = `<p id="inputAnswer" class="inputAnswer">${ answer }</p>`;
    } else{
        blink('inputAnswer','red')
    }
};
function setThree(){
    let input = document.getElementById('inputAnswer')
    let answer = input.textContent ;
    if(answer.length < 6){
        answer += 3 ;
        input.outerHTML = `<p id="inputAnswer" class="inputAnswer">${ answer }</p>`;
    } else{
        blink('inputAnswer','red')
    }
};
function setFour(){
    let input = document.getElementById('inputAnswer')
    let answer = input.textContent ;
    if(answer.length < 6){
        answer += 4 ;
        input.outerHTML = `<p id="inputAnswer" class="inputAnswer">${ answer }</p>`;
    } else{
        blink('inputAnswer','red')
    }
};
function setFive(){
    let input = document.getElementById('inputAnswer')
    let answer = input.textContent ;
    if(answer.length < 6){
        answer += 5 ;
        input.outerHTML = `<p id="inputAnswer" class="inputAnswer">${ answer }</p>`;
    } else{
        blink('inputAnswer','red')
    }
};
function setSix(){
    let input = document.getElementById('inputAnswer')
    let answer = input.textContent ;
    if(answer.length < 6){
        answer += 6 ;
        input.outerHTML = `<p id="inputAnswer" class="inputAnswer">${ answer }</p>`;
    } else{
        blink('inputAnswer','red')
    }
};
function setSeven(){
    let input = document.getElementById('inputAnswer')
    let answer = input.textContent ;
    if(answer.length < 6){
        answer += 7 ;
        input.outerHTML = `<p id="inputAnswer" class="inputAnswer">${ answer }</p>`;
    } else{
        blink('inputAnswer','red')
    }
};
function setEight(){
    let input = document.getElementById('inputAnswer')
    let answer = input.textContent ;
    if(answer.length < 6){
        answer += 8 ;
        input.outerHTML = `<p id="inputAnswer" class="inputAnswer">${ answer }</p>`;
    } else{
        blink('inputAnswer','red')
    }
};
function setNine(){
    let input = document.getElementById('inputAnswer')
    let answer = input.textContent ;
    if(answer.length < 6){
        answer += 9 ;
        input.outerHTML = `<p id="inputAnswer" class="inputAnswer">${ answer }</p>`;
    } else{
        blink('inputAnswer','red')
    }
};
function setZero(){
    let input = document.getElementById('inputAnswer')
    let answer = input.textContent ;
    if(answer.length < 6){
        answer += 0 ;
        input.outerHTML = `<p id="inputAnswer" class="inputAnswer">${ answer }</p>`;
    } else{
        blink('inputAnswer','red')
    }
};
function numberDelete(){
    let input = document.getElementById('inputAnswer')
    let answer = input.textContent ;
    let answerNew = answer.slice(0,answer.length-1);
    input.outerHTML = `<p id="inputAnswer" class="inputAnswer">${ answerNew }</p>`;
};

function numberEnter(){
    let inputAnswerUser = document.getElementById('inputAnswer') ;
    let answerUser = inputAnswerUser.textContent;

    if(answerUser == answer){
        timeArray [score] = seconds;
        seconds =0;
        score++;
        if(score>=countExample){
            document.location.href = 'https://sashkka1.github.io/MathScore/index.html';
            // document.location.href = 'http://127.0.0.1:5501/MathScore/index.html';
            sessionStorage.setItem('score',score);
            sessionStorage.setItem('mistake',mistake);
            sessionStorage.setItem('timeArray',timeArray);
        }
        setExample();
        let answerEmpty = '';
        inputAnswerUser.outerHTML = `<p id="inputAnswer" class="inputAnswer">${ answerEmpty }</p>`;
        blink('inputAnswer','green')
    } else{
        mistake++;
        blink('inputAnswer','red')
    }
};

function setExample(){
    let inputExample = document.getElementById('example') ;
    let inputScore = document.getElementById('score') ;

    let firstNumber = 0;
    let lastNumber = 0;

    let symbolArray = ['-', '+', '*', '/',];
    var symbol = Math.round(Math.random(0,100)*3);
    switch(symbol){
        case 0: // '-'
            for(let i =0;i < 1;){
                firstNumber = Math.round(Math.random(0,100)*100);
                lastNumber = Math.round(Math.random(0,100)*100);
                if(firstNumber <= lastNumber){
                } else{
                    answer = firstNumber - lastNumber;
                    i++;
                }
            }
        break;
        case 1:// '+'
            firstNumber = Math.round(Math.random(0,100)*100);
            lastNumber = Math.round(Math.random(0,100)*100);
            answer = firstNumber + lastNumber;
        break;
        case 2:// '*'
            firstNumber = Math.round(Math.random(0,100)*20);
            lastNumber = Math.round(Math.random(0,100)*20);
            answer = firstNumber * lastNumber;
        break;
        case 3:// '/'
            let forSort;
            for(let i =0;i < 1;){
                firstNumber = Math.round(Math.random(0,100)*20);
                lastNumber = Math.round(Math.random(0,100)*20);
                if(firstNumber == lastNumber || firstNumber == 0 ||lastNumber == 0 || firstNumber == 1 ||lastNumber == 1){
                } else{
                    forSort = firstNumber * lastNumber;
                    firstNumber =forSort;
                    answer = forSort / lastNumber;
                    i++;
                }
            }
        break;
    }
    inputExample.outerHTML = `<p id="example">${ firstNumber } ${ symbolArray[symbol] } ${ lastNumber } = </p>`;
    console.log(answer);
    inputScore.outerHTML = `<p id="score">${score}/${countExample}</p>`;
}

function blink(input, color){
    let inpu = document.getElementById(input) ;
    inpu.style.backgroundColor = color;
    inpu.style.transition = "0.4s";
    setTimeout(function() {
        inpu.style.backgroundColor = '';
        inpu.style.transition = "0.4s";
    }, 400);
}