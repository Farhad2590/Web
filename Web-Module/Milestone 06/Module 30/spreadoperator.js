const numbers = Math.max(10,5,15,7);
// console.log(numbers);
const nums = [10,5,15,7];
const large =Math.max(...nums);
// console.log(large);
const friends = [45,40,56,60];
const bondhu = friends;
const dosto = [...friends];
friends.push(55);
console.log(bondhu,dosto,friends);

const sonkha = [...friends, 45]
console.log(sonkha);