const btnHide = document.getElementById("hide");
const btnShow = document.getElementById("show");
const text = document.getElementById("text");
btnHide.addEventListener('click',() => {
    text.style.opacity = 0;
})
btnShow.addEventListener("click",() => {
    text.style.opacity = 1;
})