function add (num1, num2){
    const sum = num1 + num2;
    return sum;
}

console.log(add(5,10));

function sum (num1, num2 =2 ){
    const sum = num1 + num2;
    return sum;
}
console.log(sum(5));

function fullname (first, last = ''){
    const name = first + last;
    return name;
}

console.log(fullname('farhad'));
function friends(nums = []){

}
function human(numss = {}){

}