class Animal {
    speak() {
        console.log("This animal can make a sound");
    }
}

class Dog extends Animal {
    speak() {
        console.log("Dog barks");
    }
}

const dog = new Dog();

dog.speak();