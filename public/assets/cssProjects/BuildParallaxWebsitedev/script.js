"use strict"

   

    const a = 4;

    window.addEventListener('DOMContentLoaded', (e) => (console.log('DomContentLoaded')));
    window.addEventListener('load', (e) => {
      // console.log('done')
    });
    // window.addEventListener('beforeunload', (e) => (prompt('are you shu')));
    // document.body.style.visibility= 'hidden';

  
    // console.log(getComputedStyle(document.body)['opacity'])

    // console.log(document)
    document.onreadystatechange = () => {
      if (document.readyState === 'complete') {
        console.log('loaded');
        // console.log(document.body.style)
      }
    };

    function fib(n) {
      if (n  <= 2) return 1;
      return fib(n-1) + fib(n-2)
    }
      // fib(42); 
(function () {console.log('IIFE'); }())

console.log('sfd'); 
// window.onbeforeunload = function () {return false}

    // window.addEventListener('focus', (e) => {console.log(this); nb++; })