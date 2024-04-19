"use strict";


var Git ='https://sashkka1.github.io/MathScore/';
var Home ='http://127.0.0.1:5501/MathScore/';
var stringUse = Git;
var answer = 0;
var score = 0;
var mistake = 0;
var countExample = 10;
var seconds = 0;
var timeArray = [0, 0, 0, 0,0,0,0,0,0,0,];
var forScore = [0,0,0,0,];

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
    if(document.location.href == (stringUse+'html/add.html')){
        score = 0;
        setExample();
        seconds = 0;
        var interval = setInterval(timer, 1000);
    } else if(document.location.href == (stringUse+'index.html') && score == countExample){
        mistake = sessionStorage.getItem('mistake');
        let timeArrayString =[];
        timeArrayString = sessionStorage.getItem('timeArray');
        timeArray = timeArrayString.split(',');
        let min;
        let max = 0;
        let total = 0;
        for(let i=0;i<10;i++){
            total += Number(timeArray[i]);
            if(timeArray[i]>= max){
                max = timeArray[i];
            } else{
                min = timeArray[i];
            }
        };

        let inputExample = document.getElementById('message-first') ;
        inputExample.outerHTML = `<p class="message-first"> Уровень завершен <br><br>Количество ошибок:<br>  ${mistake} <br><br> Время(секунд): <br>total - ${total}, max - ${max}, min - ${min}</p>`;
    }
    score = 0;
    mistake = 0;
    timeArray = [0, 0, 0, 0,0,0,0,0,0,0,];
    sessionStorage.setItem('score', score);
    sessionStorage.setItem('mistake',mistake );
    sessionStorage.setItem('timeArray',timeArray );
}

function check(thisCheckbox){
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let test =0;
    for(let i =0;i<=3;i++){
        if(checkboxes[i].checked){
            test++;
        }
    }
    if(test == 0){
        thisCheckbox.checked = true;
    }
}      

function start(){
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    forScore = [0,0,0,0,];
    for(let i =0;i<=3;i++){
        if(checkboxes[i].checked){
            forScore[i] = 1;
        }else{
            forScore[i] = 0;
        }
    }
    sessionStorage.setItem('forScore',forScore);
    document.location.href = (stringUse+'html/add.html');
    score = 0;
    setExample();
    seconds = 0;
    var interval = setInterval(timer, 1000);
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
            document.location.href = (stringUse+'index.html');
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
    let test= sessionStorage.getItem('forScore',forScore);
    let timeArrayString =[];
    timeArrayString = sessionStorage.getItem('timeArray');
    forScore = test.split(',');// 1+  2-  3x  4/
    // console.log(`forScore - ${forScore}`);


    let inputExample = document.getElementById('example') ;
    let inputScore = document.getElementById('score') ;

    let firstNumber = 0;
    let lastNumber = 0;

    let symbolArray = ['+', '-', '*', '/',];
    var symbol = Math.round(Math.random(0,100)*3);
    console.log(`forScore - ${forScore}`);
    for(let i=0;i<5;){
        var symbol = Math.round(Math.random(0,100)*3);
        console.log(`forScore[symbol] - ${forScore[symbol]}`);
        console.log(`symbol - ${symbol}`);
        if(forScore[symbol] == 0){
            console.log(`symbol in - ${symbol}`);
        }else{
            i=10;
        }
    }
    switch(symbol){
        case 0: // '+'
            firstNumber = Math.round(Math.random(0,100)*100);
            lastNumber = Math.round(Math.random(0,100)*100);
            answer = firstNumber + lastNumber;
        break;
        case 1:// '-'
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


// jQuery(document).ready(function() {
// 	$('.upper').on('input', setFill);
// 	$('.lower').on('input', setFill);

// 	var max = $('.upper').attr('max');
// 	var min = $('.lower').attr('min');

// 	function setFill(evt) {
// 		var valUpper = $('.upper').val();
// 		var valLower = $('.lower').val();
// 		if (parseFloat(valLower) > parseFloat(valUpper)) {
// 			var trade = valLower;
// 			valLower = valUpper;
// 			valUpper = trade;
// 		}
		
// 		var width = valUpper * 100 / max;
// 		var left = valLower * 100 / max;
// 		$('.fill').css('left', 'calc(' + left + '%)');
// 		$('.fill').css('width', width - left + '%');
		
// 		// Update info
// 		if (parseInt(valLower) == min) {
// 			$('.easy-basket-lower').val('0');
// 		} else {
// 			$('.easy-basket-lower').val(parseInt(valLower));
// 		}
// 		if (parseInt(valUpper) == max) {
// 			$('.easy-basket-upper').val('300');
// 		} else {
// 			$('.easy-basket-upper').val(parseInt(valUpper));
// 		}
// 		$('.histogram-list li').removeClass('ui-histogram-active');
// 	}
	
// 	// изменяем диапазон цен вручную
// 	$('.easy-basket-filter-info p input').keyup(function() {
// 		var valUpper = $('.easy-basket-upper').val();
// 		var valLower = $('.easy-basket-lower').val();
// 		var width = valUpper * 100 / max;
// 		var left = valLower * 100 / max;
// 		if ( valUpper > 300 ) {
// 			var left = max;
// 		}
// 		if ( valLower < 0 ) {
// 			var left = min;
// 		} else if ( valLower > max ) {
// 			var left = min;
// 		}
// 		$('.fill').css('left', 'calc(' + left + '%)');
// 		$('.fill').css('width', width - left + '%');
// 		// меняем положение ползунков
// 		$('.lower').val(valLower);
// 		$('.upper').val(valUpper);
// 	});
// 	$('.easy-basket-filter-info p input').focus(function() {
// 		$(this).val('');
// 	});
// 	$('.easy-basket-filter-info .iLower input').blur(function() {
// 		var valLower = $('.lower').val();
// 		$(this).val(Math.floor(valLower));
// 	});
// 	$('.easy-basket-filter-info .iUpper input').blur(function() {
// 		var valUpper = $('.upper').val();
// 		$(this).val(Math.floor(valUpper));
// 	});
	
// 	$('.histogram-list li').click(function() {
// 		$('.histogram-list li').removeClass('ui-histogram-active');
// 		var range_from = $(this).attr('price-range-from');
// 		var range_to = $(this).attr('price-range-to');
// 		var width = range_to * 100 / max;
// 		var left = range_from * 100 / max;
// 		$('.easy-basket-lower').val(range_from);
// 		$('.easy-basket-upper').val(range_to);
// 		$('.fill').css('left', 'calc(' + left + '%)');
// 		$('.fill').css('width', width - left + '%');
// 		$('.lower').val(range_from);
// 		$('.upper').val(range_to);
// 		$(this).addClass('ui-histogram-active');
// 	});
// });