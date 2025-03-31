function findNum(arr) {
    let find;
    for (let i = 0; i < arr.length-1; i++) {
        if (arr[i+1] !== arr[i]+1) {
            find = arr[i]+1;
            return find;
        }
    }
}
let numbers = [1,2,4,5]
console.log(findNum(numbers));