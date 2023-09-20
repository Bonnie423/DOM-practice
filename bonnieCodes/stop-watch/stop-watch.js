// Variables for buttons

const startStopBtn = document.querySelector('#startStopBtn')
const resetBtn = document.querySelector('#resetBtn')

// Variables for time values;

let seconds = 0
let minutes = 0
let hours = 0

// Varibles for leading zero

let leadingSeconds = 0
let leadingMinutes = 0
let leadingHours = 0

// Varible for set interval and time status;

let timersInterval = null
let timerStatus = 'stopped'

function stopWatch() {
  seconds++
  if (seconds / 60 === 1) {
    seconds = 0
    minutes++

    if (minutes / 60 === 1) {
      minutes = 0
      hours++
    }
  }

  if (seconds < 10) {
    leadingSeconds = '0' + seconds.toString()
  } else {
    leadingSeconds = seconds.toString()
  }

  if (minutes < 10) {
    leadingMinutes = '0' + minutes.toString()
  } else {
    leadingMinutes = minutes.toString()
  }

  if (hours < 10) {
    leadingHours = '0' + hours.toString()
  } else {
    leadingHours = hours.toString()
  }

  let displayTimer = (document.getElementById('timer').innerText =
    leadingHours + ':' + leadingMinutes + ':' + leadingSeconds)
}

//window.setInterval(stopWatch, 1000)

startStopBtn.addEventListener('click', function () {
  if (timerStatus === 'stopped') {
    timersInterval = window.setInterval(stopWatch, 1000)
    document.getElementById(
      'startStopBtn'
    ).innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`
    timerStatus = 'started'
  } else {
    window.clearInterval(timersInterval)
    document.getElementById(
      'startStopBtn'
    ).innerHTML = ` <i class='fa-solid fa-play' id='play'></i>`
    timerStatus = 'stopped'
  }
})

resetBtn.addEventListener('click', function () {
  window.clearInterval(timersInterval)
  seconds = 0
  minutes = 0
  hours = 0
  document.getElementById('timer').innerHTML = '00:00:00'
})
