function countPositive (arr) {
    let positiveArr = arr.filter(x => x > 0);
    return positiveArr.length;
}
let array = [1, 2, 3, -4, -8];

console.log(countPositive(array));