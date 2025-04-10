let task =["123"];
const taskList = document.getElementById("taskList");
display()
function display() {
    taskList.innerHTML = "";
    for (let i = 0; i < task.length; i++) {
        let newLi = document.createElement("li");
        newLi.innerText = task[i];
        let editButton = document.createElement("button");
        editButton.onclick = () => {
            task[i] = prompt("Enter new data");
            display();
        }
        editButton.innerText = "Sữa";
        newLi.appendChild(editButton);
        let deleteButton = document.createElement("button");
        deleteButton.onclick = () => {
            task = task.filter(item => item !== task[i]);
            display();
        }
        deleteButton.innerText = "X";
        newLi.appendChild(deleteButton);
        taskList.appendChild(newLi);
    }
}
function addTask() {
    let data = document.getElementById("taskInput").value;
    task.push(data)
    display()
}