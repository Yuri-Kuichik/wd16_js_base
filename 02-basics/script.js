let text = prompt('Введите ваше имя?')
alert("Рад приветствовать вас, " + text);


let answer = prompt('ES6 появился в 2015 году?')

function question(answer) {
if (answer === 'да'){
alert("Правильно!. Вы такой умный!")
} else {
alert("Неверно! Google вам в помощь!")
}
}
question(answer)