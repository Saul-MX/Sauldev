let menu = document.querySelector('#menu__icon')
let navbar = document.querySelector(".menu__options")

menu.addEventListener("click", function(){
    navbar.classList.toggle("active")
})

window.onscroll = () => {
    navbar.classList.remove("active")
}