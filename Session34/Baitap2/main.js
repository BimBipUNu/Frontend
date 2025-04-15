// const courses = [
//     {
//       id: 1,
//       content: 'Learn Javascript Session 01',
//       dueDate: '2023-04-17',
//       status: 'Pending',
//       assignedTo: 'Anh Bách',
//     },
//     {
//       id: 2,
//       content: 'Learn Javascript Session 2',
//       dueDate: '2023-04-17',
//       status: 'Pending',
//       assignedTo: 'Lâm th`',
//     },
//     {
//       id: 3,
//       content: 'Learn CSS Session 1',
//       dueDate: '2023-04-17',
//       status: 'Pending',
//       assignedTo: 'Hiếu Ci Ớt Ớt',
//     },
// ];
// localStorage.setItem("courses",JSON.stringify(courses));
let courses = JSON.parse(localStorage.getItem("courses")) || [];

const renderData = () => {
    let html = ""
    let tbody = document.getElementById("tbody");
    courses.forEach((course, index) => {
        html += `<tr>
                <td>${index + 1}</td>
                <td>${course.content}</td>
                <td>${course.dueDate}</td>
                <td>${course.status}</td>
                <td>${course.assignedTo}</td>
                <td>
                  <button class="btn btn-sm btn-secondary" onclick="editTask(${index + 1})">Sửa</button>
                  <button class="btn btn-sm btn-danger" onclick="deleteTask(${index + 1})">Xóa</button>
                </td>
              </tr>`
    })
    tbody.innerHTML = html;
}

// Hàm lưu dữ liệu vào localStorage
const saveToLocalStorage = () => {
    localStorage.setItem("courses", JSON.stringify(courses));
};

// Hàm thêm công việc mới
const addTask = (event) => {
    event.preventDefault(); // Ngăn form reload trang

    // Lấy dữ liệu từ form
    const content = document.getElementById("content").value.trim();
    const dueDate = document.getElementById("dueDate").value;
    const status = document.getElementById("status").value;
    const assignedTo = document.getElementById("assignedTo").value.trim();

    // Kiểm tra dữ liệu hợp lệ
    if (!content || !dueDate || status === "Choose status" || !assignedTo) {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    // Thêm công việc mới vào danh sách
    courses.push({content, dueDate, status, assignedTo });
    saveToLocalStorage(); // Lưu vào localStorage
    renderData(); // Cập nhật giao diện
    document.querySelector("form").reset(); // Reset form
};

// Hàm xóa công việc
const deleteTask = (index) => {
    if (confirm("Bạn có chắc chắn muốn xóa công việc này?")) {
        courses.splice(index-1, 1); // Xóa công việc tại vị trí index
        saveToLocalStorage(); // Lưu lại vào localStorage
        renderData(); // Cập nhật giao diện
    }
};

// Hàm chỉnh sửa công việc
const editTask = (index) => {
    const course = courses[index];

    // Điền dữ liệu vào form
    document.getElementById("content").value = course.content;
    document.getElementById("dueDate").value = course.dueDate;
    document.getElementById("status").value = course.status;
    document.getElementById("assignedTo").value = course.assignedTo;

    // Thay đổi nút "Submit" thành "Update"
    const submitButton = document.getElementById("submit");
    submitButton.textContent = "Update";
    submitButton.onclick = (event) => updateTask(event, index);
};

// Hàm cập nhật công việc
const updateTask = (event, index) => {
    event.preventDefault(); // Ngăn form reload trang

    // Lấy dữ liệu từ form
    const content = document.getElementById("content").value.trim();
    const dueDate = document.getElementById("dueDate").value;
    const status = document.getElementById("status").value;
    const assignedTo = document.getElementById("assignedTo").value.trim();

    // Kiểm tra dữ liệu hợp lệ
    if (!content || !dueDate || status === "Choose status" || !assignedTo) {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    // Cập nhật công việc
    courses[index] = { content, dueDate, status, assignedTo };
    saveToLocalStorage(); // Lưu vào localStorage
    renderData(); // Cập nhật giao diện
    document.querySelector("form").reset(); // Reset form

    // Đổi nút "Update" thành "Submit"
    const submitButton = document.getElementById("submit");
    submitButton.textContent = "Submit";
    submitButton.onclick = addTask;
};

// Gắn sự kiện cho nút "Submit"
document.querySelector("form").addEventListener("submit", addTask);

renderData();
