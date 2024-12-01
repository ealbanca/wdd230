document.querySelector('.banner-close').addEventListener("click", function () {
    this.closest(".banner").style.display = "none";
});

document.addEventListener('DOMContentLoaded', function () {
    // Get the current day of the week (0-6)
    const today = new Date().getDay();

    // Check if today is Monday (1) Tusday(2) or Wednesday (3)
    if (today === 1 || today === 2 || today === 3) {
        document.getElementById('banner').style.display = 'block'; // Show the banner
    } else {
        document.getElementById('banner').style.display = 'none'; // Hide the banner
    }
});