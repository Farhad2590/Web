const playersAge = [11,23,13,45,20,12,18,19,31,33,25,24,29]
const totalAge = playersAge.reduce((previous,current) => previous + current , 0);
console.log(totalAge);
