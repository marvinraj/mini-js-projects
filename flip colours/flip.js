// function flipColour() {
//     document.getElementById("flip").style.backgroundColor="cyan";
// }

// get the colors, button and color
const colours = ["#AFC8AD", "#F0DBAF", "#DC8686", "#B06161", "#FFC6AC", "#C4C1A4"]
const button = document.getElementById("flip-button")

// event listener
button.addEventListener("click", function() {
    // random num
    let randNum = Math.round(Math.random() * 5)
    document.body.style.backgroundColor = colours[randNum]
})