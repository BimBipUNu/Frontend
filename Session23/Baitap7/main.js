let n = Number(prompt("Nhap so luong phan tu cua mang: "));
if (n === 0) {
    console.log("Mang khong co phan tu");
} else if (n < 2) {
    console.log("So luong phan tu khong hop le")
}else {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(Number(prompt("Nhap phan tu tai vi tri " + i + ": ")));
    }
    let max, secondMax;
    if (arr[0]>arr[1]) {
        max = arr[0];
        secondMax = arr[1];
    } else {
        max = arr[1];
        secondMax = arr[0];
    }
    for (let i = 1; i <= n; i++) {
        if (arr[i] > max) {
            secondMax = max;
            max = arr[i];
        }
        if ( arr[i] < max && arr[i] > secondMax ) {
            secondMax = arr[i];
        }
    }
    console.log(secondMax);
}