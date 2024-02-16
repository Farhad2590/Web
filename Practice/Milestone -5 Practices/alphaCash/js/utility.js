function setHiddenClassById(inputId){
    const id = document.getElementById(inputId);
    id.classList.add('hidden');
}
function removeHiddenClassById(inputId){
    const id = document.getElementById(inputId);
    id.classList.remove('hidden');
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