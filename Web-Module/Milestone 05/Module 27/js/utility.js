function hideElementById(inputId){
    const buttonId = document.getElementById(inputId);
    buttonId.classList.add('hidden');
    

}

function showElementById(inputId){
    const buttonId = document.getElementById(inputId);
    buttonId.classList.remove('hidden');

}

function setAlphabetColor(inputId){
    const buttonId = document.getElementById(inputId);
    buttonId.classList.add('bg-orange-400');
}

function randomAlphabelt(){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetarr = alphabet.split('');
    // console.log(alphabetarr);

    const number = Math.random()*25;
    const numberRound = Math.round(number)

    const alphabetNumber = alphabetarr[numberRound];
   
    // console.log(numberRound,alphabetnum);

    return alphabetNumber;
}