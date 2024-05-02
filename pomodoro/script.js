const minute = document.getElementById("minute")
const second = document.getElementById("second")
const startButton = document.getElementsByClassName("btn-start")
const resetButton = document.getElementsByClassName("btn-reset")


let setTime = 1500
function updateTimer(){
    setTime--
    const setMinute = Math.trunc(setTime/60)
    const setSecond = setTime%60

    minute.innerHTML = setMinute
    second.innerHTML = setSecond
}

function startTimer(){
    setInterval(updateTimer, 1000)
}

function resetTimer(){
    
}

startButton[0].addEventListener("click", startTimer)