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
 setTimeout(typewriter, 400)
 console.log(letter)
}

/* let counter;
if (counter <= text.length){counter++}
let character = text.substring(0,counter);
window.addEventListener("DOMContentLoaded", init)
function init(){
    console.log("ready");
           typeWriter();
           //playSound();
        //document.write(document.querySelector(.typewritten))
}
function typeWriter(){
    console.log("blah");
    document.querySelector(".typewritten").textContent += " ";
    document.querySelector(".typewritten").textContent+= character;
    setTimeout (typeWriter, 5000)
}
function playSound(){
 

if (Math.random() > 0.5) {
    document.querySelector("#typekey1").setAttribute("onplay");
    } else {
        document.querySelector("#typekey2").setAttribute("onplay");

    }
}
 */