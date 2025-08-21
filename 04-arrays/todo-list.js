const todoListData = [
  {
    text: 'Do homework!',
    completed: true,
    id: 11
  },
  {
    text: 'Do exercise!',
    completed: true,
    id: 12
  },
  {
    text: 'Read JS book!',
    completed: false,
    id: 13
  },
  {
    text: 'Read doka.guide',
    completed: false,
    id: 14
  }
]


function renderTodoList() {
// находим шаблон в html (template)

// находим контейнер в который будем добавлять шаблоны

// Выполняем итерацию по массиву todoListData. По каждой итерации выполняем:

  // Клонируем содержимое тега <template> в переменную
  // const todoItem = 

  // Находим чекбокс и ставим активен ли он в зависимости от статуса задачи (completed)
  // todoItem.querySelector()
  // Находим нужный тег и помещаем текст внутрь
  // todoItem.querySelector()

  // Вставляем склонированный контент в контейнер
}

function editTask(e) {
    console.log(e.target.parentElement)
    // использовать встроенную функцию браузера, передать туда текст текущей задачи и текст тайла: 'Исправьте задачу'
    // заменить исправленный текст в html 
}

function deleteTask(e) {
    console.log(e.target.parentElement)
    // найти текущую задачу в todoListData и удалить ее из массива
    // заново отрендерить обновленный список задач 
}

renderTodoList()