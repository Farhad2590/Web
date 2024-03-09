// 6 fundamentals of js 

// 1.how to declare a vairable using let and const 

const farhadAge = 22;

let abirAge = 15;
abirAge = 12;

// const cant re assign her value but let can 

// 2. 6 basic condition < , > , <= , >= , === ,!==
// multiple condition 

let num = 20;

if(num <= 10){
    console.log('A');
}
else if(num >= 10){
    console.log('B');
}
else if(num < 10){
    console.log('C');
}
else if(num > 10){
    console.log('D');
}
else if(num === 10){
    console.log('E');
}
else if(num !== 10){
    console.log('F');
}
else{
    console.log('G');
}

// 3.Array Declare 
// array indexing 
// find array length 
// array push and pop 

const ages = [45,54,64,46]
ages[3] = 94;

// 4.For loop 
for (let index = 0; index < ages.length; index++) {
    const element = ages[index];
    console.log(element);
    
}

// 5.function 
function multiply(num1,num2){

    const result = num1 * num2;
    // console.log(result);
    return result;
}
// console.log(multiply(5,10));

// 6.Object 
// 3 ways to access property by name 
const student = {
    name : 'Farhad Hossen',
    age : 22,
    subjects : ['Physics','Chemistry','Biology']
}
const myVariable = 'age';

console.log(student.age); //direct by property
console.log(student['age']);//access via property name string
console.log(student[myVariable]); //access via variable name