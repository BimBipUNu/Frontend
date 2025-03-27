let a = [];
let average = 0;
let max = 0;
let maxPos = 0;
let b = new Array(0);
let sum = 0;

while (true) {
    alert("\n1. Nhập mảng số nguyên\n"+
        "2. Hiển thị mảng\n"+
        "3. Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó\n"+
        "4. Tính tổng và trung bình cộng của các số dương trong mảng\n"+
        "5. Đảo ngược mảng\n"+
        "6. Kiểm tra mảng có đối xứng không\n"+
        "7. Thoát chương trình");

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
                if (a[i] > max) {
                    max = a[i];
                    posMax = i;
                }
            }
            alert(`Phần tử lớn nhất trong mảng là: ${max}`);
            alert(`Nằm ở vị trí: ${posMax}`);
            break;

        case 4:
            if (a.length === 0) {
                alert("Mảng chưa có dữ liệu!");
                break;
            }
            for (let i = 0; i < a.length; i++) {
                sum += a[i];
            }
            alert(`Tổng của mảng là: ${sum}`);
            alert(
                `Trung bình cộng các phần tử trong mảng là: ${sum / a.length}`
            );
            break;

        case 5:
            if (a.length === 0) {
                alert("Mảng chưa có dữ liệu!");
                break;
            }
            a.reverse();
            alert(`Mảng sau khi đảo ngược là: ${a}`);
            break;

        case 6:
            if (a.length === 0) {
                alert("Mảng chưa có dữ liệu!");
                break;
            }

            let reversedA = [...a].reverse();

            if (JSON.stringify(a) === JSON.stringify(reversedA)) {
                alert("Mảng trên là mảng đối xứng");
            } else {
                alert("Mảng trên không phải là mảng đối xứng");
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