
const menuBtn = document.querySelector('.toggle');
const navUl = document.querySelector('.nav');
const close = document.querySelector('.burger-close')
const menu = document.querySelector('.burger-menu')

// Events

menuBtn.addEventListener('click', function () {
  navUl.classList.toggle('movein');
  close.classList.toggle('burger-close__toggle');
  menu.classList.toggle('burger-menu__toggle'); 
});