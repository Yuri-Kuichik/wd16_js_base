console.log('hello from index.js')

const dataUser = {
    firstName: '',
    lastName: '' 
}

function changeUserName() {
    dataUser.firstName = prompt('Введите ваше имя')
    dataUser.lastName = prompt('Введите вашу фамилию')

    let newUserName = dataUser.firstName.charAt(0) + dataUser.lastName.charAt(0)

    document.querySelector('.user-name').innerText = newUserName.toUpperCase()
}


