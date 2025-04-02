let tasks = [
    {
        id: 1,
        name: "Làm bài tập JS",
        description: "Hoàn thành bài tập về mảng và vòng lặp",
        startTime: "2025-03-31",
        status: "Chưa hoàn thành",
    },
    {
        id: 2,
        name: "Dọn dẹp phòng",
        description: "Sắp xếp lại bàn làm việc và giường ngủ",
        startTime: "2025-03-31",
        status: "Hoàn thành",
    },
];

function inputString(message) {
    let value;
    do {
        value = prompt(message).trim();
        if (!value) alert("Giá trị nhập vào không được để trống!");
    } while (!value);
    return value;
}

function addTask(tasks) {
    let id = tasks.length > 0 ? Math.max(...tasks.map((t) => t.id)) + 1 : 1;
    let name = inputString("Nhập tên công việc:");
    let description = inputString("Nhập mô tả công việc:");
    let startTime = inputString("Nhập thời gian bắt đầu (YYYY-MM-DD):");
    let status = "Chưa hoàn thành";

    tasks.push({ id, name, description, startTime, status });
    alert("Thêm công việc thành công!");
}

function displayTasks(tasks) {
    alert("\nDanh sách công việc:");
    tasks.forEach((task) => {
        alert(`\n   ID: ${task.id}`
        +`\n   Tên: ${task.name}`
        +`\n   Mô tả: ${task.description}`
        +`\n   Thời gian bắt đầu: ${task.startTime}`
        +`\n   Trạng thái: ${task.status}`
        +"\n--------------------------------");
    });
}

function updateTaskStatus(tasks) {
    let id = Number(prompt("Nhập ID công việc cần cập nhật trạng thái:"));
    let task = tasks.find((t) => t.id === id);

    if (!task) {
        alert("Không tìm thấy công việc!");
        return;
    }

    let newStatus = prompt(
        "Nhập trạng thái mới (Hoàn thành / Chưa hoàn thành):"
    );
    if (newStatus === "Hoàn thành" || newStatus === "Chưa hoàn thành") {
        task.status = newStatus;
        alert("Cập nhật trạng thái thành công!");
    } else {
        alert("Trạng thái không hợp lệ!");
    }
}

function filterTasksByStatus(tasks) {
    let status = prompt(
        "Nhập trạng thái cần lọc (Hoàn thành / Chưa hoàn thành):"
    );
    let filteredTasks = tasks.filter((t) => t.status === status);
    displayTasks(filteredTasks);
}

function sortTasksByStatus(tasks) {
    tasks.sort((a, b) => a.status.localeCompare(b.status));
    alert("Sắp xếp công việc thành công!");
    displayTasks(tasks);
}

function menuChoice() {
    while (true) {
        alert("\n1. Thêm công việc mới."
        +"\n2. Hiển thị tất cả công việc."
        +"\n3. Cập nhật trạng thái công việc."
        +"\n4. Lọc công việc theo trạng thái."
        +"\n5. Sắp xếp công việc theo trạng thái."
        +"\n6. Thoát.");

        let choice = Number(prompt("Nhập lựa chọn:"));

        if (choice === 6) {
            alert("Thoát chương trình!");
            break;
        }

        switch (choice) {
            case 1:
                addTask(tasks);
                break;
            case 2:
                displayTasks(tasks);
                break;
            case 3:
                updateTaskStatus(tasks);
                break;
            case 4:
                filterTasksByStatus(tasks);
                break;
            case 5:
                sortTasksByStatus(tasks);
                break;
            default:
                alert("Lựa chọn không hợp lệ!");
        }
    }
}

menuChoice();
