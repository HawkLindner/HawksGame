"use strict";
const sub = document.getElementById("submitBtn");
const textBox = document.getElementById("textBox");
const answer = "echo";
console.log("Hello")
textBox.addEventListener("keyup",event =>{
   
    if(textBox.value === answer)
    {
        document.getElementById("submitBtn").style.background = "green";
        let form = document.getElementById("echoGame");
        form.action = "page5.html";
        
    }
    else{
        document.getElementById("submitBtn").style.background = "red";
}})

    

    
    