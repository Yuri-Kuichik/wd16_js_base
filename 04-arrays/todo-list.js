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
    const todoTpl = document.getElementById('todo-item');

    // находим контейнер в который будем добавлять шаблоны
    const todoItemsContainer = document.querySelector('.todo-list-wrap');

    // сразу чистим, чтобы два раза не вставать.
    todoItemsContainer.innerHTML = '';

    // Выполняем итерацию по массиву todoListData. По каждой итерации выполняем:
    todoListData.forEach((
        {
            text: text,
            completed: completed,
            id: id
        }) => {
        // Клонируем содержимое тега <template> в переменную
        let todoItem = todoTpl.content.querySelector('.todo-list__item').cloneNode(true);

        // Находим чекбокс и ставим активен ли он в зависимости от статуса задачи (completed)
        if (completed) {
            todoItem
                .querySelector('.todo-list__checkbox')
                .setAttribute('checked', 'checked');
        }

        // Находим нужный тег и помещаем текст внутрь
        todoItem.querySelector('.todo-list__text').innerText = text;

        // Находим нужный тег и добавляем в событие deleteTask() id задачи.
        todoItem
            .querySelector('.todo-list__delete')
            .setAttribute('onclick', 'deleteTask(event,' + id + ')')

        // Вставляем склонированный контент в контейнер
        todoItemsContainer.appendChild(todoItem);
    });
}


function editTask(e) {
    console.log(e.target.parentElement)

    const currentTodoItem = e.target.closest('.todo-list__item');
    // использовать встроенную функцию браузера, передать туда текст текущей задачи и текст тайла: 'Исправьте задачу'

    let newTaskName = prompt(
        'Исправьте задачу ' + currentTodoItem.querySelector('.todo-list__text').innerText
    );

    // заменить исправленный текст в html
    if (newTaskName) {
        currentTodoItem.querySelector('.todo-list__text').innerText = newTaskName;
    }
}

function deleteTask(e, id) {
    console.log(e.target.parentElement)

    const removingTaskName = e
        .target
        .closest('.todo-list__item')
        .querySelector('.todo-list__text')
        .innerText;

    let deleteConfirmation = confirm('Вы действительно хотите удалить задачу ' + removingTaskName + '?');

    if (deleteConfirmation) {
        // найти текущую задачу в todoListData и удалить ее из массива
        let index = todoListData.findIndex((item) => {
            return item.id === id;
        })
        todoListData.splice(index, 1);

        // заново отрендерить обновленный список задач
        renderTodoList();
    }
}

renderTodoList()
