const pass1 = document.querySelector("#password");
const pass2 = document.querySelector("#password2");
const message = document.querySelector("#form-message");

pass2.addEventListener("focusout", checkpass);

function checkpass() {
    message.textContent = "";
    message.classList.remove("show-message");

    if (pass1.value !== pass2.value) {
        message.textContent = "Password DO NOT MATCH!";
        message.classList.add('show-message');
        pass2.value = "";
        pass2.focus();
    }
}