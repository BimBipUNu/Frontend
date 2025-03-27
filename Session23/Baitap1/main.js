let numbers = [];
for (let i = 0; i < 10; i++) {
    numbers.push(Number(prompt("Nhap so nguyen: " + i)));
}
let check = false;
for (let number of numbers) {
    if (number >= 10) {
        check = true;
        console.log(number);
    }
}
if (!check) {
    console.log("Khong co so nao lon hon / bang 10")
}