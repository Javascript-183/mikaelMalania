const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = "username, asdasdasdas"; // this data should come from some API or file read operation
            if (data.includes("username, password")) {
                resolve(data)
            } else {
                reject("Error, data is in incorrect format!");
            }
        }, 2000);
    });
};

// console.log(fetchData());

// fetchData().then((data) => {
//     console.log("Successfully executed your request: ", data);
// }).catch(err => {
//     console.log("Error code:", err);
// })
// console.log("Im the first!!")


async function result() {
    try {
        const result = await fetchData();
        console.log("Successfully executed your request: ", result);

    } catch(e) {
        console.log("Error code:", e);
    }
}

result()

// await fetchData();
