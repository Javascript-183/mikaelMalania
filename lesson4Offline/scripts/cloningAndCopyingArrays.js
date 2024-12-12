const anotherArr = [{"abc": 123}];
const myArr = [anotherArr,2,3];
const myArrClone = myArr.slice();
myArrClone.pop()
console.log(myArr, myArrClone)

const myArrClone2 = Array.from(myArr);

const deepClonedArr = JSON.parse(JSON.stringify(myArr));
console.log(myArrClone2);