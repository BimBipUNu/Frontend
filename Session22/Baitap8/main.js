let numbers = [9,1,6,4,6,7,2,6,5,8,6];
let maxCount = 0, count = 0, num = 0;
for (let i = 0; i < numbers.length ; i++) {
    let key = numbers[i];
    for (let j = 0; j < numbers.length; j++) {
        if (numbers[j] === key) {
            count++;
        }
    }
    if (count > maxCount) {
        num = key;
        maxCount = count;
    }
    count = 0;
}
console.log(num);