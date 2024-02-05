const sentence = "I am learning web dev";

let reverse = ""

for (const letter of sentence) {
    // console.log(letter);
    reverse = letter + reverse;
}
console.log(reverse);

let rev ='';
for(let i= 0; i<sentence.length; i++){
    const letters = sentence[i];
    rev = letters +rev;
}
console.log(rev);

const reversed = sentence.split('').reverse().join(""); 
console.log(reversed);

