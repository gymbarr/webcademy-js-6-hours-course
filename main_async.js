// =================== 16. setInterval  =================== 

// setInterval запускает функцию с определенным интервалом времени (время задается во втором параметре)
// const timerIntervalID = setInterval(function () {
//   console.log('Fired!');
// }, 1000)

// // чтобы остановить выполнение функции, используется функция clearInterval
// // clearInterval(timerIntervalID);


// // =================== 17. setTimeout  =================== 

// // setTimeout выполняет функцию один раз по истечению заданного времени
// const timerID = setTimeout(function () {
//   console.log('setTimeout Fired!');
// }, 2000)

// чтобы отменить выполнение функции, используется функция clearInterval
// clearInterval(timerID);


// // =================== 18. setInterval + setTimeout  =================== 

const timerID = setInterval(function () {
  console.log('setInterval Fired!');
}, 1000)

setTimeout(function() {
  clearInterval(timerID);
}, 10000)