/* Задание 2. Буквальный калькулятор. */

function findResult(operator) {
    const firstValue = +document.getElementById('firstValue').value;
    const secondValue = +document.getElementById('secondValue').value;
    let result = 0;

    switch(operator) {
        case '+':
            result = firstValue + secondValue;
            break;

        case '-':
            result = firstValue - secondValue;
            break;

        case '/':
            result = firstValue / secondValue;
            break;

        case '*':
            result = firstValue * secondValue;
            break;
    }

    result = isDigit(result);
    // result = isValidNumber(result);

    document.querySelector(".calculator__result").innerText = result;
}

// Проверка на "все что не является цифрой"
function isDigit(data) {
    if(data < 0 || data > 9 || data.toString().length !== 1) {
        return 0;
    } else {
        return data;
    }
}

// Проверка на всё, что не является числом
function isValidNumber(data) {
    if(typeof(data) !== 'number' || isNaN(data) || !isFinite(data)) {
        return 0;
    } else {
        return data;
    }
}
