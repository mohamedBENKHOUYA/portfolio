'use strict';

const input = document.querySelectorAll('.input');

console.log(input[4].validate)

for (let value of input) {
  value.addEventListener('click', () => {
    let parent = value.parentElement;
    // let grandFather = value.parentElement.parentElement;
    let children = parent.children;
    let index = [].indexOf.call(children, value);
    console.log( -1 * (index - 9));
    
  })
}