function setHiddenClassById(inputId){
    const id = document.getElementById(inputId);
    id.classList.add('hidden');
}
function removeHiddenClassById(inputId){
    const id = document.getElementById(inputId);
    id.classList.remove('hidden');
}
function setAlphabetColor(inputId) {
    const buttonId = document.getElementById(inputId);
    buttonId.classList.add('bg-green-400');
}

function removeAlphabetColor(inputId) {
    const buttonId = document.getElementById(inputId);
    buttonId.classList.remove('bg-green-400');
}
function setTextById(inputId){
    const id = document.getElementById(inputId);
    const text = id.innerText
    return text;
}
function randomAlphabet(){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetArray = alphabet.split('');
    const number = Math.random()*25;
    const wholeNumber = Math.round(number);
    const indexAlphabet = alphabetArray[wholeNumber];
    return indexAlphabet;
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