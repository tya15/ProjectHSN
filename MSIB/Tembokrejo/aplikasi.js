const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

const tentang = document.querySelector('#tentang-menu');
const tentangdesa = document.querySelector('.navbar__menu');

tentang.addEventListener('click', function() {
    tentang.classList.toggle('is-active');
    tentang.classList.toggle('active');
})