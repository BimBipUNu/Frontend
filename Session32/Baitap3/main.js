let arr =["Toán","Lý","Hóa"]
let list = document.getElementById("list")
const add = document.getElementById("add")
display()
add.addEventListener("click", () => {
    const input = document.getElementById("input")
    let inputValue = input.value;
    if (inputValue === "") {
        alert("Không được để rỗng")
    } else {
        arr = [...arr, inputValue]
        input.value = ""
        display()
    }
})
function display() {
    list.innerHTML = "" // reset display
    for (let i = 0; i < arr.length; i++) {
        let data =arr[i];
        let item = document.createElement("li")
        item.innerText = data;
        list.appendChild(item);
    }
}