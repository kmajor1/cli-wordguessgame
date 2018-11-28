function Default(l) {
    this.letter = l;
    this.isGuessed = false;
    this.displayL = function () {
        if (this.isGuessed) {
            // return string rep of letter
            return this.letter+' ';
        }
        else {
            // return placeholder
            return '_ ';
        }
    }
    this.checkL = function (guess) {

        if (this.letter.toUpperCase() === guess.toUpperCase()) {
            // change isGuess to true
            this.isGuessed = true;
            return true; 
        }
        else {
            return false; 
        }
    }
}

module.exports = {Default}; 




