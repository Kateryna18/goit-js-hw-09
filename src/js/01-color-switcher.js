// Напиши скрипт, який після натискання кнопки «Start», раз на секунду змінює колір фону <body> 
// на випадкове значення, використовуючи інлайн стиль. Натисканням на кнопку «Stop» зміна кольору фону повинна зупинятися.

// УВАГА
// Враховуй, що на кнопку «Start» можна натиснути нескінченну кількість разів. 
// Зроби так, щоб доки зміна теми запущена, кнопка «Start» була неактивною (disabled).

const COLOR_DELAY = 1000;

let timerId = null;

const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');


startBtn.addEventListener('click', changeBckColor);

stopBtn.addEventListener('click', stopChangeBckColor);

function changeBckColor(e) {
     timerId = setInterval(() => {
        startBtn.setAttribute('disabled', '');
        body.style.backgroundColor = getRandomHexColor();
        

    }, COLOR_DELAY)
}

function stopChangeBckColor() {
    startBtn.removeAttribute('disabled')
    clearTimeout(timerId);

}


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };