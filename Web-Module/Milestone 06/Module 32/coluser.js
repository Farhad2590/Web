function temporary(){
    let x = 0;
    return function () {
        x = x+1;
    }
}
const xs = temporary()
console.dir(xs);
xs();
console.dir(xs);
xs();
console.dir(xs);
xs();
console.dir(xs);
xs();