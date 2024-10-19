let computerNumber
let userNumbers = []
let attempts = 0
let maxAttempts = 10


function newGame() {
    window.location.reload()
}

function init() {
    computerNumber = Math.floor(Math.random() * 100 + 1)
}

function compareNumbers() {
    const userNumber = Number(document.querySelector('#inputBox').value)
    userNumbers.push(' ' + userNumber)
    document.querySelector('#guesses').innerHTML = userNumbers

    let text = document.querySelector('#textOutput')
    let numberAttempts = document.querySelector('#attempts')

    if (attempts < maxAttempts) {
        if (userNumber > computerNumber) {
            text.innerHTML = 'O número está acima'
            attempts++
            numberAttempts.innerHTML = attempts
            document.querySelector('#inputBox').value = ''
        }
        else if (userNumber < computerNumber) {
            text.innerHTML = 'O número está abaixo'
            attempts++
            numberAttempts.innerHTML = attempts
            document.querySelector('#inputBox').value = ''
        }
        else {
            text.innerHTML = 'Parabéns! Você acertou o número'
            attempts++
            numberAttempts.innerHTML = attempts
            document.querySelector('#inputBox').setAttribute('Readonly', 'Readonly')
        }
    }
    else {
        text.innerHTML = `Você perdeu! O número era ${computerNumber}`
        document.querySelector('#inputBox').setAttribute('Readonly', 'Readonly')
    }
}
