const open = document.getElementById("open");
const modal = document.querySelector(".modal");
open.addEventListener("click", () => {
    modal.style.display = "flex";
    modal.style.position = "fixed";
    modal.style.top = "20vw";
    modal.style.left = "40vw";
    document.body.style.backgroundColor = "gray";
})
const close = document.getElementById("close");
close.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.style.backgroundColor = "white";
})