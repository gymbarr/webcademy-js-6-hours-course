// =================== Таймер  =================== 

// инициализируем переменные
let isTimerWorking = false;
let counterValue = 0;
let timerID;

// находим кнопки и элементы на странице
const counterElement = document.querySelector('#counter');
const btnStart = document.querySelector('#start');
const btnPause = document.querySelector('#pause');
const btnStop = document.querySelector('#reset');

// старт
const startTimer = function () {
  // проверка флага работы таймера
  if (isTimerWorking === true) {
    return;
  } else {
    isTimerWorking = true;
  }

  // функция таймера
  timerID = setInterval(function () {
    counterValue++;
    counterElement.innerText = counterValue;
  }, 1000)
}

// пауза
const pauseTimer = function () {
  // сброс флага работы 
  isTimerWorking = false;
  clearInterval(timerID);
}

const stopTimer = function () {
  isTimerWorking = false;
  clearInterval(timerID);
  counterValue = 0;
  counterElement.innerText = 0;
}

btnStart.addEventListener('click', startTimer);
btnPause.addEventListener('click', pauseTimer);
btnStop.addEventListener('click', stopTimer);