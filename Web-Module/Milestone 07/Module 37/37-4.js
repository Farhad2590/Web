// 1. array destruction 

const numbers = [42,65]
const [x,y] = numbers;

function boxify(num1,num2){
    const nums = [num1,num2];
    return nums;
}
console.log(boxify(45,95));
const student = {
    name: 'Farhad Hossen',
    age: 22,
    subjects: ['Physics', 'Chemistry', 'Biology']
}
const [subjectOne , subjectTwo , subjectThree] = student.subjects;

const employee ={
    ide : 'Vs Code',
    designation : 'Developer',
    machine : 'mac',
    languages : ['html','css','js'],
    specification : {
        height : 66,
        weight : 70,
        address : 'Agrabad',
        drink : 'water',
        watch : {
            color : 'black',
            price : 500,
            brand : 'Rolex'
        }
    }
}
const {machine , ide} = employee;
const {weight , address} = employee.specification;
const {brand} = employee.specification.watch; 