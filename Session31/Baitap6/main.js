let username = "huanrose@gmail.com"
let password = "123456"
const form = document.querySelector("#form")
form.addEventListener("submit", (e) => {
    e.preventDefault()
    const formData = new FormData(form)
    let condition1 = formData.get("username") === username
    console.log(condition1)
    let condition2 = formData.get("password") === password
    console.log(condition2)
    if (condition1 && condition2) {
        console.log("Đăng nhập thành công")
    } else {
        console.log("Đăng nhập thất bại")
    }
})