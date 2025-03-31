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
if (numbers.length === 0) {
    console.log("Mang khong co du lieu")
} else {
    let maxValue = numbers.reduce((acc, curr)=> Math.max(acc, curr), numbers[0]);
    let maxIndex = numbers.findIndex(num => num === maxValue);
    console.log(`Max: ${maxValue} index: ${maxIndex}`);
}