const side1 = document.getElementById('side1');
const side2 = document.getElementById('side2');

window.addEventListener('scroll', function (e) {
  side1.style.left = -window.pageYOffset + 'px';
  side2.style.left = window.pageYOffset + 'px';
});
