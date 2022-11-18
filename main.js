/* • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •
• • • • • JavaScript необходимые основы для начинающих • • • • •
• • • • • • • • • • • • практический курс • • • • • • • • • • •
• • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •
• • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • */
// ================== 0. Настройка окружения ===============
/*
- Установка редактора
- Установка плагина liveServer
- Моя тема Ayu
- Создание проекта
*/

// =================== 1. Подключение ===================
/*
- index.html
- файл main.js
- тег <script src></script>
- Запуск в liveServer
- команда console.log для вывода информации в консоль браузера
- комментарии
*/

// =================== 2.1 Типы переменных ===================

// Новый стандарт ES6:
// let - переменная
// const - константа

// Старый стандарт ES5:
// var - переменная

// let может менять значение во время работы программы
let username = 'Марк';
console.log(username);

username = 'Егор';
console.log(username);

// const не может изменять значение
const yearOfBirth = 1990;
// yearOfBirth = 1990; // Uncaught TypeError

// var - старый формат объявления переменной
// в отличие от let и const имеет функциональную область видимости, а не блочную
// не рекомендуется к использованию 


// =================== 2.2 Типы данных ===================
let userName = 'Марк'; // строка
let num = 30; // число
let isMarried = true; // булевый тип

// в JavaScript используется динамическая типизация
let someVariable = 'some value'; // тип string
someVariable = 50; // тип number
someVariable = false; // тип boolean

// значение null
let age = null;

// значение undefined
// означает, что значение не было присвоено
// если переменная объявлена, но ей не присвоено значение,
// то ее значением будет undefined 
let userEmail; // undefined
console.log(userEmail)

// объект
// массив

// оператор typeof
const someName = 'Bob';
console.log(typeof someName); // string

// BigInt
// Symbol


// =================== 3. Операторы сравнения и условия ===================

/*
3.1 Операторы сравнения

>, <, >=, <= 
== - нестрогое сравнение (приводит типы к одному типу)
=== - строгое сравнение (сравнение с учетом типов )
!= - нестрогое неравенство
!== - строгое неравенство
*/

console.log(10 > 5); // true 
console.log(10 == 5); // false 

console.log('5' == 5); // true
console.log('5' === 5); // false

/*
3.2 Условия

if (условие) {
  // код, который будет выполнен, если условие верно
} else {
  // код, который будет выполнен, если условие НЕ верно
}
*/

const time = 12;

if (time < 12) {
  console.log('Доброе утро!')
} else  if (time >= 12 && time < 18) {
  console.log('Добрый день!')
} else {
  console.log('Добрый вечер!')
}

/*
3.3 Логические операторы

&& - логическое И
|| - логическое ИЛИ
!true - логическое НЕ
*/


// =================== 4. Тернарный оператор ===================

10 < 12 ? console.log('condition true') : console.log('condition false');


// =================== 5. Конкатенация строк и шаблонные строки (интерполяция)  ===================

let hello = 'Hello!';
let howAreYou = 'How are you?';
let sayHi = hello + howAreYou;

console.log(sayHi);

// интерполяция
let userName1 = 'Andrey';

console.log(`Hello, ${userName1}! How is it going?`);


// =================== 6. Функции ===================

// function declaration
function sayHi1() {
  alert('Hi!');
}

// Плюсы такого варианта
// - можно вызывать функцию до того, как она была объявлена

// Минусы такого варианта
// - в случае переопределения можно не понимать, почему функция работает по-другому

// function expression
const sayHi2 = function () {
  alert('Hi!');
}

// Плюсы такого варианта
// - функцию нельзя переопределить

// Минусы такого варианта
// - нельзя вызывать функцию до того, как она была объявлена


// =================== 6.1 Параметры и аргументы для функции ===================

function sayHi3(guestName) {
  console.log(`Hi, ${guestName}! How're you doing?`);
}

sayHi3('Vitalya');

// =================== 6.2 Функция как аргумент ===================

function summ(a, b) {
  return a + b;
}

function diff(a, b) {
  return a - b;
}

console.log(summ(1, 7));

// колбэк функции
function doSomething(func) {
  let x = 10;
  let y = 15;
  let result = func(x, y);
  console.log(result);
}

doSomething(summ);
doSomething(diff);


// =================== 6.3 Самовызывающаяся функция IIFE ===================

// Immediately Invoked Function Expression (используется редко, так как она из стандарта ES5)

(function sayHi4 () {
  console.log('Hi, dear user!');
})();

// если не указывать имя, то это будет анонимная самовызывающаяся функция
(function (a, b) {
  console.log(a + b);
})(3, 5);


// =================== 6.4 Стрелочная функция ===================

const arrSayHi1 = (name) => {
  console.log(`Hi, ${name}`);
}

const arrSayHi2 = (name) => console.log(`Hi, ${name}`);


// =================== 7. Массивы =================== 

const autoBrands = ['Audi', 'Mazda', 'BMW', 'Toyota'];

console.log(autoBrands[0]);
console.log(autoBrands.length);

// =================== 7.1 Методы массивов =================== 
/*
.push(), .pop(), .shift(), .unshift(), .splice(), .slice(), .foreach(),
.indexOf(), .includes()
*/

autoBrands.push('Nissan');
console.log(autoBrands);


// =================== 8. Обход массива циклом  =================== 

// for ( of ) -- один из самых удобных методов обхода массива
for (let brand of autoBrands) {
  console.log(brand);
}

// forEach()
autoBrands.forEach((brand, index) => console.log(`${brand} => ${index}`)); 

const printBrand = (brand, index) => console.log(`${brand} => ${index}`);

autoBrands.forEach(printBrand)


// =================== 9. Объекты  =================== 

// 9.1 Свойства объектов

const person = {
  userName: 'Andrey',
  age: 26,
  isMarried: false
}

console.log(person);

// обращение к свойствам
console.log(person.age);
console.log(person['userName']);

let propertyName = 'isMarried';
console.log(person[propertyName]);

// добавление свойства к объекту
person.profession = 'Developer';

// удаление свойств
delete person.isMarried;


// 9.2 Методы объектов

const dog = {
  name: 'Gerda',
  age: 5,
  sayWoof: function () {
    console.log('Woof!');
  }
}
// sayWoof - метод объекта 

dog.sayWoof();

// добавление нового метода
dog.sitDown = function () {
  console.log('Sit down');
}


// 9.3 Ключевое слово this

dog.sayHi = function (name) {
  console.log(`Hi, ${name}! I'm ${this.name}`);
}

dog.sayHi('Andrey');


// 9.4 Обход объектов циклом for in
// for in может обходить неитерируемые объекты

for (let key in person) {
  console.log(key, ':', person[key]);
}


// =================== 10. Классы. Конструкторы объектов  =================== 

class Person {
  constructor (userName, age, isMarried) {
    this.userName = userName;
    this.age = age;
    this.isMarried = isMarried;
  }

  // ключевое слово function не пишется
  sayHi(name) {
    console.log(`Hi ${name}! My name is ${this.userName}`);
  }
}

const person1 = new Person('Egor', 38, true);
person1.sayHi('Dima');