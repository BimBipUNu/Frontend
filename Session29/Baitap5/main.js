let users = [];

function registerUser(users) {
    let name = prompt("Nhập tên người dùng:").trim();
    let email = prompt("Nhập email:").trim();

    if (!email.includes("@")) {
        alert("Email phải chứa ký tự @!");
        return;
    }

    if (!(email.endsWith(".com") || email.endsWith(".vn"))) {
        alert("Email phải kết thúc bằng .com hoặc .vn!");
        return;
    }

    if (users.some((user) => user.email === email)) {
        alert("Email đã tồn tại!");
        return;
    }

    let password = prompt("Nhập mật khẩu:");

    if (password.length < 6) {
        alert("Mật khẩu phải trên 6 ký tự!");
        return;
    }

    let hasUpperCase = false;
    for (let char of password) {
        if (char >= "A" && char <= "Z") {
            hasUpperCase = true;
            break;
        }
    }
    if (!hasUpperCase) {
        alert("Mật khẩu phải chứa ít nhất một chữ hoa!");
        return;
    }

    let specialChars = "!@#$%^&*";
    let hasSpecialChar = false;
    for (let char of password) {
        if (specialChars.includes(char)) {
            hasSpecialChar = true;
            break;
        }
    }
    if (!hasSpecialChar) {
        alert("Mật khẩu phải chứa ít nhất một ký tự đặc biệt!");
        return;
    }

    users.push({ name, email, password });
    alert("\nĐăng ký thành công!");
}

function loginUser(users) {
    let email = prompt("Nhập email đăng nhập:").trim();
    let password = prompt("Nhập mật khẩu:").trim();

    let user = users.find(
        (user) => user.email === email && user.password === password
    );
    if (user) {
        alert("\nĐăng nhập thành công!"
        +`\nXin chào, ${user.name}`);
    } else {
        alert("Email hoặc mật khẩu không đúng!");
    }
}

function inputChoice() {
    let choice;
    do {
        choice = Number(prompt("Nhập vào lựa chọn:").trim());
        if (isNaN(choice) || choice <= 0) alert("Giá trị không hợp lệ");
    } while (isNaN(choice) || choice <= 0);
    return choice;
}

function menuChoice() {
    while (true) {
        alert("\n1. Đăng ký người dùng."
        +"\n2. Đăng nhập người dùng."
        +"\n3. Thoát.");

        let choice = inputChoice();

        if (choice === 3) {
            alert("Thoát chương trình!");
            break;
        }

        switch (choice) {
            case 1:
                registerUser(users);
                break;

            case 2:
                loginUser(users);
                break;

            default:
                alert("Lựa chọn không hợp lệ!");
                break;
        }
    }
}

menuChoice();
