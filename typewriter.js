"use strict";
window.addEventListener("DOMContentLoaded", init)
function init(){
    typewriter();
}
let text = document.querySelector(".typewritten").textContent;
let counter = 0;
let letter = "";
console.log(text.length);

let timeId;
function typewriter(){
    const time = Math.random() * 250;
    timeId = setTimeout(typewriter, time);
    
    if (counter<text.length){
        counter++;
    } 
    else if(counter==text.length){
        clearTime();
        
    }
    letter = text.substr(0, counter);
    
    
    document.querySelector(".typewritten").textContent = "";
    document.querySelector(".typewritten").textContent +=letter;

    console.log(letter)
    
    
}
function clearTime(){
    clearTimeout(timeId);

}

