function inputArr(arr) {
    for (let i = 0; i < 10; i++) {
        let temp = Number(prompt(`Enter number ${i}`));
        if (isNaN(temp)) {
            console.log("Du lieu khong hop le")
            i--;
        } else {
            arr[i] = temp;
        }
    }
}
let numbers = [];
inputArr(numbers);
let arrAfter = numbers.filter(number => number % 2 ===0)
arrAfter = arrAfter.map(number => number * number)
if (arrAfter.length === 0) {
    console.log(`Khong co phan tu %2===0`)
} else {
    console.log(`${arrAfter}`);
}