// require letter js 
const letter = require('./letter.js');

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
        return console.log(wordReveal);
    }
    this.usrGuess = function (usrInput) {
        for (var i = 0; i < this.ltrObjs.length; i++) {
            // call ltr guess 
            this.ltrObjs[i].checkL(usrInput); 
        }
        console.log(this.displayWord()); 
        
        
    }
}

module.exports = {Default}; 





