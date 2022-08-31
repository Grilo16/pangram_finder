const PangramFinder = function (phrase) {
  this.phrase = phrase.toLowerCase().split("")
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
}

PangramFinder.prototype.isPangram = function () {
  return this.alphabet.every((alphaChar) => {
    return alphaChar === this.phrase.find((charToFind)=>{
        return charToFind === alphaChar
    }); 
  });
}

module.exports = PangramFinder;
