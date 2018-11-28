// require inquirer 
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
var words = ['hello', 'goodbye']; 

var wordToGuess = new word.Default(words[0]); 


function runPrompt() {
    wordToGuess.displayWord(); 
    inq.prompt(questions)
        .then(function (res) {
            var unguessedLtrs = wordToGuess.ltrObjs.filter(el => el.isGuessed == false);
            console.log(unguessedLtrs); 
            if (unguessedLtrs.length == 0) {
                // done!
                return console.log('done!');
            }
            else {
                console.log(`You Guessed ${res.ltrGuess}`);
                wordToGuess.usrGuess(res.ltrGuess);
                runPrompt(); 
            }
            
        })

}

runPrompt(); 

    
