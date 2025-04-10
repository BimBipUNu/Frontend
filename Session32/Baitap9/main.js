const bar = document.getElementById("bar");
const successBar = document.getElementById("successBar");
const styleBar = {
    width: "500px",
    height: "20px",
    backgroundColor: "gray"
}
Object.assign(bar.style, styleBar);
const styleSuccessBar = {
    width: "0",
    height: "20px",
    backgroundColor: "green"
}
Object.assign(successBar.style, styleSuccessBar);
let width =0;
const increase = document.getElementById("increase");
increase.addEventListener("click", (e) => {
    if (width <= 450) {
        width += 50
        successBar.style.width = `${width}px`;
    }
})
const decrease = document.getElementById("decrease");
decrease.addEventListener("click", (e) => {
    if (width >= 50) {
        width -= 50
        successBar.style.width = `${width}px`;
    }
})
