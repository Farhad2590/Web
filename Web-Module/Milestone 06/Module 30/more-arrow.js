const minus = (a ,b) => a-b;

const multiply = (A,B,C) => A*B*C; 

const getAge = (person) =>person.age;
const studentInfo = {
    name: 'Jolil Khan',
    age : 45
}
console.log(getAge(studentInfo));

const arrayFun = arrayIndex => arrayIndex[3];
const index = [50,40,30,60,10]
console.log(arrayFun(index));

const doubleIt = num => num*2;

// noparameter 
const getPi = () => Math.PI
console.log(getPi());

// largeFunction 
const largeFun = (num1, num2) =>{
    const sum = num1 + num2;
    const mul = num1 * num2;
    const result = sum + mul
    return result;
}