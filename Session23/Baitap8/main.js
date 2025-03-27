let n = Number(prompt("Nhap so luong phan tu cua mang: "));
if (n === 0) {
    console.log("Mang khong co phan tu");
} else if (n < 3) {
    console.log("So luong phan tu khong hop le")
}else {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(Number(prompt("Nhap phan tu tai vi tri " + i + ": ")));
    }
    let flag = true;
    for (let i = 2; i < n; i++) {
        if (arr[i] !== arr[i-1] + arr[i-2]) {
            flag = false;
            console.log("Mang khong la day fibonacy");
            break;
        }
    }
    if (flag) {
        console.log("Mang la day fibonacy");
    }
}