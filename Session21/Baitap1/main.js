let sum = 0;
let num;
for (let i = 0; i < 5; i++) {
    num = Number(prompt("Nhap vao 1 so nguyen: "));
    if (num %2 !== 0) {
        sum += num;
    }
}
console.log("Tong so le: "+sum);