const check = document.getElementById("check");
check.addEventListener("click", () => {
    let length = (document.getElementById("textarea").value).length;
    console.log(length);
    document.getElementById("ans").innerText = length + " Ki tu";
})