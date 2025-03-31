let students = [];
function inputStudents() {
    let n = Number(prompt("\nNhập vào số lượng sinh viên"));
    for (let i = 0; i < n; i++) {
        students[i] = prompt("\nNhập tên sinh viên thứ " + (i + 1));
    }
    alert("\nThêm sinh viên thành công!");
}

function displayStudents() {
    alert("\nDanh sách sinh viên");
    for (let i = 0; i < students.length; i++) {
        alert(`\n${i + 1}. ${students[i]}`);
    }
}

function foundStudent() {
    let name = prompt("\nNhập tên sinh viên cần tìm");
    let found = 0;
    for (let i = 0; i < students.length; i++) {
        if (students[i].includes(name)) {
            alert("\nTìm thấy sinh viên!");
            alert(`\n${i + 1}. ${students[i]}`);
            found = 1;
        }
    }
    if (!found) alert("Sinh viên không có trong danh sách!");
}

function delStudent() {
    let found = false;
    let name = prompt("\nNhập tên sinh viên cần xóa:");

    for (let i = 0; i < students.length; i++) {
        if (students[i] === name) {
            students.splice(i, 1);
            alert("\nXóa sinh viên thành công!");
            found = true;
            break;
        }
    }

    if (!found) {
        alert("Sinh viên không có trong danh sách!");
    }
}


function inputChoice() {
    return Number(prompt("Nhập vào lựa chọn: "));
}

while (true) {
    alert("\n1. Nhập danh sách sinh viên."
    +"\n2. Hiển thị danh sách sinh viên."
    +"\n3. Tìm sinh viên theo tên."
    +"\n4. Xóa sinh viên khỏi danh sách."
    +"\n5. Thoát.");
    let choice = inputChoice();

    if (choice === 5) break;

    switch (choice) {
        case 1:
            inputStudents();
            break;

        case 2:
            displayStudents();
            break;

        case 3:
            foundStudent();
            break;

        case 4:
            delStudent();
            break;

        case 5:
            alert("Thoát chương trình!");
            break;
        default:
            alert("Lựa chọn không hợp lệ!");
            break;
    }
}