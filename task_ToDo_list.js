// =================== ToDo список задач  =================== 

const todoList = document.querySelector('#todo-list');
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const addTaskButton = document.querySelector('#todo-form button');

const formHandler = (event) => {
  // используем метод ниже, чтобы форма не отправлялась, а страница не обновлялась
  event.preventDefault();

  // получаем название задачи из формы
  const taskText = todoInput.value;

  // выходим из функции, если поле ввода пустое
  if (taskText === '') {
    return;
  }

  // создаем тег li и добавляем в него название задачи
  const newTask = document.createElement('li');
  newTask.innerText = taskText;

  // создаем кнопку удаления задачи
  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('role', 'button');
  deleteBtn.innerText = 'Delete';
  deleteBtn.style['margin-left'] = '15px';
  newTask.append(deleteBtn);

  // добавляем событие по клику на кнопку удаления задачи
  deleteBtn.addEventListener('click', function () {
    this.closest('li').remove();
  })

  // добавляем элемент на страницу
  todoList.append(newTask);

  // очищаем поле ввода
  todoInput.value = '';

  // фокус на поле ввода
  todoInput.focus();
}

todoForm.addEventListener('submit', formHandler);
