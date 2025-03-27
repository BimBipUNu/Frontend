let a = [];
let row = 0;
let col = 0;
let posI = 0;
let posJ = 0;
let sum = 0;

while (true) {
    alert("\n1. Nhập mảng 2 chiều\n"
     +"2. Hiển thị mảng 2 chiều\n"
     +"3. Tính tổng các phần tử trong mảng\n"
     +"4. Tính tổng đường chéo chính\n"
     +"5. Tính tổng đường chéo phụ\n"
     +"6. Tính trung bình cộng các phần tử trong một hàng hoặc một cột\n"
     +"7. Thoát chương trình");

    let choice = Number(prompt("Lựa chọn của bạn: "));

    if (isNaN(choice)) {
        alert("Vui lòng nhập số!");
        continue;
    }

    switch (choice) {
        case 1:
            row = Number(prompt("Nhập vào số hàng: "));
            col = Number(prompt("Nhập vào số cột: "));

            if (isNaN(row) || row <= 0 || isNaN(col) || col <= 0) {
                alert("Dữ liệu nhập vào không hợp lệ!");
                break;
            }

            a = new Array(row);

            for (let i = 0; i < row; i++) {
                a[i] = new Array(col);
                for (let j = 0; j < col; j++) {
                    let value = Number(prompt(`Nhập phần tử [${i}][${j}]: `));
                    if (isNaN(value)) {
                        alert("Phần tử không hợp lệ!");
                        j--;
                    } else {
                        a[i][j] = value;
                    }
                }
            }

            alert("Nhập mảng thành công!");
            break;

        case 2:
            if (a.length === 0) {
                alert("Mảng chưa có dữ liệu!");
            } else {
                let str = a.reduce((index=" ", value) => {
                    index += value.join(" ") + "\n";
                    return index;
                },"");
                alert("Mảng hiện tại: \n" + str);
            }
            break;
        case 3:
            sum = 0;
            if (a.length === 0) {
                alert("Mảng chưa có dữ liệu!");
                break;
            }
            for (let i = 0; i < a.length; i++) {
                for (let j = 0; j < a[i].length; j++) {
                    sum += a[i][j];
                }
            }
            alert(`Tổng các phần tử trong mảng là: ${sum}`);
            break;

        case 4:
            sum = 0;
            if (a.length === 0) {
                alert("Mảng chưa có dữ liệu!");
                break;
            }
            for (let i = 0; i < a.length; i++) {
                sum += a[i][i];
            }
            alert(`Tổng các phần tử trên đường chéo chính là: ${sum}`);

            break;

        case 5:
            sum = 0;
            if (a.length === 0) {
                alert("Mảng chưa có dữ liệu!");
                break;
            }
            for (let i = 0; i < row; i++) {
                sum += a[i][col - 1 - i];
            }
            alert(`Tổng các phần tử trên đường chéo phụ là: ${sum}`);

            break;

        case 6:
            if (a.length === 0) {
                alert("Mảng chưa có dữ liệu!");
                break;
            }
            alert(`Menu tính trung bình cộng:`);
            alert(`1. Theo hàng`);
            alert(`2. Theo cột`);
            let averageChoice = Number(prompt("Nhập vào lựa chọn:"));
            switch (averageChoice) {
                case 1:
                    let rowAverage = Number(
                        prompt("Nhập vào hàng muốn tính trung bình cộng: ")
                    );

                    if (
                        isNaN(rowAverage) ||
                        rowAverage < 0 ||
                        rowAverage >= a.length
                    ) {
                        alert(`Hàng ${rowAverage} không hợp lệ!`);
                        break;
                    }

                    sum = 0;
                    for (let j = 0; j < a[rowAverage].length; j++) {
                        sum += a[rowAverage][j];
                    }

                    alert(
                        `Trung bình cộng của hàng ${rowAverage} là: ${
                            sum / a[rowAverage].length
                        }`
                    );
                    break;

                case 2:
                    let colAverage = Number(
                        prompt("Nhập vào cột muốn tính trung bình cộng: ")
                    );

                    if (
                        isNaN(colAverage) ||
                        colAverage < 0 ||
                        colAverage >= col
                    ) {
                        alert(`Cột ${colAverage} không hợp lệ!`);
                        break;
                    }

                    sum = 0;
                    for (let i = 0; i < row; i++) {
                        sum += a[i][colAverage];
                    }

                    alert(
                        `Trung bình cộng của cột ${colAverage} là: ${sum / row}`
                    );
                    break;

                default:
                    alert("Lựa chọn không hợp lệ!");
                    break;
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