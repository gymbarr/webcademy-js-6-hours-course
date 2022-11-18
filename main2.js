// =================== 11. Выбор DOM элементов  =================== 

// выбор одного элемента DOM по селектору
// document.querySelector('selector'); - выбирает первый найденный элемент, соответствующий селектору

document.querySelector('h2').classList.remove('green');
document.querySelector('h2').classList.add('red');

// выбор коллекции элементов
// document.querySelectorAll('selector'); - выбирает все элементы, соответствующие селектору

const headings2 = document.querySelectorAll('h2');
console.log(headings2);

for (let heading of headings2) {
  heading.classList.add('red-text');
}

const paragraphs = document.querySelectorAll('p');

for (let p of paragraphs) {
  p.classList.add('green-text');
}


// =================== 12. Работа с CSS классами  =================== 
/*
element.classList.add()

.add()
.remove()
.toggle()
.contains()
*/

const heading = document.querySelector('h2');
heading.classList.toggle('red-text');

console.log(heading.classList.contains('green'));


// =================== 13. Работа с аттрибутами  =================== 

/*
getAttribute(attrName) — возвращает значение указанного атрибута
setAttribute(name, value) — добавляет указанные атрибут и его значение к элементу
hasAttribute(attrName) — возвращает true при наличии у элемента указанного атрибута
removeAttribute(attrName) — удаляет указанный атрибут

toggleAttribute(name, force) — добавляет новый атрибут при отсутствии или удаляет существующий атрибут.
hasAttributes() — возвращает true, если у элемента имеются какие-либо атрибуты
getAttributesNames() — возвращает названия атрибутов элемента
*/

const img = document.querySelector('#logo');
const srcValue =  img.getAttribute('src');

img.setAttribute('src', './img/php.png');
img.setAttribute('width', '200');
img.src = './img/js.png';

const button = document.querySelector('#button');

button.setAttribute('value', 'Send');
button.value = 'Delete';


// =================== 14. Работа с прослушкой событий  =================== 
// 14.1 Изображение

// с помощью addEventListener можно создать несколько разных функций на одно событие, и все будут выполнены

// button.addEventListener('click', () => {
//   console.log('Click!');
//   img.remove();
// })

// если с помощью onclick создать несколько разный функций, то выполнится только последняя

button.onclick = () => {
  console.log('Click!');
  img.remove();
}

// 14.2 Форма

const inputText = document.querySelector('#input-text');
const textBlock = document.querySelector('#text-block');

inputText.addEventListener('input', () => {
  textBlock.innerText = inputText.value;
})

// 14.3 Event

const list = document.querySelector('#list');

list.addEventListener('click', function (event) {
  console.log(this);
  // console.log(event);
  console.log(event.target);
})


// =================== 15. Работа c HTML элементами. Создание. Копирование  =================== 

/*
// Создать элемент
document.createElement('tag-name')

// Изменить HTML содержимое внутри элемента
element.innerHTML = ''

// Изменить Текстовое  содержимое внутри элемента
node.innerText = ''

// Клонирование элемента
node.cloneNode() // true c внутренним содержимым (текст и теги), false - без внутреннего содержимого

// вставить элемент внутрь другого элемента
element.append(nodesOrDOMStrings)

// Удалить элемент
element.remove()
*/

// выбор контейнера
const container = document.querySelector('#elementsContainer');

// создание заголовка
const newHeader = document.createElement('h1');
newHeader.innerText = 'New header';

container.append(newHeader);

// копирование шапки
const mainHeader = document.querySelector('header');
const headerCopy = mainHeader.cloneNode(true);
container.append(headerCopy);

// вставка разметки через строки
const htmlExample = '<h2>One more header</h2>';
container.insertAdjacentHTML('beforeend', htmlExample);

// вставка разметки через шаблонные строки
const title = 'Title text';
const htmlExample2 = `<h2>${title}</h2>`;
container.insertAdjacentHTML('beforeend', htmlExample2);
