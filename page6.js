let confront = document.querySelectorAll(".fight");
const choice = document.getElementById("pathChoice");
        choice.addEventListener("change", () => {
        const selectedOption = choice.value;
const outputs = {
    "default" : "retry",
    "option1" : "destroy",
    "option2" : "smarts",
    "option3" : "shh"
};
console.log(selectedOption);
if(selectedOption === "default")
{
    document.getElementById('form').style.color = "red";
}
else{
    document.getElementById('form').style.color = "black";
    if(selectedOption === "option 1"){
        
    }
}
});


let textBox = document.getElementById('textbox');
const person = document.getElementById('greeting');

textBox.addEventListener('keyup', event =>{
    person.textContent = textBox.value;
    let name = textBox.value;
    console.log(name);
})

const radioButtons = document.querySelectorAll('input[name="weapon"]');
    radioButtons.forEach((radio) => {
        radio.addEventListener('change', function() {
            console.log(`Selected weapon: ${this.value}`);
        });
    });

    let selectedArmor = "";
    const checkboxes = document.querySelectorAll('input[name="armor"]');
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                selectedArmor += `${this.value}, `;
            } else {
                selectedArmor = selectedArmor.replace(`${this.value}, `, "");
            }
            console.log(`Selected armor: ${selectedArmor}`);
        });});

const msg = document.getElementById('message');
msg.addEventListener('keyup',event =>{
    let usrMsg = msg.value;
});