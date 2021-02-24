const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');
const nav = document.querySelector('nav');


// Toggle Nav
toggle.addEventListener('click', () =>
  nav.classList.toggle('show-nav')
);

// Show Modal 
open.addEventListener('click', () => modal.classList.add('show-modal'));

// Close modal
close.addEventListener('click', () => modal.classList.remove('show-modal'));

// Hide modal 
window.addEventListener('click', e => e.target == modal ? modal.classList.remove('show-modal') : false)