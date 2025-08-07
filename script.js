const hamburger = document.getElementById('hamburger');
const closeBtn = document.getElementById('closeBtn');
const navLinks = document.getElementById('nav-links');
const header = document.querySelector('.header');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    header.classList.add('nav-active');
});

closeBtn.addEventListener('click', () => {
    navLinks.classList.remove('show');
    header.classList.remove('nav-active');
});