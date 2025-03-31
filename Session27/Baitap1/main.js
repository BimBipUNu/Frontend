function inputChoice() {
    return Number(prompt("Nhập vào lựa chọn:"));
}

function inputNumber(message) {
    let num;
    do {
        num = prompt(message);
        if (isNaN(num)) {
            alert("Số không hợp lệ");
        } else {
            return Number(num);
        }
    } while (true);
}

function menu() {
    while (true) {
        alert("\n1. Cộng hai số.\n"
         +"2. Trừ hai số.\n"
         +"3. Nhân hai số.\n"
         +"4. Chia hai số.\n"
         +"5. Thoát chương trình.");

        let choice = inputChoice();

        if (choice === 5) {
            alert("\nThoát chương trình!");
            break;
        }

        let a = inputNumber("Nhập số thứ 1: ");
        let b = inputNumber("Nhập số thứ 2: ");

        switch (choice) {
            case 1:
                alert(`\nTổng của hai số: ${a + b}`);
                break;
            case 2:
                alert(`\nHiệu của hai số: ${a - b}`);
                break;
            case 3:
                alert(`\nTích của hai số: ${a * b}`);
                break;
            case 4:
                if (b === 0) {
                    alert("\nKhông thể chia cho 0!");
                } else {
                    alert(`\nThương của hai số: ${a / b}`);
                }
                break;

            default:
                alert("\nLựa chọn không hợp lệ!");
                break;
        }
    }
}

menu();