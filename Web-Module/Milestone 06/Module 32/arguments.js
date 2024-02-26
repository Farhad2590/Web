function sum(a,b,c){
    const args = [...arguments]
    console.log(args);
    const result = a + b + c;
    // return result;
}
const total = sum(45,89,12,45,76,56)
console.log(sum.length);