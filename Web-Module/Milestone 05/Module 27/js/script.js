
function continueGame (){
    const alphabet = randomAlphabelt();
    const ptag = document.getElementById('currentAlphabet');
    ptag.innerText = alphabet;
    // console.log('Your Random Alphabet :', alphabet);
    // console.log(typeof(ptag));
    setAlphabetColor(alphabet);
}
function play(){
    hideElementById('home');
    showElementById('play')
    continueGame()
}

function score(){
    hideElementById('play');
    showElementById('score')
}

function playAgain(){
    hideElementById('score');
    showElementById('play')
}

