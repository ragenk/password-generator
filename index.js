const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let buttonEl = document.getElementById("button-el");
let pwdOne = document.getElementById("pwd-one");
let pwdTwo = document.getElementById("pwd-two");

function generatePassword() {    
    let pwdLength = document.getElementById("pwd-length").value;

    if (pwdLength < 8 || pwdLength > 20 || pwdLength === "") {
        pwdOne.textContent = "";
        pwdTwo.textContent = "";
        alert("Please insert a valid length between 8 - 20");
    }

    pwdOne.textContent = "";
    pwdTwo.textContent = "";
    for (let i = 0; i < pwdLength; i++) {
        let randomCharsOne = Math.floor(Math.random()*characters.length);
        let randomCharsTwo = Math.floor(Math.random()*characters.length);
        pwdOne.textContent += characters[randomCharsOne];
        pwdTwo.textContent += characters[randomCharsTwo];
    }
}