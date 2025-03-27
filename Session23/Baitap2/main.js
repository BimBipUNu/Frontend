let numbers = [];
for (let i = 0; i < 10; i++) {
    numbers.push(Number(prompt("Nhap so nguyen: " + i)));
}
let max = numbers[0];
let pos = 0;
numbers.forEach((value, index, numbers) => {
    if (value > max) {
        max = value;
        pos = index;
    }
})
console.log("max: ", max+", pos: " + pos);