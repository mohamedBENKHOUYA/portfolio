let {
  clearAllBodyScrollLocks,
  disableBodyScroll,
  enableBodyScroll,
} = require('body-scroll-lock');

let services;
let projects;
const contentServices = document.querySelector('.services .content');
const contentProjects = document.querySelector('.projects .content');
const toggle = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');
const topbar = document.querySelector('.topbar');
const main = document.querySelector('.main');
const links = document.querySelectorAll('.navigation li a');
const sidebar_link = document.querySelectorAll('.sidebar_link ');

let x = window.matchMedia('(max-width: 700px)');

let map = new Map();
map.set('active', sidebar_link[0]);
[].forEach.call(sidebar_link, (item, index) => {
  item.onclick = function (e) {
    map.get('active').classList.remove('active');
    item.classList.add('active');
    map.set('active', item);
  };
});

links.forEach((item, index) => {
  item.onclick = function (e) {
    navigation.classList.remove('active');
    main.classList.remove('active');
    topbar.classList.remove('active');
    toggle.classList.remove('active');
    enableBodyScroll(navigation);
  };
});

if (navigation.classList.contains('active') && x.matches) {
  // document.documentElement.style.overflow = 'hidden';
  // document.body.style.position =  'fixed';

  // document.body.addEventListener('touchstart', function(e) {
  //   e.preventDefault(); return false;
  // }, {passive: false});
  disableBodyScroll(navigation);
}

toggle.onclick = (e) => {
  toggle.classList.toggle('active');
  navigation.classList.toggle('active');
  topbar.classList.toggle('active');
  main.classList.toggle('active');
  // if (main.classList.contains('active')) {
  //   container.style.position = 'fixed';
  // }
  // else {
  //   container.style.position = 'relative';
  // }

  if (navigation.classList.contains('active') && x.matches) {
    // document.documentElement.style.overflow = 'hidden';

    // document.body.style.position =  'fixed';

    // document.body.addEventListener('touchstart', function(e) {
    //   e.preventDefault(); return false;
    // }, {passive: false});

    disableBodyScroll(navigation, { reserveScrollBarGap: true });
  } else {
    // document.documentElement.style.overflow = 'initial';
    // document.body.style.position =  'initial';

    // document.body.addEventListener('touchstart', function(e) {
    //   e.preventDefault(); return false;
    // }, {passive: false});

    enableBodyScroll(navigation);
  }
};

fetch('./assets/services.json')
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    services = res.services;

    services.forEach((item, index) => {
      let div = document.createElement('div');
      div.classList.add('serviceBox', 'serviceBox' + (index + 1));
      let h2 = document.createElement('h2');
      let p = document.createElement('p');
      let img = document.createElement('img');
      img.src = item.img;
      h2.innerHTML = item.h2;
      p.innerHTML = item.p;
      div.appendChild(img);
      div.appendChild(h2);
      div.appendChild(p);
      contentServices.appendChild(div);
    });
  });
  

fetch('./assets/projects.json')
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    projects = res.projects;
    projects.forEach((item, index) => {
      let workBox = document.createElement('div');
      workBox.classList.add('workBox');
      let imgBox = document.createElement('div');
      imgBox.classList.add('imgBox');
      let textBox = document.createElement('div');
      textBox.classList.add('textBox');
      let img = document.createElement('img');
      let h3 = document.createElement('h3');

      img.src = item.img;
      h3.innerHTML = item.h3;

      imgBox.appendChild(img);
      textBox.appendChild(h3);
      workBox.appendChild(imgBox);
      workBox.appendChild(textBox);
      contentProjects.appendChild(workBox);
    });
  });
