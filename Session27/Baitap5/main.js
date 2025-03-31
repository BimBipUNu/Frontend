function divideArr (arr, n) {
    let newArr = [];
    for (let i = 0; i < arr.length; i+= Math.ceil(arr.length / n)) {
        newArr.push(arr.slice(i, i+ Math.ceil(arr.length / n)));
    }
    return newArr;
}
let numbers = [1,2,3,4,5,6,7,8]
console.log(divideArr(numbers,3));