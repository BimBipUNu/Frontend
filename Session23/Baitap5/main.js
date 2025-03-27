let n = Number(prompt("Nhap so luong phan tu cua mang: "));
if (n === 0) {
    console.log("Mang khong co phan tu");
} else if (n < 0) {
    console.log("So luong phan tu khong hop le")
} else {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(Number(prompt("Nhap phan tu tai vi tri " + i + ": ")));
    }
    let check = false;
    let sum = arr.reduce((acc, current) => {
        if (!isNaN(current)) {
            check = true;
            return acc + parseFloat(current);
        }
        return acc;
    })
    if (!check) {
        console.log("Khong co phan tu la ki tu so")
    } else {
        console.log(sum);
    }
}