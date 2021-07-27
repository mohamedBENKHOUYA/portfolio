"use strict";

const left = document.querySelector('.left');
const right = document.querySelector('.right');
const center = document.querySelector('.center');
const propo1 = document.querySelector('.propo1');
const propo2 = document.querySelector('.propo2');
const container = document.querySelector('.container');

const signup = document.querySelector('.signup');
const signin = document.querySelector('.signin');


signup.addEventListener('click', function (e) {
  right.classList.toggle('active');
  left.classList.toggle('active');
  center.classList.remove('center__signin');
  center.classList.add('center__signup');
  propo1.classList.add('active');
  propo2.classList.remove('active');
  container.style.background = 'blue';
  console.log(e.target);
});
 

signin.addEventListener('click', function (e) {
  right.classList.toggle('active');
  left.classList.toggle('active');
  center.classList.remove('center__signup');
  center.classList.add('center__signin');
  propo2.classList.add('active');
  propo1.classList.remove('active');
  container.style.background = 'rgb(231, 48, 48)';
  console.log(e.target);
});

console.log(signup, signin) 