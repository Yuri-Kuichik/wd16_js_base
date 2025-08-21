const dataUser = {
    firstName: '',
    lastName: '',
}

function changeName() {

    dataUser.firstName = prompt('Ввведите ваше имя').charAt(0);
    dataUser.lastName = prompt('Введите вашу фамилию').charAt(0);

    let newChangeName = dataUser.firstName + dataUser.lastName;

    //console.log(newChangeName)

    document.querySelector('.user-name').innerText = newChangeName.toUpperCase()
}





