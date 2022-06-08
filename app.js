let message = document.querySelector(".message")
let submit = document.querySelector(".submit");
let message2 = document.querySelector(".mess");
let submit2 = document.querySelector(".submit2");
let guess = document.querySelector("#guess");

let life = 6;

let randomm = Math.floor(Math.random() * 100 + 1);




submit.addEventListener("click", () => {
   if (life >= 1){
    let input = document.querySelector("#guess").value;
        if(input > randomm){  
            message.textContent = "down ⬇️ ";  
            life--   
            message2.innerHTML = `last ${life} life`;  
            guess.innerHTML = ""; 
        } else if (input < randomm){
            message.textContent = "up ⬆️";
            life--
            message2.innerHTML = `last ${life} life`; 
             guess.innerHTML = "";
        } else {message.textContent = " 🎆 congrat 🎆";
                guess.innerHTML = "";
                
              }  
    } else {
     message2.innerHTML = `Game over...`;  
  } 
  } 


)


window.onload = () => {
    guess.focus();
};