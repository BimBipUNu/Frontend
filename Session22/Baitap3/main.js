let arr = prompt("Nhap 1 day so bat ky");
arr = arr.split("");
let flag = true;
for (let element of arr) {
    if (isNaN(Number(element))) {
        flag = false;
        console.log("Chuoi khong hop le");
        break;
    }
}
if (flag) {
    arr = arr.reverse();
    for (let element of arr) {
        console.log(element);
    }
}