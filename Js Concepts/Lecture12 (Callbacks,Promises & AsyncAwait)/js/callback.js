function sum (a,b){
    console.log(a + b);
}
function calculator(a,b, sumCallback){
    sumCallback(a,b)
}

// calculator(1,2,sum)
calculator(1,2, (a,b) =>{
    console.log(a + b);
})

// asyncronus 
const hello = () => {
    console.log("Helo");
}
setTimeout(hello, 3000)