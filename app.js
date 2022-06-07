let message = document.querySelector(".message")
let submit = document.querySelector(".submit");
let message2 = document.getElementById("mess");
let submit2 = document.querySelector(".submit2");
let guess = document.querySelector("guess");


let randomm = Math.floor(Math.random() * 100 + 1);
console.log(randomm)

const count = 5

submit.addEventListener("click", () => {
    let input = document.querySelector("#guess").value;
        if(input > randomm){
            message.textContent = "down ⬇️ ";
            guess.innerHTML = "";   
            count--     
            message2.innerText = `${count}`
        } else if (input < randomm){
            message.textContent = "up ⬆️";
            guess.innerHTML = "";
            count--     
            message2.textContent = `${count}`;  
        } else {message.textContent = "congrat";
                guess.innerHTML = "";}  
    }
)


window.addEventListener("load", (event) => {
  submit2.onclick = function () {
    location.reload(true);
  };
});