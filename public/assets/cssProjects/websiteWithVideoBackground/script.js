const header = document.querySelector('header');
const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');
// const li = 

console.log()

toggle.addEventListener('click', (e) => {
  toggle.classList.toggle('active');
  menu.classList.toggle('active');
  if ( toggle.classList.contains('active') ) {
    header.style.zIndex = 'initial';
    toggle.style.zIndex = 4;
    menu.style.zIndex = 3;
    
  }
  else {
    header.style.zIndex = 2;
    menu.style.zIndex = 'initial';
  }
});

menu.addEventListener('animationend', (e) => {
  console.log('end');
    // window.getComputedStyle(menu, ':before').removeProperty('animation');
})