let n = Number(prompt("Nhập vào một số: "));

let flag = 0;
for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
        flag = 1;
        break;
    }
}
if (flag === 1) {
    alert(`${n} Không phải là số nguyên tố`);
}
else {
    alert(`${n} Là số nguyên tố`);
}