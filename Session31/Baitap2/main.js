const color = document.getElementsByClassName("color");
const btn = document.getElementById("btn");
const div = document.getElementById("div")
btn.addEventListener("click",() => {
    if (div.style.backgroundColor === "white") {
        for( let i=0; i<color.length; i++){
            color[i].style.color = "white";
        }
        div.style.backgroundColor = "black";
    } else {
        for( let i=0; i<color.length; i++){
            color[i].style.color = "black";
        }
        div.style.backgroundColor = "white";
    }
})