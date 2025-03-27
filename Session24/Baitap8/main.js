let str, char;
let arrayDuplicate = [];

while (true) {
    alert("\n1. Nhập chuỗi\n"
    +"2. Hiển thị chuỗi\n"
    +"3. Tìm tất cả các từ con trùng lặp trong chuỗi và số lần xuất hiện\n"
    +"4. Tìm các từ có độ dài lớn nhất và nhỏ nhất trong chuỗi\n"
    +"5. Tìm số lần xuất hiện nhiều nhất của các ký tự trong chuỗi\n"
    +"6. Chuyển đổi chuỗi ký tự thành dạng snake_case\n"
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
            if (!str || str.length === 0) {
                alert("Chuỗi chưa có!");
            } else {
                let countWord = {};
                let words = str.split(" ");
                words.forEach((word) => {countWord[word] = (countWord[word] || 0) + 1;});
                let temp = false;
                let result = "Các từ bị lặp trong chuỗi:\n";
                for (let word in countWord) {
                    if (countWord[word] > 1) {
                        result += `'${word}': ${countWord[word]} lần\n`;
                        temp = true;
                    }
                }
                if (!temp) {
                    alert("Không có từ nào bị lặp trong chuỗi.");
                } else {
                    alert(result);
                }
            }
            break;
        case 4:
            if (!str || str.length === 0) {
                alert("Chuỗi chưa có!");
            } else {
                let words = str.match(/\w+/g);
                let wordsSort = words.sort((x, y) => x - y);
                alert(
                    `Từ dài nhất trong chuỗi là: ${
                        wordsSort[wordsSort.length - 1]
                    }`
                );
                alert(`Từ ngắn nhất trong chuỗi là: ${wordsSort[0]}`);
            }
            break;

        case 5:
            if (!str || str.length === 0) {
                alert("Chuỗi chưa có!");
            } else {
                let countChar = {};
                let arrayDuplicate = str.split("");

                for (let i = 0; i < arrayDuplicate.length; i++) {
                    let char = arrayDuplicate[i];
                    if (countChar[char] === undefined) {
                        countChar[char] = 1;
                    } else {
                        countChar[char]++;
                    }
                }

                let maxCount = 0;
                let maxChar = "";
                for (let char in countChar) {
                    if (countChar[char] > maxCount) {
                        maxCount = countChar[char];
                        maxChar = char;
                    }
                }
                alert(`Ký tự bị lặp nhiều nhất chuỗi: '${maxChar}': ${maxCount} lần`);
            }
            break;

        case 6:
            if (!str || str.length === 0) {
                alert("Chuỗi chưa có!");
            } else {
                let snake_case = str.trim().toLowerCase().replace(/\s+/g, '_');
                // snake_case là một kiểu đặt tên biến
                // Ví dụ:
                //   - "Hello World" sẽ được chuyển thành "hello_world"
                alert(snake_case);
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