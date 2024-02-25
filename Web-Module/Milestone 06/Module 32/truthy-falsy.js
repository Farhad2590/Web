// truthy :
// 1. True 
// 2. Any number (+ve or -ve) will be truthy other than 0
// 3. Any string other than empty string 
// 4. '0' 
// 5.[] and {} 

// falsy :
// 1. False 
// 2. 0
// 3. ''(empty string )
// 4. Undefined and Null 


const x = -4;

if(x){
    console.log("Value of x is truthy");
}
else{
    console.log("Value of x is falsy");
}

// check falsy 
const a = ''
if(!a){
    console.log('Falsy');
}

// check falsy 
const b = ' '
if(!!b){
    console.log('truthy');
}