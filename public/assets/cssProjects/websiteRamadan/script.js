const menuToggle = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');
menuToggle.onclick = function() {
  menuToggle.classList.toggle('active');
  navigation.classList.toggle('active');
  match();
}

const x = window.matchMedia("(max-width: 991px)");
x.onchange = match;

function match() {
  console.log('change')
  if (x.matches) {
    console.log("matches");
    if ( [].includes.call(menuToggle.classList, 'active') ) {
      console.log('inclued')
      document.body.style.overflow = 'hidden';
    }
    else {
      document.body.style.overflow = 'initial';
    }
  }
  else {
    document.body.style.overflow = 'initial';
    menuToggle.classList.remove('active');
    navigation.classList.remove('active');
  }
}

