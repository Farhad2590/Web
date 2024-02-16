function playGround(){
    const Alphabet = randomAlphabet();
    console.log(Alphabet);
    const oldText = document.getElementById('currentAlphabet');
    oldText.innerText = Alphabet
}
function playStart(){
    setHiddenClassById('section-home');
    removeHiddenClassById('section-playGround');
    playGround();
}

