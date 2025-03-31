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
let checkArr = numbers.filter(number => number > 10)
if (checkArr.length === 0) {
    console.log(`Khong co phan tu nao >= 10`)
} else {
    console.log(`${checkArr}`);
}