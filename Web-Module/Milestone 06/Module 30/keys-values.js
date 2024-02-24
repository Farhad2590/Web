const glass = {
    name : 'GrameenPhone Brand Glass',
    colour : 'Golden',
    price : 12,
    isCleaned : true
};

console.log(glass);
// {
//     name: 'GrameenPhone Brand Glass',
//     colour: 'Golden',
//     price: 12,
//     isCleaned: true
//   }
const keys = Object.keys(glass);
// console.log(keys);
// [ 'name', 'colour', 'price', 'isCleaned' ]
const values = Object.values(glass);
// console.log(values);
// [ 'GrameenPhone Brand Glass', 'Golden', 12, true ]
const pair = Object.entries(glass);
// console.log(pair);
// array of array / two dimensional array 
// [
//     [ 'name', 'GrameenPhone Brand Glass' ],
//     [ 'colour', 'Golden' ],
//     [ 'price', 12 ],
//     [ 'isCleaned', true ]
//   ]
// delete glass.isCleaned;
// console.log(glass);

// const {isCleaned, ...newObj} = glass;
// console.log(newObj);

Object.freeze(glass);
glass.source = 'Bangladesh';
glass.price = 5000;
delete(glass).price;
// console.log(glass);