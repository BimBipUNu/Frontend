let a = [];
let sumOdd = 0;
let sumPrime = 0;
let arrayOdd = [];
let arrayPrime = [];
let maxValue, minValue;

while (true) {
    alert("\n=============== MENU ===============\n" +
        "1. Nhập số phần tử cần nhập và giá trị các phần tử\n" +
        "2. In ra giá trị các phần tử đang quản lý\n" +
        "3. In ra giá trị các phần tử chẵn và tính tổng\n" +
        "4. In ra giá trị lớn nhất và nhỏ nhất trong mảng\n" +
        "5. In ra các phần tử là số nguyên tố trong mảng và tính tổng\n" +
        "6. Nhập vào một số và thống kê trong mảng có bao nhiêu phần tử đó\n" +
        "7. Thêm một phần tử vào vị trí chỉ định\n" +
        "8. Thoát\n" +
        "======================================");
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
            arrayOdd = a.filter((value)=> value %2 === 0);
            sumOdd = arrayOdd.reduce((a, b) => a + b);
            alert(sumOdd);
            break;
        case 4:
            if (a.length === 0) {
                alert("Mảng chưa có dữ liệu!");
                break;
            }
            maxValue = a[0];
            minValue = a[0];
            for (let i = 0; i < a.length; i++) {
                if (a[i] > maxValue) maxValue = a[i];
                if (a[i] < minValue) minValue = a[i];
            }
            alert(`Giá trị lớn nhất trong mảng là: ${maxValue}`);
            alert(`Giá trị nhỏ nhất trong mảng là: ${minValue}`);
            break;

        case 5:
            sumPrime = 0;
            arrayPrime = [];
            for (let i = 0; i < a.length; i++) {
                let isPrime = true;
                if (a[i] < 2) {
                    isPrime = false;
                } else {
                    for (let j = 2; j * j <= a[i]; j++) {
                        if (a[i] % j === 0) {
                            isPrime = false;
                            break;
                        }
                    }
                }
                if (isPrime) {
                    arrayPrime.push(a[i]);
                    sumPrime += a[i];
                }
            }
            if (arrayPrime.length > 0) {
                alert(`Các phần tử là số nguyên tố: ${arrayPrime}`);
                alert(`Tổng các phần tử là số nguyên tố: ${sumPrime}`);
            } else {
                alert("Không có số nguyên tố trong mảng!");
            }
            break;

        case 6:
            if (a.length === 0) {
                alert("Mảng chưa có dữ liệu!");
                break;
            }
            let searchValue = Number(prompt("Nhập vào số cần thống kê: "));
            let countValue = 0;

            if (isNaN(searchValue)) {
                alert("Vui lòng nhập số!");
                continue;
            }
            else {
                for (let i = 0; i < a.length; i++) {
                    if (searchValue === a[i]) {
                        countValue++;
                    }
                }
                if (countValue > 0) {
                    alert(`${searchValue} xuất hiện ${countValue} lần trong mảng.`);
                }
                else {
                    alert(`Số ${searchValue} không xuất hiện trong mảng.`);
                }
            }
            break;

        case 7:
            if (a.length === 0) {
                alert("Mảng chưa có dữ liệu!");
                break;
            }
            let posValue = Number(prompt("Nhập vào vị trí cần thêm: "));
            if (isNaN(posValue) || posValue < 0 || posValue > a.length) {
                alert("Dữ liệu không hợp lệ!");
                continue;
            }

            let addValue = Number(prompt("Nhập vào giá trị cần thêm: "));
            if (isNaN(addValue)) {
                alert("Dữ liệu không hợp lệ!");
                continue;
            }

            a.splice(posValue, 0, addValue);
            alert(`Mảng sau khi thêm: ${a}`);
            break;

        case 8:
            alert("Thoát chương trình!");
            break;

        default:
            alert("Lựa chọn không hợp lệ!");
    }

    if (choice === 8) break;
}