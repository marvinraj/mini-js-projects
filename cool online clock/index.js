const hour = document.getElementById("hour")
const minute = document.getElementById("minute")
const second = document.getElementById("second")
const day = document.getElementById("day")

function updateClock(){
    const now = new Date();
    const hour_now = now.getHours()
    const minute_now = now.getMinutes()
    const second_now = now.getSeconds()
    var day_now = now.getDay()
    

    let days_array = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday")
    

    hour.innerHTML = hour_now
    minute.innerHTML = minute_now
    second.innerHTML = second_now
    day.innerHTML = days_array[day_now]
    
}

setInterval(updateClock, 1000)