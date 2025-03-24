let even = 0, odd = 0;
let num;
for (let i = 0; i < 5; i++) {
    num = Number(prompt("Nhap vao 1 so nguyen: "));
    if (num %2 === 0) {
        even += num;
    } else {
        odd += num;
    }
}
console.log("Tong so le: "+ even);
console.log("Tong so le: "+ odd);