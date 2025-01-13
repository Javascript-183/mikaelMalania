function searchContact() {
    // let input, filter, ul, li, a, i, txtValue; // რამოდენიმე ცვალი შევქმენით ერთდროულად, რომლებსაც ქვევით კოდში გამოვიყენებთ, ჯერჯერობით მათი მნიშვნელობები არ მიგვითითებია რადგან ეს ქვევით უნდა მოხდეს

    // input = document.getElementById("userInput"); // ამ ცვლადში ვიღებთ ინფორმაციას იმ ინფუთიდან
    // filter = input.value.toUpperCase();
    // ul = document.getElementById("contacts");
    // liTags = ul.getElementsByTagName("li");
    // console.log(liTags)
    // for (let liTag of liTags) { 
    //     a = liTag.querySelector("a");
    //     txtValue = a.textContent; // giorgi
    //     console.log(txtValue)
    //     // GIORGI RG
    //     if (txtValue.toUpperCase().indexOf(filter) > -1) {
    //         liTag.style.display = "block";
    //     } else {
    //         liTag.style.display = "none"; 
    //     }
    // }

    let filterDiv = document.getElementsByClassName("filterDiv")
    // .map(divElement => {
    //     return divElement.textContent;
    // });
    let input = document.getElementById("userInput").value.trip();

    for (let divElement of filterDiv) {
        txtValue = divElement.textContent;
        
        if (txtValue.toUpperCase().indexOf(input.toUpperCase()) > -1) {
            divElement.style.display = "block";
        } else {
            divElement.style.display = "none";
        }

    }



}