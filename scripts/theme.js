const button = document.querySelector(".dark__button")
const html = document.querySelector("html")
const span = document.querySelector("#dark__icon")

button.addEventListener('click', (event)=>{
    event.preventDefault()
    const currentClass = html.classList
    if(currentClass[0]==="dark__mode"){
        html.classList.remove("dark__mode")
        dark__icon.innerHTML="dark_mode"
    } else{
        html.classList.add("dark__mode")
        dark__icon.innerHTML="light_mode"
    }
})