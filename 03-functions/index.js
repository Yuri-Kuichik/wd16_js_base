/* Задание 1. Бесконечные вопросы. */
function changeUserData () {
    let name = ask('Введите ваше имя.');
    let surname = ask('Введите вашу фамилию.');

    const userData = {
        'firstName': name,
        'lastName': surname
    }

    document.querySelector('.user-name').innerText = makeInitials(userData);
}

function makeInitials(userData) {
    return userData.firstName[0].toUpperCase() + userData.lastName[0].toUpperCase();
}

function ask(question) {
    let answer = prompt(question);
    if(answer) {
        return answer;
    } else {
        return ask(question);
    }
}
