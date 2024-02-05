const mobile ={
    brand : "Svmsung",
    price : 20000,
    color : 'black',
    camera : '12mp'
}
for(const prop in mobile){
    console.log(prop);
    console.log(mobile[prop]);
}

const keys = Object.keys(mobile);
console.log(keys);
for(const key of keys){
    console.log(key, mobile[key]);
}