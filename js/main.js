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
var forMemery = [0,100,0,20,];

window.onload = function () {
    let test = localStorage.getItem('forMemery',forMemery);
    forMemery = test.split(',');// 1valLower  2valUpper  3lower-double  4upper-double 

    var max = $('.upper').attr('max');
	var min = $('.lower').attr('min');
    var valLower = forMemery[0];
    var valUpper = forMemery[1];

    if (parseFloat(valLower) > parseFloat(valUpper)) {
        var trade = valLower;
        valLower = valUpper;
        valUpper = trade;
    }
    var width = valUpper * 100 / max;
    var left = valLower * 100 / max;
    console.log(`width - ${width}, left - ${left}, valLower - ${forMemery[0]}, valUpper - ${forMemery[1]}`);
    $('.fill').css('left', 'calc(' + left + '%)');
    $('.fill').css('width', width - left + '%');
    
    // Update info
    if (parseInt(valLower) == min) {
        $('.easy-basket-lower').val('0');
    } else {
        $('.easy-basket-lower').val(parseInt(valLower));
    }
    if (parseInt(valUpper) == max) {
        $('.easy-basket-upper').val('300');
    } else {
        $('.easy-basket-upper').val(parseInt(valUpper));
    }

    // изменяем диапазон цен вручную
    if ( valUpper > 300 ) {
        var left = max;
    }
    if ( valLower < 0 ) {
        var left = min;
    } else if ( valLower > max ) {
        var left = min;
    }
    // меняем положение ползунков
    $('.lower').val(valLower);
    $('.upper').val(valUpper);  
	$('.easy-basket-filter-info p input').focus(function() {
		$(this).val('');
	});
	$('.easy-basket-filter-info .iLower input').blur(function() {
		var valLower = $('.lower').val();
		$(this).val(Math.floor(valLower));
	});
	$('.easy-basket-filter-info .iUpper input').blur(function() {
		var valUpper = $('.upper').val();
		$(this).val(Math.floor(valUpper));
	});




    max = $('.upper-double').attr('max');
    min = $('.lower-double').attr('min');
    valLower = forMemery[2];
    valUpper = forMemery[3];
    if (parseFloat(valLower) > parseFloat(valUpper)) {
        var trade = valLower;
        valLower = valUpper;
        valUpper = trade;
    }
    width = valUpper * 100 / max;
    left = valLower * 100 / max;
    console.log(`width - ${width}, left - ${left}, lower-double - ${forMemery[2]}, upper-double - ${forMemery[3]}`);
    $('.fill-double').css('left', 'calc(' + left + '%)');
    $('.fill-double').css('width', width - left + '%');
    
    // Update info
    if (parseInt(valLower) == min) {
        $('.easy-basket-lower-double').val('0');
    } else {
        $('.easy-basket-lower-double').val(parseInt(valLower));
    }
    if (parseInt(valUpper) == max) {
        $('.easy-basket-upper-double').val('50');
    } else {
        $('.easy-basket-upper-double').val(parseInt(valUpper));
    }


    if ( valUpper > 50 ) {
        var left = max;
    }
    if ( valLower < 0 ) {
        var left = min;
    } else if ( valLower > max ) {
        var left = min;
    }
    $('.fill-double').css('left', 'calc(' + left + '%)');
    $('.fill-double').css('width', width - left + '%');
    // меняем положение ползунков
    $('.lower-double').val(valLower);
    $('.upper-double').val(valUpper);
    $('.easy-basket-filter-info-double p input').focus(function() {
        $(this).val('');
    });
    $('.easy-basket-filter-info-double .iLower-double input').blur(function() {
        var valLower = $('.lower-double').val();
        $(this).val(Math.floor(valLower));
    });
    $('.easy-basket-filter-info-double .iUpper-double input').blur(function() {
        var valUpper = $('.upper-double').val();
        $(this).val(Math.floor(valUpper));
    });
    

    test = localStorage.getItem('forScore',forScore);
    console.log(`test ${test}`);
    forScore = test.split(',');// 1+  2-  3x  4/ +-(min) +-(max) x/(min)  x/(max)
    console.log(forScore);
    if(forScore[0] == forScore[1] == forScore[2]== forScore[3] ==0){
        forScore[0] =1;
    }
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    forScore[4] =forScore[8];
    console.log(`forScore[4]${forScore[4]},  forScore[8] ${forScore[8]}`);
    for(let i =0;i<=5;i++){
        if(forScore[i]==1){
            checkboxes[i].checked = true;
        }
    }
    localStorage.setItem('forScore',forScore);
    sessionStorage
    firstTry();
}


function timer() {
    seconds++; 
    let input = document.getElementById('time') ;
    input.outerHTML = `<p id="time">${seconds}</p>`;
}

function firstTry(){
    score = sessionStorage.getItem('score');
    let test= sessionStorage.getItem('forScore',forScore);
    forScore = test.split(',');// 1+  2-  3x  4/ +-(min) +-(max) x/(min)  x/(max)
    if(document.location.href == (stringUse+'html/add.html')){
        score = 0;
        setExample();
        if(forScore[8]==1){
            seconds = 0;
            var interval = setInterval(timer, 1000);
        }
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
        if(forScore[8]==1){
            inputExample.outerHTML = `<p class="message-first"> Уровень завершен <br>Количество ошибок:<br>  ${mistake} <br> Время(секунд): <br>total - ${total}, max - ${max}, min - ${min}</p>`;
        }else{
            inputExample.outerHTML = `<p class="message-first"> Уровень завершен <br>Количество ошибок:<br>  ${mistake} <br></p>`;
        }

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

function start(button){
    button.classList.add('flash');
    setTimeout(function() {
        button.classList.remove('flash');
    }, 200);
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    forScore = [0,0,0,0,0,0,0,0,0,];
    for(let i =0;i<=3;i++){
        if(checkboxes[i].checked){
            forScore[i] = 1;
        }else{
            forScore[i] = 0;
        }
    }
    if(checkboxes[4].checked){
        forScore[8]=1;
    }
    var inputLower = document.querySelectorAll('input[type="text"]');
    forScore[4]= inputLower[0].value;
    forScore[5]= inputLower[1].value;
    forScore[6]= inputLower[2].value;
    forScore[7]= inputLower[3].value;
    sessionStorage.setItem('forScore',forScore);
    localStorage.setItem('forScore',forScore);

    forMemery[0]= $('.lower').val();
    forMemery[1]= $('.upper').val();
    forMemery[2]= $('.lower-double').val();
    forMemery[3]= $('.upper-double').val();
    localStorage.setItem('forMemery',forMemery);
    document.location.href = (stringUse+'html/add.html');
    score = 0;
    setExample();
    seconds=0;
}

function setOne(button){
    button.classList.add('flash');
    setTimeout(function() {
        button.classList.remove('flash');
    }, 200);
    let input = document.getElementById('inputAnswer')
    let answer = input.textContent ;
    if(answer.length < 6){
        answer += 1 ;
        input.outerHTML = `<p id="inputAnswer" class="inputAnswer">${ answer }</p>`;
    } else{
        blink('inputAnswer','red')
    }
};
function setTwo(button){
    button.classList.add('flash');
    setTimeout(function() {
        button.classList.remove('flash');
    }, 200);
    let input = document.getElementById('inputAnswer')
    let answer = input.textContent ;
    if(answer.length < 6){
        answer += 2 ;
        input.outerHTML = `<p id="inputAnswer" class="inputAnswer">${ answer }</p>`;
    } else{
        blink('inputAnswer','red')
    }
};
function setThree(button){
    button.classList.add('flash');
    setTimeout(function() {
        button.classList.remove('flash');
    }, 200);
    let input = document.getElementById('inputAnswer')
    let answer = input.textContent ;
    if(answer.length < 6){
        answer += 3 ;
        input.outerHTML = `<p id="inputAnswer" class="inputAnswer">${ answer }</p>`;
    } else{
        blink('inputAnswer','red')
    }
};
function setFour(button){
    button.classList.add('flash');
    setTimeout(function() {
        button.classList.remove('flash');
    }, 200);
    let input = document.getElementById('inputAnswer')
    let answer = input.textContent ;
    if(answer.length < 6){
        answer += 4 ;
        input.outerHTML = `<p id="inputAnswer" class="inputAnswer">${ answer }</p>`;
    } else{
        blink('inputAnswer','red')
    }
};
function setFive(button){
    button.classList.add('flash');
    setTimeout(function() {
        button.classList.remove('flash');
    }, 200);
    let input = document.getElementById('inputAnswer')
    let answer = input.textContent ;
    if(answer.length < 6){
        answer += 5 ;
        input.outerHTML = `<p id="inputAnswer" class="inputAnswer">${ answer }</p>`;
    } else{
        blink('inputAnswer','red')
    }
};
function setSix(button){
    button.classList.add('flash');
    setTimeout(function() {
        button.classList.remove('flash');
    }, 200);
    let input = document.getElementById('inputAnswer')
    let answer = input.textContent ;
    if(answer.length < 6){
        answer += 6 ;
        input.outerHTML = `<p id="inputAnswer" class="inputAnswer">${ answer }</p>`;
    } else{
        blink('inputAnswer','red')
    }
};
function setSeven(button){
    button.classList.add('flash');
    setTimeout(function() {
        button.classList.remove('flash');
    }, 200);
    let input = document.getElementById('inputAnswer')
    let answer = input.textContent ;
    if(answer.length < 6){
        answer += 7 ;
        input.outerHTML = `<p id="inputAnswer" class="inputAnswer">${ answer }</p>`;
    } else{
        blink('inputAnswer','red')
    }
};
function setEight(button){
    button.classList.add('flash');
    setTimeout(function() {
        button.classList.remove('flash');
    }, 200);
    let input = document.getElementById('inputAnswer')
    let answer = input.textContent ;
    if(answer.length < 6){
        answer += 8 ;
        input.outerHTML = `<p id="inputAnswer" class="inputAnswer">${ answer }</p>`;
    } else{
        blink('inputAnswer','red')
    }
};
function setNine(button){
    button.classList.add('flash');
    setTimeout(function() {
        button.classList.remove('flash');
    }, 200);
    let input = document.getElementById('inputAnswer')
    let answer = input.textContent ;
    if(answer.length < 6){
        answer += 9 ;
        input.outerHTML = `<p id="inputAnswer" class="inputAnswer">${ answer }</p>`;
    } else{
        blink('inputAnswer','red')
    }
};
function setZero(button){
    let input = document.getElementById('inputAnswer')
    let answer = input.textContent ;
    button.classList.add('flash');
    setTimeout(function() {
        button.classList.remove('flash');
    }, 200);
    if(answer.length < 6){
        answer += 0 ;
        input.outerHTML = `<p id="inputAnswer" class="inputAnswer">${ answer }</p>`;
    } else{
        blink('inputAnswer','red')
    }
};
function numberDelete(button){
    let input = document.getElementById('inputAnswer')
    let answer = input.textContent ;
    let answerNew = answer.slice(0,answer.length-1);
    input.outerHTML = `<p id="inputAnswer" class="inputAnswer">${ answerNew }</p>`;
    button.classList.add('flash');
    setTimeout(function() {
        button.classList.remove('flash');
    }, 200);
};

function numberEnter(button){
    let inputAnswerUser = document.getElementById('inputAnswer') ;
    let answerUser = inputAnswerUser.textContent;
    button.classList.add('flash');
    setTimeout(function() {
        button.classList.remove('flash');
    }, 200);
    if(answerUser == answer){
        timeArray [score] = seconds;
        seconds =0;
        score++;
        if(score>=countExample){
            document.location.href = (stringUse+'index.html');
            sessionStorage.setItem('score',score);
            sessionStorage.setItem('mistake',mistake);
            sessionStorage.setItem('timeArray',timeArray);
        }else{
            setExample();
            let answerEmpty = '';
            inputAnswerUser.outerHTML = `<p id="inputAnswer" class="inputAnswer">${ answerEmpty }</p>`;
            blink('inputAnswer','green')
        }
    } else{
        mistake++;
        blink('inputAnswer','red')
    }
};

function setExample(){
    let test= sessionStorage.getItem('forScore',forScore);
    let timeArrayString =[];
    timeArrayString = sessionStorage.getItem('timeArray');
    forScore = test.split(',');// 1+  2-  3x  4/ +-(min) +-(max) x/(min)  x/(max)

    let inputExample = document.getElementById('example') ;
    let inputScore = document.getElementById('score') ;

    let firstNumber = 0;
    let lastNumber = 0;

    let symbolArray = ['+', '-', '*', '/',];
    var symbol = Math.round(Math.random(0,100)*3);
    for(let i=0;i<5;){
        var symbol = Math.round(Math.random(0,100)*3);
        if(forScore[symbol] == 1){
            i=10;
        }
    }
    switch(symbol){
        case 0: // '+'
            firstNumber = randomNumber(forScore[4],forScore[5]);
            lastNumber = randomNumber(forScore[4],forScore[5]);
            answer = firstNumber + lastNumber;
        break;
        case 1:// '-'
            firstNumber = randomNumber(forScore[4],forScore[5]);
            lastNumber = randomNumber(forScore[4],forScore[5]);
            let a;
            if(firstNumber <= lastNumber){
                answer = lastNumber - firstNumber;
                a=lastNumber;
                lastNumber = firstNumber;
                firstNumber = a;
            } else{
                answer = firstNumber - lastNumber;
            }
        break;
        case 2:// '*'
            firstNumber = randomNumber(forScore[6],forScore[7]);
            lastNumber = randomNumber(forScore[6],forScore[7]);
            answer = firstNumber * lastNumber;
        break;
        case 3:// '/'
            let forSort;
            for(let i =0;i < 1;){
                firstNumber = randomNumber(forScore[6],forScore[7]);
                lastNumber = randomNumber(forScore[6],forScore[7]);
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

function randomNumber(min, max){
    let number;
    for(let i = 0;i <5;){
        number = Math.round(Math.random(0,100)*max);
        if(number >=min){
            i =10;
        }
    }
    return number;
}

function blink(input, color){
    let inpu = document.getElementById(input) ;
    inpu.style.backgroundColor = color;
    inpu.style.transition = "0.4s";
    setTimeout(function() {
        inpu.style.backgroundColor = '';
    }, 400);
}

jQuery(document).ready(function() {
	$('.upper').on('input', setFill);
	$('.lower').on('input', setFill);

	var max = $('.upper').attr('max');
	var min = $('.lower').attr('min');

	function setFill(evt) {
		var valUpper = $('.upper').val();
		var valLower = $('.lower').val();

		if (parseFloat(valLower) > parseFloat(valUpper)) {
			var trade = valLower;
			valLower = valUpper;
			valUpper = trade;
		}
		
		var width = valUpper * 100 / max;
		var left = valLower * 100 / max;
		$('.fill').css('left', 'calc(' + left + '%)');
		$('.fill').css('width', width - left + '%');
		
		// Update info
		if (parseInt(valLower) == min) {
			$('.easy-basket-lower').val('0');
		} else {
			$('.easy-basket-lower').val(parseInt(valLower));
		}
		if (parseInt(valUpper) == max) {
			$('.easy-basket-upper').val('300');
		} else {
			$('.easy-basket-upper').val(parseInt(valUpper));
		}
		$('.histogram-list li').removeClass('ui-histogram-active');
	}
	
	// изменяем диапазон цен вручную
	$('.easy-basket-filter-info p input').keyup(function() {
		var valUpper = $('.easy-basket-upper').val();
		var valLower = $('.easy-basket-lower').val();
		var width = valUpper * 100 / max;
		var left = valLower * 100 / max;
		if ( valUpper > 300 ) {
			var left = max;
		}
		if ( valLower < 0 ) {
			var left = min;
		} else if ( valLower > max ) {
			var left = min;
		}
		$('.fill').css('left', 'calc(' + left + '%)');
		$('.fill').css('width', width - left + '%');
		// меняем положение ползунков
		$('.lower').val(valLower);
		$('.upper').val(valUpper);  
	});
	$('.easy-basket-filter-info p input').focus(function() {
		$(this).val('');
	});
	$('.easy-basket-filter-info .iLower input').blur(function() {
		var valLower = $('.lower').val();
		$(this).val(Math.floor(valLower));
	});
	$('.easy-basket-filter-info .iUpper input').blur(function() {
		var valUpper = $('.upper').val();
		$(this).val(Math.floor(valUpper));
	});
});

jQuery(document).ready(function() {
	$('.upper-double').on('input', setFill);
	$('.lower-double').on('input', setFill);

	var max = $('.upper-double').attr('max');
	var min = $('.lower-double').attr('min');

	function setFill(evt) {
		var valUpper = $('.upper-double').val();
		var valLower = $('.lower-double').val();
		if (parseFloat(valLower) > parseFloat(valUpper)) {
			var trade = valLower;
			valLower = valUpper;
			valUpper = trade;
		}
		
		var width = valUpper * 100 / max;
		var left = valLower * 100 / max;
		$('.fill-double').css('left', 'calc(' + left + '%)');
		$('.fill-double').css('width', width - left + '%');
		
		// Update info
		if (parseInt(valLower) == min) {
			$('.easy-basket-lower-double').val('0');
		} else {
			$('.easy-basket-lower-double').val(parseInt(valLower));
		}
		if (parseInt(valUpper) == max) {
			$('.easy-basket-upper-double').val('50');
		} else {
			$('.easy-basket-upper-double').val(parseInt(valUpper));
		}
		$('.histogram-list li').removeClass('ui-histogram-active');
	}
	
	// изменяем диапазон цен вручную
	$('.easy-basket-filter-info-double p input').keyup(function() {
		var valUpper = $('.easy-basket-upper-double').val();
		var valLower = $('.easy-basket-lower-double').val();
		var width = valUpper * 100 / max;
		var left = valLower * 100 / max;
		if ( valUpper > 50 ) {
			var left = max;
		}
		if ( valLower < 0 ) {
			var left = min;
		} else if ( valLower > max ) {
			var left = min;
		}
		$('.fill-double').css('left', 'calc(' + left + '%)');
		$('.fill-double').css('width', width - left + '%');
		// меняем положение ползунков
		$('.lower-double').val(valLower);
		$('.upper-double').val(valUpper);
	});
	$('.easy-basket-filter-info-double p input').focus(function() {
		$(this).val('');
	});
	$('.easy-basket-filter-info-double .iLower-double input').blur(function() {
		var valLower = $('.lower-double').val();
		$(this).val(Math.floor(valLower));
	});
	$('.easy-basket-filter-info-double .iUpper-double input').blur(function() {
		var valUpper = $('.upper-double').val();
		$(this).val(Math.floor(valUpper));
	});
});