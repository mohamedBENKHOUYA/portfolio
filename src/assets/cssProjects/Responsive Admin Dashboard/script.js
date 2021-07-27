'use strict'
let toggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
let main = document.querySelector('.main');
let x = window.matchMedia("(max-width: 992px)");
mediafct();
x.onchange = mediafct();
function mediafct() {
  if(x.matches) {
    toggle.classList.add('active');
    main.classList.add('active');
    navigation.classList.add('active');
  }
  else {
    toggle.classList.remove('active');
    main.classList.remove('active');
    navigation.classList.remove('active');
  }
}
toggle.onclick = toggleMenu;

let x3 = window.matchMedia("(max-width: 530px)");
console.log(x3);

function toggleMenu() {
  main.classList.toggle('active');
  toggle.classList.toggle('active');
  navigation.classList.toggle('active');

  if( x3.matches ) {
    console.log('matches')
  if(  main.classList.contains('active') )
  document.body.style.overflow = 'initial';
  else {
    document.body.style.overflow = 'hidden';
    console.log('hidden');
}
}

}



