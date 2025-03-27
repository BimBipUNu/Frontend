let str;

while (true) {
    alert("\n1. Nhập chuỗi\n"
    +"2. Hiển thị chuỗi\n"
    +"3. Tính độ dài của chuỗi\n"
    +"4. Đếm số lần xuất hiện của một ký tự\n"
    +"5. Kiểm tra chuỗi có phải là chuỗi đối xứng không\n"
    +"6. Chuyển đổi chuỗi thành chữ in hoa các ký tự đầu tiên của từ\n"
    +"7. Thoát chương trình");

    let choice = Number(prompt("Lựa chọn của bạn: "));

    if (isNaN(choice)) {
        alert("Vui lòng nhập số!");
        continue;
    }

    switch (choice) {
        case 1:
            str = prompt("Nhập vào chuỗi: ");
            alert("Nhập chuỗi thành công!");
            break;

        case 2:
            if (str.length <= 0) {
                alert("Chuỗi chưa có!");
            } else {
                alert(str);
            }
            break;

        case 3:
            if (str.length <= 0) {
                alert("Chuỗi chưa có!");
            } else {
                alert(`Độ dài của chuỗi là ${str.length}`);
            }
            break;

        case 4:
            if (!str || str.length === 0) {
                alert("Chuỗi chưa có!");
            } else {
                let search = prompt("Nhập ký tự cần tìm: ");
                let count = 0;

                for (let i = 0; i < str.length; i++) {
                    if (search === str[i]) {
                        count++;
                    }
                }

                if (count > 0) {
                    alert(
                        `Số lần xuất hiện của ký tự '${search}' là: ${count}`
                    );
                } else {
                    alert("Không tìm thấy ký tự!");
                }
            }
            break;

        case 5:
            if (!str || str.length === 0) {
                alert("Chuỗi chưa có!");
            } else {
                let strReverse = str.split("").reverse().join("");
                if (strReverse === str) {
                    alert("Chuỗi trên là chuỗi đối xứng");
                } else {
                    alert("Chuỗi trên không phải là chuỗi đối xứng");
                }
            }
            break;

        case 6:
            if (!str || str.length === 0) {
                alert("Chuỗi chưa có!");
            } else {
                let words = str.split(" ");
                for (let i = 0; i < words.length; i++) {
                    if (words[i].length > 0) {
                        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
                    }
                }
                str = words.join(" ");
                alert(`Chuỗi sau khi chuyển đổi: ${str}`);
            }
            break;

        case 7:
            alert("Thoát chương trình!");
            break;

        default:
            alert("Lựa chọn không hợp lệ!");
    }

    if (choice === 7) break;
}