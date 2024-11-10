const numberCounter = document.querySelector('#number')
const clickButton = document.querySelector('#click-btn')
const resetButton = document.querySelector('#reset-btn')

let counter = 0

clickButton.addEventListener('click', clickCounter)
resetButton.addEventListener('click', resetCounter)

function clickCounter() {
    counter++
    numberCounter.textContent = counter
    numberCounter.style.color = '#574CFF'
}

function resetCounter() {
    counter = 0
    numberCounter.textContent = counter
    numberCounter.style.color = '#d80835'
}