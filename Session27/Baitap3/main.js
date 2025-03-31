function inputChoice() {
    return Number(prompt("Nhập vào lựa chọn: "));
}

function circleArea(radius) {
    return Math.PI * radius * radius;
}

function circlePerimeter(radius) {
    return 2 * Math.PI * radius;
}

function rectangleArea(length, width) {
    return length * width;
}

function rectanglePerimeter(length, width) {
    return 2 * (length + width);
}

let r, length, width;
while (true) {
    alert("\n1. Tính diện tích hình tròn."
    +"\n2. Tính chu vi hình tròn."
    +"\n3. Tính diện tích hình chữ nhật."
    +"\n4. Tính chu vi hình chữ nhật."
    +"\n5. Thoát.");
    let choice = inputChoice();

    if (choice === 5) break;

    switch (choice) {
        case 1:
            r = Number(prompt("Nhập bán kính hình tròn: "));
            alert(`Diện tích hình tròn: ${circleArea(r).toFixed(2)}`);
            break;

        case 2:
            r = Number(prompt("Nhập bán kính hình tròn: "));
            alert(`Chu vi hình tròn: ${circlePerimeter(r).toFixed(2)}`);
            break;

        case 3:
            length = Number(prompt("Nhập chiều dài hình chữ nhật: "));
            width = Number(prompt("Nhập chiều rộng hình chữ nhật: "));
            alert(
                `Diện tích hình chữ nhật: ${rectangleArea(
                    length,
                    width
                ).toFixed(2)}`
            );
            break;

        case 4:
            length = Number(prompt("Nhập chiều dài hình chữ nhật: "));
            width = Number(prompt("Nhập chiều rộng hình chữ nhật: "));
            alert(
                `Chu vi hình chữ nhật: ${rectanglePerimeter(
                    length,
                    width
                ).toFixed(2)}`
            );
            break;

        case 5:
            alert("Thoát chương trình!");
            break;
        default:
            alert("Lựa chọn không hợp lệ!");
            break;
    }
}