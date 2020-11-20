console.log("hello")
const result = document.querySelector("#result")
const bouton = document.querySelector("#bouton")
bouton.addEventListener('click', (e)=> {
    console.log("hello")
    result.innerHTML = "hello" 
    e.preventDefault();
})



