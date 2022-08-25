const mobButton = document.querySelector('.header__contats-button-mobile-wrapper');
const mobMenu = document.querySelector('.mobile-nav');

mobButton.addEventListener('click', function() {
    mobMenu.classList.toggle('mobile-nav-active');
})