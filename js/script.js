var min = 00
var mSec = 00
var sec = 00
var mostrarMSec = document.getElementById("msec")
var mostrarSec = document.getElementById("sec")
var mostrarMin = document.getElementById("min")
var start = document.getElementById("start")
var stop = document.getElementById("stop")
var reset = document.getElementById("reset")
var interval

start.addEventListener('click', function() {
    clearInterval(interval)
    interval = setInterval(contador, 10)
})

stop.addEventListener('click', function() {
    clearInterval(interval)
})

reset.addEventListener('click', function() {
    clearInterval(interval)
    mSec = 00
    sec = 00
    mostrarMSec.innerHTML = "00"
    mostrarSec.innerHTML = "00"
})

function contador() {
    mSec++
    if (mSec <= 9) {
        mostrarMSec.innerHTML = "0" + mSec
    } else {
        mostrarMSec.innerHTML = mSec
    }
    
    if (mSec >= 99) {
            sec++
            mSec = 0
        if (sec <= 9) {
            mostrarSec.innerHTML = "0" + sec
        } else {
            mostrarSec.innerHTML = sec
        }
    }

    if (sec >= 60) {
        min++
        sec = 0
        if (min <= 9) {
            mostrarMin.innerHTML = "0" + min
        } else {
            mostrarMin.innerHTML = min
        }
    }
}