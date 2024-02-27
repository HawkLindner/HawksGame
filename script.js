
"use strict";
const sub = document.getElementById("submitBtn");
const textBox = document.getElementById("textBox");
const answer = "echo";
textBox.addEventListener("keyup",event =>{
   
    if(textBox.value === answer)
    {
        document.getElementById("submitBtn").style.background = "green";
        
    }
    else{
        document.getElementById("submitBtn").style.background = "red";
    }})


document.getElementById("pathChoice").addEventListener("change",function(){
    const selectedOption = this.value;
    const colors = {
        "strength":"blue",
        "wisdom": "green",
        "stealth":"purple"
    };
    document.body.style.background = colors[selectedOption] ||"white";
    });
