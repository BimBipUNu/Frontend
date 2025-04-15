let accounts = JSON.parse(localStorage.getItem("accounts")) || [];
// localStorage.setItem("accounts",JSON.stringify(accounts))


const validateData = () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    //validate
    let flag = true
    accounts = JSON.parse(localStorage.getItem("accounts")) || [];

    //email
    if (email.trim() == "") {
        document.getElementById("errorEmail").innerText = "Email không được để trống";
        flag = false;
    } else if (accounts.find( acc => acc.email == email)) {
        document.getElementById("errorEmail").innerText = "Email không được trùng lặp";
        flag = false;
    } else {
        document.getElementById("errorEmail").innerText = "";
    }
    //password
    if (password.trim() == "") {
        document.getElementById("errorPassword").innerText = "Password không được để trống";
        flag = false;
    } else {
        document.getElementById("errorPassword").innerText = "";
    }
    //confirmPassword
    if (confirmPassword.trim() != password) {
        document.getElementById("errorConfirmPassword").innerText = "Password không khớp";
        flag = false;
    } else {
        document.getElementById("errorConfirmPassword").innerText = "";
    }

    return flag ? {email, password} : null;
}

const handleRegister = () => {
    document.getElementById("form").addEventListener("click", function(e){
        e.preventDefault();
    })
    let data = validateData();
    if(data) {
        accounts.push(data);
        localStorage.setItem("accounts",JSON.stringify(accounts));
    }
}
