"use strict"
const draggables = document.querySelectorAll('.draggable');
const containers = document.querySelectorAll('.container');



draggables.forEach((draggable) => {
    draggable.addEventListener('dragstart', () => {
        console.log(draggable.getBoundingClientRect());

        draggable.classList.add('dragging');
    });
    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging');
    })
   
});

containers.forEach((container) => {
    container.addEventListener('dragover', (e) => {
        const draggable = document.querySelector('.dragging');
        e.preventDefault();
    //    container.appendChild(draggable);

    });
   
});


let ob = new class Cl{
    name = 'luah';
    constructor() {
        this.surname ='ben';
    }
    frtcj() {
        console.log(this.name)
    }
}

let obj1 = {name: 'karim'}
console.log(ob.name)