let text = document.lastModified;
document.getElementById("lastModified").innerHTML = "Last Modification: " + text;
const hambutton = document.querySelector("#menu"); // Hambutton
const navbar = document.querySelector("#navigation"); // Target navigation menu



const d = new Date();
let year = d.getFullYear();
document.getElementById("currentYear").innerHTML = year + "&copy;<br> Hared Albancando Robles<br> ID, USA";


// Add a click event listener to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
    navbar.classList.toggle('open'); // This applies the 'open' class to the whole navigation
    hambutton.classList.toggle('open'); // Toggles the hamburger button icon (≡ to X)
});
