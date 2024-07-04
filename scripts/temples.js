// get dates for the footer
const currentyear = document.getElementById("currentyear")
currentyear.innerText = new Date().getFullYear();
const lastModified = document.getElementById("lastModified")
lastModified.innerText = new Date(document.lastModified);

// hamburger menu
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});