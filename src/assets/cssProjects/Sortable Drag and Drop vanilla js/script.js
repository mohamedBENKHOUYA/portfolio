
const draggables = window.document.querySelectorAll('.draggable');
const containers = window.document.querySelectorAll('.container');
const sibling = containers[0].children[0];

// sibling.remove()
console.log( Object.prototype.toString.call(containers[0]) )

host  :
user: postgres
password: postgrespassword

console.log(  )
// console.log( HTMLDocument.__proto__.prototype )
console.log(window.document.__proto__)
console.log( window.document.onbeforecopy = () => {
    confirm('are you sure you want to do this')
} )


draggables.forEach((draggable) => {
    draggable.addEventListener('dragstart', () => {
        // console.log('moving');
        draggable.classList.add('dragging');
    });
    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging');
    });
});


containers.forEach((container) => {
    container.addEventListener('dragover', (e) => {
        const draggable = document.querySelector('.dragging');
        e.preventDefault();
        // const afterElement = getDragAfterElement(container, e.clientY);
        // console.log(afterElement);
        // if (afterElement === undefined) {
        // container.appendChild(draggable);

        // } else {
        //     container.insertBefore(draggable, afterElement);
        // }

        // console.log(e.clientX);

        // const elements = container.children;
        // // console.log(elements);
        // for (let element of elements) {
        //     element.addEventListener('dragover', (e) => {
        //         console.log(element);
        //     })
        // }
    })
})

function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')];
    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        // console.log(box);
        // if ( offset < 0 && offset > closest.offset ) {
        //     return { offset: offset, element: child }
        // } else {

        // }
         
        return ( offset < 0 && offset > closest.offset )? 
                {offset: offset, element: child}: closest;

    }, {offset: Number.NEGATIVE_INFINITY}).element;
}







