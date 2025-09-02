function renderTodoList() {
    // находим шаблон в html (template)
    const todoTpl = document.getElementById('todo-item');

    // находим контейнер в который будем добавлять шаблоны
    const todoItemsContainer = document.querySelector('.todo-list-wrap');

    // сразу чистим, чтобы два раза не вставать.
    todoItemsContainer.innerHTML = '';

    // Выполняем итерацию по массиву todoListData. По каждой итерации выполняем:
    getTodoListData().forEach((
        {
            text,
            completed,
            id,
            deleted
        }) => {

        // Добавляем проверку, помечена ли задача как удалённая. Если помечена, то не рендерим. Подробнее см строка 66.
        if (deleted) {
            return
        }

        // Клонируем содержимое тега <template> в переменную
        let todoItem = todoTpl.content.cloneNode(true);

        // Находим чекбокс и ставим активен ли он в зависимости от статуса задачи (completed)
        let currentCheckbox = todoItem.querySelector('.todo-list__checkbox');
        if (completed) {
            currentCheckbox.setAttribute('checked', 'checked');
        }

        // Навешиваем слушателя, который меняет статус completed в зависимости от галки в чекбоксе.
        currentCheckbox.addEventListener('change', function () {

            const currentTodoListData = getTodoListData();
            let index = findItemByTaskId(currentTodoListData, id)

            currentTodoListData[index]['completed'] = this.checked;
            localStorage.setItem('todoListData', JSON.stringify(currentTodoListData));
        });

        // Находим нужный тег и помещаем текст внутрь
        todoItem.querySelector('.todo-list__text').innerText = text;

        // Находим нужный тег и добавляем в событие editTask() id задачи.

        todoItem
            .querySelector('.todo-list__edit')
            .setAttribute('onclick', 'editTask(event,' + id + ')')

        // Находим нужный тег и добавляем в событие deleteTask() id задачи.
        todoItem
            .querySelector('.todo-list__delete')
            .setAttribute('onclick', 'deleteTask(event,' + id + ')')

        // Вставляем склонированный контент в контейнер
        todoItemsContainer.appendChild(todoItem);

    });
}


function editTask(e, id) {
    console.log(e.target.parentElement)

    const currentTodoItem = e.target.closest('.todo-list__item');
    // использовать встроенную функцию браузера, передать туда текст текущей задачи и текст тайла: 'Исправьте задачу'

    let newTaskName = prompt(
        'Исправьте задачу ' + currentTodoItem.querySelector('.todo-list__text').innerText
    );

    // заменить исправленный текст в html
    if (newTaskName) {
        currentTodoItem.querySelector('.todo-list__text').innerText = newTaskName;

        // заменить исправленный текст в хранилище localStorage
        const currentTodoListData = getTodoListData();

        let index = findItemByTaskId(currentTodoListData, id)

        currentTodoListData[index]['text'] = newTaskName;
        localStorage.setItem('todoListData', JSON.stringify(currentTodoListData));
    }
}

/*
* Реализуем т.н. "мягкое удаление", когда элемент фактически остаётся в массиве, но помечается как удалённый.
* Это необходимо для того, чтобы не возникало путаницы с id задач. Например, пользователь добавил 3 задачи, у которых
* id будут 1, 2 и 3, соответственно. После чего, он удалил задачу с id = 2, и захотел добавить новую задачу, которая
* должна получить id = 4. Но, так как id зависит от текущей длины массива, то новая задача получит id = 3.
*/
function deleteTask(e, id) {
    console.log(e.target.parentElement)

    const removingTaskName = e
        .target
        .closest('.todo-list__item')
        .querySelector('.todo-list__text')
        .innerText;

    let deleteConfirmation = confirm('Вы действительно хотите удалить задачу ' + removingTaskName + '?');

    if (deleteConfirmation) {
        // найти текущую задачу в todoListData и пометить ее как удалённую.
        const currentTodoListData = getTodoListData();

        let index = findItemByTaskId(currentTodoListData, id)

        currentTodoListData[index]['deleted'] = true;
        localStorage.setItem('todoListData', JSON.stringify(currentTodoListData));

        // заново отрендерить обновленный список задач
        renderTodoList();
    }
}

function addNewTask() {
    const newTaskName = prompt('Enter new task name');
    let id;
    if (newTaskName) {
        id = getTodoListData().length + 1
        const newTask = {
            text: newTaskName,
            completed: false,
            id: id,
            deleted: false
        }
        addItemToList(newTask);
        renderTodoList();
    }
}

function getTodoListData() {
    if (localStorage.getItem('todoListData')) {
        return JSON.parse(localStorage.getItem('todoListData'));
    } else {
        return [];
    }
}

function addItemToList(item) {
    const currentTodoListData = Object.assign(getTodoListData());
    currentTodoListData.push(item);
    localStorage.setItem('todoListData', JSON.stringify(currentTodoListData));
}

function findItemByTaskId(items, id) {
    return items.findIndex((item) => {
        return item.id === id;
    })
}

if (getTodoListData()?.length) {
    renderTodoList()
}
