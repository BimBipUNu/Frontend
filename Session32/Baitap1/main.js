const changeColor = document.getElementById("changeColor");
changeColor.addEventListener("click", function() {
    let block = document.getElementById("block");
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    block.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
})