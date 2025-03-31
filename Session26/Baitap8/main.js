function isPrime(number) {
    if (number <= 2) { //Loại trường hopcj số nguyên tố chẵn theo đề bài
        return false;
    }
    for (let i = 2; i*i <= number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
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
let numbers = [];
inputArr(numbers);
let checkArr = numbers.filter(isPrime);
if (checkArr.length === 0) {
    console.log(`Khong co phan tu la so nguyen to`)
} else {
    console.log(`${checkArr}`);
}