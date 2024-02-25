// 8 ways to get undefined 

// 1. variable that is not initialized will get undefined 
let first;
// console.log(first);


// 2. function with no return 
function total(a, b) {
    const sum = a + b;
}
const sums = total()
// console.log(sums);


// 3. parameter that is not passed will be undefined
function totals(a, b, c, d) {
    const sum = a + b + c + d;
    console.log(a,b,c,d);
}
// totals(5,4)
// console.log(sums);


// 4. if return has nothing on the right side will return undefined 
function noNegative(a, b) {
    if(a<0 || b<0){
        return
    }
    return a + b;
}
// const number = noNegative(-5,4)
// console.log(number);


// 5.Property that doesnt exist on an object will give you undefined 
const fifth = {id:2, name: 'Ponchom', age:45}
// console.log(fifth.age,fifth.sallery);


// 6.Accessing array elements outside of the index range
const sixth = [4,5,6,7,8];
console.log(sixth[0],sixth[5]);

// 7.Deleting an array inside am array 
delete sixth[1];
console.log(sixth);

// 8.set a value directly to undefined instead we should use null

const eight = undefined;
const ninght = null;

console.log(typeof null);
console.log(typeof undefined);