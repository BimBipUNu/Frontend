const text = document.getElementById("text")
const btnIncrease = document.getElementById("increase")
let size = 16
btnIncrease.style.backgroundColor = "green"
btnIncrease.addEventListener("click", () => {
    size += 12
    text.style.fontSize = `${size}px`
})
const btnDecrease = document.getElementById("decrease")
btnDecrease.style.backgroundColor = "red"
btnDecrease.addEventListener("click", () => {
    if (size > 12) {
        size -= 12
        text.style.fontSize = `${size}px`
    }
})