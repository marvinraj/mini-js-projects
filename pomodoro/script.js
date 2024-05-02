const minute = document.getElementById("minute")
const second = document.getElementById("second")
const startButton = document.getElementsByClassName("btn-start")
const resetButton = document.getElementsByClassName("btn-reset")


let setTime = 1500
function updateTimer(){
    const setMinute = Math.trunc(setTime/60)
    const setSecond = setTime%60

    minute.innerHTML = setMinute
    second.innerHTML = setSecond
}

let interval;
function startTimer(){
    interval = setInterval(function(){
        setTime--
        checkTimerEnd(setTime)
        updateTimer()
    }, 1000)
}

function checkTimerEnd(time){
    if (time<0){
        clearInterval(interval)
        return setTime = 1500
    }
}

function resetTimer(){
    clearInterval(interval)
    setTime = 1500
    updateTimer()
    
}

function pauseTimer(){
    clearInterval(interval)
}

startButton[0].addEventListener("click", startTimer)
resetButton[0].addEventListener("click", resetTimer)