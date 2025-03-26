let numbers = [9,1,2,4,6,7,2,6,5,8,6];
let arr = [];
let sizeArr = 0;
for (let i = 0; i < numbers.length; i++) {
    let flag = true;
    for (let j = 0; j < sizeArr; j++) {
        if (numbers[i] === arr[j]) {
            flag = false;
            break;
        }
    }
    if (flag) {
        arr[sizeArr] = numbers[i];
        sizeArr++;
    }
}
console.log(arr);