let employeeArr = [];
let employee = {
    id: undefined,
    name: undefined,
    position: undefined,
    salary: undefined
}
while (true) {
    menu();
    let choice = Number(prompt("Nhập chức năng:"))
    if (choice === 0) {
        alert("Thoát chương trình")
        break;
    }
    switch (choice) {
        case 1:
            addNewEmp();
            break;
        case 2:
            deleteEmp();
            break;
        case 3:
            updateSalary();
            break;
        case 4:
            findEmp();
            break;
        case 5:
            displayEmp();
            break;
        default:
            alert("Chức năng không hợp lệ")
    }
}
function menu() {
    alert("\n=====MENU======"
    +"\n1. Thêm mới nhân viên"
    +"\n2. Xóa nhân viên"
    +"\n3. Cập nhật lương"
    +"\n4. Tìm kiếm nhân viên"
    +"\n5. Hiển thị toàn bộ nhân viên"
    +"\n0. Thoát")
}
function addNewEmp() {
    let newEmp = {
        id: prompt("Nhập ID:"),
        name: prompt("Nhập tên:"),
        position: prompt("Nhập vị trí:"),
        salary: prompt("Nhập lương:"),
    }
    employeeArr.push(newEmp);
}
function deleteEmp() {
    let del = prompt("Nhập id của nhân viên cần xóa")
    let find = false;
    for (let i = 0; i < employeeArr.length; i++) {
        if (employeeArr[i].id === del) {
            let confirm = Number(prompt("Xác nhận xóa\n" + "1. Đồng ý\n" + "2. Quay lại"))
            if (confirm === 1) {
                find = true;
                employeeArr = employeeArr.filter((employee) => employee.id !== del)
                alert("Xóa thành công")
                break;
            } else {
                break;
            }
        }
    }
    if (!find) {
        alert("Không tìm thấy id")
    }
}
function updateSalary() {
    let tempId = prompt("Nhập id của nhân viên cần cập nhật lương")
    let find = false;
    for (let i = 0; i < employeeArr.length; i++) {
        if (employeeArr[i].id === tempId) {
            find = true;
            let newSalary = prompt("Nhập lương mới:")
            employeeArr[i].salary = newSalary;
            alert("Cập nhật thành công")
            break;
        }
    }
    if (!find) {
        alert("Không tìm thấy id")
    }
}
function findEmp() {
    let tempId = prompt("Nhập id của nhân viên")
    let find = false;
    for (let i = 0; i < employeeArr.length; i++) {
        if (employeeArr[i].id === tempId) {
            find = true;
            let display =`ID: ${employeeArr[i].id}, Tên: ${employeeArr[i].name}, Vị trí: ${employeeArr[i].position}, Lương: ${employeeArr[i].salary}\n`;;
            alert(display);
        }
    }
    if (!find) {
        alert("Không tìm thấy id")
    }
}
function displayEmp() {
    console.log(employeeArr);
    let display = "Danh sách nhân viên:\n";
    employeeArr.forEach(emp => {
        display += `ID: ${emp.id}, Tên: ${emp.name}, Vị trí: ${emp.position}, Lương: ${emp.salary}\n`;
    });
    alert(display);
}