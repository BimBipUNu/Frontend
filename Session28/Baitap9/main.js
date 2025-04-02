let books = [
    {
        id: 1,
        title: "Thế giới rộng lớn, lòng người chật hẹp",
        author: "Dưa Hấu Hạt Tím",
        year: 2020,
        price: 92000,
        isAvailable: true,
    },
    {
        id: 2,
        title: "Hành Tinh Của Một Kẻ Nghĩ Nhiều",
        author: "Nguyễn Đoàn Minh Thư",
        year: 2023,
        price: 64500,
        isAvailable: false,
    },
    {
        id: 3,
        title: "Đại Dương Đen",
        author: "Đặng Hoàng Giang",
        year: 2024,
        price: 158400,
        isAvailable: true,
    },
];

function inputBooks(books) {
    let n = Number(prompt("Nhập vào số lượng sách muốn thêm:"));
    while (isNaN(n) || n <= 0) {
        alert("Số lượng sách không hợp lệ!");
        n = Number(prompt("Nhập vào số lượng sách muốn thêm:"));
    }

    while (n > 0) {
        alert(`Thông tin sách thứ ${books.length + 1}`);
        let id = books.length > 0 ? Math.max(...books.map((b) => b.id)) + 1 : 1;
        let title;
        do {
            title = prompt("Nhập vào tên sách:").trim();
            if (!title) alert("Tên sách không được để trống!");
        } while (!title);

        let author;
        do {
            author = prompt("Nhập vào tên tác giả:").trim();
            if (!author) alert("Tên tác giả không được để trống!");
        } while (!author);

        let year = getValidNumber("Nhập vào năm xuất bản:");
        let price = getValidNumber("Nhập vào giá sách:");

        let isAvailable;
        do {
            isAvailable = prompt("Nhập vào trạng thái sách (true/false):")
                .trim()
                .toLowerCase();
        } while (isAvailable !== "true" && isAvailable !== "false");

        books.push({
            id,
            title,
            author,
            year,
            price,
            isAvailable: isAvailable === "true",
        });

        n--;
    }
    alert("Cập nhật sách thành công!");
}

function searchBooks(books) {
    let name;
    do {
        name = prompt("Nhập vào tên sách cần tìm:").trim();
        if (!name) alert("Tên sách không được để trống!");
    } while (!name);

    let result = books.filter((book) =>
        book.title.toLowerCase().includes(name.toLowerCase())
    );

    if (result.length > 0) {
        alert("Sách đã tìm thấy:");
        displayBooks(result);
    } else {
        alert("Không tìm thấy sách!");
    }
}

function displayBooks(books) {
    if (books.length === 0) {
        alert("Danh sách sách trống.");
        return;
    }
    books.forEach((book) => {
        alert(`\n   ID: ${book.id}`
        +`\n   Title: ${book.title}`
        +`\n   Author: ${book.author}`
        +`\n   Year: ${book.year}`
        +`\n   Price: ${book.price}`
        +`\n   isAvailable: ${book.isAvailable ? "Còn" : "Hết"}`);
    });
}

function updateIsAvailable(books) {
    let id = getValidNumber("Nhập vào ID sách cần cập nhật:");
    let book = books.find((book) => book.id === id);

    if (!book) {
        alert("Không tìm thấy sách với ID này!");
        return;
    }

    let available;
    do {
        available = prompt("Nhập vào trạng thái sách (true/false):")
            .trim()
            .toLowerCase();
    } while (available !== "true" && available !== "false");

    book.isAvailable = available === "true";
    alert("Cập nhật trạng thái sách thành công!");
}

function deleteBook(books) {
    let id = getValidNumber("Nhập vào ID sách cần xóa:");
    let index = books.findIndex((book) => book.id === id);

    if (index === -1) {
        alert("Không tìm thấy sách với ID này!");
        return;
    }

    books.splice(index, 1);
    alert(`Sách có ID ${id} đã bị xóa.`);
}

function sortBooks(books) {
    books.sort((a, b) => a.price - b.price);
    alert("Danh sách sách sau khi sắp xếp theo giá:");
    displayBooks(books);
}

function inputChoice() {
    let choice;
    do {
        choice = Number(prompt("Nhập vào lựa chọn:"));
        if (isNaN(choice) || choice < 1 || choice > 7) {
            alert("Lựa chọn không hợp lệ! Vui lòng nhập lại.");
        }
    } while (isNaN(choice) || choice < 1 || choice > 7);
    return choice;
}

function getValidNumber(message) {
    let num;
    do {
        let input = prompt(message).trim();
        num = parseInt(input);
        if (isNaN(num) || num <= 0)
            alert("Giá trị không hợp lệ! Vui lòng nhập lại.");
    } while (isNaN(num) || num <= 0);
    return num;
}

function menuChoice() {
    while (true) {
        alert("\n===== MENU =====\n"
        +"1. Thêm sách mới\n"
        +"2. Hiển thị danh sách sách\n"
        +"3. Tìm kiếm sách theo tiêu đề\n"
        +"4. Cập nhật trạng thái mượn/trả sách theo ID sách\n"
        +"5. Xóa sách theo ID\n"
        +"6. Sắp xếp sách theo giá\n"
        +"7. Thoát\n")

        let choice = inputChoice();

        switch (choice) {
            case 1:
                inputBooks(books);
                break;
            case 2:
                displayBooks(books);
                break;
            case 3:
                searchBooks(books);
                break;
            case 4:
                updateIsAvailable(books);
                break;
            case 5:
                deleteBook(books);
                break;
            case 6:
                sortBooks(books);
                break;
            case 7:
                alert("Thoát chương trình.");
                return;
            default:
                alert("Lựa chọn không hợp lệ!");
        }
    }
}

menuChoice();