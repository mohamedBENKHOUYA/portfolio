'use strict';

let percentage = document.querySelector('.percentage');
let percent = document.querySelector('.percent');

let id = window.setInterval(() => {
  navigator.getBattery().then(function (battery) {
    console.log(battery.level * 100);
    percent.innerHTML = Math.trunc(battery.level * 100) + '%';
    percentage.style.width = battery.level * 100 + '%';
  });
}, 10000);

let sec = document.querySelector('.sec');
let toggle = document.querySelector('.toggle');

toggle.addEventListener('click', (e) => {
  sec.classList.toggle('dark');
  toggle.classList.toggle('active');
  toggle.classList.contains('active')
    ? (sec.style.background = '#000')
    : (sec.style.background = '#fff');
});
