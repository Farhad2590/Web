const products = [
    {id: 1, name : 'lenovo', price : 50000},
    {id: 2, name : 'Dell', price : 40000},
    {id: 3, name : 'Apple', price : 150000},
    {id: 4, name : 'Acer', price : 55000},
    {id: 5, name : 'farhad', price : 70000},
]
const names = products.map(person => person.name);
// console.log(names);
const expensive = products.filter(expe => expe.price > 60000);
// console.log(expensive);
const nums = [1,2,3,4,5];
let output = nums.filter(n => n%2);
console.log(output);