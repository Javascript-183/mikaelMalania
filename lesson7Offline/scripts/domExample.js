let paragraph1Value = document.getElementById("paragraph1");
// console.log(paragraph1Value.textContent);
paragraph1Value.textContent = "This data has been changed";
paragraph1Value.style.textAlign = 'center';
paragraph1Value.style.color = "#f6ff07";
paragraph1Value.innerHTML = `<p style="color: red;"> This data has been changed </p>`

// console.log(`Here comes data from html ${paragraph1Value}`);

let div1Value = document.getElementsByClassName("div1");

// console.log(div1Value);

let h3Value = document.getElementsByTagName("h3");

// console.log(h3Value[0].textContent);

let querySelector = document.querySelector("div");
// console.log(querySelector.textContent);

let querySelectorAll = document.querySelectorAll(".div1")

console.log(querySelectorAll[0]);