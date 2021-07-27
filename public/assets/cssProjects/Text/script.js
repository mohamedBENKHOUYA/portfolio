'use strict';


const title = document.querySelector('.title');
const welcome = document.querySelector('.welcome');
const container = document.querySelector('.container');

let i = 0;
let timerId;
function workWelcome() {
  let choices = ['none', 'fadeInUp'];
  let time = [4000, 7000];
  
  welcome.style.animationName = choices[i];
  i = (i == 1)? 0: 1;
  timerId = setTimeout(workWelcome, time[i]);
  time[0] += 10;
}


let test = true;
function workTitle() {
  let choices = ['none', 'block'];
  let time = 11000;
  if (test) {
    title.style.display = choices[1]; test = !test; setTimeout(workTitle, time);
  }
  else {
    title.style.display = choices[0];
     test = !test;
    setTimeout(workTitle, 10);
  }

}

// workWelcome();  
// workTitle();    
function containerFct() {
  let choices = ['none', 'grid'];
  let time = 11000;
  if (test) {
    container.style.display = choices[1]; test = !test; setTimeout(containerFct, time);
  }
  else {
    container.style.display = choices[0];
     test = !test;
    setTimeout(containerFct, 1000);
  }
}

containerFct();

