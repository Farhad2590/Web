const playersAge = [11,23,13,45,20,12,18,19,31,33,25,24,29]

const result = playersAge.filter(num => num>=18);
const selected = playersAge.filter(num => num % 2 ===1);
console.log(result,selected);