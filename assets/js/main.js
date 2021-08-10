// Menu-bar-open
const menuBar = document.querySelector(".header__top> i")
menuBar.addEventListener("click", function() {
    document.querySelector(".header__top ul").style.transform = "translateX(0%)"
    document.querySelector(".header__top ul").style.opacity = "1"
})


// Menu-bar-close
const closeBtn = document.querySelector(".header__top ul>i")
closeBtn.addEventListener("click", function() {
    document.querySelector(".header__top ul").style.transform = "translateX(100%)"
    document.querySelector(".header__top ul").style.opacity = "0"
})