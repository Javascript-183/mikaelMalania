class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`HI, I am ${this.name}`)
    }
}

const person = new Person("Nia", 34);

// person.greet();

class SizeConverter {
    #surname;
    constructor(name, surname) {
        this.name = name;
        this.#surname = surname;
    }

    cmtoDm(cm) { // კლასში არსებულ ფუნქციას ეწოდება მეთოდი.
        let res = cm / 10;
        return `Welcome dear ${this.name} result is ${res}`;
    }   

    getSurname() {
        return this.#surname;
    }

    cmToM(cm) {
        return `Welcome dear ${this.name} result is ${cm / 100}`;
    }

    mmToCm(mm) {
        return `Welcome dear ${this.name} result is ${mm * 10}`;
    }

    mToKm(meters) {
        return `Welcome dear ${this.name} result is ${meters / 1000}`;
    }
}

const sizeConverter = new SizeConverter("Nika", "gvaramia"); // Here we create a new instance of class

console.log(sizeConverter.cmtoDm(50))