let str;

while (true) {
    alert("\n1. Nhập chuỗi\n"
    +"2. Hiển thị chuỗi\n"
    +"3. Loại bỏ các khoảng trắng ở đầu và cuối chuỗi\n"
    +"4. Đảo ngược chuỗi ký tự\n"
    +"5. Kiểm tra chuỗi có phải là chuỗi đối xứng không\n"
    +"6. Tìm kiếm và thay thế các ký tự\n"
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
                let trimStr = str.trim();
                alert(`Chuỗi sao khi xóa khoảng trắng ${trimStr}`);
            }
            break;

        case 4:
            if (!str || str.length === 0) {
                alert("Chuỗi chưa có!");
            } else {
                let strReverse = str.split("").reverse().join("");
                alert(`Chuỗi sao khi đảo ngược ${strReverse}`);
            }
            break;

        case 5:
            if (!str || str.length === 0) {
                alert("Chuỗi chưa có!");
            } else {
                alert(`Số lượng ký tự trong chuỗi là ${str.length}`);
            }
            break;

        case 6:
            let found = false;
            if (!str || str.length === 0) {
                alert("Chuỗi chưa có!");
            } else {
                search = prompt("Nhập vào từ cần thay thế: ");
                arraySearch = str.split("");

                for (let i = 0; i < arraySearch.length; i++) {
                    if (search === arraySearch[i]) {
                        replace = prompt("Nhập từ thay thế");
                        arraySearch[i] = replace;
                        found = true;
                    }
                }
                str = arraySearch.join("");
                if (found == true) {
                    alert("Thay thế thành công!");
                }
                else {
                    alert("Không có từ bạn tìm trong chuỗi");
                }
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