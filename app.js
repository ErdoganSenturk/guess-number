let message = document.querySelector(".message")
let submit = document.querySelector(".submit");
let message2 = document.querySelector(".mess");
let submit2 = document.querySelector(".submit2");
let guess = document.querySelector("#guess");



let randomm = Math.floor(Math.random() * 100 + 1);




submit.addEventListener("click", () => {
  const count = 5;
    let input = document.querySelector("#guess").value;
        if(input > randomm){
            message.textContent = "down ⬇️ ";         
            guess.innerHTML = ""; 
        } else if (input < randomm){
            message.textContent = "up ⬆️";
             guess.innerHTML = "";
        } else {message.textContent = "congrat";
                guess.innerHTML = "";
              }  
    submit2.value = "";
    }
)


window.addEventListener("load", (event) => {
  submit2.onclick = function () {
    location.reload(true);
  };
});