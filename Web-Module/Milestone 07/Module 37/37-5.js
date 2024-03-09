// 1. JSON 

const student = {
    name : 'Md. Farhad Hossen',
    age : 22,
    subject : ['Physics','Chemistry','Biology']
}
const studentJSON = JSON.stringify(student);
const studentObj = JSON.parse(studentJSON)
console.log(studentJSON);
console.log(student);
console.log(studentObj);

// 2. fetch 
fetch('url')
.then(res => res.json())
.then(data => console.log(data))

// 3. keys , values 
const keys = Object.keys(student);
const values = Object.values(student)