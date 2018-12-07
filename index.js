// require inquirer and word module 
const inq = require('inquirer');
const word = require('./word.js');
const chalk = require('chalk').default; 





// question object for inquirer prompt 
var questions = [{type: 'input', name: 'ltrGuess', message: 'Guess a letter!', validate: function (a,b) {
    if (a === '') {
        return 'You need to type something!!';
    }
    else if (a.length > 1) {
        return 'Only 1 letter at a time!';
    }
    else {
        return true; 
    }
}}];

// array that stores already guessed words 
let guessWords = []; 

// object for new game prompt 
let newGamePromptConfig = [{
    type: 'confirm',
    name: 'newGame',
    message: 'Would you like to play again?'
}]

// array of words 
var words = [ 'United States of America', 'Canada', 'Iceland', 'France', 'Poland', 'Holland', 'Chile', 'Bolivia', 'Mexico', 'Jamaica', 'Turkey', 'Saudi Arabia', 'Germany', 'New Zealand', 'South Korea', 'Japan', 'China', 'Vietnam', 'Mongolia', 'Egypt', 'South Africa', 'Argentina']; 
// random selector of word on invocation of app 
var random = Math.floor(Math.random()*words.length);



// create new instance of word object 

var wordToGuess = new word.Default(words[random]); 

// new game function 
function newGame() {
    if (words.length == 0) {
        return 
    }
    inq.prompt(newGamePromptConfig)
    .then( function (newGameRes) {
        if (newGameRes.newGame === true) {
            // remove the previous used word 
            words.splice(random,1);
            // get a new random number 
            random = Math.floor(Math.random()*words.length);
            // set a new word
            wordToGuess = new word.Default(words[random]);
            runPrompt();
        }
        else {
            return console.log('Bye!');
        }
    }, function(err){
        console.log(err); 
    })
}

// main program loop 
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
                if (unguessedLtrs.length > 0) {
                    // clear then run prompt 
                    setTimeout(() => {
                        console.clear();  
                        runPrompt(); 
                    }, 1000);
                }
                else {
                    console.log('YOU WIN!'); 
                    console.log(wordToGuess.displayWord());                     
                    newGame(); 
                }
        })

}

// lets greet the user with some cool graphics 
function greeter () {
    console.log('\n');
    console.log(chalk.bgBlue.white.bold('Welcome to Nations of the World!'));
    console.log('\n');
    console.log(chalk.bgHex('#FFFFFF').blue('Guess the country!'));
}

// run prompt 
greeter(); 
runPrompt(); 

    
