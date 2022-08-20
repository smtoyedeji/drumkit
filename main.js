//playsound function
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`)
    if(!audio) return
    audio.currentTime = 0
    audio.play()
    key.classList.add("playing") 
}

//remove transition effect
const keys = document.querySelectorAll(".key")

keys.forEach(key => key.addEventListener("transitionend", function() {
    key.classList.remove("playing")
}))


window.addEventListener("keydown", playSound)
