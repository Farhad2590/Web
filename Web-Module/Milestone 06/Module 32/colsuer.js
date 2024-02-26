function temporary(){
    let x = 0;
    return function () {
        x = x+1;
        return x;
    }
}
const firstServer = temporary();
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());