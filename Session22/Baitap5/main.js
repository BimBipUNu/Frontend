let arr = [1,2,3,4,5];
let sumEven = 0, sumOdd = 0;
for (let i of arr) {
    if (i %2 === 0) {
        sumEven += i;
    } else {
        sumOdd +=i;
    }
}
console.log("Tong chan: "+sumEven);
console.log("Tong le: "+sumOdd);