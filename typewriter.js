"use strict";
window.addEventListener("DOMContentLoaded", init)
function init(){
    typewriter();
}
let text = document.querySelector(".typewritten").textContent;
let counter = 0;
let letter = "";
 function typewriter(){
    if (counter<=text.length){
        counter++;
    } 
    letter = text.substr(0, counter)
    
   
 document.querySelector(".typewritten").textContent = "";
 document.querySelector(".typewritten").textContent +=letter;
 const time = Math.random() * 250;
 setTimeout(typewriter, time)
 console.log(letter)
}

