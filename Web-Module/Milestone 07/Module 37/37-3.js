const product = [
    {name : 'Laptop', price : 132000, brand : 'Lenovo', color : 'Golden'},
    {name : 'Laptop', price : 202000, brand : 'Mac', color : 'Offwhite'},
    {name : 'Phone', price : 20000, brand : 'Mi', color : 'Black'},
    {name : 'Phone', price : 30000, brand : 'Svmsung', color : 'White'},
    {name : 'Desktop', price : 100000, brand : 'Intel', color : 'Black'},
    {name : 'Desktop', price : 80000, brand : 'Rygen', color : 'White'}
];

// 1. Map 
const brands = product.map(product => product.brand);
console.log(brands);
// 2.forEach
product.forEach(product =>console.log(product.color));
// 3. filter
const cheap = product.filter(product => product.price < 100000)
console.log(cheap);
// 4. find 
const cheapest = product.find(product => product.name.includes('e'))
console.log(cheapest);