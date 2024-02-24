const numbers = [4, 5, 6, 7]

const doubleNumbers = []
for (const number of numbers) {
    // const double = number * 2;
    // doubleNumbers.push(double)
}
// console.log(doubleNumbers);

function doubleIt(nums){
    // console.log('numbers nums:', nums);
    return nums * 2;
}
const result = numbers.map(doubleIt);
// console.log(result);

const double2 = n => n*2;
const output = numbers.map(double2);
// console.log(output);

const output2 = numbers.map(n => n*2);
console.log(output2);

const friend = ['jamal','kamal', 'beshamal']

const length = friend.map(len => len.length);
console.log(length);
