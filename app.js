const button = document.querySelectorAll("button");

var emailInput = document.getElementById("email");

function validateEmail(input) {
    var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(input);
}

function btnOnClick(param) {
    const validateContainer = document.getElementsByClassName("validate-container")
    const mainContainer = document.getElementsByClassName("main-container")
    const inputSpan = document.getElementById("insertEmail");
    if (param == 0) {
        if (validateEmail(emailInput.value) == true) {
            mainContainer[0].style.display = "none"; 
            validateContainer[0].style.display = "block";
            inputSpan.innerText = emailInput.value;
        } else {
            emailInput.classList.add("inputErr");
            const errMsg = document.getElementById("errMsg");
            errMsg.style.visibility = "visible";
        };
    } else if (param == 1) {
        mainContainer[0].style.display = "block"; 
        validateContainer[0].style.display = "none";
        location.reload();
    }

}



