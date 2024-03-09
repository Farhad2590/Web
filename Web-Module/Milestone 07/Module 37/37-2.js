// 1. Template string 
const numbers = [45, 54, 64, 46]
const student = {
    name: 'Farhad Hossen',
    age: 22,
    subjects: ['Physics', 'Chemistry', 'Biology']
}

const about = `My Name is ${student.name}. I am ${student.age} years old. My Compulsary subject is ${student.subjects}.I got ${numbers[2]} in Physics`
// console.log(about);

// 2.Arrow function 
const getFiftyFive = () => 55;
const addSixtyFive = num => num + 65;
const isEven = x => x % 2 == 0;
const addThree = (x,y,z) => x + y + z;
const doMath = (num1,num2) => {
    const result = num1 * num2;
    return result;
}

// 3. spread operator 
const newNumbers = [...numbers];

numbers.push(99);
numbers.push(89);
numbers.push(79);

// create a new array from an older array and add an element 
const currentNumbers = [...numbers,69]
console.log(numbers);
console.log(newNumbers);
console.log(currentNumbers);

