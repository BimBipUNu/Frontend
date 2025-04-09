let n = Number(prompt("Nhập số lượng nhân viên"))
let employee = [
    {
        id: 1,
        name: "Nguyễn Văn A",
        age: 19,
        address: "HCM"
    },
    {
        id: 2,
        name: "Nguyễn Văn B",
        age: 19,
        address: "HN"
    },
]
for (let i =0 ; i<n; i++) {
    let id = Number(prompt("Id:"))
    let name = prompt("Name:")
    let age = Number(prompt("Age:"))
    let address = prompt("Address:")
    let tempEmp = {
        id,
        name,
        age,
        address,
    }
    employee = [...employee, tempEmp];
}
let table = document.getElementById("table");
for (let i = 0; i < employee.length; i++) {
    let row = table.insertRow();

    let cellId = row.insertCell();
    cellId.innerText = employee[i].id;
    let cellName = row.insertCell();
    cellName.innerText = employee[i].name;
    let cellAge = row.insertCell();
    cellAge.innerText = employee[i].age;
    let cellAddress = row.insertCell();
    cellAddress.innerText = employee[i].address;

}