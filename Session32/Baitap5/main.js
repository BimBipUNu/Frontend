let tasks = ["Học DOM","Làm bài tập"]
const table = document.getElementById("table")
display()
const add = document.getElementById("add")
add.addEventListener("click", () => {
    const input = document.getElementById("input")
    let data = input.value
    tasks = [...tasks,data]
    display()
})


function display() {
    let data = "";
    tasks.forEach((task,index) => {
        data += `<tr>
                <td>${task}</td>
                <td><button onclick="deleteTask(${index})" class='delete'>X</button></td>
                </tr>`
    })
    table.innerHTML = data
}
function deleteTask(index) {
    if (confirm("Xác nhận xóa")) {
        tasks = tasks.filter((_,position) => position !== index)
    }
    display()
}