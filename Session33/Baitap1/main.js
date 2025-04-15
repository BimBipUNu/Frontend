const input = document.getElementById("input");
const hideOrShow = document.getElementById("hideOrShow");
hideOrShow.addEventListener("click", (e) => {
    if ( input.type === "password" ) {
        input.type = "text";
    } else {
        input.type = "password";
    }
})