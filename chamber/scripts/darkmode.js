// Dark Mode

function myFunction() {
    const body = document.body;
    const logoImg = document.querySelector('.logo');


    body.classList.toggle("dark-mode");

    if (body.classList.contains('dark-mode')) {
        logoImg.src = "images/logo-dark.png"; // Change to dark logo
    } else {
        logoImg.src = "images/logo.png"; //Revert to light logo
    }

}