function hideElementById(inputId) {
    const buttonId = document.getElementById(inputId);
    buttonId.classList.add('hidden');


}

function showElementById(inputId) {
    const buttonId = document.getElementById(inputId);
    buttonId.classList.remove('hidden');

}

function getElementTextById(inputId) {
    const text = document.getElementById(inputId);
    const currentText = text.innerText;
    return currentText;
}

function setAlphabetColor(inputId) {
    const buttonId = document.getElementById(inputId);
    buttonId.classList.add('bg-orange-400');
}

function removeAlphabetColor(inputId) {
    const buttonId = document.getElementById(inputId);
    buttonId.classList.remove('bg-orange-400');
}

function getScoreLife(inputId) {
    const text = document.getElementById(inputId);
    const textInner = text.innerText;
    const textInt = parseInt(textInner);

    return textInt;
}

function setScoreLife(inputId, value) {
    const text = document.getElementById(inputId);
    text.innerText = value;
}

function randomAlphabelt() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetarr = alphabet.split('');
    const number = Math.random() * 25;
    const numberRound = Math.round(number)
    const alphabetNumber = alphabetarr[numberRound];
    return alphabetNumber;
}

function gameOver() {
    hideElementById('play');
    showElementById('scorelist');

    const lastscore = getScoreLife('score');

    setScoreLife('score_final', lastscore);

    const alphabet = getElementTextById('currentAlphabet');
    removeAlphabetColor(alphabet);

}