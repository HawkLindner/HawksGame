
const btn = document.querySelector('#continue');
const radioButtons = document.querySelectorAll('input[name = "char"]');
btn.addEventListener("click", () => {
    let charChosen;
    for(const radioButton of radioButtons){
        if(radioButton.checked){
            charChosen = radioButton.value;
        }
    }
    
})
