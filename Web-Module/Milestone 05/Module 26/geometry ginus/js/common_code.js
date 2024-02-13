
function getInputValueById(inputFieldId){
    const inputText = document.getElementById(inputFieldId);
    const inputValue = inputText.value;
    const inputString = parseFloat(inputValue);
    return inputString;
}

function setinputVaalueById(setText, area){
    const text = document.getElementById(setText);
    text.innerText = area;
}