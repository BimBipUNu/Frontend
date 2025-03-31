function isPrime(number) {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i*i <= number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
if (arr.length === 0) {
    console.log("Khong co phan tu")
} else {
    let arrAfter = arr.filter(isPrime);
    console.log(arrAfter.toString());
}