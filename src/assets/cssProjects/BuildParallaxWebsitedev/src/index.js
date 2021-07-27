// import ScrollMagic from 'scrollmagic';
// import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js';
// import * as Gsap from 'gsap';

// const mountains = document.querySelector('.bg1');
// const content  = document.querySelector('.content');
// const nav = document.querySelector('nav');

// window.addEventListener('scroll', (e) => {
//   const valueScroll = window.scrollY;
//   // mountains.style.marginTop = valueScroll * 1.5 + "px";
//   nav.style.marginTop = valueScroll * .9 + "px";
//   content.style.marginTop = - valueScroll * 2 + "px";
 
// });


// let controller = new ScrollMagic.Controller();
// let timeline = new Gsap.TimelineMax();

// timeline
//   .to('.rock', 3, { y: -300 })
//   .to('.girl', 3, { y: -200 }, '-=3')
//   .to('.bg1', 3, { y: 200 }, '-=3')
//   .to('.content', 3, { top: '0' }, '-=3');

// let scene = new ScrollMagic.Scene({
//   triggerElement: 'section',
//   duration: '100%',
//   triggerHook: 0,
// })
//   .setTween(timeline)
//   .setPin('section')
//   .addTo(controller);


// import a from './utils.js';

// exports.b = 'what i have';
// const scrollMagic = require('webpack');
// const a = require('./utils.js');
// const gsap = require('gsap');
// "use strict";
// console.log(require.resolve('./utils.js'))
// console.log()
// import react, {age} from './utils.js';

// let a = require('./utils.mjs');

import {a} from './utils.js';
console.log(a);

export let vari = 'hola';

let i = require('./utils2.js');
console.log(i);

// console.log(react.age, age);
// iff.obj()
// console.log(iff) 







// requiring module in node js
// module.cache .main .extensions .resolve
// node as well: exe one time
// has module scope

// node: first 'main' and after 'index.js'
// webpack: "module" => "main" => "index.js"
// (before, we had for webpack: index.js => main)

// objects keys : just object
// for in : inherited but enumerable
// in test : all
// object names : non enumerable 

//webpack: verify if download or ecma
// if download: just 'require' admitted and(avant) is ecma or download
// if ecma : all admitted(require and import) and(avant) is ecma or download
// if ecma and avant, require =>(is like) * as all 
// if nothing(there isn't exports nor export): is like ecma
// if download, in avant: import * as all == import all ....: il va directement au default

// in react, if we touch internals, we need ctrl c and restart


// after this import, several object had added to the global object
// so, are available.

// webpack se base sur packagejson ou l'existance de 'export' and 'import'

// import ''; considered as module that just run
// we can require in ecmas module with webpack. to do so, we have to not use
// "type: module"
// with webpack, require is is considered like "import * as m from ''"
// when merged with ecmas
// 'main' is worth it(and activated) when there is no 'index.js' in the root
// dans le cas de mélonge with webpack:
// "module.exports "and "export" don't go together in one module
// with webpack: we can do a melonge in the same module
// we can also require() es that is translited as "import * as m from ''"
// require can be in this case:
// 1) "import * as m from ''" => only "export"
// 2) just download code and execute and return object => only module.exports
// webpack ne jette pas les requires vers le haut c'est plûtot sequetiel like code
// 'require' and 'import' melangeable. 'export' and 'module.exports' no.

// weebpack                           node:
// webpack: no default , node: commonjs is default
// melange(require import)            no(each module has one)

// en cas de mélange, c'est ecma qui se hisse

// 22
