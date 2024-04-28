const hour = document.getElementById("hour")
const minute = document.getElementById("minute")
const second = document.getElementById("second")


function updateClock(){
    const now = new Date();
    const hour_now = now.getHours()
    const minute_now = now.getMinutes()
    const second_now = now.getSeconds()
    const day_now = now.getDay()
    const date_now = now.getDate()

    hour.innerHTML = hour_now
    minute.innerHTML = minute_now
    second.innerHTML = second_now
}

setInterval(updateClock, 1000)