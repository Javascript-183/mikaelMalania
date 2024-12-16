function higherOrderFunction(func) {
    func();
}

function sayHello() {
    console.log("Hello!");
}

// higherOrderFunction(sayHello);
function higherOrderFunction() {
    return function (value1,value2) {
        console.log(value1, value2, 'Greetings, from the returned function!');
    };
}
// console.log(higherOrderFunction());
// const returnedFunction = higherOrderFunction();
// returnedFunction('abc', 'def');
function greet(name) {
    return `Hi!! ${name} `;
}

function greet_name(greeting, message, name) {
    console.log(`${greeting(name)} ${message}`);
}

greet_name(greet, 'Welcome To GeeksForGeeks', 'Nika');