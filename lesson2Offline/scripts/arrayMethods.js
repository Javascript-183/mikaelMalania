// const fruit = "apple";
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;
// console.log("Helpo");

// console.log(size);

// console.log(fruits[size - 1]);

// console.log(fruits.at(5));

// console.log(fruits.toString());

// console.log(fruits.join(' '));

// fruits.pop()
// fruits.pop()
// fruits.pop()
// console.log(fruits);

fruits.push("Grape");

// console.log('data defore shifting =>', fruits);

// fruits.shift();
// fruits.shift();
// console.log('data after shifting =>', fruits);

fruits.unshift("Peach");
// console.log(fruits);

fruits[0] = "Pinapple";
// console.log(fruits);

delete fruits[1];
// console.log(fruits);

fruits[2] = undefined;
// console.log(fruits);

let slicedArray = fruits.slice(3, 6);

// console.log('fruits arr before slicing ==>', fruits)
// console.log('fruits arr after slicing ==>', slicedArray);

let splicedArray = fruits.splice(3, 2);

// console.log(`Successfully removed ${splicedArray} items from the fruits array`)
// console.log('fruits arr before splicing ==>', fruits)
// console.log('fruits arr after splicing ==>', splicedArray);


// console.log(fruits);
let indexOfGrape = fruits.indexOf("Grape");
// console.log(indexOfGrape);

let drinks = ['coca cola', 'pepsi', 'coca cola zero', 'fanta tropic'];
let mergedArrays = fruits.concat(drinks);
// console.log(mergedArrays);

const myArr = [1,2,3,4, [5,6,7, [8,9]]];
console.log(myArr.at(4).at(3).at(1));
const newArr = myArr.flat(3);

console.log(newArr);
