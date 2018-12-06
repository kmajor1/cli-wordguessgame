// require letter js 
const letter = require('./letter.js');

// word function 
function Default(word){
    // wanted a prop that has the word as a string, not letter objects 
    this.wordRef = word; 
    this.ltrObjs =[];
    for (var i = 0; i < word.length; i++) {
        var newLtr = new letter.Default(word[i]);
        this.ltrObjs[i] = newLtr; 
    }
    this.displayWord = function () { // doesn't actually display word! Just returns it. 
        // call display letter 
        var wordReveal = '';
        for (var i = 0; i < this.ltrObjs.length; i++) {
            var ltrReveal = this.ltrObjs[i].displayL();
            wordReveal = wordReveal + ltrReveal;
        }
        return (wordReveal);
    }
    this.usrGuess = function (usrInput) {
        var counter = 0; 
        for (var i = 0; i < this.ltrObjs.length; i++) {
            // call ltr guess 
            this.ltrObjs[i].checkL(usrInput) ? counter++  : counter+=0;
        }
        return counter; 
        
        
        
    }
}

module.exports = {Default}; 





