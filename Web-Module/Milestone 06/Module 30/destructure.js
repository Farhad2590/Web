const person ={
    name :"kolimuddin",
    age : 29
}

const {age : boyosh , name} = person;
// console.log(age);
console.log(name);
console.log(boyosh);

// array destructure 

const [x,y] = [12 ,10];

function doubleIt(a,b){
    return [a*2 ,b*2];
}

const [prothom, dithiyo] = doubleIt(6,9);

console.log(prothom);
console.log(dithiyo);