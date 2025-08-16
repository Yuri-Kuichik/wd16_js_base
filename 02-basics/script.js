// enterName
let name = prompt('Введите Ваше имя')
if (name === '') {
    name = 'человек, пожелавший остаться неизвестным'
}
alert('Рад приветствовать Вас, ' + name)

//answerQuestion
let answer = confirm('ES6 появился в 2015 году?')
if (answer) {
    alert("Правильно," + name + "!. Вы такой умный!")
} else {
    alert("Неверно, " + name + "! Google вам в помощь! Т-Т")
}