// require inquirer and word module 
const inq = require('inquirer');
const word = require('./word.js'); 

// question object for inquirer prompt 
var questions = [{type: 'input', name: 'ltrGuess', message: 'Guess a letter!', validate: function (a,b) {
    if (a === '') {
        return 'Not a letter!';
    }
    else {
        return true; 
    }
}}];

// array of words 
var words = ['Jurassic', 'Star Trek']; 
// random selector of word on invocation of app 
var random = Math.floor(Math.random()*2);

// create new instance of word object 

var wordToGuess = new word.Default(words[random]); 

// command prompt function 
function runPrompt() {
    // display the word to be guessed 
    console.log(wordToGuess.displayWord()+'\n'); 
    // load inquirer command prompt 
    inq.prompt(questions)
        .then(function (res) {
                console.log(`You Guessed ${res.ltrGuess}`);
                // usr guess method returns the number of letters that were correct 
                wordToGuess.usrGuess(res.ltrGuess) > 0 ? console.log("Good Guess!") : console.log('Sorry, incorrect!'); 
                // we can filter the array of letter objects to see how many letters remain unguessed 
                var unguessedLtrs = wordToGuess.ltrObjs.filter(el => el.isGuessed == false);
                // if there are more letters to be guessed, run the prompt again, otherwise message and quit
                unguessedLtrs.length > 0 ? runPrompt() : console.log('Well Done! You Guessed '+wordToGuess.displayWord() + ' correctly!');
        })

}
// run prompt 
runPrompt(); 

    
