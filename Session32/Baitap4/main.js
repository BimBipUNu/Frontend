const inputEmail = document.getElementById("inputEmail")
const checkEmail = document.getElementById("checkEmail")
const check = document.getElementById("check")
check.addEventListener("click", (e) => {
    let data = inputEmail.value;
    let condition1 = data.includes("@")
    let condition2 = data.endsWith(".com") || data.endsWith(".vn")
    if (condition1 && condition2) {
        checkEmail.innerText = "Email hợp lệ"
        checkEmail.style.color = "green"
    } else {
        checkEmail.innerText = "Email không hợp lệ"
        checkEmail.style.color = "red"
    }
})