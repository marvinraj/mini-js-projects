// store elements
const hour = document.getElementById("hour")
const minute = document.getElementById("minute")
const second = document.getElementById("second")
const day = document.getElementById("day")
const date = document.getElementById("date")
const month = document.getElementById("month")
const ampm = document.getElementById("ampm")

// array of days and month
let days_array = new Array("Sunday,", "Monday,", "Tuesday,", "Wednesday,", "Thursday,", "Friday,", "Saturday,")
let months_array = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December")

// function to update the clock
function updateClock(){
    // create date object
    const now = new Date();
    // get and store current time and date
    const hour_now = now.getHours()
    const minute_now = now.getMinutes()
    const second_now = now.getSeconds()
    const day_now = now.getDay()
    const date_now = now.getDate()
    const month_now = now.getMonth()

    // change the time and date in html
    hour.innerHTML = hour_now
    minute.innerHTML = minute_now
    second.innerHTML = second_now
    day.innerHTML = days_array[day_now]
    date.innerHTML = date_now
    month.innerHTML = months_array[month_now]

    // check if its am or pm
    changeAMPM(hour_now)
}

// function to change am,pm accordingly
function changeAMPM(hour){
    if (hour>=12){
        ampm.innerHTML = "pm"
    } else{
        ampm.innerHTML = "am"
    }
}

// updates the clock every 1000ms
setInterval(updateClock, 1000)