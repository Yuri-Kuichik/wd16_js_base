

function calcResult(operator) {
    const val1 = Number(document.getElementById('firstValue').value)
    const val2 = Number(document.getElementById('secondValue').value)
    let result = 0

    switch(operator) {
        case '+':
            result = val1 + val2
            break;
        case '-':
            result = val1 - val2
            break;
        case '/':
            result = val1 / val2
            break;
        case '*':
            result = val1 * val2
            break;
    }

    // document.querySelector('.calculator__result').innerText = isNaN(result) ? 0 : result
    document.querySelector('.calculator__result').innerText = result || 0
}