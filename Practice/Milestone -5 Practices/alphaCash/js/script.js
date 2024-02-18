
function playGround(){
    const alphabet = randomAlphabet();
    const oldText = document.getElementById('currentAlphabet');
    oldText.innerText = alphabet;
    setAlphabetColor(alphabet);
}
function keyboardKeyPressed(event){
    const pressedAlphabet = event.key;
    console.log(pressedAlphabet);
    const oldText = document.getElementById('currentAlphabet');
    const text = oldText.innerText;

    if(pressedAlphabet === text){
        console.log("You rightly pressed");
        const currentScore = getScoreLife('score');
        const updateScore = currentScore + 1;
        setScoreLife('score', updateScore)
        removeAlphabetColor(text);
        playGround();
        
    }
    else{
        const currentLife = getScoreLife('life');
        const updateLife = currentLife - 1;
        setScoreLife('life', updateLife)
        if(updateLife === 0){
            gameOver();
        }
    }
}

document.addEventListener('keyup',keyboardKeyPressed);
function playStart(){
    setHiddenClassById('section-home');
    removeHiddenClassById('section-playGround');
    playGround();
}

function gameOver(){
    setHiddenClassById('section-playGround');
    removeHiddenClassById('section-gameOver');

    const scoreFinal = getScoreLife('score');

    setScoreLife('final-Score',scoreFinal);
}
function play() {
    setHiddenClassById('section-home');
    setHiddenClassById('section-gameOver')
    removeHiddenClassById('section-playGround');

    setScoreLife('score', 0);
    setScoreLife('life' , 5);

    continueGame()
}