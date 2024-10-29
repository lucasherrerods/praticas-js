const hours = document.querySelector('#hours')
const minutes = document.querySelector('#minutes')
const seconds = document.querySelector('#seconds')

const clock = setInterval(function time() {
    let dateToday = new Date()
    let hr = dateToday.getHours()
    let min = dateToday.getMinutes()
    let s = dateToday.getSeconds()

    if (hr < 10) {
        hr = `0${hr}`
    }
    if (min < 10) {
        min = `0${min}`
    }
    if (s < 10) {
        s = `0${s}`
    }

    hours.textContent = hr
    minutes.textContent = min
    seconds.textContent = s
})
