import {calculate} from './calculatorModule.js'; // ES module (ESM)
// const calculator = require('./calculatorModule.js') // CommonJS
// import { calculate } from './calculatorModule';
console.log(calculate(1,2,"+"))


const person = {
    firstName: "abc",
    lastName: "def"
}

const { firstName } = person;

// const [a,b] = [10, 20];
let a = 10; // 20
let b = 20; // 10
[a,b] = [b,a]
console.log(a,b)
