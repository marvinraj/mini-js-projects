// function flipColour() {
//     document.getElementById("flip").style.backgroundColor="cyan";
// }

// store list of colours and button from html file
const colours = ["#AFC8AD", "#F0DBAF", "#DC8686", "#B06161", "#FFC6AC", "#C4C1A4"]
const button = document.getElementById("flip-button")

// event listener
button.addEventListener("click", flipColour)

// function for event listener
function flipColour() {
    // random num
    let randNum = Math.round(Math.random() * 5)

    // change colour of body
    document.body.style.backgroundColor = colours[randNum]
}