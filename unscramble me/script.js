// const word_to_guess = document.getElementById("word")
const word_list = ["house", "apple", "orange", "ferrari", "porsche"]
const word = "house"

/*
create a function that takes in a list of words,
randomly choose a word from the list,
takes every letter in the word in random order and store it in an array
return or display the word to html
 */
function display_word(word){
    arr_len = word_list.length
    rand_num = Math.round(Math.random()*arr_len)

    // for (let i=0; i<arr_len; i++){
    //     curr_word = word_list[i]
    //     let greet2 = randomize_letter(curr_word)
    // }
    let a = randomizer(word)
    console.log(a)
}

// function that takes in the current word and returns a string/list of
// randomly arranged letters of the current word
function randomizer(word){
    word_len = word.length
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
display_word(word)
// let array = randomizer("house")
// console.log(array)
