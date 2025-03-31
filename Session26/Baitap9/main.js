function inputArr(arr) {
    for (let i = 0; i < 20; i++) {
        let temp = Number(prompt(`Enter number ${i}`));
        if (isNaN(temp)) {
            console.log("Du lieu khong hop le")
            i--;
        } else {
            arr[i] = temp;
        }
    }
}
let numbers;
inputArr(numbers);
let maxOdd = numbers.reduce((maxOdd, number) => {
    if (number %2 !== 0) {
        maxOdd += number;
    }
    return maxOdd;
},0);
let maxEven = numbers.reduce((maxEven, number) => {
    if (number %2 === 0) {
        maxEven += number;
    }
    return maxEven;
},0);

console.log(`MaxOdd: ${maxOdd}, MaxEven: ${maxEven}`);