const container = document.getElementById("container");
const green = document.getElementById("green");
green.addEventListener("click", (e) => {
    container.style.backgroundColor = "green";
})
const red = document.getElementById("red");
red.addEventListener("click", (e) => {
    container.style.backgroundColor = "red";
})
const purple = document.getElementById("purple");
purple.addEventListener("click", (e) => {
    container.style.backgroundColor = "purple";
})