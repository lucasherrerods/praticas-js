const minutesElement = document.querySelector('#minutes')
const secondsElement = document.querySelector('#seconds')
const millisecondsElement = document.querySelector('#milliseconds')

const startButton = document.querySelector('#start-btn')
const pauseButton = document.querySelector('#pause-btn')
const continueButton = document.querySelector('#continue-btn')
const resetButton = document.querySelector('#reset-btn')

let interval
let minutes = 0
let seconds = 0
let milliseconds = 0
let isPaused = false

startButton.addEventListener('click', startTimer)
pauseButton.addEventListener('click', pauseTimer)
continueButton.addEventListener('click', continueTimer)
resetButton.addEventListener('click', resetTimer)

function startTimer() {
    interval = setInterval(() => {

        if (!isPaused) {
            milliseconds += 10

            if (milliseconds === 1000) {
                seconds++
                milliseconds = 0
            }
            if (seconds === 60) {
                minutes++
                seconds = 0
            }
        }
        minutesElement.textContent = formatTime(minutes)
        secondsElement.textContent = formatTime(seconds)
        millisecondsElement.textContent = formatMilliseconds(milliseconds)

    }, 10)
    startButton.style.display = 'none'
    pauseButton.style.display = 'block'
}

function formatTime(time) {
    if (time < 10) {
        return `0${time}`
    }
    return time
}

function formatMilliseconds(time) {
    if (time < 100) {
        return `${time}`.padStart(3, '0')
    }
    return time
}

function pauseTimer() {
    isPaused = true
    pauseButton.style.display = 'none'
    continueButton.style.display = 'block'
}

function continueTimer() {
    isPaused = false
    pauseButton.style.display = 'block'
    continueButton.style.display = 'none'
}

function resetTimer() {
    clearInterval(interval)

    minutes = 0
    seconds = 0
    milliseconds = 0

    minutesElement.textContent = '00'
    secondsElement.textContent = '00'
    millisecondsElement.textContent = '000'

    startButton.style.display = 'block'
    pauseButton.style.display = 'none'
    continueButton.style.display = 'none'
}