let accounts = JSON.parse(localStorage.getItem("accounts")) || [];

document.getElementById("login").addEventListener("click", function(e){
    e.preventDefault();
    let mail = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let acc = accounts.find((item) => item.email === mail && item.password === password);
    if(acc) {
        alert("Welcome ");
    } else {
        alert("Invalid email or password");
    }
})
