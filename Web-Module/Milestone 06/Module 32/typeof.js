// dynamic type language 
// primitive type 
const a = 5;
const b = "abul marse babul re babul marse kabul re"
const c = true;

// non-primitive type 

const ages = [45,55,65,75]
const persons ={
    id: 1, name: 'farhad'
}

let x = 5;
let y = x;
console.log(x,y);
y = 7;
console.log(x,y);



let z = {
    job : 'web developer'
}
let w = z;
console.log(w,z);
z = {job : 'Backend Developer'}
console.log(w,z);



let f = {
    job : 'web developer'
}
let g = f;
console.log(f,g);
f.job ='Backend Developer' 
console.log(f,g);
