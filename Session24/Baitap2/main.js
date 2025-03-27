let a = [];
let average = 0;
let arrayOdd = [];
let arrayEven = [];
let sum = 0;

while (true) {
    alert("\n1. Nhập mảng số nguyên\n"+
    "2. Hiển thị mảng\n"+
    "3. Tìm các phần tử chẵn và lẻ\n"+
    "4. Tính trung bình cộng của mảng\n"+
    "5. Xóa phần tử tại vị trí chỉ định\n"+
    "6. Tìm phần tử lớn thứ hai trong mảng\n"+
    "7. Thoát chương trình\n");

    let choice = Number(prompt("Lựa chọn của bạn: "));

    if (isNaN(choice)) {
        alert("Vui lòng nhập số!");
        continue;
    }

    switch (choice) {
        case 1:
            let n = Number(prompt("Nhập vào số phần tử trong mảng: "));
            if (isNaN(n) || n <= 0) {
                alert("Số phần tử phải là số nguyên dương!");
                break;
            }
            a = new Array(n);
            for (let i = 0; i < n; i++) {
                a[i] = Number(prompt(`Nhập vào phần tử thứ ${i + 1}:`));
                if (isNaN(a[i]) || a[i] < 0) {
                    alert("Phần tử không hợp lệ!");
                    i--;
                }
            }
            alert("Nhập mảng thành công!");
            break;

        case 2:
            if (a.length === 0) {
                alert("Mảng chưa có dữ liệu!");
            } else {
                alert(`Mảng hiện tại: ${a}`);
            }
            break;

        case 3:
            if (a.length === 0) {
                alert("Mảng chưa có dữ liệu!");
                break;
            }
            for (let i = 0; i < a.length; i++) {
                if (a[i] % 2 === 0) arrayOdd.push(a[i]);
                else arrayEven.push(a[i]);
            }
            alert(`Các phần tử chẵn trong mảng là: ${arrayOdd}`);
            alert(`Các phần tử lẻ trong mảng là: ${arrayEven}`);
            break;

        case 4:
            if (a.length === 0) {
                alert("Mảng chưa có dữ liệu!");
                break;
            }
            for (let i = 0; i < a.length; i++) {
                sum += a[i];
            }
            alert(
                `Trung bình cộng các phần tử trong mảng là: ${sum / a.length}`
            );
            break;

        case 5:
            let found = true;
            if (a.length === 0) {
                alert("Mảng chưa có dữ liệu!");
                break;
            }
            let delPos = Number(prompt("Nhập vào vị trí cần xóa: "));
            if (isNaN(delPos)) {
                alert("Dữ liệu không hợp lệ!");
                continue;
            }
            for (let i = 0; i < a.length; i++) {
                if (delPos === i) {
                    delPos = i;
                    found = true;
                    break;
                } else {
                    found = false;
                }
            }
            if (found) {
                a.splice(delPos, 1);
                alert(`Mảng sau khi xóa: ${a}`);
            } else {
                alert("Giá trị cần xóa không tồn tại trong mảng!");
            }
            break;

        case 6:
            let maxValue = 0;

            if (a.length === 0) {
                alert("Mảng chưa có dữ liệu!");
                break;
            }

            a.sort((x, y) => x - y);
            for (let i = 0; i < a.length - 1; i++) {
                if (a[i] >= maxValue) {
                    maxValue = a[i];
                }
            }

            alert(`Giá trị lớn thứ hai là: ${maxValue}`);
            break;

        case 7:
            alert("Thoát chương trình!");
            break;

        default:
            alert("Lựa chọn không hợp lệ!");
    }

    if (choice === 7) break;
}