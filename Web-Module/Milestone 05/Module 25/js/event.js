// option 1
//<button onclick="document.body.style.backgroundColor = ('red')">Red</button>

// option 2
function makeread(){
    document.body.style.backgroundColor=('yellow');
}

// option 3
const blue = document.getElementById('makeBlue');
blue.onclick = makeblue;
function makeblue(){
    document.body.style.backgroundColor ='blue';
}

// option 3 another

const purple = document.getElementById('makePurple');
purple.onclick = function makePurple() {
    document.body.style.backgroundColor ='purple';
}

// option 4
const makepink = document.getElementById('makePink');
makepink.addEventListener('click', pink)

function pink() {
    document.body.style.backgroundColor = 'pink';
}

// option 4 another
const makeOrangeButton = document.getElementById('makeOrange');
makeOrangeButton.addEventListener('click', function makeOranges(){
    document.body.style.backgroundColor = 'orange';
})

// option 4 Final