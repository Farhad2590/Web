// forEach(): Executes a provided function once for each array element.
// const array = [1, 2, 3];
// array.forEach(element => console.log(element));


/* map(): Creates a new array with the results of calling a provided
 function on every element in the calling array.*/
// const array = [1, 2, 3];
// const mappedArray = array.map(element => element * 2);
// console.log(mappedArray); // Output: [2, 4, 6]

/* filter(): Creates a new array with all elements that pass the 
test implemented by the provided function.*/
const array = [1, 2, 3, 4, 5];
const filteredArray = array.filter(element => element % 2 === 0);
console.log(filteredArray); // Output: [2, 4]


/* reduce(): Executes a reducer function on each element of the array, 
resulting in a single output value.*/
// const array = [1, 2, 3, 4, 5];
// const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(sum); // Output: 15

/*find(): Returns the first element in the array that satisfies the 
provided testing function. */
// const array = [1, 2, 3, 4, 5];
// const found = array.find(element => element > 3);
// console.log(found); // Output: 4

/*findIndex(): Returns the index of the first element in the array that
 satisfies the provided testing function. */
//  const array = [1, 2, 3, 4, 5];
//  const foundIndex = array.findIndex(element => element > 3);
//  console.log(foundIndex); // Output: 3 (index of value 4)
 
/*some(): Returns true if at least one element in the array satisfies 
the provided testing function.*/
// const array = [1, 2, 3, 4, 5];
// const hasEvenNumber = array.some(element => element % 2 === 0);
// console.log(hasEvenNumber); // Output: true

/*every(): Returns true if all elements in the array satisfy the 
provided testing function.*/
// const array = [2, 4, 6, 8, 10];
// const allEvenNumbers = array.every(element => element % 2 === 0);
// console.log(allEvenNumbers); // Output: true

