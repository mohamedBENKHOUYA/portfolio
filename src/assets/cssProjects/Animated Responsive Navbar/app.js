const navlink = document.querySelector('.nav-links'); 
const hamburger = document.querySelector(".hamburger");
const links = document.querySelectorAll(".nav-links li");
const x = window.matchMedia("(min-width: 769px");

x.addListener(() => {
    if (x.matches) {
        navlink.classList.remove('open');
        links.forEach((item, index) => (item.classList.remove('fade')));
    }
})



hamburger.addEventListener('click', function(e) {
    navlink.classList.toggle('open');
    links.forEach((item, index) => (item.classList.toggle('fade')))
});


  


// function Fb(type) {
//     this.name = 'mohamsed';
//     this.method = function() {
//         console.log( this.name, arguments );
//     }
// }

// let ne = new Fb('mercedes');
// ne.name = 'moihamed';

// let ob = {
//     name: 'kk',
//     __proto__: ne,
// }

// console.log( ob.__proto__.method() )
// console.log(ob.__proto__.method())