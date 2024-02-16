
function continueGame() {
    const alphabet = randomAlphabelt();
    const ptag = document.getElementById('currentAlphabet');
    ptag.innerText = alphabet;
    setAlphabetColor(alphabet);
}
function handlekeyboardPressed(event) {

    

    const pressedAlphabet = event.key;

    if(pressedAlphabet === 'Escape'){
        gameOver();
    }

    const ptag = document.getElementById('currentAlphabet');
    const ptag_current = ptag.innerText;

    if (pressedAlphabet === ptag_current) {

        const currentScore = getScoreLife('score');
        const updatedScore = currentScore + 1;
        setScoreLife('score', updatedScore)

        removeAlphabetColor(ptag_current);
        continueGame();
    }
    else {
        const currentLife = getScoreLife('life');
        const updatedLife = currentLife - 1;
        setScoreLife('life', updatedLife)

        if (updatedLife === 0) {
            gameOver();
        }
    }
}

document.addEventListener('keyup', handlekeyboardPressed);
function play() {
    hideElementById('home');
    hideElementById('scorelist')
    showElementById('play');

    setScoreLife('score', 0);
    setScoreLife('life' , 5);

    continueGame()
}

g

