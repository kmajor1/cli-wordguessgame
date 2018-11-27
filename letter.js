// Letter constructor 
function Letter (l) {
    this.letter = l; 
    this.isGuessed = false; 
    this.displayL = function () {
        if (this.isGuessed) {
            // return string rep of letter
            return this.letter; 
        }
        else {
            // return placeholder
            return '_'; 
        }
    }
    this.checkL = function (guess) {
        if (this.letter === guess ) {
            // change isGuess to true
            this.isGuessed = true; 
        }
    }
}

