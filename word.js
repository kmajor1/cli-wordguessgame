// require letter js 
const letter = require('./letter.js');
var a = new letter.Default('a'); 

// word function 
function Default(word){
    this.ltrObjs =[];
    for (var i = 0; i < word.length; i++) {
        var newLtr = new letter.Default(word[i]);
        this.ltrObjs[i] = newLtr; 
    }
    this.displayWord = function () {
        // call display letter 
        var wordReveal = '';
        for (var i = 0; i < this.ltrObjs.length; i++) {
            var ltrReveal = this.ltrObjs[i].displayL();
            wordReveal = wordReveal + ltrReveal;
        }
        return wordReveal; 
    }
    this.usrGuess = function (usrInput) {
        for (var i = 0; i < this.ltrObjs.length; i++) {
            // call ltr guess 
            this.ltrObjs[i].checkL(usrInput); 
        }
        console.log(this.displayWord()); 
        
    }
}

var testWord = new Default('Park'); 

// run a user guess 
testWord.usrGuess('a'); 
testWord.usrGuess('b');
testWord.usrGuess('r');
testWord.usrGuess('p'); 
testWord.usrGuess('k'); 
testWord.usrGuess('P');



