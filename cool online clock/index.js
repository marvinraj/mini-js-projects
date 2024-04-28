const hour = document.getElementById("hour")
const minute = document.getElementById("minute")
const second = document.getElementById("second")
const day = document.getElementById("day")
const date = document.getElementById("date")
const month = document.getElementById("month")

function updateClock(){
    const now = new Date();
    const hour_now = now.getHours()
    const minute_now = now.getMinutes()
    const second_now = now.getSeconds()
    const day_now = now.getDay()
    const date_now = now.getDate()
    const month_now = now.getMonth()

    let days_array = new Array("Sunday,", "Monday,", "Tuesday,", "Wednesday,", "Thursday,", "Friday,", "Saturday,")
    let months_array = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December")

    hour.innerHTML = hour_now
    minute.innerHTML = minute_now
    second.innerHTML = second_now
    day.innerHTML = days_array[day_now]
    date.innerHTML = date_now
    month.innerHTML = months_array[month_now]
}



setInterval(updateClock, 1000)