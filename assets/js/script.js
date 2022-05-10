// changes the text of the login/logout button based on current inner text when clicked
function LoginLogout(element) {
    if(element.innerText === "Login") {
        element.innerText = "Logout";
    } else {
        element.innerText = "Login";
    }
}

// removes a button element when clicked
function removeBTN(element) {
    element.remove();
}