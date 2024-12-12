let person = {
    firstName: "Nika",
    lastName: "Gabelia",
    age: 15
};

let persons = [
    {
        firstName: "Nika",
        lastName: "Gabelia",
        age: 15
    },
    {
        firstName: "Giorgi",
        lastName: "Gabelia",
        age: 19
    },
    {
        firstName: "keti",
        lastName: "Jinjolava",
        age: 20
    }
]

for (let person of persons) {
    for (let key in person) {
        if (key === "age" && person["age"] >=18) {
            console.log(person['firstName'])
        }
    }
}
