document.addEventListener("DOMContentLoaded", () => {
    const ratingInput = document.getElementById('page-rating');
    const ratingValue = document.getElementById('rating-value');


    ratingValue.textContent = ratingInput.value;

    ratingInput.addEventListener('input', () => {
        ratingValue.textContent = ratingInput.value;
    });
});