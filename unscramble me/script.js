const word_to_guess = document.getElementById("word")
const user_guess = document.getElementById("user-input")
const score = document.getElementById("score")
const wrong = document.getElementById("wrong")
const word_list = ["house", "apple", "orange", "ferrari", "porsche"]

/*
create a function that takes in a list of words,
randomly choose a word from the list,
takes every letter in the word in random order and store it in an array
return or display the word to html */
function display_word(word){
    // get word from randomizer function and display it on html page
    const randomized_word = randomizer(word)
    word_to_guess.innerHTML = randomized_word
}

/* function that takes in the current word and returns a string/list of
randomly arranged letters of the current word */
function randomizer(word){
    let word_len = word.length
    letters = []
    
    // store each letter in an array
    for (let i=0; i<word_len; i++){
        letter = word.charAt(i)
        letters.push(letter)
    }

    current_index = word_len-1
    // randomize letters in array
    while (current_index != 0){
        let rand_index = Math.round(Math.random()*current_index)
        --current_index;
        [letters[current_index], letters[rand_index]] = [letters[rand_index], letters[current_index]]
    }
    let randomized_word = letters.join(' ')
    return randomized_word
}

// check if user input is correct
function check_word(input, curr_word) {
    if (input == curr_word){
        console.log("correct!!")
    } else if (input != curr_word) {
        console.log("incorrect!!")
    } else if (input.length < 1) {
        console.log("type in a word????")
    } else {
        console.log("FALSEEEEE BROOOOOOO")
    }
}


let arr_len = word_list.length

for (;;){
    rand_num = Math.round(Math.random()*arr_len)
    curr_word = word_list[rand_num]
    display_word(curr_word)
    // get user input and answer
    let input = user_guess.value
    check_word(input, curr_word)
}
