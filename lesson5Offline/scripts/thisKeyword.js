// @ts-check

let currentYear = 2024;
let birthYear = 1950;
let livingCity = "amsterdam";

let person = {
    firstName: "Nika",
    lastName: "Chaduneli",
    birthYear: 1980, 
    age: function () {return currentYear - this.birthYear},
    livingCity: "Nice",
    livingCountry: function() {
        let cityNameAssociations = {
            Georgia: ["kutaisi", "tbilisi", "batumi", "zugdidi"],
            Usa: ["New York", "Washington", "Los Angeles", "Boston", "Miami"],
            France: ["Paris", "limoges", "Bordeaux", "Perpinian", "Nice", "Lion"]
        }

        let countryNames = Object.keys(cityNameAssociations);
        let countryValues = Object.values(cityNameAssociations);
        for (let country of countryValues) {
            if (country.includes(this.livingCity)) {
                return countryNames[countryValues.indexOf(country)]
            }
        }

        return "Unknown City"

        // georgianCityNames.some(cityName => cityName === "tbilisi")
        // if (georgianCityNames.indexOf(this.livingCity) > -1) {
        //     return "georgia"
        // }
    }
};

// console.log(person.livingCountry());

console.log(this)
