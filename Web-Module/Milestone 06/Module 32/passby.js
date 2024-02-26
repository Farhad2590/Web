let num1 = 5;
let num2 = 7;

function multiply(a,b){
    a = 50
    const result = a * b;
    return result
}
console.log(num1);
const output = multiply(num1, num2)
console.log(num1);
// primitive types are pass by value ,they cant chage outer scope of a function

let student1 ={name :'Jalil', partner : 'Borsha'};
let student2 ={name :'Kalil', partner : 'orsha'};
function makeMovie(couple1, couple2){
    couple1.name = 'Shakib';
    couple2.partner = 'Moushumi';
}
console.log(student1,student2);
makeMovie(student1,student2)
console.log(student1,student2);
// object and array are pass by reference they can change outer scope of a variable after change the value