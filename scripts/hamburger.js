const hamButton = document.querySelector('#menu'); //Select hamburger button 
const navigation = document.querySelector('.navigation');// Select navigation 

hamButton.addEventListener('click', function () {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});